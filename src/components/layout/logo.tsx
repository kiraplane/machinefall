'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-label="Machinefall logo"
      title="Machinefall"
      className={cn(
        'relative inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg',
        'bg-[#080d0b] shadow-[0_0_24px_rgba(242,184,75,0.18)]',
        className
      )}
    >
      <Image
        src="/logo.svg"
        alt=""
        fill
        sizes="40px"
        className="object-contain"
      />
    </span>
  );
}
