"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

function getYouTubeEmbedUrl(source: string) {
  let url: URL;

  try {
    url = new URL(source);
  } catch {
    return null;
  }

  if (!["youtube.com", "www.youtube.com", "m.youtube.com", "youtu.be"].includes(url.hostname)) {
    return null;
  }

  const videoId =
    url.hostname === "youtu.be"
      ? url.pathname.slice(1)
      : url.pathname === "/watch"
        ? url.searchParams.get("v")
        : url.pathname.match(/^\/(?:embed|shorts|live)\/([^/]+)/)?.[1];

  if (!videoId || !/^[\w-]{11}$/.test(videoId)) {
    return null;
  }

  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
}

function getInstagramEmbedUrl(source: string) {
  let url: URL;

  try {
    url = new URL(source);
  } catch {
    return null;
  }

  if (!["instagram.com", "www.instagram.com", "m.instagram.com"].includes(url.hostname)) {
    return null;
  }

  const match = url.pathname.match(
    /^\/(reel|p|tv)\/([A-Za-z0-9_-]+)(?:\/embed)?\/?$/,
  );

  if (!match) {
    return null;
  }

  return `https://www.instagram.com/${match[1]}/${match[2]}/embed/`;
}

function isSafeVideoSource(source: string) {
  if (source.startsWith("/") && !source.startsWith("//")) {
    return true;
  }

  try {
    return ["http:", "https:"].includes(new URL(source).protocol);
  } catch {
    return false;
  }
}

export default function SignatureVideo({
  source,
  title = "Gupta Investment Zone and Angel One overview",
  portrait = false,
}: {
  source: string;
  title?: string;
  portrait?: boolean;
}) {
  const youtubeViewportRef = useRef<HTMLDivElement>(null);
  const youtubePlayerRef = useRef<HTMLIFrameElement>(null);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const [youtubeEmbedSrc, setYoutubeEmbedSrc] = useState("");
  const [youtubePlayerLoaded, setYoutubePlayerLoaded] = useState(false);
  const instagramEmbedUrl = getInstagramEmbedUrl(source);
  const youtubeEmbedUrl = getYouTubeEmbedUrl(source);

  useEffect(() => {
    if (!youtubeEmbedUrl) {
      return;
    }

    const viewport = youtubeViewportRef.current;
    if (!viewport) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setIsInViewport(true);
      setHasEnteredViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.5;
        setIsInViewport(isVisible);
        if (isVisible) {
          setHasEnteredViewport(true);
        }
      },
      { threshold: [0, 0.5] },
    );

    observer.observe(viewport);
    return () => observer.disconnect();
  }, [youtubeEmbedUrl]);

  useEffect(() => {
    if (!youtubeEmbedUrl || !hasEnteredViewport || youtubeEmbedSrc) {
      return;
    }

    const embedUrl = new URL(youtubeEmbedUrl);
    embedUrl.searchParams.set("autoplay", isInViewport ? "1" : "0");
    embedUrl.searchParams.set("enablejsapi", "1");
    embedUrl.searchParams.set("mute", "1");
    embedUrl.searchParams.set("origin", window.location.origin);
    embedUrl.searchParams.set("playsinline", "1");
    setYoutubeEmbedSrc(embedUrl.toString());
  }, [hasEnteredViewport, isInViewport, youtubeEmbedSrc, youtubeEmbedUrl]);

  useEffect(() => {
    if (!youtubePlayerLoaded) {
      return;
    }

    youtubePlayerRef.current?.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: isInViewport ? "playVideo" : "pauseVideo",
        args: [],
      }),
      "https://www.youtube-nocookie.com",
    );
  }, [isInViewport, youtubePlayerLoaded]);

  if (instagramEmbedUrl) {
    return (
      <div className="signature-video-instagram">
        <iframe
          src={instagramEmbedUrl}
          title="Gupta Investment Zone on Instagram"
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  if (youtubeEmbedUrl) {
    return (
      <div
        ref={youtubeViewportRef}
        className={`youtube-video-viewport${portrait ? " is-portrait" : ""}`}
      >
        {youtubeEmbedSrc ? (
          <iframe
            ref={youtubePlayerRef}
            className="youtube-video-embed"
            src={youtubeEmbedSrc}
            title={title}
            loading="eager"
            onLoad={() => setYoutubePlayerLoaded(true)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className="youtube-video-poster">
            <span className="youtube-video-play-icon">
              <Play size={22} fill="currentColor" />
            </span>
            <span>Video plays when it enters your screen</span>
          </div>
        )}
      </div>
    );
  }

  if (source && isSafeVideoSource(source)) {
    return (
      <video
        className={`bg-black object-contain${portrait ? " signature-video-portrait" : " aspect-video w-full"}`}
        controls
        playsInline
        preload="metadata"
        aria-label={title}
      >
        <source src={source} />
        Your browser does not support embedded videos.
      </video>
    );
  }

  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 bg-[#183a2b] px-6 text-center text-[#f3f5ec]">
      <span className="grid size-14 place-items-center rounded-full border border-white/20 bg-white/10 text-[#c4d6aa]">
        <Play size={22} fill="currentColor" />
      </span>
      <span>
        <strong className="block text-sm">Our story, coming soon</strong>
        <span className="mt-2 block max-w-sm text-xs leading-5 text-white/65">
          Add an Instagram Reel, YouTube video, or direct video URL to the
          signature_video setting to feature it here.
        </span>
      </span>
    </div>
  );
}
