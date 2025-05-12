# Landing Page Component

A reusable, configurable Next.js landing page built with React, Tailwind CSS, and a custom `ThemeProvider`. This component renders a navigation bar, hero section, features grid, and footer—all driven by props or sensible defaults.

---

## Table of Contents

* [Features](#features)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Usage](#usage)

  * [Importing the Component](#importing-the-component)
  * [Props](#props)
* [Theming](#theming)
* [Customization](#customization)
* [Development](#development)
* [License](#license)

---

## Features

* **Modular Components**: Navigation, Hero, Features grid, and Footer broken into separate functions for clarity.
* **Prop-Driven**: Override defaults for brand name, navigation items, and feature cards.
* **Tailwind CSS**: Utility-first styling with CSS variables for colors.
* **TypeScript**: Strongly typed props and interfaces.
* **Theme Support**: Integrate with a `ThemeProvider` to toggle light/dark mode (or any custom themes).

---

## Prerequisites

* Node.js v14+ (or latest LTS)
* Yarn or npm
* Next.js 14+

---

## Installation

1. **Install dependencies** (if not already in your project):

   ```bash
   npm install react next tailwindcss
   # or
   yarn add react next tailwindcss
   ```

2. **Tailwind Setup** (if not configured):

   ```bash
   npx tailwindcss init -p
   ```

   Configure `tailwind.config.js` and include CSS variables in your global styles.

3. **Add the component file**

   Create `components/Home.tsx` and copy the landing page code.

---

## Usage

### Importing the Component

```tsx
// pages/index.tsx
'use client';

import Home from '@/components/Home';

export default function Index() {
  return <Home />;
}
```

### Props

| Prop        | Type        | Default      | Description                                                 |
| ----------- | ----------- | ------------ | ----------------------------------------------------------- |
| `brandName` | `string`    | `'YourApp'`  | Application or brand name displayed in navigation & footer. |
| `navItems`  | `NavItem[]` | Default list | Array of navigation links `{ href, label, className? }`.    |
| `features`  | `Feature[]` | Default list | Array of feature cards `{ title, description }`.            |

All props are optional—defaults will be used if you omit them.

---

## Theming

The component relies on CSS custom properties (e.g., `--background`, `--foreground`, `--primary`, etc.) for colors. To integrate your theme:

1. Wrap your app with `ThemeProvider` (imported from `./ThemeProvider`).
2. Define CSS variables in your global stylesheet or inline:

   ```css
   :root {
     --background: #ffffff;
     --foreground: #1f2937;
     --primary: #3b82f6;
     --primary-foreground: #ffffff;
     --muted: #e5e7eb;
     --muted-foreground: #6b7280;
     --card: #f9fafb;
     --border: #d1d5db;
   }

   [data-theme='dark'] {
     --background: #111827;
     --foreground: #f9fafb;
     /* ... */
   }
   ```

---

## Customization

* **Navigation Items**: Pass a custom `navItems` array to change links.
* **Feature Cards**: Override `features` to display different content.
* **Branding**: Change `brandName` to reflect your app’s name.
* **Styling**: Extend or override Tailwind classes via `className` props.

---

## Development

1. **Run Dev Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. **Build**

   ```bash
   npm run build
   ```

3. **Preview**

   ```bash
   npm run start
   ```

---
