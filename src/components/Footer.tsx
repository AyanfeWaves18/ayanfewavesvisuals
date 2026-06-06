export function Footer() {
  return (
    <footer className="w-full border-t border-[rgba(255,255,255,0.08)] bg-[#0a0a1a]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="font-heading text-lg tracking-tight text-foreground">
            Ayanfe Waves Visuals
          </p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ayanfe Waves Visuals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
