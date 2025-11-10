# Setup Instructions for shadcn/ui Project

## ✅ Project Status

Your project has been successfully set up with:
- ✅ Next.js 14 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ shadcn/ui configuration
- ✅ FAQ component integrated at `/components/ui/faq-monocrhome.tsx`

## 📁 Component Location

The FAQ component has been placed in `/components/ui/faq-monocrhome.tsx` following shadcn/ui conventions.

### Why `/components/ui`?

The `/components/ui` directory is **critical** for shadcn/ui because:

1. **shadcn CLI expects components here** - When you run `npx shadcn@latest add [component]`, it automatically places components in this directory
2. **Consistency** - All UI components live in one predictable location
3. **Easy management** - You can easily find, update, or remove UI components
4. **Best practices** - Separates UI components from feature-specific components

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the FAQ component.

## 📦 Adding More shadcn/ui Components

To add additional shadcn/ui components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

All components will be added to `/components/ui` automatically.

## 🔧 Configuration Files

- **`components.json`** - shadcn/ui configuration (already set up)
- **`tailwind.config.ts`** - Tailwind CSS configuration
- **`tsconfig.json`** - TypeScript configuration with path aliases (`@/*`)

## 📝 Component Usage

The FAQ component is already integrated in `app/page.tsx`:

```tsx
import FAQ1 from "@/components/ui/faq-monocrhome";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      <FAQ1 />
    </div>
  );
}
```

## 🎨 Features

The FAQ component includes:
- Dark/Light theme toggle
- Smooth animations
- Responsive design
- Accessibility features (ARIA labels, keyboard navigation)

## 🐛 Troubleshooting

### If components aren't found:

1. Check that `components.json` exists and has correct paths
2. Verify `tsconfig.json` has the path alias: `"@/*": ["./*"]`
3. Ensure the component file is in `/components/ui/`

### If styles aren't loading:

1. Check that `app/globals.css` includes Tailwind directives
2. Verify `tailwind.config.ts` includes the correct content paths
3. Restart the dev server after config changes

## 📚 Next Steps

1. Customize the FAQ data in `faq-monocrhome.tsx`
2. Add more shadcn/ui components as needed
3. Customize the theme colors in `tailwind.config.ts`
4. Update the component styling to match your brand

