"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const phoneDisplay = "07506 106619";
const phoneHref = "tel:07506106619";
const whatsappHref = "https://wa.me/447506106619";
const emailHref = "mailto:pineanddandytrees@gmail.com";
const facebookHref = "https://www.facebook.com/A.WPlasteringSolutions";
const instagramHref = "https://www.instagram.com/a.wplasteringsolutions/";

const navItems = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Work", "#work"],
  ["Reviews", "#reviews"],
  ["Contact", "#contact"],
];

const services = [
  [
    "Plastering & Skimming",
    "Smooth walls and ceilings finished to a clean, paint-ready standard for rooms of all sizes.",
  ],
  [
    "Ceiling Repairs",
    "Leak damage, cracked ceilings, overboarding, artex cover-ups and full ceiling replasters.",
  ],
  [
    "Stud Walls & Boarding",
    "Partition walls, insulated studwork, plasterboard installation, beading and finishing.",
  ],
  [
    "Garage Conversions",
    "Internal boarding, walls, ceilings and plastering for garage conversion projects.",
  ],
  [
    "Patch Repairs",
    "Small repairs, damaged areas, removed doorways, chasing and localised plastering work.",
  ],
  [
    "Commercial & Builder Work",
    "Reliable plastering support for landlords, builders, contractors and renovation projects.",
  ],
];

const areas = [
  "Manchester",
  "Cheshire",
  "Stockport",
  "Macclesfield",
  "Wilmslow",
  "Alderley Edge",
  "Knutsford",
  "Altrincham",
  "Warrington",
  "North West",
];

const galleryImages = [
  "/images/gallery/job1.png",
  "/images/gallery/job2.png",
  "/images/gallery/job3.png",
  "/images/gallery/job4.png",
  "/images/gallery/job5.png",
  "/images/gallery/job6.png",
  "/images/gallery/job7.png",
  "/images/gallery/job8.png",
  "/images/gallery/job9.png",
  "/images/gallery/job10.png",
];

const reviews = [
  {
    quote:
      "Really happy with the work Anthony did for us. He boarded and skimmed six ceilings and one wall, and the finish is great. Reliable, fair price and would definitely recommend.",
    name: "Anna Maria",
    date: "Facebook recommendation",
  },
  {
    quote:
      "We had a leak from our bathroom to the kitchen. The team came, replaced the old ceiling, boarded and plastered it. Fantastic job, speedy and great communication throughout.",
    name: "David Toner",
    date: "Facebook recommendation",
  },
  {
    quote:
      "Antony worked really quickly and was able to patch and plaster our study within a couple of hours. The work was high quality and communication was excellent.",
    name: "Jess East",
    date: "Facebook recommendation",
  },
  {
    quote:
      "Antony did a great job plastering my stairs and landing. Really efficient and he made sure everywhere was clean and tidy. Would highly recommend.",
    name: "Emma Louise",
    date: "Facebook recommendation",
  },
  {
    quote:
      "Highly recommend Antony. He and his team did an incredible job, arrived on time and kept everything super tidy which is always appreciated.",
    name: "Abbie Clarke",
    date: "Facebook recommendation",
  },
  {
    quote:
      "Really excellent work. Came to fix poor work from a previous plasterer and did an amazing job. Really tidy and did everything as promised.",
    name: "Sharon Cavan",
    date: "Facebook recommendation",
  },
  {
    quote:
      "Anthony did a great plastering job on our dining room. He was punctual, tidy and his work was excellent. One wall needed levelling and he did amazing work.",
    name: "Ken Carroll",
    date: "Facebook recommendation",
  },
  {
    quote:
      "Had two rooms plastered before Christmas. The rooms look amazing and you could hardly tell plastering had been done as it was so clean and tidy at the end.",
    name: "Clare Cobain",
    date: "Facebook recommendation",
  },
  {
    quote:
      "Came quickly to quote and did all the work to a very high standard. The house was respected and kept as clean as possible considering the nature of the work.",
    name: "Chris Evans",
    date: "Facebook recommendation",
  },
];

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.09 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.6 2.5a2 2 0 0 1-.45 2.11L9 10.59a16 16 0 0 0 4.41 4.41l1.26-1.26a2 2 0 0 1 2.11-.45c.8.28 1.64.48 2.5.6A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5Zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4Zm9.5 1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.53 0 .2 5.33.2 11.9c0 2.1.55 4.16 1.6 5.97L0 24l6.28-1.65a11.86 11.86 0 0 0 5.82 1.48h.01c6.56 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.48-8.45ZM12.1 21.82a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.72.98.99-3.63-.24-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.43-9.89 9.88-9.89 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.43 9.89-9.89 9.89Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.27h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
    </svg>
  );
}

