"use client";

import { useEffect, useState, useCallback } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";

type Exp = {
  slug: string;
  year: string;
  org: string;
  role: string;
  desc: string;
  link?: { href: string; label: string };
  points: string[];
  row: string;
  rowPos?: string;
  cover: string;
  coverPos?: string;
  coverCaption?: string;
  detailRole: string;
  lede: string;
  story: string;
  facts: [string, string][];
  highlights: string[];
  gallery: { src: string; pos: string; caption?: string; fit?: boolean }[];
  auction?: { title: string; lead?: { src: string; caption: string }[]; items: { src: string; no: number; name: string; from: string; value: number }[] };
};

const EXPERIENCE: Exp[] = [
  {
    slug: "coldwell",
    year: "2026 · NOW",
    org: "Coldwell Banker Realty",
    role: "Intern",
    desc: "Associate on the Integrity Plus Network team.",
    points: [
      "Host 2 open houses every weekend, guiding buyers and agents through listings",
      "Produce 3+ Comparative Market Analyses weekly to guide pricing strategy",
      "Secured and managed 56+ leads, logging each into the team CRM and MLS",
    ],
    row: "/assets/row-coldwell.webp",
    cover: "/assets/img-coldwell.png",
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
      { src: "/assets/img-coldwell-a.webp", pos: "13.4%", caption: "Sitting in on Greg Goldman's RVP meeting. Key themes: bringing lenders in the day a buyer goes under contract, tighter condo financing reviews, and pulling HOA documents before listing to catch reserve shortfalls and special assessments early." },
      { src: "/assets/img-coldwell-b.webp", pos: "60.6%", caption: "Celebrating the first closing I helped on, with Coldwell Banker's commemorative closed key." },
    ],
  },
  {
    slug: "fbla",
    year: "2023 · NOW",
    org: "River Hill FBLA",
    role: "Chapter President",
    desc: "Chapter President of 284 members, one of the largest FBLA chapters in the region.",
    points: [
      "6th place nationally, Organizational Leadership (2026) · 9th, Entrepreneurship (2025)",
      "3× Maryland State Champion: 2024, 2025, 2026",
      "Presented the Pressure Makes Presence workshop at Nationals, 120 attendees",
    ],
    row: "/assets/row-fbla.webp",
    cover: "/assets/cover-fbla.webp",
    coverCaption: "6th Place, Organizational Leadership, FBLA Nationals (2026).",
    detailRole: "Chapter President · 2026–27",
    lede: "284 members. A $15,116 budget. Three state titles.",
    story:
      "Leading one of the largest FBLA chapters in the region and the largest organization at River Hill High School: setting strategic direction, leading a team of 40+ officers, driving the chapter's Program of Work, and competing at the national level every summer.",
    facts: [
      ["Members", "284"],
      ["Budget", "$15,116"],
      ["State titles", "2024 · 2025 · 2026"],
      ["National finals", "2× finalist"],
      ["Best finish", "6th nationally"],
    ],
    highlights: [
      "Lead a 284 member chapter as President, overseeing a $15,116 annual budget and setting strategic direction",
      "Back-to-back National Finalist: 6th nationally in Organizational Leadership (San Antonio, 2026), 9th in Entrepreneurship (Anaheim, 2025)",
      "3× Maryland State Champion in Entrepreneurship, 1st place 2024 through 2026",
      "1st at Howard County Regionals in Entrepreneurship (2023, 2024, 2025) and Organizational Leadership (2026)",
      "3× National Qualifier: Orlando 2024, Anaheim 2025, San Antonio 2026",
      "Selected as a National Workshop Presenter in 2026, a first in school history, delivering Pressure Makes Presence to 120 attendees over two sessions",
    ],
    gallery: [
      { src: "/assets/img-fbla-a.webp", pos: "50%", caption: "Tatiana Spooner, Sua Cho, and I presenting Pressure Makes Presence, the first national workshop in our school's history. Two sessions, 120 attendees." },
      { src: "/assets/img-fbla-b.webp", pos: "50%", caption: "9th Place, Entrepreneurship, FBLA Nationals (2025)." },
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
      "Presented biweekly marketing strategies for teen fan growth to the cohort and rotating NHL executives",
    ],
    row: "/assets/row-nhl.webp",
    rowPos: "50% 35.0%",
    cover: "/assets/cover-nhl.webp",
    coverCaption: "Exclusive official tour of NHL headquarters in New York.",
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
      { src: "/assets/img-nhl-a.webp", pos: "50%", caption: "2024 NHL All-Star Weekend in Toronto with the full Power Players team. Milan depicted on far right." },
      { src: "/assets/img-nhl-b.webp", pos: "50%", caption: "2025 4 Nations Face-Off in Montreal with the full Power Players team. Milan depicted on far right." },
    ],
  },
  {
    slug: "pickleball",
    link: { href: "https://riverhillpickleball.com", label: "riverhillpickleball.com" },
    year: "2023 · NOW",
    org: "River Hill Pickleball Club",
    role: "Founder & President",
    desc: "One of Maryland's first high school pickleball clubs. 104 members.",
    points: [
      "Raised $1,070 for the Howard County Police Foundation at an 83-person fundraiser",
      "Run 2 sessions weekly: an open meeting for general members and a match for the competitive team",
      "Designed the club's jerseys and branding",
    ],
    row: "/assets/row-pickleball.webp",
    cover: "/assets/cover-pickleball.webp",
    coverCaption: "$1,070 raised for the Howard County Police Foundation, with 83 people in attendance.",
    detailRole: "Founder & President",
    lede: "Maryland's first public high school pickleball club.",
    story:
      "Started with a paddle and a sign-up sheet. Now 104 members, a full brand identity, inter-school competition, and a fundraiser that gave back to the county.",
    facts: [
      ["Members", "0 → 104"],
      ["Founded", "Sept 2023"],
      ["First in MD", "Public school club"],
      ["Raised", "$1,070"],
    ],
    highlights: [
      "Founded Maryland's first interscholastic public school pickleball club, growing membership from 0 to 104 students",
      "Organize inter-school competitions and weekly play across skill levels",
      "Built the full club brand identity: logo, uniforms, and social presence",
      "Organized a fundraiser that raised $1,070 for the Howard County Police Foundation",
    ],
    gallery: [
      { src: "/assets/img-pickleball-a-v2.webp", pos: "50%", fit: true, caption: "General member meeting. Milan depicted in middle." },
      { src: "/assets/img-pickleball-b-v2.webp", pos: "50%", fit: true, caption: "Official competitive match with Varsity Team against Mount Saint Joseph. Milan depicted 5th from the left on the bottom row." },
    ],
  },
  {
    slug: "blossoms",
    year: "2023 · NOW",
    org: "Blossoms of Hope / Mercy Events",
    role: "Intern",
    desc: "Fundraising for a Howard County nonprofit.",
    points: [
      "Secured 17 silent auction items worth $7,068 for Beer, Bourbon & Blues 2026",
      "Cold-emailed and called 300 businesses over three months",
      "Raised $3,100 in donated items across the 2023 and 2024 Bramazing events, with proceeds benefiting Mercy Medical Center. 231 total attendees.",
    ],
    row: "/assets/row-blossoms-v2.webp",
    rowPos: "40% 22%",
    cover: "/assets/img-blossoms.png",
    coverCaption: "Secured official NHL memorabilia for the 2024 Bramazing event, including an Ovechkin-signed puck.",
    detailRole: "Intern · Development",
    lede: "I turn cold calls into auction tables.",
    story:
      "I handle donor outreach for fundraising events. I find local businesses, pitch them on giving, follow up until it's a yes, then turn each donation into an auction lot people want to bid on.",
    facts: [
      ["Orgs", "Blossoms of Hope · Mercy Medical Center"],
      ["Events", "Beer, Bourbon & Blues 2026 · Bramazing 2023, 2024"],
      ["Raised", "$7,068 in auction items · $3,100 in donations"],
      ["Outreach", "300+ businesses"],
    ],
    highlights: [
      "Secured 17 high-value silent auction items for Beer, Bourbon & Blues 2026, worth $7,068 combined",
      "Cold-emailed and called 300 businesses over three months",
      "Designed listings for silent auction items",
      "Raised $3,100 in donated items across the 2023 and 2024 Bramazing events, with proceeds benefiting Mercy Medical Center. 231 total attendees.",
      "Set up the venue and created a slideshow of event photos",
      "Volunteer work also includes MD Hindu Mandir fundraisers, Freetown Farm greenhouse prep, and a local food bank",
    ],
    gallery: [
      { src: "/assets/img-blossoms-a.png", pos: "55%", caption: "Secured an official L'Occitane en Provence sponsored gift basket for the 2024 Bramazing event." },
      { src: "/assets/img-blossoms-b.png", pos: "50%", caption: "Event setup. 231 attendees across two events." },
    ],
    auction: {
      title: "Blossoms of Hope · Silent auction items I secured",
      lead: [
        { src: "/assets/img-bbb-event.webp", caption: "Event with over 300 attendees at Beer, Bourbon & Blues." },
        { src: "/assets/img-bbb-milan.webp", caption: "Milan on the right with a colleague, the Auction Chair at Blossoms of Hope." },
      ],
      items: [
        { src: "/assets/img-bbb-12.webp", no: 28, name: "Reckless NYE and Resolution", from: "Frisco Tap House / Reckless Shepherd VIP NYE tickets, Orangetheory Fitness Columbia, and Blanton's", value: 909 },
        { src: "/assets/img-bbb-14.webp", no: 34, name: "Well Remembered", from: "Blossoms of Hope Cherry Blossom Tree Honor and Everett Designers of Fine Jewelry", value: 882 },
        { src: "/assets/img-bbb-15.webp", no: 35, name: "Celebrate Your Home", from: "The Vertical Connection / Carpet One and Gruet champagne", value: 582 },
        { src: "/assets/img-bbb-17.webp", no: 49, name: "Casual Luxe", from: "Konstantine's Greek Taverna, Coach, and Fownes", value: 532 },
        { src: "/assets/img-bbb-08.webp", no: 21, name: "Get Your Glow On", from: "Skin Therapeutics and Sapphire Salon", value: 524 },
        { src: "/assets/img-bbb-13.webp", no: 32, name: "Hamilton Night Out", from: "Hamilton at the Hippodrome Theatre and Iron Bridge Wine Bar", value: 461 },
        { src: "/assets/img-bbb-07.webp", no: 20, name: "Sagamore Spirits Tour", from: "Sagamore Spirit tour and tasting for 6", value: 432 },
        { src: "/assets/img-bbb-09.webp", no: 24, name: "Day at the Races", from: "The Maryland Jockey Club at Laurel Park, with a race named in your honor", value: 350 },
        { src: "/assets/img-bbb-16.webp", no: 18, name: "All the World's a Stage", from: "Olney Theatre Center and Konstantine's Greek Taverna", value: 343 },
        { src: "/assets/img-bbb-10.webp", no: 25, name: "Burger for a Year", from: "The White Oak Tavern, plus Stella Artois", value: 291 },
        { src: "/assets/img-bbb-02.webp", no: 5, name: "Luxurious Sleepover", from: "Bra-La-La and Bath & Body Works", value: 280 },
        { src: "/assets/img-bbb-04.webp", no: 10, name: "Treat Your Pet", from: "Countryside Veterinary Clinic, Dogtopia, and Fabbioli Cellars", value: 274 },
        { src: "/assets/img-bbb-05.webp", no: 16, name: "HoCo History", from: "Howard County Historical Society family membership", value: 274 },
        { src: "/assets/img-bbb-06.webp", no: 19, name: "Soccer Camp", from: "Soccer Association of Columbia training camp and FIFA World Cup ball", value: 240 },
        { src: "/assets/img-bbb-03.webp", no: 4, name: "Basignani Wine Tasting", from: "Basignani Winery tasting for 4, plus 3 bottles of wine", value: 237 },
        { src: "/assets/img-bbb-01.webp", no: 2, name: "A Different Perspective", from: "American Visionary Art Museum and Limoncello Italian Restaurant & Wine Bar", value: 235 },
        { src: "/assets/img-bbb-11.webp", no: 27, name: "I Spy!", from: "International Spy Museum and The Cheesecake Factory", value: 222 },
      ],
    },
  },
  {
    slug: "hockey",
    year: "2014 · NOW",
    org: "Competitive Ice Hockey",
    role: "River Hill Varsity",
    desc: "A decade of travel hockey. Four years on varsity.",
    points: [
      "Undefeated 12-0 season, Serio Cup champions",
      "State academic title, highest team GPA in Maryland",
      "4-year varsity player, 10+ years of AA travel hockey",
    ],
    row: "/assets/row-hockey.webp",
    cover: "/assets/cover-hockey.webp",
    coverPos: "36.4%",
    detailRole: "AA Travel & River Hill Varsity",
    lede: "A decade of travel hockey. Four years on varsity.",
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
      { src: "/assets/img-hockey-a.webp", pos: "26.2%", caption: "Highest team GPA of any Maryland public high school ice hockey program." },
      { src: "/assets/img-hockey-b.webp", pos: "75.6%", caption: "2nd Place, AA Crabtown Hockey Tournament at Gardens Ice House (2025)." },
    ],
  },
  {
    slug: "wharton",
    year: "2025",
    org: "Wharton Global Youth",
    role: "Scholar",
    desc: "A two-week summer program at Penn, building the product Recovra.",
    points: [
      "Co-built a cryotherapy performance-bandage venture for athletes",
      "Led the financial modeling, market sizing, and pricing",
      "Delivered the final pitch to faculty and peer evaluators",
    ],
    row: "/assets/row-wharton.webp",
    cover: "/assets/cover-wharton.webp",
    coverCaption: "Official lecture hall and name plate.",
    detailRole: "Essentials of Entrepreneurship",
    lede: "A two-week summer program at Penn, building the product Recovra.",
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
      { src: "/assets/img-wharton-a.webp", pos: "72.9%", caption: "Official logo for Recovra, a cryotherapeutic bandage." },
      { src: "/assets/img-wharton-b.webp", pos: "30.6%", caption: "Huntsman Hall, Wharton's flagship building, where lectures took place." },
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
      "Partnered members with 14 local businesses on live marketing campaigns",
      "Hosted 9 guest speakers through a monthly speaker series",
    ],
    row: "/assets/row-marketing.webp",
    cover: "/assets/cover-marketing.webp",
    coverCaption: "Milan depicted on far left.",
    detailRole: "Co-Founder & President",
    lede: "72+ members running live campaigns for real small businesses.",
    story:
      "Built on one idea: students learn marketing faster by doing it for real clients. Members are paired with local business owners, and the speakers who visit have run the playbook at scale.",
    facts: [
      ["Members", "72+"],
      ["Founded", "Sept 2024"],
      ["Clients", "Local small businesses"],
    ],
    highlights: [
      "Co-founded a 72+ member club connecting students with real small business clients to execute live marketing campaigns",
      "Manage club budget, financial planning, and fund allocation; partner with local businesses to deliver measurable marketing value",
      "Hosted the CEO of Bombas for a case study analysis competition and Q&A session",
    ],
    gallery: [
      { src: "/assets/img-marketing-a.webp", pos: "50%", caption: "John Melton of My Lifestyle Academy." },
      { src: "/assets/img-marketing-b.webp", pos: "50%", caption: "Ashish Parikh and company, owners of the Montreal Tigers professional cricket team." },
    ],
  },
];

