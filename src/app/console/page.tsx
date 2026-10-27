'use client';

import { ConsoleSection } from '@/components/sections/ConsoleSection';
import { Metadata } from 'next';

export default function ConsolePage() {
  return (
    <main className="w-full" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="min-h-screen pt-24">
        <ConsoleSection />
      </div>
    </main>
  );
}
