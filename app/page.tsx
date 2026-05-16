"use client";

import { useState, useEffect, useCallback, Fragment } from "react";
import Image from "next/image";

// =====================================================
// DATA
// =====================================================
const SKILLS = [
  "Marketing Strategy", "Entrepreneurship", "Public Speaking",
  "Brand & Logo Design", "Event Planning", "Business Development",
  "Financial Modeling", "Team Leadership", "SOP Writing",
  "Social Media Content", "Customer Experience",
];

type ExpEntry = {
  year: string;
  role: string;
  title: string;
  desc: string;
  body: string[];
  stats: string[];
};

const EXPERIENCE: ExpEntry[] = [
  {
    year: "2023 — 2025",
    role: "Youth Advisor",
    title: "NHL Power Players",
    desc: "Selected as 1 of 25 from 1,500+ applicants to advise the National Hockey League on youth marketing and fan engagement strategy.",
    body: [
      "Worked directly with NHL marketing executives over two seasons to shape strategy on how the league engages Gen Z and youth hockey fans.",
      "Contributed to research and pitch decks across digital fan touchpoints, in-arena experience design, and grassroots growth.",
      "One of the youngest advisors selected, and the only from Maryland — invited back for a second-year term.",
    ],
    stats: ["1 of 25 selected", "1,500+ applicants", "2 seasons"],
  },
  {
    year: "2023 — 2026",
    role: "Chapter President",
    title: "FBLA · Entrepreneurship",
    desc: "Chapter President at River Hill. 3× Maryland State Champion. Top 10 nationally in Anaheim. 9th internationally.",
    body: [
      "Chapter President of River Hill FBLA — leading officer team, programming, and competitive prep across the school year.",
      "Built and defended business plans, financial models, and live pitches against the top high-school entrepreneurs in the country.",
      "Three consecutive Maryland state titles · Top 10 nationally in Anaheim · 9th internationally.",
    ],
    stats: ["Chapter President", "3× State Champion", "Top 10 Nationally", "9th Internationally"],
  },
  {
    year: "2025",
    role: "Global Youth Scholar",
    title: "Wharton · Cryotherapy Startup Pitch",
    desc: "Pitched a cryotherapy sports-recovery startup; owned the financial model and go-to-market strategy.",
    body: [
      "Selected for the Wharton Global Youth Scholars Program at the University of Pennsylvania.",
      "Co-developed and pitched a cryotherapy-based sports recovery concept for high-school and collegiate athletes.",
      "Owned the financial model, unit economics, and go-to-market strategy for the team's final pitch.",
    ],
    stats: ["Wharton · UPenn", "Financial model", "Go-to-market"],
  },
  {
    year: "2023 — Now",
    role: "Founder & President",
    title: "River Hill Pickleball Club",
    desc: "Founded Howard County's first high-school pickleball club. 83 members, competitive team, $1,070 raised for the HoCo Police Foundation.",
    body: [
      "Founder and President of the first high-school pickleball club in Howard County — pitched the admin, recruited members, and built operations from zero.",
      "Grew to 83 members with a competitive team, custom-designed jerseys, and weekly practice + match programming.",
      "Hosted a fundraiser in April 2026 that raised $1,070 for the Howard County Police Foundation.",
    ],
    stats: ["Founder & President", "83 members", "$1,070 raised", "First in HoCo"],
  },
  {
    year: "2024 — Now",
    role: "Co-Founder & President",
    title: "Collaborative Marketing Club",
    desc: "Co-founded an 80+ member club running real marketing campaigns for local businesses. Hosted the CEO of Bombas in May 2026.",
    body: [
      "Co-founder and President of a club that pairs students with real small businesses to run marketing campaigns — strategy, content, and creative.",
      "Grew to 80+ members across two years with structured pods and a real client pipeline.",
      "Hosted the CEO of Bombas as a featured speaker in May 2026.",
    ],
    stats: ["Co-Founder & President", "80+ members", "CEO of Bombas"],
  },
  {
    year: "2014 — Now",
    role: "Athlete",
    title: "Competitive Ice Hockey",
    desc: "10+ years of competitive ice hockey across local and travel programs.",
    body: [
      "Over a decade of competitive ice hockey across local and travel programs.",
      "Where I learned how to lead — show up early, hold the line, and back your teammates regardless of the score.",
      "The through-line for how I run every club, pitch, and project off the ice.",
    ],
    stats: ["10+ years", "Travel teams", "Team leader"],
  },
];