function Logo({
  compact = false,
  variant = "white",
}: {
  compact?: boolean;
  variant?: "white" | "black";
}) {
  return (
    <Image
      src={variant === "black" ? "/images/black-logo.png" : "/images/white-logo.png"}
      alt="A.W Plastering Solutions"
      width={720}
      height={260}
      className={`h-auto w-auto object-contain ${
        compact
          ? "max-h-[48px] max-w-[165px]"
          : "max-h-[76px] max-w-[245px] lg:max-w-[265px]"
      }`}
      priority
    />
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reviewStart, setReviewStart] = useState(0);
  const [introVisible, setIntroVisible] = useState(true);
  const [introLeaving, setIntroLeaving] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [quoteName, setQuoteName] = useState("");
  const [quotePhone, setQuotePhone] = useState("");
  const [quoteJobType, setQuoteJobType] = useState("");
  const [quoteDetails, setQuoteDetails] = useState("");

  const quoteMessage = encodeURIComponent(
    `Hi A.W Plastering Solutions, I'd like a quote.\n\nName: ${quoteName || "Not provided"}\nPhone: ${quotePhone || "Not provided"}\nProject type: ${quoteJobType || "Not selected"}\nDetails: ${quoteDetails || "Not provided"}`
  );
  const quoteWhatsappHref = `${whatsappHref}?text=${quoteMessage}`;

  useEffect(() => {
    const leaveTimer = setTimeout(() => setIntroLeaving(true), 650);
    const removeTimer = setTimeout(() => setIntroVisible(false), 1150);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".scroll-fade"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setReviewStart((current) => (current + 1) % reviews.length);
    }, 5200);

    return () => clearInterval(timer);
  }, []);

  const visibleReviews = Array.from(
    { length: 3 },
    (_, i) => reviews[(reviewStart + i) % reviews.length]
  );

  const mobileReview = reviews[reviewStart % reviews.length];

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f7f7f5] text-[#111111]">
      <style jsx global>{`
        @keyframes review-slide-in {
          0% {
            opacity: 0;
            transform: translateX(80px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .review-slide-in {
          animation: review-slide-in 0.85s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .scroll-fade {
          opacity: 0;
          transform: translate3d(0, 18px, 0);
          transition: opacity 650ms ease, transform 650ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .scroll-fade.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        @media (min-width: 768px) {
          .scroll-fade {
            transform: translate3d(0, 24px, 0);
          }

          .scroll-fade.is-visible {
            transform: translate3d(0, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .scroll-fade {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      {introVisible && (
        <div className={`fixed inset-0 z-[999] flex items-center justify-center bg-white transition-all duration-700 ease-out ${introLeaving ? "pointer-events-none opacity-0 blur-sm" : "opacity-100 blur-0"}`}>
          <div className={`transition-all duration-700 ease-out ${introLeaving ? "scale-[1.08] opacity-0 blur-sm" : "scale-100 opacity-100 blur-0"}`}>
            <Logo />
          </div>
        </div>
      )}

      <header className="fixed top-0 z-50 w-full md:pointer-events-none">
        <div className={`hidden transition-all duration-500 md:block ${scrolled ? "mt-0 w-full max-w-none px-0" : "mx-auto mt-5 max-w-7xl px-6"}`}>
          {!scrolled ? (
            <div className="pointer-events-auto grid h-[112px] grid-cols-[300px_1fr_210px] overflow-hidden border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
              <a href="#home" className="flex items-center justify-center border-r border-black/10 px-5">
                <Logo />
              </a>

              <nav className="flex items-center justify-center gap-9 text-[11px] font-semibold uppercase tracking-[0.22em] text-black/70">
                {navItems.map(([item, href]) => (
                  <a key={item} href={href} className="transition hover:text-[#c92026]">
                    {item}
                  </a>
                ))}
              </nav>

              <a href={phoneHref} className="flex items-center justify-center bg-[#111111] px-6 text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#c92026]">
                Call Now
              </a>
            </div>
          ) : (
            <div className="pointer-events-auto flex h-[84px] w-full items-center justify-between border-b border-black/10 bg-white px-10 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
              <a href="#home" className="flex shrink-0 items-center">
                <Logo compact />
              </a>

              <nav className="flex items-center gap-9 text-[11px] font-semibold uppercase tracking-[0.22em] text-black/70">
                {navItems.map(([item, href]) => (
                  <a key={item} href={href} className="transition hover:text-[#c92026]">
                    {item}
                  </a>
                ))}
              </nav>

              <a href={phoneHref} className="border border-black bg-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:border-[#c92026] hover:bg-[#c92026] hover:text-white">
                {phoneDisplay}
              </a>
            </div>
          )}
        </div>

        <div className="border-b border-black/10 bg-white shadow-sm md:hidden">
          <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_auto] items-center gap-3 px-4 py-3">
            <a href="#home" className="flex min-w-0 items-center justify-start">
              <Logo compact />
            </a>
            <a href={phoneHref} className="mobile-call-wobble border border-black bg-[#111111] px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#c92026]">
              Call
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" className="flex h-11 w-11 items-center justify-center border border-black/20 bg-white text-black">
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 bg-black" />
                <span className="block h-0.5 w-5 bg-black" />
                <span className="block h-0.5 w-5 bg-black" />
              </span>
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-black/10 bg-white px-5 py-5">
              <div className="flex flex-col gap-4 text-center text-base font-semibold uppercase tracking-[0.14em] text-black">
                {navItems.map(([item, href]) => (
                  <a key={item} href={href} onClick={() => setMenuOpen(false)}>
                    {item}
                  </a>
                ))}
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="border border-black bg-[#111111] px-5 py-3 text-sm text-white">
                  WhatsApp Quote
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      <section id="home" className="relative h-[100svh] overflow-hidden md:h-screen">
        <video
          ref={(video) => {
            if (video) video.playbackRate = 0.9;
          }}
          className="absolute inset-0 h-full w-full object-cover saturate-[0.96] contrast-[1.03] brightness-[0.82] md:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/timelapse.mp4" type="video/mp4" />
        </video>

        <Image
          src="/images/hero.png"
          alt="Freshly plastered room by A.W Plastering Solutions"
          fill
          sizes="100vw"
          className="hidden object-cover saturate-[0.96] contrast-[1.03] brightness-[0.92] md:block"
          style={{ objectPosition: "center center" }}
          priority
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/5 via-black/15 to-black/45 md:bg-gradient-to-r md:from-black/78 md:via-black/42 md:to-black/5" />

        <div className="relative z-20 mx-auto flex h-full w-full max-w-7xl px-4 pt-[76px] md:px-6 md:pb-10 md:pt-[165px]">
          <div className="flex h-full w-full items-center">
            <div className="w-full animate-fade-up text-white">
              
              <h1 className="max-w-[12ch] text-[3.15rem] font-semibold leading-[0.92] tracking-[-0.05em] sm:text-[3.8rem] md:max-w-[13ch] md:text-[3.5rem] lg:text-[4.1rem] xl:text-[5rem]">
                Plastering Services Across Manchester & Cheshire
              </h1>

              <p className="mt-5 max-w-xl text-base font-medium leading-7 text-white/86 md:text-lg md:leading-8">
Precision plastering. Clean finishes. Free quotations.</p>
<div className="mt-5 grid gap-y-2 gap-x-6 text-sm font-medium leading-5 text-white/88 sm:grid-cols-2 md:max-w-xl">                {[
                  "5-star Facebook reviews",
                  "Domestic & commercial work",
                  "Clean, tidy workmanship",
                  "Open 7 days, 8am–5pm",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center border border-white/60 bg-white text-[12px] font-black leading-none text-[#c92026]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid w-full max-w-[330px] grid-cols-1 gap-3 sm:max-w-[540px] sm:grid-cols-2">
                <a href={phoneHref} className="bg-white px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-[#c92026] hover:text-white">
                  Call {phoneDisplay}
                </a>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="border border-white/70 bg-white/10 px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-white backdrop-blur transition hover:bg-white hover:text-black">
                  WhatsApp Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-fade bg-[#f7f7f5] px-4 py-16 md:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-5 md:grid-cols-[0.9fr_1fr] md:items-end">
            <div>
              <p className="font-semibold uppercase tracking-[0.25em] text-[#c92026]">Services</p>
              <h2 className="mt-4 max-w-4xl text-[2.35rem] font-semibold leading-[0.95] tracking-[-0.045em] md:text-5xl">
                Plastering services for every project, big or small.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-black/60 md:ml-auto md:text-base">
              From small patch repairs to full house work, A.W Plastering Solutions complete every job to a high standard.
            </p>
          </div>

          <div className="grid border border-black/10 bg-white md:grid-cols-3">
            {services.map(([title, copy], index) => (
              <div key={title} className="group border-b border-black/10 p-6 transition hover:bg-[#f7f7f5] md:border-r md:[&:nth-child(3n)]:border-r-0 md:[&:nth-last-child(-n+3)]:border-b-0">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c92026]">
                    0{index + 1}
                  </span>
                  <span className="h-px w-12 bg-black/20 transition group-hover:bg-[#c92026]" />
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.025em] text-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/58">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="scroll-fade bg-white px-4 py-16 md:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-5 md:grid-cols-[0.9fr_1fr] md:items-end">
            <div>
              <p className="font-semibold uppercase tracking-[0.25em] text-[#c92026]">Featured Work</p>
              <h2 className="mt-4 max-w-4xl text-[2.35rem] font-semibold leading-[0.95] tracking-[-0.045em] md:text-5xl">
                Recently completed projects.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-black/60 md:ml-auto md:text-base">
A selection of our recently completed plastering projects across Manchester and the North West.            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:auto-rows-[150px] lg:auto-rows-[190px]">
            {galleryImages.map((src, index) => {
              const spanClass =
                index === 0
                  ? "col-span-2 aspect-[4/3] md:aspect-auto md:col-span-2 md:row-span-2"
                  : index === 1
                    ? "aspect-square md:aspect-auto md:col-span-1 md:row-span-1"
                    : index === 2
                      ? "aspect-square md:aspect-auto md:col-span-1 md:row-span-1"
                      : index === 3
                        ? "col-span-2 aspect-[16/9] md:aspect-auto md:col-span-2 md:row-span-2"
                        : index === 4
                          ? "aspect-square md:aspect-auto md:col-span-1 md:row-span-1"
                          : index === 5
                            ? "aspect-square md:aspect-auto md:col-span-1 md:row-span-1"
                            : index === 6
                              ? "col-span-2 aspect-[5/3] md:aspect-auto md:col-span-2 md:row-span-1"
                              : index === 7
                                ? "aspect-square md:aspect-auto md:col-span-1 md:row-span-1"
                                : index === 8
                                  ? "aspect-square md:aspect-auto md:col-span-1 md:row-span-1"
                                  : "col-span-2 aspect-[16/9] md:aspect-auto md:col-span-2 md:row-span-1";

              return (
                <div key={src} className={`group relative overflow-hidden bg-[#f7f7f5] ${spanClass}`}>
                  <Image
                    src={src}
                    alt={`A.W Plastering Solutions featured project ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                  />
                  {index === 0 && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/10 to-transparent md:hidden" />
                      <div className="absolute bottom-4 left-4 border border-white/30 bg-black/55 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur md:hidden">
                        Recent Work
                      </div>
                    </>
                  )}
                  <div className="absolute inset-0 border border-black/0 transition group-hover:border-[#c92026]" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

<section className="scroll-fade bg-[#111111] px-4 py-16 text-white md:px-5 md:py-24">
  <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
    <div>
      <p className="font-semibold uppercase tracking-[0.25em] text-[#c92026]">
        See The Work
      </p>


  <h2 className="mt-4 max-w-3xl text-[2.35rem] font-semibold leading-[0.95] tracking-[-0.045em] md:text-5xl">
The preparation, the process and the finish. Done properly. </h2>

  <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 md:text-base">
    A behind-the-scenes look at the care, organisation and workmanship that goes into every project from start to finish.
  </p>
</div>

<div className="relative overflow-hidden bg-black shadow-[0_26px_80px_rgba(0,0,0,0.35)]">
  <div className="aspect-[2/1]">
    <video
      ref={(video) => {
        if (video) video.playbackRate = 0.85;
      }}
      className="h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      <source src="/videos/timelapse.mp4" type="video/mp4" />
    </video>
  </div>
</div>

  </div>
</section>


      <section id="reviews" className="scroll-fade bg-[#f7f7f5] px-4 py-16 md:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-5 md:grid-cols-[0.9fr_1fr] md:items-end">
            <div>
              <p className="font-semibold uppercase tracking-[0.25em] text-[#c92026]">Reviews</p>
              <h2 className="mt-4 max-w-4xl text-[2.35rem] font-semibold leading-[0.95] tracking-[-0.045em] md:text-5xl">
               Five star reviews & 100% recommendations.
              </h2>
            </div>
            <div className="max-w-xl md:ml-auto">
              <div className="text-2xl font-semibold tracking-[0.08em] text-[#c92026]">★★★★★</div>
              <p className="mt-3 text-sm leading-7 text-black/60 md:text-base">
Reviews from your neighbours across the region.              </p>
            </div>
          </div>

          <div className="overflow-hidden">
            <div key={`mobile-review-${reviewStart}`} className="review-slide-in md:hidden">
              <div className="flex min-h-[300px] flex-col justify-between border border-black/10 bg-white p-6">
                <div>
                  <div className="mb-5 text-lg font-semibold tracking-[0.1em] text-[#c92026]">★★★★★</div>
                  <p className="text-base font-medium leading-7 text-black/76">“{mobileReview.quote}”</p>
                </div>
                <div className="mt-8 border-t border-black/10 pt-5">
                  <p className="font-semibold text-black">{mobileReview.name}</p>
                  <p className="mt-1 text-sm font-medium text-black/45">{mobileReview.date}</p>
                </div>
              </div>
            </div>

            <div key={`desktop-reviews-${reviewStart}`} className="hidden gap-4 md:grid md:grid-cols-3">
              {visibleReviews.map((review, index) => (
                <div key={`${review.name}-${review.date}`} className="review-slide-in flex min-h-[310px] flex-col justify-between border border-black/10 bg-white p-6 transition duration-500 hover:border-[#c92026]" style={{ animationDelay: `${index * 90}ms` }}>
                  <div>
                    <div className="mb-5 text-lg font-semibold tracking-[0.1em] text-[#c92026]">★★★★★</div>
                    <p className="text-base font-medium leading-7 text-black/76">“{review.quote}”</p>
                  </div>
                  <div className="mt-8 border-t border-black/10 pt-5">
                    <p className="font-semibold text-black">{review.name}</p>
                    <p className="mt-1 text-sm font-medium text-black/45">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 border border-black bg-white p-5 md:flex-row md:items-center">
            <p className="max-w-2xl text-sm font-medium leading-7 text-black/64">
              Need a room skimmed, ceiling repaired or a larger project priced? Call Antony or send project photos on WhatsApp.
            </p>
            <a href={quoteWhatsappHref} target="_blank" rel="noopener noreferrer" className="bg-[#111111] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#c92026]">
              WhatsApp Quote
            </a>
          </div>
        </div>
      </section>

      <section className="scroll-fade bg-white px-4 py-16 md:px-5 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1fr]">
          <div>
            <p className="font-semibold uppercase tracking-[0.25em] text-[#c92026]">Why Choose A.W</p>
            <h2 className="mt-4 max-w-3xl text-[2.35rem] font-semibold leading-[0.95] tracking-[-0.045em] md:text-5xl">
              High standards without the hassle.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-black/60 md:text-base">
              A.W Plastering Solutions works with homeowners, landlords, builders and contractors, combining reliable communication with tidy, professional workmanship.
            </p>
          </div>

          <div className="grid gap-0 border border-black/10 sm:grid-cols-2">
            {[
              ["Reliable Communication", "Clear quoting, quick replies and updates before the team arrives."],
              ["Clean Workmanship", "Respect for the property, tidy working and careful clean-up afterwards."],
              ["Attention To Detail", "Boarding, beading, levelling and finishing carried out with care."],
              ["Flexible Projects", "Small repairs, full rooms, ceiling work, conversions and contractor support."],
            ].map(([title, copy]) => (
              <div key={title} className="border-b border-black/10 p-6 sm:border-r sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0">
                <div className="mb-5 h-px w-12 bg-[#c92026]" />
                <h3 className="text-xl font-semibold tracking-[-0.025em]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/60">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-fade bg-[#f7f7f5] px-4 py-16 md:px-5 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1fr]">
          <div className="bg-[#111111] p-8 text-white md:p-10">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#c92026]">Areas Covered</p>
            <h2 className="mt-4 text-[2.2rem] font-semibold leading-[0.95] tracking-[-0.045em] md:text-5xl">
              Plastering across Manchester, Cheshire and the North West.
            </h2>
            <p className="mt-6 leading-7 text-white/62">
              For local homeowners, landlords, builders and commercial clients looking for clean, reliable plastering work.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-2">
              {areas.map((area) => (
                <div key={area} className="border border-white/12 bg-white/[0.03] px-3 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white/80">
                  {area}
                </div>
              ))}
            </div>
          </div>

          <div className="border border-black/10 bg-white p-6 md:p-8">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#c92026]">Request A Quote</p>
            <h2 className="mt-4 text-[2rem] font-semibold leading-[0.95] tracking-[-0.045em] md:text-4xl">
              Tell us about your project.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-black/60">
              Send a few details below or call directly. For photos of rooms, ceilings or repair work, WhatsApp is usually the quickest route.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <input className="field" placeholder="Your name" value={quoteName} onChange={(event) => setQuoteName(event.target.value)} />
              <input className="field" placeholder="Phone number" value={quotePhone} onChange={(event) => setQuotePhone(event.target.value)} />
              <select className="field md:col-span-2" value={quoteJobType} onChange={(event) => setQuoteJobType(event.target.value)}>
                <option value="">Project type</option>
                <option>Plastering / skimming</option>
                <option>Ceiling repair / overboarding</option>
                <option>Patch repair</option>
                <option>Garage conversion</option>
                <option>Stud wall / partition</option>
                <option>Commercial / contractor work</option>
              </select>
              <textarea className="field min-h-[150px] md:col-span-2" placeholder="Briefly tell us what needs doing..." value={quoteDetails} onChange={(event) => setQuoteDetails(event.target.value)} />
              <a href={quoteWhatsappHref} target="_blank" rel="noopener noreferrer" className="bg-[#111111] px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#c92026] md:col-span-2">
                Start Quote On WhatsApp
              </a>
            </div>

            <div className="mt-6 grid gap-3 text-sm font-medium text-black/62 sm:grid-cols-2">
              <a href={phoneHref} className="flex items-center gap-2 hover:text-[#c92026]">
                <PhoneIcon className="h-4 w-4" />
                {phoneDisplay}
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#c92026]">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Antony
              </a>
            </div>
          </div>
        </div>
      </section>

      <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center bg-[#111111] text-white shadow-2xl ring-4 ring-white/40 transition hover:scale-105 hover:bg-[#c92026]" aria-label="Message A.W Plastering Solutions on WhatsApp">
        <WhatsAppIcon className="h-8 w-8" />
      </a>

      <footer className="scroll-fade bg-[#000000] px-4 py-12 text-white md:px-5">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
          <div>
<div className="flex items-center">
  <Image
    src="/images/black-logo.png"
    alt="A.W Plastering Solutions"
    width={720}
    height={260}
    className="h-auto w-[240px] object-contain lg:w-[260px]"
  />
</div>
            <p className="mt-5 max-w-md leading-7 text-white/55">
              High-quality plastering and building services for domestic and commercial clients across Manchester, Cheshire and the North West.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c92026]">Services</p>
            <div className="space-y-2 text-white/62">
              <p>Plastering & Skimming</p>
              <p>Ceiling Repairs</p>
              <p>Stud Walls & Boarding</p>
              <p>Garage Conversions</p>
              <p>Patch Repairs</p>
              <p>Commercial Work</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c92026]">Contact</p>
            <div className="space-y-3 text-white/62">
              <p className="font-semibold text-white">A.W Plastering Solutions</p>
              <p>Manchester, Cheshire & North West</p>
              <a href={phoneHref} className="block hover:text-[#c92026]">{phoneDisplay}</a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#c92026]"><WhatsAppIcon className="h-5 w-5 text-[#c92026]" />WhatsApp for a quote</a>
              <a href={facebookHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#c92026]"><FacebookIcon className="h-5 w-5 text-[#c92026]" />Facebook</a>
              <a
  href={instagramHref}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 hover:text-[#c92026]"
>
  <InstagramIcon className="h-5 w-5 text-[#c92026]" />
  Instagram
</a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/35 md:flex-row">
          <p>© A.W Plastering Solutions. All rights reserved.</p>
          <p>Clean finishes • Reliable service • Professional workmanship</p>
        </div>
      </footer>
    </main>
  );
}
