"use client";

import { useEffect, useState, useCallback } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";

type Exp = {
  slug: string;
  year: string;
  org: string;
  role: string;
  desc: string;
  points: string[];
  row: string;
  rowPos?: string;
  cover: string;
  coverPos?: string;
  detailRole: string;
  lede: string;
  story: string;
  facts: [string, string][];
  highlights: string[];
  gallery: { src: string; pos: string }[];
};

const EXPERIENCE: Exp[] = [
  {
    slug: "coldwell",
    year: "2026 · NOW",
    org: "Coldwell Banker Realty",
    role: "Intern",
    desc: "Associate on the Integrity Plus Network team.",
    points: [
      "Helped close a first property: three offers, listed Friday, closed Monday",
      "Toured clients and realtors through the property",
      "Secured leads and imported them into the team CRM",
    ],
    row: "/assets/row-coldwell.webp",
    cover: "/assets/row-coldwell.webp",
    detailRole: "Sales & Marketing Assistant",
    lede: "Pricing strategy, open houses, and a seat in the room where deals get decided.",
    story:
      "Working with a top-producing team in Clarksville. The week runs on market data: pulling comps, building analyses that set list prices, then meeting the buyers those prices bring through the door.",
    facts: [
      ["Team", "Integrity Plus Network"],
      ["Location", "Clarksville, MD"],
      ["CMAs", "3+ per week"],
      ["Open houses", "2 per week"],
      ["Since", "2026"],
    ],
    highlights: [
      "Produce 3+ Comparative Market Analyses weekly using MLS data, comparable sales, and neighborhood trends to support pricing strategy",
      "Coordinate and staff 2 open houses per week, managing buyer foot traffic and lead capture to drive qualified inquiries",
      "Serve as notetaker in weekly sales strategy meetings with Regional Vice Presidents, documenting action items and decisions",
      "Build listing materials and pricing comparisons for client presentations",
      "Sit in on live transactions and residential market discussions to learn how a deal actually closes",
    ],
    gallery: [
      { src: "/assets/img-coldwell-a.webp", pos: "39.5%" },
      { src: "/assets/img-coldwell-b.webp", pos: "53.0%" },
    ],
  },
  {
    slug: "fbla",
    year: "2023 · NOW",
    org: "River Hill FBLA",
    role: "Chapter President",
    desc: "Leading the chapter I joined as a freshman with no title.",
    points: [
      "6th place internationally, Organizational Leadership · 9th, Entrepreneurship",
      "3× Maryland State Champion: 2024, 2025, 2026",
      "Presented the Pressure Makes Presence workshop at Nationals, 100+ attendees",
    ],
    row: "/assets/row-fbla.webp",
    cover: "/assets/cover-fbla.webp",
    detailRole: "Chapter President · 2026–27",
    lede: "270+ members. An $18,000 budget. Three state titles.",
    story:
      "Joined as a freshman with no title. Now leading River Hill's largest business organization: setting strategic direction, managing the budget, and competing at the national level every summer.",
    facts: [
      ["Members", "270+"],
      ["Budget", "$18,000+"],
      ["State titles", "2024 · 2025 · 2026"],
      ["National finals", "2× finalist"],
      ["Best finish", "6th nationally"],
    ],
    highlights: [
      "Lead a 270+ member chapter as President, overseeing an $18,000+ annual budget and setting strategic direction",
      "Back-to-back National Finalist: 6th nationally in Organizational Leadership (San Antonio, 2026), 9th in Entrepreneurship (Anaheim, 2025)",
      "3× Maryland State Champion in Entrepreneurship, 1st place 2024 through 2026",
      "1st at Howard County Regionals in Entrepreneurship (2023, 2024, 2025) and Organizational Leadership (2026)",
      "3× National Qualifier: Orlando 2024, Anaheim 2025, San Antonio 2026",
      "Selected as a National Workshop Presenter in 2026, a first in school history, delivering Pressure Makes Presence to 120 attendees over two sessions",
    ],
    gallery: [
      { src: "/assets/img-fbla-a.webp", pos: "50%" },
      { src: "/assets/img-fbla-b.webp", pos: "50%" },
    ],
  },
  {
    slug: "nhl",
    year: "2023 · 2025",
    org: "NHL Power Players",
    role: "Youth Advisory Board",
    desc: "1 of 25 picked from 1,500+ applicants.",
    points: [
      "Worked directly with NHL CMO Heidi Browning on growing the sport's younger fan base",
      "Represented the board at All-Star Weekend 2024 and the 4 Nations Face-Off 2025",
      "Toured NHL Headquarters to close out two terms on the board",
    ],
    row: "/assets/row-nhl.webp",
    rowPos: "50% 35.0%",
    cover: "/assets/cover-nhl.webp",
    detailRole: "Board Member · Youth Strategy & Marketing",
    lede: "1 of 25 selected from 1,500+ global applicants.",
    story:
      "Two years advising National Hockey League leadership on how the sport reaches its next generation. Research, campaign recommendations, and the executives who act on them.",
    facts: [
      ["Selection", "1 of 25 from 1,500+"],
      ["Term", "Sept 2023 – June 2025"],
      ["Cadence", "Biweekly to Special Projects Manager"],
      ["Bettman briefings", "3"],
      ["Travel", "Canada + U.S. cities"],
    ],
    highlights: [
      "Selected as 1 of 25 board members from 1,500+ global applicants to advise NHL leadership on youth engagement and marketing strategy",
      "Presented original consumer research and campaign recommendations to the NHL's Special Projects Manager on a biweekly cadence",
      "Briefed Commissioner Gary Bettman on three occasions as a youth representative on league-wide marketing initiatives",
      "Traveled to Canada and multiple U.S. cities to collaborate with NHL executives on marketing activations",
      "Represented the board at All-Star Weekend 2024 and the 4 Nations Face-Off 2025",
    ],
    gallery: [
      { src: "/assets/img-nhl-a.webp", pos: "50%" },
      { src: "/assets/img-nhl-b.webp", pos: "50%" },
    ],
  },
  {
    slug: "pickleball",
    year: "2023 · NOW",
    org: "River Hill Pickleball Club",
    role: "Founder & President",
    desc: "One of Maryland's first high school pickleball clubs. 83 members.",
    points: [
      "Raised $1,070 for the Howard County Police Foundation at an 80-person fundraiser",
      "Built competitive and general teams, weekly play for all skill levels",
      "Designed the club's jerseys and branding",
    ],
    row: "/assets/row-pickleball.webp",
    cover: "/assets/cover-pickleball.webp",
    detailRole: "Founder & President",
    lede: "Maryland's first public high school pickleball club.",
    story:
      "Started with a paddle and a sign-up sheet. Now 83 members, a full brand identity, inter-school competition, and a fundraiser that gave back to the county.",
    facts: [
      ["Members", "0 → 83"],
      ["Founded", "Sept 2023"],
      ["First in MD", "Public school club"],
      ["Raised", "$1,070"],
    ],
    highlights: [
      "Founded Maryland's first interscholastic public school pickleball club, growing membership from 0 to 83 students",
      "Organize inter-school competitions and weekly play across skill levels",
      "Built the full club brand identity: logo, uniforms, and social presence",
      "Organized a fundraiser that raised $1,070 for the Howard County Police Foundation",
    ],
    gallery: [
      { src: "/assets/img-pickleball-a.webp", pos: "50%" },
      { src: "/assets/img-pickleball-b.webp", pos: "50%" },
    ],
  },
  {
    slug: "hockey",
    year: "2014 · NOW",
    org: "Competitive Ice Hockey",
    role: "River Hill Varsity",
    desc: "Where the discipline comes from.",
    points: [
      "Undefeated 12-0 season, Serio Cup champions",
      "State academic title, highest team GPA in Maryland",
      "4-year varsity player, 10+ years of AA travel hockey",
    ],
    row: "/assets/row-hockey.webp",
    cover: "/assets/cover-hockey.webp",
    coverPos: "47.2%",
    detailRole: "AA Travel & River Hill Varsity",
    lede: "Ten years of early mornings. Where the discipline comes from.",
    story:
      "AA travel hockey since 2015, plus varsity at River Hill. The 2025–26 team went undefeated and won the Serio Cup for the first time in school history.",
    facts: [
      ["Level", "AA travel + varsity"],
      ["Since", "Sept 2015"],
      ["Season", "Undefeated, 2025–26"],
      ["Title", "Serio Cup, first in school history"],
    ],
    highlights: [
      "Competed at the AA travel level for 10+ years",
      "Member of the undefeated varsity team that won the Serio Cup for the first time in school history (2025–26)",
      "State academic title: highest team GPA in Maryland",
    ],
    gallery: [
      { src: "/assets/img-hockey-a.webp", pos: "43.5%" },
      { src: "/assets/img-hockey-b.webp", pos: "57.4%" },
    ],
  },
  {
    slug: "wharton",
    year: "2025",
    org: "Wharton Global Youth",
    role: "Scholar",
    desc: "Essentials of Entrepreneurship, UPenn.",
    points: [
      "Co-built a cryotherapy performance-bandage venture for athletes",
      "Led the financial modeling, market sizing, and pricing",
      "Delivered the final pitch to faculty and peer evaluators",
    ],
    row: "/assets/row-wharton.webp",
    cover: "/assets/cover-wharton.webp",
    detailRole: "Essentials of Entrepreneurship",
    lede: "A summer at Penn studying what makes a venture work, then building one.",
    story:
      "Coursework in entrepreneurship at the Wharton School, capped by a team venture: a cryotherapy recovery product for athletes, taken from concept to pitch.",
    facts: [
      ["Program", "Essentials of Entrepreneurship"],
      ["Campus", "University of Pennsylvania"],
      ["Term", "Summer 2025"],
      ["Venture", "Cryotherapy performance bandage"],
    ],
    highlights: [
      "Co-built a cryotherapy performance-bandage venture for athletes",
      "Led the financial modeling, market sizing, and pricing",
      "Delivered the final pitch to faculty and peer evaluators",
    ],
    gallery: [
      { src: "/assets/img-wharton-a.webp", pos: "56.6%" },
      { src: "/assets/img-wharton-b.webp", pos: "44.2%" },
    ],
  },
  {
    slug: "marketing",
    year: "2024 · NOW",
    org: "Collaborative Marketing Club",
    role: "Co-Founder & President",
    desc: "Real campaigns for local businesses. 72+ members.",
    points: [
      "Co-founded the club and grew it to 72+ members",
      "Partners members with real small businesses on marketing campaigns",
      "Hosted monthly guest speakers, including the CEO of Bombas",
    ],
    row: "/assets/row-marketing.webp",
    cover: "/assets/cover-marketing.webp",
    detailRole: "Co-Founder & President",
    lede: "72+ members running live campaigns for real small businesses.",
    story:
      "Built on one idea: students learn marketing faster by doing it for real clients. Members are paired with local business owners, and the speakers who visit have run the playbook at scale.",
    facts: [
      ["Members", "72+"],
      ["Founded", "Sept 2024"],
      ["Clients", "Local small businesses"],
      ["Speaker", "CEO of Bombas"],
    ],
    highlights: [
      "Co-founded a 72+ member club connecting students with real small business clients to execute live marketing campaigns",
      "Manage club budget, financial planning, and fund allocation; partner with local businesses to deliver measurable marketing value",
      "Hosted the CEO of Bombas for a case study analysis competition and Q&A session",
    ],
    gallery: [
      { src: "/assets/img-marketing-a.webp", pos: "50%" },
      { src: "/assets/img-marketing-b.webp", pos: "50%" },
    ],
  },
  {
    slug: "blossoms",
    year: "2026 · NOW",
    org: "Blossoms of Hope",
    role: "Volunteer Intern",
    desc: "Fundraising for a Howard County nonprofit.",
    points: [
      "Secured 16 donations of $100+ by cold-emailing and calling 250+ businesses",
      "Marketed silent auction items with designed listings",
      "Spearheaded fundraisers for the organization",
    ],
    row: "/assets/row-blossoms.webp",
    rowPos: "50% 12.6%",
    cover: "/assets/row-blossoms.webp",
    detailRole: "Volunteer · Development",
    lede: "25+ donations of $100 or more, secured one call at a time.",
    story:
      "Development work for a Howard County nonprofit. Cold outreach, donor follow-up, and design work that turned silent auction items into contributions.",
    facts: [
      ["Org", "Howard County nonprofit"],
      ["Donations", "25+ at $100+"],
      ["Also", "Silent auction brochures"],
    ],
    highlights: [
      "Secured 25+ individual donations valued at $100+ each for the nonprofit's fundraising campaign",
      "Designed brochures and listings for silent auction items",
      "Helped raise $30,000 across two Tyanna Foundation breast cancer events (April 2023, October 2024)",
      "Volunteer work also includes MD Hindu Mandir fundraisers, Freetown Farm greenhouse prep, and a local food bank",
    ],
    gallery: [{ src: "/assets/img-blossoms-a.webp", pos: "50%" }],
  },
];

