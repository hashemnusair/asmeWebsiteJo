# ASME Website

A Next.js project with TypeScript, Tailwind CSS, and shadcn/ui components.

## Project Structure

This project follows the shadcn/ui project structure:

```
asmeWebsite1/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   └── ui/                # shadcn/ui components directory
│       └── faq-monocrhome.tsx  # FAQ component
├── components.json        # shadcn/ui configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Why `/components/ui` Directory?

The `/components/ui` directory is the standard location for shadcn/ui components. This structure:

- **Maintains consistency** with shadcn/ui conventions
- **Makes components discoverable** - shadcn CLI expects components here
- **Enables easy component management** - you can add/remove components using `npx shadcn@latest add [component]`
- **Keeps UI components separate** from other component types (e.g., feature components, layouts)

## Adding More shadcn/ui Components

To add more shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

Components will be automatically added to `/components/ui`.

## FAQ Component

The FAQ component (`faq-monocrhome.tsx`) is located at `/components/ui/faq-monocrhome.tsx` and includes:

- **Dark/Light theme toggle** - Automatically detects system preference
- **Smooth animations** - Fade-in effects and accordion transitions
- **Accessible** - ARIA labels and keyboard navigation support
- **Responsive** - Mobile-first design

### Usage

```tsx
import FAQ1 from "@/components/ui/faq-monocrhome";

export default function Page() {
  return <FAQ1 />;
}
```

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Status

✅ Next.js project structure  
✅ TypeScript configuration  
✅ Tailwind CSS setup  
✅ shadcn/ui configuration  
✅ FAQ component integrated  
✅ Component in `/components/ui` directory  

