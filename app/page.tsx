'use client';

import Link from 'next/link';
import { useTheme } from './ThemeProvider';

// Types for navigation items and feature cards
interface NavItem {
  href: string;
  label: string;
  className?: string;
}

interface Feature {
  title: string;
  description: string;
}

interface HomeProps {
  brandName?: string;
  navItems?: NavItem[];
  features?: Feature[];
}

// Default configuration
const defaultNavItems: NavItem[] = [
  { href: '/home', label: 'Home' },
  { href: '/login', label: 'Login' },
  {
    href: '/signup',
    label: 'Sign Up',
    className: 'bg-[var(--primary)] text-[var(--primary-foreground)] px-4 py-2 rounded-md text-sm font-medium hover:opacity-90',
  },
];

const defaultFeatures: Feature[] = [
  {
    title: 'Showcase Your Work',
    description: 'Share your latest projects with a vibrant community of developers.',
  },
  {
    title: 'Discover & Learn',
    description: 'Explore projects from other developers and learn new skills.',
  },
  {
    title: 'Collaborate & Connect',
    description: 'Find collaborators for your projects and connect with like-minded developers.',
  },
];

// Main component
export default function Home({
  brandName = 'YourApp',
  navItems = defaultNavItems,
  features = defaultFeatures,
}: HomeProps) {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Navigation brandName={brandName} navItems={navItems} />

      <main className="flex-grow">
        <HeroSection brandName={brandName} />
        <FeaturesSection features={features} />
      </main>

      <Footer brandName={brandName} />
    </div>
  );
}

// Navigation bar component
function Navigation({
  brandName,
  navItems,
}: {
  brandName: string;
  navItems: NavItem[];
}) {
  const baseLinkClasses = 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] px-3 py-2 rounded-md text-sm font-medium';

  return (
    <nav className="w-full border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-[var(--foreground)] text-xl font-bold">
              {brandName}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            {navItems.map(({ href, label, className }) => (
              <Link
                key={href}
                href={href}
                className={className || baseLinkClasses}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

// Hero section component
function HeroSection({ brandName }: { brandName: string }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-6">
        Connect, Share, & Collaborate.
      </h1>
      <p className="text-xl text-[var(--muted-foreground)] mb-8 max-w-2xl mx-auto">
        Join a community of developers to showcase your projects, discover new ideas,
        and collaborate with peers.
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          href="/signup"
          className="bg-[var(--primary)] text-[var(--primary-foreground)] px-6 py-3 rounded-lg text-lg font-medium hover:opacity-90"
        >
          Get Started
        </Link>
        <Link
          href="/login"
          className="bg-[var(--muted)] text-[var(--foreground)] px-6 py-3 rounded-lg text-lg font-medium hover:opacity-90"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}

// Features section component
function FeaturesSection({ features }: { features: Feature[] }) {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
      {features.map(({ title, description }) => (
        <div
          key={title}
          className="bg-[var(--card)] p-6 rounded-lg shadow"
        >
          <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">
            {title}
          </h3>
          <p className="text-[var(--muted-foreground)]">{description}</p>
        </div>
      ))}
    </div>
  );
}

// Footer component
function Footer({ brandName }: { brandName: string }) {
  return (
    <footer className="w-full border-t border-[var(--border)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-[var(--muted-foreground)] text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {brandName}. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
