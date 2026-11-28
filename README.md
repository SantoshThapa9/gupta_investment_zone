
# Gupta Investment Zone

Gupta Investment Zone is a single-page site for an authorized Angel One partner in Jamshedpur. It brings demat account guidance, trading platform information, market education, social channels, contact details, and the office map together on the homepage.

## Features

- Single-page landing site organized around account opening, market education, social growth, and local contact
- Homepage sections for demat account support, trading tools, videos, FAQs, the contact form, and an interactive office map
- Fixed green visual theme with responsive navigation
- Email-based contact form using EmailJS
- Floating investment assistant powered by local site knowledge
- Search-focused metadata, Organization structured data, sitemap, and robots rules
- Permanent redirects from the former About, Services, and Contact routes to their homepage sections
- Shared navigation and footer components
- Mobile-friendly layouts and Tailwind CSS 4 styling

## Tech Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- EmailJS
- Lucide React and React Icons

## Pages

| Route | Description |
| --- | --- |
| `/` | Complete single-page site with account-opening CTAs, videos, social links, FAQs, contact form, and office map |
| `/about`, `/services`, `/contact` | Permanently redirect to the relevant homepage section |

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm
- An EmailJS account if the contact form will be used

### 1. Clone the repository

```bash
git clone <repository-url>
cd gupta-investment-zone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root.

The contact form currently reads these public EmailJS variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

The project also contains a contact API route that expects these server-side EmailJS values:

```env
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
EMAILJS_PRIVATE_KEY=your_private_key
```

Public-facing business links, contact details, and video URLs are configured
directly in `src/data/siteConfig.ts`. Update the constants there when these
details change; they do not need to be added to `.env.local`. The homepage
embeds the Jamshedpur office map and links to the configured Google Maps pin.

The homepage keeps the introduction and trading videos in separate sections.
The vertical trading reel loads and plays muted when it enters the viewport,
pausing when scrolled away; visitors can use the player controls for sound.

Restart the development server after changing EmailJS environment variables.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server with Turbopack in `.next-dev` |
| `npm run build` | Create an optimized webpack production build in `.next-prod` |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

Development and production builds use separate output directories (`.next-dev`
and `.next-prod`) to avoid manifest conflicts when both commands are used.

## Chat Assistant

The floating assistant answers questions using the entries in `src/data/siteKnowledge.ts`. Its keyword search logic is implemented in `src/lib/chatSearch.ts`.

To update chatbot answers:

1. Edit or add entries in `src/data/siteKnowledge.ts`.
2. Include relevant keywords so the search logic can match the new topic.
3. Keep chatbot content consistent with the public pages.

No external AI API or API key is required by the current assistant implementation.

## Contact API

The contact form component sends messages directly through EmailJS using browser variables.

There is also a server-side POST route at `src/app/api/contact/route.ts`. The route accepts `name`, `email`, and `message` values and sends them to EmailJS; it is separate from the single-page user interface.

Example request:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"I want to open a demat account"}'
```

## Project Structure

```text
src/
├── app/
│   ├── api/contact/           # Server-side contact API
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout and SEO metadata
│   ├── page.tsx               # Single-page landing site
│   ├── robots.ts              # Crawler rules
│   └── sitemap.ts             # Homepage sitemap
├── components/
│   ├── ui/                    # Shared UI components
│   ├── Chatbot.tsx            # Floating website assistant
│   ├── ContactForm.tsx        # EmailJS contact form
│   ├── Footer.tsx             # Site footer
│   ├── Navigation.tsx         # Site navigation
│   ├── OfficeMap.tsx          # Interactive office map
│   └── SignatureVideo.tsx     # Responsive social/video embed
├── data/
│   └── siteKnowledge.ts       # Chatbot knowledge entries
└── lib/
    └── chatSearch.ts           # Local chatbot search logic
```

## Deployment

The app can be deployed on any platform that supports Next.js. For deployment:

1. Run `npm run build` and verify that the build succeeds.
2. Add the required `NEXT_PUBLIC_EMAILJS_*` variables to the hosting platform.
3. Add server-side `EMAILJS_*` variables as well if the `/api/contact` route will be used.
4. Deploy the project and verify the contact form, videos, social links, map, and chat assistant.

For Vercel, the project can be imported directly from GitHub. The production URL used in the metadata is `https://gupta-investment-zone.vercel.app/`.

## Customization

Update these areas when changing the business details:

- Page content: `src/app/`
- Navigation and footer: `src/components/Navigation.tsx` and `src/components/Footer.tsx`
- Social links, contact number, official email, account-opening URL, and video links: `src/data/siteConfig.ts`
- Homepage sections and conversion flow: `src/app/page.tsx`
- Office map: `src/components/OfficeMap.tsx`
- Chatbot information: `src/data/siteKnowledge.ts`
- SEO title, description, structured data, and sitemap: `src/app/layout.tsx`, `src/app/page.tsx`, and `src/app/sitemap.ts`
- Brand assets: `public/logo.png` and `public/darkLogo.png`

## License

Private project. Add an appropriate license before distributing the source publicly.
