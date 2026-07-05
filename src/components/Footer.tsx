import { useState } from "react";
import { Mail, Phone, Copy, Check } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };
  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center justify-center rounded-md p-1 text-muted-foreground transition-colors hover:text-primary"
      aria-label="Copy to clipboard"
      type="button"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-emerald-400" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </button>
  );
}

export function Footer() {
  return (
    <footer className="w-full border-t border-[rgba(255,255,255,0.08)] bg-[#0a0a1a]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Ayanfe Waves Visuals logo" className="h-10 w-10 object-contain" />
            <p className="font-heading text-lg tracking-tight text-foreground">
              Ayanfe Waves Visuals
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="tel:+2348167829017"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              +234 816 782 9017
            </a>
            <a
              href="mailto:ayanfewavesvisuals@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              ayanfewavesvisuals@gmail.com
            </a>
            <a
              href="https://www.tiktok.com/@ayanfewaves_visuals1?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.3 0 .59.05.86.13V8.31a6.36 6.36 0 0 0-.86-.06A6.25 6.25 0 0 0 3 14.5a6.25 6.25 0 0 0 6.25 6.25 6.25 6.25 0 0 0 6.25-6.25V8.82a8.1 8.1 0 0 0 4.77 1.52v-3.4a4.86 4.86 0 0 1-1-.1z" />
              </svg>
              TikTok
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ayanfe Waves Visuals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