const MARQUEE_LINES: { words: string[]; cls: string }[] = [
  { words: ["ENTREPRENEUR", "ATHLETE", "LEADER", "FOUNDER", "PRESIDENT"], cls: "" },
  { words: ["MILAN", "·", "SHAH", "·", "PORTFOLIO", "·", "2026"], cls: "solid" },
  { words: ["FBLA", "NHL", "WHARTON", "MARKETING", "FOUNDER"], cls: "accent reverse" },
  { words: ["BUILDING", "·", "REAL", "·", "THINGS", "·", "BEFORE", "·", "GRADUATION"], cls: "slow" },
];

// =====================================================
// COMPONENTS
// =====================================================
function Nav({ active, onJump }: { active: string; onJump: (id: string) => void }) {
  const items = [
    { id: "about", label: "About" },
    { id: "work", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <header className="nav">
      <a
        href="#hero"
        className="nav-brand"
        onClick={(e) => {
          e.preventDefault();
          onJump("hero");
        }}
      >
        <span className="accent">●</span>Milan Shah
      </a>
      <nav className="nav-links">
        {items.map((it) => (
          <a
            key={it.id}
            href={"#" + it.id}
            className={active === it.id ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              onJump(it.id);
            }}
          >
            {it.label}
          </a>
        ))}
        <a className="always" href="mailto:milanshahmd@gmail.com">
          Email
        </a>
      </nav>
    </header>
  );
}

