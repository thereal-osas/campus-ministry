import type { SVGProps } from "react";

export function InstagramLogo({ className = "w-6 h-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="ig-rg" cx="20%" cy="115%" r="130%">
          <stop offset="0%" stopColor="#ffdb55" />
          <stop offset="10%" stopColor="#ffdd55" />
          <stop offset="50%" stopColor="#ff543e" />
          <stop offset="100%" stopColor="#c837ab" />
        </radialGradient>
        <linearGradient id="ig-lg" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3771c8" />
          <stop offset="12%" stopColor="#60f" />
          <stop offset="100%" stopColor="#c837ab" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#ig-rg)" />
      <rect width="24" height="24" rx="6" fill="url(#ig-lg)" />
      <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" stroke="#ffffff" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.2" stroke="#ffffff" strokeWidth="1.6" />
      <circle cx="15.8" cy="8.2" r="0.8" fill="#ffffff" />
    </svg>
  );
}

export function FacebookLogo({ className = "w-6 h-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        d="M15.15 12.75L15.58 9.9H12.85V8.05C12.85 7.27 13.23 6.51 14.45 6.51H15.7V4.08C15.7 4.08 14.56 3.89 13.48 3.89C11.21 3.89 9.74 5.27 9.74 7.76V9.9H7.23V12.75H9.74V19.65C10.25 19.73 10.77 19.77 11.3 19.77C11.83 19.77 12.35 19.73 12.86 19.65V12.75H15.15Z"
        fill="#ffffff"
      />
    </svg>
  );
}

export function YouTubeLogo({ className = "w-6 h-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="24" height="24" rx="6" fill="#FF0000" />
      <path d="M10 8.5L15.5 12L10 15.5V8.5Z" fill="#ffffff" />
    </svg>
  );
}