const pad = (n: number) => (n < 10 ? "0" : "") + n;

function Detail({ index, onClose }: { index: number; onClose: () => void }) {
  const e = EXPERIENCE[index];
  const prev = EXPERIENCE[(index + EXPERIENCE.length - 1) % EXPERIENCE.length];
  const next = EXPERIENCE[(index + 1) % EXPERIENCE.length];
  return (
    <div className="wrap">
      <div className="ed-top">
        <button className="ed-back" type="button" onClick={onClose}>← Back</button>
        <span className="ed-count caps">{pad(index + 1)} / {pad(EXPERIENCE.length)}</span>
      </div>
      <header className="ed-head">
        <p className="ed-year caps">{e.year}</p>
        <h1 className="display ed-org">{e.org}<span className="accent">.</span></h1>
        <p className="ed-role caps">{e.detailRole}</p>
      </header>
      <div className="ed-hero">
        <img src={e.cover} alt="" style={{ objectPosition: "50% " + (e.coverPos || "50%") }} />
      </div>
      <div className="ed-body">
        <div className="ed-story">
          <p className="ed-lede">{e.lede}</p>
          <p>{e.story}</p>
        </div>
        <dl className="ed-facts">
          {e.facts.map((f) => (
            <div key={f[0]}><dt>{f[0]}</dt><dd>{f[1]}</dd></div>
          ))}
        </dl>
      </div>
      <div className="ed-sec">
        <h2 className="caps ed-label">Highlights</h2>
        <ul className="ed-highlights">
          {e.highlights.map((p) => <li key={p}>{p}</li>)}
        </ul>
      </div>
      {e.gallery.length > 0 && (
        <div className="ed-sec">
          <h2 className="caps ed-label">Gallery</h2>
          <div className={"ed-gallery" + (e.gallery.length === 1 ? " one" : "")}>
            {e.gallery.map((g) => (
              <div className="ed-shot" key={g.src}>
                <img src={g.src} alt="" style={{ objectPosition: "50% " + g.pos }} />
              </div>
            ))}
          </div>
        </div>
      )}
      <nav className="ed-nav">
        <a href={"#exp/" + prev.slug}><span className="k">← Previous</span><span className="v">{prev.org}</span></a>
        <a className="next" href={"#exp/" + next.slug}><span className="k">Next →</span><span className="v">{next.org}</span></a>
      </nav>
    </div>
  );
}

