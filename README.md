
# Gupta Investment Zone

Gupta Investment Zone is a modern landing website for an authorized Angel One partner. It helps visitors learn about demat account opening, investment services, brokerage benefits, and company support, with a responsive interface and a built-in website assistant.

## Features

- Responsive landing page with investment benefits and investor testimonials
- Dedicated Home, About, Services, and Contact pages
- Light and dark theme support
- Email-based contact form using EmailJS
- Floating investment assistant powered by local site knowledge
- SEO metadata for Angel One partner and demat account searches
- Shared navigation and footer components
- Mobile-friendly layouts and Tailwind CSS 4 styling

## Tech Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- EmailJS
- Lucide React and React Icons
- next-themes

## Pages

| Route | Description |
| --- | --- |
| `/` | Landing page with benefits, testimonials, and account-opening calls to action |
| `/about` | Company information, mission, vision, and partnership details |
| `/services` | Brokerage and investment service benefits |
| `/contact` | Contact form and communication details |

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

> Restart the development server after adding or changing environment variables.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server with Turbopack |
| `npm run build` | Create an optimized production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Chat Assistant

The floating assistant answers questions using the entries in `src/data/siteKnowledge.ts`. Its keyword search logic is implemented in `src/lib/chatSearch.ts`.

To update chatbot answers:

1. Edit or add entries in `src/data/siteKnowledge.ts`.
2. Include relevant keywords so the search logic can match the new topic.
3. Keep chatbot content consistent with the public pages.

No external AI API or API key is required by the current assistant implementation.

## Contact API

The contact form component sends messages directly through EmailJS using browser variables.

There is also a server-side POST route at `src/app/api/contact/route.ts`. The route accepts `name`, `email`, and `message` values and sends them to EmailJS.

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
│   ├── about/                 # About page
│   ├── api/contact/           # Server-side contact API
│   ├── contact/               # Contact page
│   ├── services/              # Services page
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout and SEO metadata
│   └── page.tsx               # Landing page
├── components/
│   ├── ui/                    # Shared UI components
│   ├── Chatbot.tsx            # Floating website assistant
│   ├── ContactForm.tsx        # EmailJS contact form
│   ├── Footer.tsx             # Site footer
│   └── Navigation.tsx         # Site navigation
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
4. Deploy the project and verify the contact form and chat assistant.

For Vercel, the project can be imported directly from GitHub. The production URL used in the metadata is `https://gupta-investment-zone.vercel.app/`.

## Customization

Update these areas when changing the business details:

- Page content: `src/app/`
- Navigation and footer: `src/components/Navigation.tsx` and `src/components/Footer.tsx`
- Contact details and office hours: `src/app/contact/page.tsx`
- Chatbot information: `src/data/siteKnowledge.ts`
- SEO title, description, and social metadata: `src/app/layout.tsx`
- Brand assets: `public/logo.png` and `public/darkLogo.png`

## License

Private project. Add an appropriate license before distributing the source publicly.
