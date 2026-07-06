"use client";

import { useEffect } from "react";
import Image from "next/image";

const EXPERIENCE = [
  {
    year: "2023 · NOW",
    org: "River Hill FBLA",
    role: "Chapter President",
    desc: "Leading the chapter I joined as a freshman with no title.",
    points: [
      "6th in the nation, Organizational Leadership (San Antonio 2026)",
      "9th in the nation, Entrepreneurship (Anaheim 2025)",
      "State champion 3 years straight: 2024, 2025, 2026",
      `Ran the "Pressure Makes Presence" workshop at Nationals for 100+ attendees`,
    ],
  },
  {
    year: "2023 · 2025",
    org: "NHL Power Players",
    role: "Youth Advisory Board",
    desc: "1 of 25 picked from 1,500+ applicants. A 1.7% acceptance rate.",
    points: [
      "Served two terms under the NHL's Chief Marketing Officer",
      "Presented to the league's marketing division at biweekly meetings",
      "Represented the board at All-Star Weekend 2024 and the 4 Nations Face-Off 2025",
    ],
  },
  {
    year: "2025 · NOW",
    org: "GSD Associates",
    role: "Support Specialist",
    desc: "Operations for US medical practices and their offshore teams.",
    points: [
      "Wrote the patient-intake SOP now used by onsite and offshore teams",
      "Built compliance training for a 10+ person offshore team",
      "Cut average response time roughly 30% with escalation protocols",
      "Screened offshore candidates across 3+ medical practice accounts",
    ],
  },
  {
    year: "2025",
    org: "Wharton Global Youth",
    role: "Scholar",
    desc: "Essentials of Entrepreneurship at the Wharton School, UPenn.",
    points: [
      "Co-built a cryotherapy performance-bandage startup for athletes",
      "Led the financial projections, pricing, and unit economics",
      "Pitched the full venture to faculty and peer evaluators",
    ],
  },
  {
    year: "2024 · NOW",
    org: "Collaborative Marketing Club",
    role: "Co-Founder & President",
    desc: "Students running real campaigns for local businesses.",
    points: [
      "Co-founded it, grew it to 80+ members in two years",
      "Connects members with business speakers and live client work",
    ],
  },
  {
    year: "2023 · NOW",
    org: "River Hill Pickleball Club",
    role: "Founder & President",
    desc: "One of Maryland's first public high school pickleball clubs.",
    points: [
      "Grew from launch to 83 members, competitive and general teams",
      "Designed the club's jerseys and branding",
      "Ran a fundraiser for the Howard County Police Foundation",
    ],
  },
  {
    year: "2026 · NOW",
    org: "Blossoms of Hope",
    role: "Volunteer Intern",
    desc: "Fundraising support for a Howard County nonprofit.",
    points: [
      "Designed auction listings for luxury items: golf trips, spa packages, NHL memorabilia",
    ],
  },
  {
    year: "2014 · NOW",
    org: "Competitive Ice Hockey",
    role: "River Hill Varsity",
    desc: "10+ years of AA travel and varsity hockey.",
    points: [
      "Undefeated 12-0 season, first Serio Cup champions in school history",
      "Double Crown: also won the state academic title for highest team GPA in Maryland",
    ],
  },
];

const HONORS = [
  { what: "3× State Champion, Entrepreneurship & Organizational Leadership", who: "Maryland FBLA" },
  { what: "6th in the Nation, Organizational Leadership", who: "FBLA Nationals '26" },
  { what: "9th in the Nation, Entrepreneurship", who: "FBLA Nationals '25" },
  { what: "Youth Advisory Board, 1 of 25 from 1,500+", who: "NHL" },
  { what: "Serio Cup Champion, undefeated season", who: "River Hill Varsity Hockey" },
  { what: "Essentials of Entrepreneurship", who: "Wharton Global Youth" },
];

export default function Page() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });

    let obs: IntersectionObserver | undefined;
    const reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              obs?.unobserve(e.target);
            }
          });
        },
        { rootMargin: "0px 0px -10% 0px" }
      );
      reveals.forEach((el) => obs?.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("in"));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      obs?.disconnect();
    };
  }, []);

  return (
    <>
      <header className="nav" id="nav">
        <div className="nav-inner">
          <a className="nav-brand" href="#top">
            M<span className="amp">·</span>S
          </a>
          <nav className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#honors">Honors</a>
            <a href="#education" className="hide-sm">Education</a>
            <a href="#contact">Contact</a>
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
              <p className="hero-line">
                Entrepreneur<span className="dot">·</span>Leader<span className="dot">·</span>Athlete
              </p>
              <div className="hero-creds caps">
                <span>3× State Champion</span><span className="sep" />
                <span>2× National Top 10</span><span className="sep" />
                <span>NHL Advisory Board</span>
              </div>
              <div className="hero-actions">
                <a className="btn primary" href="mailto:milanshahmd@gmail.com">Get in touch</a>
                <a className="btn" href="https://www.linkedin.com/in/milan-shah389/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
            <div className="hero-photo">
              <Image src="/milan.png" alt="Milan Shah" width={210} height={210} priority />
            </div>
          </div>
        </section>

        <section className="wrap reveal" id="experience">
          <h2 className="section-label"><span className="n">01</span><span className="t caps">Experience</span></h2>
          <div className="exp-list stagger">
            {EXPERIENCE.map((e) => (
              <article className="exp-row" key={e.org}>
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
              </article>
            ))}
          </div>
        </section>

        <section className="wrap reveal" id="honors">
          <h2 className="section-label"><span className="n">02</span><span className="t caps">Honors</span></h2>
          <div className="row-list stagger">
            {HONORS.map((h) => (
              <div className="row-item" key={h.what}>
                <span className="what">{h.what}</span>
                <span className="who">{h.who}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="wrap reveal" id="education">
          <h2 className="section-label"><span className="n">03</span><span className="t caps">Education</span></h2>
          <div className="row-list">
            <div className="row-item">
              <span className="what">
                River Hill High School, Class of 2027
                <span className="edu-note">National Honor Society · Investment Club VP · Varsity Ice Hockey</span>
              </span>
              <span className="who">2023 · 2027</span>
            </div>
            <div className="row-item">
              <span className="what">Glenelg Country School, K–7</span>
              <span className="who">2014 · 2022</span>
            </div>
          </div>
        </section>

        <section className="wrap reveal" id="contact">
          <h2 className="section-label"><span className="n">04</span><span className="t caps">Contact</span></h2>
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
    </>
  );
}