export default function Page() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const index = openSlug ? EXPERIENCE.findIndex((e) => e.slug === openSlug) : -1;

  const syncHash = useCallback(() => {
    const m = /^#exp\/([\w-]+)$/.exec(window.location.hash);
    const slug = m && EXPERIENCE.some((e) => e.slug === m[1]) ? m[1] : null;
    setOpenSlug(slug);
  }, []);

  useEffect(() => {
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [syncHash]);

  useEffect(() => {
    document.body.classList.toggle("exp-open", index >= 0);
    const overlay = document.querySelector<HTMLElement>(".exp-detail");
    if (overlay && index >= 0) { overlay.scrollTop = 0; window.scrollTo(0, 0); }
    if (index >= 0) {
      const onKey = (ev: KeyboardEvent) => {
        if (ev.key === "Escape") window.location.hash = "#experience";
        else if (ev.key === "ArrowRight") window.location.hash = "exp/" + EXPERIENCE[(index + 1) % EXPERIENCE.length].slug;
        else if (ev.key === "ArrowLeft") window.location.hash = "exp/" + EXPERIENCE[(index + EXPERIENCE.length - 1) % EXPERIENCE.length].slug;
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
  }, [index]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const prog = document.getElementById("progress");
    const heroGrid = document.querySelector<HTMLElement>(".hero-grid");
    const nav = document.getElementById("nav");
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (prog) prog.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
      if (heroGrid && !reduced && h.scrollTop < h.clientHeight) {
        heroGrid.style.transform = "translateY(" + h.scrollTop * 0.18 + "px)";
        heroGrid.style.opacity = String(Math.max(0, 1 - h.scrollTop / (h.clientHeight * 0.85)));
      }
      nav?.classList.toggle("scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const dot = document.getElementById("cur-dot");
    const ring = document.getElementById("cur-ring");
    let raf = 0;
    let onMove: ((e: MouseEvent) => void) | undefined;
    let onOver: ((e: MouseEvent) => void) | undefined;
    if (dot && ring && window.matchMedia("(hover:hover) and (pointer:fine)").matches) {
      let rx = -100, ry = -100, tx = -100, ty = -100;
      onMove = (ev) => { tx = ev.clientX; ty = ev.clientY; dot.style.left = tx + "px"; dot.style.top = ty + "px"; };
      document.addEventListener("mousemove", onMove);
      const loop = () => {
        rx += (tx - rx) * 0.16; ry += (ty - ry) * 0.16;
        ring.style.left = rx + "px"; ring.style.top = ry + "px";
        raf = requestAnimationFrame(loop);
      };
      loop();
      onOver = (ev) => {
        const t = ev.target as HTMLElement | null;
        document.body.classList.toggle("cur-hover", !!(t && t.closest("a, button, .exp-row")));
      };
      document.addEventListener("mouseover", onOver);
    } else { dot?.remove(); ring?.remove(); }

    const intro = document.getElementById("intro");
    let t1 = 0, t2 = 0;
    if (sessionStorage.getItem("ms-intro-seen")) document.body.classList.add("no-intro");
    else if (intro) {
      sessionStorage.setItem("ms-intro-seen", "1");
      t1 = window.setTimeout(() => intro.classList.add("done"), 1300);
      t2 = window.setTimeout(() => intro.remove(), 2400);
    }

    const onClick = (ev: MouseEvent) => {
      const b = document.createElement("span");
      b.className = "click-burst";
      b.style.left = ev.clientX + "px";
      b.style.top = ev.clientY + "px";
      document.body.appendChild(b);
      setTimeout(() => b.remove(), 600);
    };
    document.addEventListener("click", onClick);

    const magnets = Array.from(document.querySelectorAll<HTMLElement>(".magnetic"));
    const magMove = (el: HTMLElement) => (ev: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.transform = "translate(" + (ev.clientX - r.left - r.width / 2) * 0.25 + "px," + (ev.clientY - r.top - r.height / 2) * 0.35 + "px)";
    };
    const magLeave = (el: HTMLElement) => () => { el.style.transform = ""; };
    const magHandlers = magnets.map((el) => {
      const mv = magMove(el), ml = magLeave(el);
      el.addEventListener("mousemove", mv);
      el.addEventListener("mouseleave", ml);
      return { el, mv, ml };
    });

    let obs: IntersectionObserver | undefined;
    const reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      obs = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) { en.target.classList.add("in"); obs?.unobserve(en.target); }
        });
      }, { rootMargin: "0px 0px -10% 0px" });
      reveals.forEach((el) => obs?.observe(el));
    } else reveals.forEach((el) => el.classList.add("in"));

    let spy: IntersectionObserver | undefined;
    const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-links a[href^='#']");
    if ("IntersectionObserver" in window) {
      spy = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      ["about", "experience", "education", "contact"].forEach((id) => {
        const s = document.getElementById(id);
        if (s) spy?.observe(s);
      });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (onMove) document.removeEventListener("mousemove", onMove);
      if (onOver) document.removeEventListener("mouseover", onOver);
      document.removeEventListener("click", onClick);
      magHandlers.forEach(({ el, mv, ml }) => { el.removeEventListener("mousemove", mv); el.removeEventListener("mouseleave", ml); });
      cancelAnimationFrame(raf);
      clearTimeout(t1); clearTimeout(t2);
      obs?.disconnect(); spy?.disconnect();
    };
  }, []);

  const goSection = (ev: ReactMouseEvent<HTMLAnchorElement>, id: string) => {
    ev.preventDefault();
    const t = document.getElementById(id);
    if (!t) return;
    window.scrollTo({ top: t.getBoundingClientRect().top + window.pageYOffset - 70, behavior: "smooth" });
  };

  return (
    <>
      <div id="intro"><div className="mono"><span>M</span><span className="amp">·</span><span>S</span></div><div className="bar" /></div>
      <div id="progress" />
      <div id="grain" />
      <div id="cur-ring" /><div id="cur-dot" />

      <header className="nav" id="nav">
        <div className="nav-inner">
          <a className="nav-brand" href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>M<span className="amp">·</span>S</a>
          <nav className="nav-links">
            <a href="#about" onClick={(e) => goSection(e, "about")}>About</a>
            <a href="#experience" onClick={(e) => goSection(e, "experience")}>Experience</a>
            <a href="#education" className="hide-sm" onClick={(e) => goSection(e, "education")}>Education</a>
            <a href="#contact" onClick={(e) => goSection(e, "contact")}>Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap" id="hero">
          <div className="hero-grid">
            <div>
              <p className="hero-eyebrow caps">Clarksville, Maryland</p>
              <h1 className="display">
                <span className="line"><span className="w">Milan</span></span>
                <span className="line"><span className="w">Shah<span className="accent">.</span></span></span>
              </h1>
              <p className="hero-line">Senior in high school.</p>
              <div className="hero-actions">
                <a className="btn primary magnetic" href="mailto:milanshahmd@gmail.com">Get in touch</a>
                <a className="btn magnetic" href="https://www.linkedin.com/in/milan-shah389/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
            <div className="hero-photo">
              <img src="/assets/milan-milan.png" alt="Milan Shah" />
            </div>
          </div>
        </section>

        <section className="wrap reveal" id="about">
          <h2 className="section-label"><span className="t">About</span></h2>
          <div className="about-split stagger">
            <dl className="about-meta">
              <div><dt>School</dt><dd>River Hill High School</dd></div>
              <div><dt>Based</dt><dd>Clarksville, Maryland</dd></div>
              <div><dt>Focus</dt><dd>Sports business, real estate, marketing</dd></div>
            </dl>
          </div>
        </section>

        <section className="wrap reveal" id="experience">
          <h2 className="section-label"><span className="t">Experience</span></h2>
          <div className="exp-list stagger">
            {EXPERIENCE.map((e) => (
              <article
                className="exp-row"
                data-exp={e.slug}
                key={e.slug}
                role="link"
                tabIndex={0}
                onClick={() => { window.location.hash = "exp/" + e.slug; }}
                onKeyDown={(ev) => { if (ev.key === "Enter") window.location.hash = "exp/" + e.slug; }}
              >
                <div className="exp-year">{e.year}</div>
                <div>
                  <div className="exp-head">
                    <h3 className="exp-org">{e.org}</h3>
                    <span className="exp-role">{e.role}</span>
                  </div>
                  <p className="exp-desc">{e.desc}</p>
                  <ul className="exp-points">
                    {e.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
                <div className="exp-img">
                  <img src={e.row} alt={e.org} loading="lazy" style={{ objectPosition: e.rowPos || "50% 50%" }} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="wrap reveal" id="education">
          <h2 className="section-label"><span className="t">Education</span></h2>
          <div className="row-list">
            <div className="row-item">
              <span className="what">River Hill High School, Class of 2027<span className="edu-note">National Honor Society · Investment Club VP · Varsity Ice Hockey</span></span>
              <span className="who">2023 · 2027</span>
            </div>
            <div className="row-item">
              <span className="what">Glenelg Country School, K–7</span>
              <span className="who">2014 · 2022</span>
            </div>
          </div>
        </section>

        <section className="wrap reveal" id="contact">
          <h2 className="section-label"><span className="t">Contact</span></h2>
          <div className="row-list">
            <a className="row-item contact-item" href="mailto:milanshahmd@gmail.com">
              <span className="contact-k">Email</span>
              <span className="what">milanshahmd@gmail.com</span>
              <span className="arr">→</span>
            </a>
            <a className="row-item contact-item" href="tel:14437886685">
              <span className="contact-k">Phone</span>
              <span className="what">+1 (443) 788-6685</span>
              <span className="arr">→</span>
            </a>
            <a className="row-item contact-item" href="https://www.linkedin.com/in/milan-shah389/" target="_blank" rel="noreferrer">
              <span className="contact-k">LinkedIn</span>
              <span className="what">/in/milan-shah389</span>
              <span className="arr">→</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <span>© 2026 MILAN SHAH</span>
          <span>CLARKSVILLE, MD</span>
        </div>
      </footer>

      <div className={"exp-detail" + (index >= 0 ? " show" : "")}>
        {index >= 0 && <Detail key={EXPERIENCE[index].slug} index={index} onClose={() => { window.location.hash = "#experience"; }} />}
      </div>
    </>
  );
}