function MarqueeRow({ words, cls }: { words: string[]; cls: string }) {
  const seq = [...words, ...words, ...words, ...words];
  return (
    <div className={"marquee " + cls}>
      <div className="marquee-track">
        {[0, 1].map((rep) => (
          <span key={rep}>
            {seq.map((w, i) => (
              <Fragment key={i}>
                {w}
                <span className="dot" />
              </Fragment>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="marquee-stack">
        {MARQUEE_LINES.map((l, i) => (
          <MarqueeRow key={i} {...l} />
        ))}
      </div>

      <div className="hero-eyebrow">
        <span className="dot" />
        <span>Junior · River Hill High School · Class of 2027</span>
      </div>

      <div className="hero-inner">
        <h1 className="hero-name">
          <span className="row">
            <span style={{ ["--d" as string]: "0.15s" } as React.CSSProperties}>Milan</span>
          </span>
          <span className="row">
            <span style={{ ["--d" as string]: "0.30s" } as React.CSSProperties}>
              Shah<span className="accent">.</span>
            </span>
          </span>
        </h1>

        <div className="hero-meta">
          <p className="hero-tagline">
            <span className="accent">President of three student organizations.</span>
            <br />
            <span className="muted">
              3× Maryland FBLA State Champion.
              <br />
              NHL Youth Marketing Advisor.
              <br />
              Wharton Global Youth Scholar.
            </span>
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="v">
                <span className="accent">3×</span> PRES.
              </div>
              <div className="l">FBLA · CMC · Pickleball</div>
            </div>
            <div className="hero-stat">
              <div className="v">
                <span className="accent-2">3×</span> STATE
              </div>
              <div className="l">FBLA Champion</div>
            </div>
            <div className="hero-stat">
              <div className="v">
                1<span className="accent">/</span>25
              </div>
              <div className="l">NHL Advisor</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-footer">
        <span>Portfolio · 2026</span>
        <span className="scroll-hint">
          <span>Scroll</span> <span className="line" />
        </span>
        <span>Clarksville, MD</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <h2>About</h2>
          <span className="meta">01</span>
        </div>
        <div className="about-grid">
          <div className="about-photo">
            <Image
              src="/milan.png"
              alt="Milan Shah"
              width={520}
              height={520}
              priority
            />
          </div>
          <div>
            <h3 className="about-headline">
              Junior at <span className="italic">River Hill</span> High School —{" "}
              <span className="italic">built to lead</span>.
            </h3>
            <div className="about-text">
              <p>
                I lead three student organizations as <strong>President of FBLA</strong>, the
                <strong> Collaborative Marketing Club</strong>, and the
                <strong> River Hill Pickleball Club</strong> — founding two of them from zero to a
                combined <span className="hl">160+ members</span>.
              </p>
              <p>
                I&apos;m a <strong>3× Maryland FBLA State Champion</strong> in Entrepreneurship, a{" "}
                <strong>Wharton Global Youth Scholar</strong>, and one of
                <span className="hl"> 25 advisors selected from 1,500+ applicants</span> to advise the
                NHL on youth marketing strategy.
              </p>
              <p>
                Off the field, I&apos;ve played competitive ice hockey for over a decade — where I
                learned how to lead a team and show up every day. Currently applying to college for the
                Class of 2031.
              </p>
            </div>
            <div className="skills">
              {SKILLS.map((s) => (
                <span key={s} className="skill">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience({ onOpen }: { onOpen: (idx: number) => void }) {
  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head">
          <h2>Selected experience</h2>
          <span className="meta">02</span>
        </div>
        <div className="exp-list">
          {EXPERIENCE.map((e, i) => (
            <div key={i} className="exp-row" onClick={() => onOpen(i)}>
              <div className="exp-year">{e.year}</div>
              <div className="exp-body">
                <div className="exp-title">
                  <span className="role">{e.role}</span>
                  <span style={{ color: "var(--fg-3)", margin: "0 8px" }}>·</span>
                  {e.title}
                </div>
                <div className="exp-desc">{e.desc}</div>
              </div>
              <div className="exp-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudy({ idx, onClose }: { idx: number | null; onClose: () => void }) {
  const open = idx !== null;
  const e = open ? EXPERIENCE[idx as number] : null;
  useEffect(() => {
    const k = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") onClose();
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [onClose]);
  return (
    <div className={"modal-bg" + (open ? " open" : "")} onClick={onClose}>
      <div className="modal" onClick={(ev) => ev.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        {e && (
          <>
            <h3>{e.title}</h3>
            <div className="modal-meta">
              <span className="accent">{e.role}</span> · {e.year}
            </div>
            <div className="modal-stats">
              {e.stats.map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
            {e.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-head">
          <h2>Contact</h2>
          <span className="meta">03</span>
        </div>
        <p style={{ fontSize: 17, color: "var(--fg)", marginBottom: 28, maxWidth: "52ch" }}>
          If you&apos;re a college admissions officer, recruiter, or want to collaborate — the fastest
          way to reach me is email.
        </p>
        <div className="contact-list">
          <a className="contact-row" href="mailto:milanshahmd@gmail.com">
            <span className="k">Email</span>
            <span className="v">milanshahmd@gmail.com</span>
            <span className="arr">→</span>
          </a>
          <a className="contact-row" href="tel:14437886685">
            <span className="k">Phone</span>
            <span className="v">+1 · 443 · 788 · 6685</span>
            <span className="arr">→</span>
          </a>
          <a
            className="contact-row"
            href="https://linkedin.com/in/milan-shah-08b719304"
            target="_blank"
            rel="noreferrer"
          >
            <span className="k">LinkedIn</span>
            <span className="v">/in/milan-shah</span>
            <span className="arr">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>© 2026 Milan Shah · Clarksville, MD</span>
      <span>
        <span className="accent">●</span> Currently · applying to college
      </span>
    </footer>
  );
}

// =====================================================
// PAGE
// =====================================================
export default function Page() {
  const [active, setActive] = useState("hero");
  const [caseIdx, setCaseIdx] = useState<number | null>(null);

  useEffect(() => {
    const ids = ["hero", "about", "work", "contact"];
    const visible = new Set<string>();
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        });
        for (const id of ids) {
          if (visible.has(id)) {
            setActive(id);
            return;
          }
        }
      },
      { rootMargin: "0px 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const jump = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navH = (document.querySelector(".nav") as HTMLElement | null)?.offsetHeight || 0;
    window.scrollTo({ top: el.offsetTop - navH - 8, behavior: "smooth" });
  }, []);

  return (
    <>
      <Nav active={active} onJump={jump} />
      <main>
        <Hero />
        <About />
        <Experience onOpen={setCaseIdx} />
        <Contact />
      </main>
      <Footer />
      <CaseStudy idx={caseIdx} onClose={() => setCaseIdx(null)} />
    </>
  );
}
