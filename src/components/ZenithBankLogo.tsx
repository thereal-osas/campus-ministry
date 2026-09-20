import type { SVGProps } from "react";

export function ZenithBankLogo({ className = "h-12 w-auto", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 260 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Zenith Red Emblem */}
      <rect x="4" y="6" width="52" height="52" rx="10" fill="#D32027" />
      {/* Zenith Z Mark */}
      <path
        d="M17 20H43V25.5L27 38.5H43V44H17V38.5L33 25.5H17V20Z"
        fill="#FFFFFF"
      />
      {/* Accent dot on diagonal */}
      <circle cx="36" cy="23" r="3" fill="#6D6E71" />

      {/* Typography */}
      <text x="68" y="38" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="800" fontSize="26" letterSpacing="0.06em" fill="#1F2421">
        ZENITH
      </text>
      <text x="69" y="52" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontWeight="600" fontSize="10.5" letterSpacing="0.22em" fill="#D32027">
        BANK PLC
      </text>
    </svg>
  );
}

export function ZenithBankEmblem({ className = "h-10 w-10", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="60" height="60" rx="12" fill="#D32027" />
      <path
        d="M15 16H45V22.5L26.5 37.5H45V44H15V37.5L33.5 22.5H15V16Z"
        fill="#FFFFFF"
      />
      <circle cx="37" cy="19.5" r="3.5" fill="#6D6E71" />
    </svg>
  );
}
