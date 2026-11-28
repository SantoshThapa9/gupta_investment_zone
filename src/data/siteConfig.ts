export const siteConfig: {
  instagramLink: string;
  facebookLink: string;
  youtubeLink: string;
  telegramLink: string;
  contactNumber: string;
  officialGmail: string;
  accountOpeningLink: string;
  signatureVideo: string;
  googleMapLink: string;
  liveTradingReel: string;
} = {
  instagramLink: "https://www.instagram.com/gupta_investment_zone/",
  facebookLink: "https://www.facebook.com/gupta1Investment/reels/",
  youtubeLink: "https://www.youtube.com/@gupta_investment_zone",
  telegramLink: "https://t.me/+Wm4GHx5klodmNjg1",
  contactNumber: "+917257800129",
  officialGmail: "angelfinancial460@gmail.com",
  accountOpeningLink: "https://angel-one.onelink.me/Wjgr/yyqvu0w7",
  signatureVideo: "https://www.instagram.com/reel/DJ4RB3Msv40/",
  googleMapLink: "https://maps.app.goo.gl/bLT5kRAucfVufMFs8",
  liveTradingReel: "https://youtu.be/0NFYFM86-Jk?si=5-2UU0fmM-opV30R",
};

export const socialLinks = [
  { label: "Instagram", href: siteConfig.instagramLink },
  { label: "Facebook", href: siteConfig.facebookLink },
  { label: "YouTube", href: siteConfig.youtubeLink },
  { label: "Telegram", href: siteConfig.telegramLink },
].filter((link) => link.href);

export const accountOpeningHref = siteConfig.accountOpeningLink || "/#contact";
