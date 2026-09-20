import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Copy, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { ContentPage } from "../components/ContentPage";
import zenithLogo from "../assets/zenith.jpg";
import declaration from "../assets/declaration.png";

export const Route = createFileRoute("/give")({ component: GivePage });

const dummyAccount = {
  bankName: "Zenith Bank Plc",
  accountName: "Gospel Pillars Campus Fellowship Partnership",
  accountNumber: "1312401213",
  currency: "NGN (Nigerian Naira)",
};

const givingPurposes = [
  { label: "Tithes & Offerings", desc: "Honoring God with our substance weekly" },
  { label: "Campus Awake / Crusades", desc: "Fueling gospel outreaches across higher institutions" },
  { label: "Fellowship Building & Logistics", desc: "Equipping chapters with sound, media & venues" },
  { label: "Student Welfare & Benevolence", desc: "Supporting students and families in times of need" },
];

function GivePage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(dummyAccount.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <ContentPage
      heroImage={declaration}
      eyebrow="Give / partner"
      title="Partner with the movement."
      intro="Your giving supports campus outreaches, student discipleship, conferences, and the expansion of the kingdom across Nigerian universities and colleges."
    >
      <div className="grid gap-10 lg:grid-cols-12">
        {/* Main Bank Details Card */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-brand/15 bg-white p-6 shadow-xl md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand/10 pb-6">
              <div>
                <p className="eyebrow text-gold">Direct Bank Transfer</p>
                <h2 className="mt-1 font-display text-2xl text-ink md:text-3xl">Official Giving Account</h2>
              </div>
              <div className="rounded-xl bg-sand/40 p-2.5">
                <img src={zenithLogo} alt="Zenith Bank" className="h-10 w-auto rounded" />
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-ink/50">Bank Name</span>
                <p className="text-lg font-semibold text-ink">{dummyAccount.bankName}</p>
              </div>

              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-ink/50">Account Name</span>
                <p className="text-lg font-semibold text-ink">{dummyAccount.accountName}</p>
              </div>

              <div className="rounded-xl border border-gold/30 bg-gold/5 p-4 md:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-brand">Account Number</span>
                    <p className="font-mono text-2xl font-bold tracking-widest text-ink md:text-3xl">
                      {dummyAccount.accountNumber}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="button-primary inline-flex items-center gap-2 text-sm"
                    aria-label="Copy account number"
                  >
                    {copied ? (
                      <>
                        <Check size={16} className="text-green-300" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>Copy number</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-ink/50">Currency</span>
                <p className="text-sm text-ink/75">{dummyAccount.currency}</p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2.5 rounded-lg bg-sand/60 p-3.5 text-xs text-ink/70">
              <ShieldCheck size={18} className="shrink-0 text-gold" />
              <span>
                Please include your name or specific chapter as payment reference so our treasury team can confirm and receipt your transfer.
              </span>
            </div>
          </div>
        </div>

        {/* Giving Pillars & Partnership Info */}
        {/* <div className="space-y-6 lg:col-span-5">
          <div className="content-card">
            <div className="flex items-center gap-2 text-gold">
              <Sparkles size={20} />
              <p className="eyebrow text-gold">What your giving supports</p>
            </div>
            <h3 className="mt-3 font-display text-2xl text-ink">Expanding Christ's Kingdom</h3>
            <div className="mt-6 space-y-4">
              {givingPurposes.map((purpose) => (
                <div key={purpose.label} className="border-b border-brand/10 pb-3 last:border-0 last:pb-0">
                  <h4 className="text-sm font-bold text-ink">{purpose.label}</h4>
                  <p className="mt-0.5 text-xs text-ink/70">{purpose.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="content-card">
            <div className="flex items-center gap-2 text-gold">
              <Heart size={20} />
              <p className="eyebrow text-gold">Partnership in Ministry</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-ink/75">
              Have questions regarding financial partnership, sponsorship, or foreign donations? Get in touch with our divisional team.
            </p>
            <Link to="/contact" className="button-outline mt-5 inline-flex">
              Contact ministry team
            </Link>
          </div>
        </div> */}
      </div>
    </ContentPage>
  );
}