const pad = (n: number) => (n < 10 ? "0" : "") + n;

function Detail({ index, onClose }: { index: number; onClose: () => void }) {
  const e = EXPERIENCE[index];
  const prev = EXPERIENCE[(index + EXPERIENCE.length - 1) % EXPERIENCE.length];
  const next = EXPERIENCE[(index + 1) % EXPERIENCE.length];

  useEffect(() => {
    const overlay = document.querySelector<HTMLElement>(".exp-detail");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const heroImg = document.querySelector<HTMLElement>(".ed-hero img");
    if (heroImg && !reduced) heroImg.style.transform = "scale(1.04)";
    let raf = 0;
    const onScroll = () => {
      if (!overlay || !heroImg || reduced) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const st = Math.min(overlay.scrollTop, 900);
        heroImg.style.transform = "scale(1.04) translateY(" + st * -0.04 + "px)";
      });
    };
    overlay?.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      overlay?.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      if (heroImg) heroImg.style.transform = "";
    };
  }, [index]);

  return (
    <div className="wrap">
      <div className="ed-top">
        <button className="ed-back" type="button" onClick={onClose}><span className="ar">←</span>Back</button>
        <span className="ed-count caps">{pad(index + 1)} / {pad(EXPERIENCE.length)}</span>
      </div>
      <header className="ed-head">
        <p className="ed-year caps">{e.year}</p>
        <h1 className="display ed-org">{e.org}<span className="accent">.</span></h1>
        <p className="ed-role caps">{e.detailRole}</p>
      </header>
      <figure className="ed-fig">
        <div className="ed-hero">
          <img src={e.cover} alt="" style={{ objectPosition: "50% " + (e.coverPos || "50%") }} />
        </div>
        {e.coverCaption && <figcaption className="ed-cap">{e.coverCaption}</figcaption>}
      </figure>
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
      {e.auction && (
        <div className="ed-sec">
          <h2 className="caps ed-label">Gallery</h2>
          <div className="ed-auction-head">
            <p className="ed-sub">{e.auction.title}</p>
            <p className="ed-auction-total">
              <span>{e.auction.items.length} items</span>
              <span className="gold">${e.auction.items.reduce((a, x) => a + x.value, 0).toLocaleString()} total value</span>
            </p>
          </div>
          {e.auction.lead && (
            <div className="ed-gallery ed-lead">
              {e.auction.lead.map((g) => (
                <figure className="ed-fig" key={g.src}>
                  <div className="ed-shot fit"><img src={g.src} alt="" /></div>
                  <figcaption className="ed-cap">{g.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}
          <div className="ed-auction">
            {e.auction.items.map((x) => (
              <figure className="ed-lot" key={x.src}>
                <div className="ed-lot-img"><img src={x.src} alt={x.name} loading="lazy" /></div>
                <figcaption>
                  <div className="ed-lot-top">
                    <span className="ed-lot-name"><span className="no">#{x.no}</span>{x.name}</span>
                    <span className="ed-lot-val">${x.value.toLocaleString()}</span>
                  </div>
                  <p className="ed-cap">{x.from}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}
      {e.gallery.length > 0 && (
        <div className="ed-sec">
          {e.auction ? <p className="ed-sub ed-sub-gap">Mercy Medical Center · Bramazing 2023, 2024</p> : <h2 className="caps ed-label">Gallery</h2>}
          <div className={"ed-gallery" + (e.gallery.length === 1 ? " one" : "") + (e.gallery.length > 4 ? " many" : "")}>
            {e.gallery.map((g, i) => (
              <figure className="ed-fig" key={g.src || "slot-" + i}>
                <div className={"ed-shot" + (g.src ? "" : " empty") + (g.fit ? " fit" : "")}>
                  {g.src ? <img src={g.src} alt="" style={{ objectPosition: "50% " + g.pos }} /> : <span className="caps">Photo</span>}
                </div>
                {g.caption && <figcaption className="ed-cap">{g.caption}</figcaption>}
              </figure>
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
  const [closing, setClosing] = useState(false);
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

  const closeDetail = useCallback(() => {
    window.history.replaceState(null, "", window.location.pathname);
    const finish = () => {
      setClosing(false);
      setOpenSlug(null);
      const t = document.getElementById("experience");
      if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.pageYOffset - 70 });
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { finish(); return; }
    setClosing(true);
    window.setTimeout(finish, 330);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("exp-open", index >= 0);
    document.body.classList.toggle("exp-back", index >= 0 && !closing);
    const overlay = document.querySelector<HTMLElement>(".exp-detail");
    if (overlay && index >= 0 && !closing) { overlay.scrollTop = 0; window.scrollTo(0, 0); }
    if (index >= 0 && !closing) {
      const onKey = (ev: KeyboardEvent) => {
        if (ev.key === "Escape") closeDetail();
        else if (ev.key === "ArrowRight") window.location.hash = "exp/" + EXPERIENCE[(index + 1) % EXPERIENCE.length].slug;
        else if (ev.key === "ArrowLeft") window.location.hash = "exp/" + EXPERIENCE[(index + EXPERIENCE.length - 1) % EXPERIENCE.length].slug;
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
  }, [index, closing, closeDetail]);

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
                  <p className="exp-desc">{e.desc}{e.link && <> <a className="exp-link" href={e.link.href} target="_blank" rel="noopener noreferrer" onClick={(ev) => ev.stopPropagation()}>{e.link.label} <span className="ar">↗</span></a></>}</p>
                  <ul className="exp-points">
                    {e.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  <a
                    className="exp-more"
                    href={"#exp/" + e.slug}
                    onClick={(ev) => ev.stopPropagation()}
                    aria-label={"Learn more about " + e.org}
                  >Full Story &amp; Photos <span className="ar">→</span></a>
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
              <span className="what">Folly Quarter Middle School, 8th grade</span>
              <span className="who">2022 · 2023</span>
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

      <div className={"exp-detail" + (index >= 0 ? " show" : "") + (closing ? " closing" : "")}>
        {index >= 0 && <Detail key={EXPERIENCE[index].slug} index={index} onClose={closeDetail} />}
      </div>
    </>
  );
}
