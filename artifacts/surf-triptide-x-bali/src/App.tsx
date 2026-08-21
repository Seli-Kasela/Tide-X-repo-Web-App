import { type FormEvent, type ReactNode, useState } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, Compass, Instagram, Mail, MapPin, Menu, MoveUpRight, Phone, Play, Send, Sparkles, Star, Waves, X, Youtube } from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Link, Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

const queryClient = new QueryClient();
const whatsapp = 'https://wa.me/6287797061297';
const maps = 'https://www.google.com/maps/search/?api=1&query=Ossy+Surf+Trip+Bali+Balangan+Beach';

function Mark() {
  return (
    <Link href="/" className="focus-ring flex items-center gap-3" data-testid="link-brand">
      <img src="/tide-x-logo.jpg" alt="Tide-X Surf School" className="h-12 w-12 rounded-full border border-primary/50 object-cover object-center shadow-[0_0_24px_rgba(74,215,232,.18)]" />
      <span className="leading-none"><strong className="font-display block text-[15px] tracking-[.02em]">SURF TRIP<span className="text-primary">TIDE-X</span></strong><small className="mt-1 block font-mono text-[8px] tracking-[.24em] text-muted-foreground">BALI / BALANGAN BEACH</small></span>
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const links = [['/', 'Home'], ['/about', 'Our Story'], ['/services', 'Surf Days'], ['/contact', 'Contact']];
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 md:px-10 lg:px-14">
        <Mark />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map(([href, label]) => <Link key={href} href={href} className={`focus-ring line-link font-mono text-[10px] uppercase tracking-[.16em] transition-colors ${location === href ? 'text-primary' : 'text-foreground/70 hover:text-primary'}`} data-testid={`link-nav-${label.toLowerCase().replace(' ', '-')}`}>{label}</Link>)}
        </nav>
        <Link href="/contact" className="focus-ring hidden items-center gap-2 border border-primary/60 px-4 py-2 font-mono text-[10px] uppercase tracking-[.14em] text-primary transition-colors hover:bg-primary hover:text-background md:flex" data-testid="link-book-header">Book a surf day <ArrowRight size={13} /></Link>
        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} className="focus-ring p-2 text-primary md:hidden" data-testid="button-mobile-menu">{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
      {open && <div className="mx-4 border border-border bg-card/95 p-5 backdrop-blur-md md:hidden">
        <nav className="grid gap-5" aria-label="Mobile navigation">
          {links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="focus-ring font-display text-xl text-foreground transition-colors hover:text-primary" data-testid={`link-mobile-${label.toLowerCase().replace(' ', '-')}`}>{label}</Link>)}
          <Link href="/contact" onClick={() => setOpen(false)} className="focus-ring mt-2 inline-flex w-fit items-center gap-2 bg-primary px-4 py-3 font-mono text-[10px] uppercase tracking-[.14em] text-background" data-testid="link-mobile-book">Book a surf day <ArrowRight size={13} /></Link>
        </nav>
      </div>}
    </header>
  );
}

function Footer() {
  return <footer className="border-t border-border bg-[#06151b]">
    <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-10 lg:px-14">
      <div>
        <Mark />
        <p className="mt-6 max-w-xs text-sm leading-7 text-muted-foreground">A small, local surf school for big ocean days. Find your line at Balangan Beach.</p>
        <a href={whatsapp} target="_blank" rel="noreferrer" className="focus-ring mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.12em] text-primary" data-testid="link-footer-whatsapp"><Phone size={13} /> +62 877-9706-1297</a>
      </div>
      <div>
        <p className="eyebrow">Explore</p>
        <div className="mt-5 grid gap-3 text-sm text-muted-foreground">{[['/', 'Home'], ['/about', 'Our story'], ['/services', 'Surf days'], ['/contact', 'Contact']].map(([href, label]) => <Link href={href} key={href} className="focus-ring w-fit transition-colors hover:text-primary" data-testid={`link-footer-${label.replace(' ', '-').toLowerCase()}`}>{label}</Link>)}</div>
      </div>
      <div>
        <p className="eyebrow">Find us</p>
        <a href={maps} target="_blank" rel="noreferrer" className="focus-ring mt-5 flex max-w-[210px] items-start gap-2 text-sm leading-6 text-muted-foreground transition-colors hover:text-primary" data-testid="link-footer-map"><MapPin size={15} className="mt-1 shrink-0 text-primary" />Balangan Beach, Bali<br />South Kuta, Indonesia</a>
        <a href="https://www.youtube.com/@SurfTripBali" target="_blank" rel="noreferrer" className="focus-ring mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.12em] text-muted-foreground hover:text-primary" data-testid="link-footer-youtube"><Youtube size={14} /> @SurfTripBali</a>
      </div>
    </div>
    <div className="mx-auto flex max-w-[1440px] flex-col gap-3 border-t border-border px-5 py-5 font-mono text-[9px] uppercase tracking-[.1em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-10 lg:px-14">
      <span>Copyright 2026 All Reserved by Seli Kasela</span>
      <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer" className="focus-ring text-primary hover:text-foreground" data-testid="link-creative-commons">CC O SA 04</a>
    </div>
  </footer>;
}

function Shell({ children }: { children: ReactNode }) {
  return <div className="site-shell grain"><Header />{children}<Footer /></div>;
}

function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return <div className="mb-7 flex items-center gap-4"><span className="font-mono text-[10px] text-secondary">{index}</span><span className="h-px w-10 bg-border" /><span className="eyebrow">{children}</span></div>;
}

function Hero() {
  return <section className="relative flex min-h-[720px] items-end overflow-hidden border-b border-border md:min-h-[820px]">
    <img src="/hero-surf.jpg" alt="Surfer paddling into a dawn wave at Balangan Beach" className="absolute inset-0 h-full w-full object-cover object-center" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,15,20,.92)_0%,rgba(3,15,20,.58)_43%,rgba(3,15,20,.08)_100%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,15,20,.98)_0%,transparent_45%)]" />
    <div className="absolute right-5 top-32 hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[.18em] text-foreground/50 md:flex md:right-12 [writing-mode:vertical-rl]"><span>8°47' S / 115°09' E</span><span className="h-12 w-px bg-foreground/30" /><span>First light, every day</span></div>
    <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 md:px-10 md:pb-24 lg:px-14">
      <div className="max-w-3xl">
        <p className="eyebrow reveal">Ossy Surf Trip Bali · est. Balangan</p>
        <h1 className="font-display reveal reveal-delay-1 mt-5 max-w-3xl text-[clamp(3.7rem,9.5vw,9rem)] font-semibold leading-[.88] tracking-[-.075em] text-balance">Meet the<br /><span className="text-primary">morning</span><br />in the ocean.</h1>
        <div className="reveal reveal-delay-2 mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-sm text-base leading-7 text-foreground/75">Surf lessons, guided trips and real island time — led by people who know every mood of Balangan Beach.</p>
          <Link href="/contact" className="focus-ring inline-flex w-fit shrink-0 items-center gap-3 bg-primary px-5 py-4 font-mono text-[10px] uppercase tracking-[.14em] text-background transition-transform hover:-translate-y-1" data-testid="link-hero-book">Find your surf day <ArrowDownRight size={16} /></Link>
        </div>
      </div>
    </div>
    <div className="absolute bottom-7 right-5 hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[.14em] text-foreground/50 md:flex md:right-12"><span>Scroll to explore</span><ChevronDown size={13} className="text-primary" /></div>
  </section>;
}

function Stats() {
  return <section className="border-b border-border bg-[#081b22]"><div className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4">{[['12+', 'years reading this reef'], ['3', 'ways to get in'], ['4:30', 'first pickup, on request'], ['1', 'beautiful beach']].map(([big, small], i) => <div key={big} className={`border-border px-5 py-7 md:px-10 lg:px-14 ${i < 3 ? 'border-r' : ''}`}><p className="font-display text-3xl tracking-[-.04em] text-primary md:text-4xl">{big}</p><p className="mt-2 max-w-[130px] font-mono text-[9px] uppercase leading-4 tracking-[.12em] text-muted-foreground">{small}</p></div>)}</div></section>;
}

function Home() {
  return <Shell>
    <Hero /><Stats />
    <main>
      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:grid-cols-[.75fr_1.25fr] md:gap-20 md:px-10 md:py-32 lg:px-14">
        <div><SectionLabel index="01">A better way in</SectionLabel><h2 className="font-display max-w-md text-4xl font-medium leading-[.98] tracking-[-.05em] md:text-6xl">Small groups.<br /><span className="text-primary">Good energy.</span><br />No rush.</h2></div>
        <div className="grid gap-9 md:grid-cols-[1fr_.7fr] md:pt-10"><div><p className="text-xl leading-8 text-foreground/85">The best sessions happen when you have space to listen to the water. We keep our groups small, our coaching clear, and our mornings gloriously unhurried.</p><p className="mt-6 text-sm leading-7 text-muted-foreground">From your first popup to your first clean green wave, Ossy and the crew meet you where you are — then help you go one step further.</p><Link href="/about" className="focus-ring mt-8 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.14em] text-primary" data-testid="link-home-story">Meet the crew <ArrowRight size={14} /></Link></div><div className="border-l border-primary/50 pl-6"><Sparkles size={20} className="text-secondary" /><p className="mt-5 font-display text-2xl leading-tight">“The ocean is the teacher. We just help you hear it.”</p><p className="mt-5 font-mono text-[9px] uppercase tracking-[.12em] text-muted-foreground">— Ossy, founder & surf guide</p></div></div>
      </section>
      <section className="mx-auto max-w-[1440px] px-5 pb-24 md:px-10 md:pb-32 lg:px-14"><div className="image-hover relative min-h-[430px] overflow-hidden md:min-h-[600px]"><img src="/lesson-surf.jpg" alt="Surf instructor coaching a student in clear Bali water" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-[#06151b]/90 via-[#06151b]/25 to-transparent" /><div className="relative flex min-h-[430px] max-w-md flex-col justify-end p-7 md:min-h-[600px] md:p-12"><p className="eyebrow">Made for your pace</p><h2 className="font-display mt-4 text-4xl leading-[.95] tracking-[-.05em] md:text-6xl">Your first wave<br />is a big deal.</h2><p className="mt-5 max-w-sm text-sm leading-6 text-foreground/75">We celebrate the wobbly starts, the unexpected wins and every salty high five in between.</p></div><a href="https://www.youtube.com/@SurfTripBali" target="_blank" rel="noreferrer" className="focus-ring absolute bottom-6 right-6 flex items-center gap-2 border border-foreground/30 bg-background/40 px-3 py-2 font-mono text-[9px] uppercase tracking-[.12em] backdrop-blur-sm hover:border-primary hover:text-primary" data-testid="link-home-youtube"><Play size={12} className="fill-primary text-primary" /> Watch our mornings</a></div></section>
      <section className="border-y border-border bg-[#081b22]"><div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32 lg:px-14"><SectionLabel index="02">Pick your line</SectionLabel><div className="grid gap-5 md:grid-cols-3">{[['01', 'Learn to surf', 'Soft boards, patient coaching and a beach that makes beginners feel brave.', '/services', 'Start here'], ['02', 'Chase the coast', 'A guided surf day for travelers who want more water, more waves, more Bali.', '/services', 'Go further'], ['03', 'Make it yours', 'Private sessions shaped around your crew, your level and your kind of morning.', '/contact', 'Talk to us']].map(([n, title, body, href, cta]) => <Link href={href} key={n} className="focus-ring group border border-border bg-card p-6 transition-colors hover:border-primary/70 md:min-h-[250px] md:p-8" data-testid={`card-service-${n}`}><div className="flex items-start justify-between"><span className="font-mono text-[10px] text-secondary">{n}</span><ArrowUpRight size={18} className="text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" /></div><h3 className="mt-14 font-display text-3xl tracking-[-.04em]">{title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">{body}</p><span className="mt-6 inline-block font-mono text-[9px] uppercase tracking-[.15em] text-primary">{cta}</span></Link>)}</div></div></section>
      <section className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-24 md:grid-cols-[1fr_.9fr] md:gap-24 md:px-10 md:py-32 lg:px-14"><div><SectionLabel index="03">The local read</SectionLabel><h2 className="font-display max-w-lg text-4xl leading-[.98] tracking-[-.05em] md:text-6xl">Balangan is not just a backdrop.</h2><p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">It is reef, tide, limestone and light. It is warung coffee after a dawn session, scooters loaded with boards, and a horizon that keeps asking you to stay.</p><a href={maps} target="_blank" rel="noreferrer" className="focus-ring mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.14em] text-primary" data-testid="link-home-map"><MapPin size={14} /> See us on the map <MoveUpRight size={13} /></a></div><div className="image-hover relative aspect-[4/5] max-w-md justify-self-end overflow-hidden md:aspect-[.78]"><img src="/coast-surf.jpg" alt="Surfer walking beside the Balangan Beach coastline" className="h-full w-full object-cover" /><div className="absolute bottom-4 left-4 border border-foreground/30 bg-background/60 px-3 py-2 font-mono text-[9px] uppercase tracking-[.12em] backdrop-blur-sm">Balangan Beach / South Kuta</div></div></section>
      <section className="border-t border-border bg-secondary text-background"><div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14"><div><p className="font-mono text-[10px] uppercase tracking-[.16em] opacity-70">Next swell: whenever you are</p><h2 className="font-display mt-3 text-4xl font-semibold tracking-[-.05em] md:text-6xl">Ready to get salty?</h2></div><Link href="/contact" className="focus-ring inline-flex w-fit items-center gap-3 border border-background px-5 py-4 font-mono text-[10px] uppercase tracking-[.14em] transition-colors hover:bg-background hover:text-secondary" data-testid="link-home-cta">Plan my surf day <ArrowRight size={15} /></Link></div></section>
    </main>
  </Shell>;
}

function PageHero({ kicker, title, text, image = '/coast-surf.jpg' }: { kicker: string; title: ReactNode; text: string; image?: string }) {
  return <section className="relative flex min-h-[520px] items-end overflow-hidden border-b border-border"><img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,15,20,.92),rgba(3,15,20,.36),rgba(3,15,20,.3))]" /><div className="absolute inset-0 bg-gradient-to-t from-[#031016] via-transparent to-transparent" /><div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-14 pt-40 md:px-10 md:pb-20 lg:px-14"><p className="eyebrow reveal">{kicker}</p><h1 className="font-display reveal reveal-delay-1 mt-5 max-w-3xl text-[clamp(3.5rem,8vw,7rem)] font-semibold leading-[.88] tracking-[-.07em] text-balance">{title}</h1><p className="reveal reveal-delay-2 mt-7 max-w-lg text-base leading-7 text-foreground/75">{text}</p></div></section>;
}

function About() {
  return <Shell><PageHero kicker="Our story / 04" title={<>Born from a <span className="text-primary">love</span> of the line.</>} text="Ossy Surf Trip Bali started with one board, one reef and a belief that a surf day should feel like the best part of your holiday — not an item on an itinerary." image="/board-detail.jpg" />
    <main>
      <section className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 md:grid-cols-[.8fr_1.2fr] md:px-10 md:py-32 lg:px-14"><div><SectionLabel index="01">The heart of it</SectionLabel><h2 className="font-display max-w-sm text-4xl leading-[.98] tracking-[-.05em] md:text-6xl">A local crew with open eyes.</h2></div><div className="max-w-2xl text-lg leading-8 text-foreground/80"><p>We are a small, independent surf school based at Balangan Beach. Our days begin early, with a quick read of the tide and a quiet look at the horizon. Then we share that read with you.</p><p className="mt-7 text-base leading-7 text-muted-foreground">That might mean a patient first lesson in the whitewater, a reef-safe guided mission down the coast, or simply finding the right place to sit after a surf. No performance. No packed vans. Just good people, considered coaching and ocean time that stays with you.</p><div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-3"><div><p className="font-display text-3xl text-primary">01</p><p className="mt-2 font-mono text-[9px] uppercase leading-4 tracking-[.12em] text-muted-foreground">Beach we call home</p></div><div><p className="font-display text-3xl text-primary">100%</p><p className="mt-2 font-mono text-[9px] uppercase leading-4 tracking-[.12em] text-muted-foreground">Good ocean manners</p></div><div><p className="font-display text-3xl text-primary">∞</p><p className="mt-2 font-mono text-[9px] uppercase leading-4 tracking-[.12em] text-muted-foreground">Reasons to return</p></div></div></div></section>
      <section className="border-y border-border bg-[#081b22]"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-24 md:grid-cols-3 md:px-10 md:py-28 lg:px-14">{[['01', 'Read the water', 'We start with conditions, not a script. Your session follows the tide, swell and your own rhythm.'], ['02', 'Respect the place', 'We keep groups light on the reef, choose reusables and leave every beach better than we found it.'], ['03', 'Share the stoke', 'Our measure of a good day is simple: you leave with more confidence than you arrived with.']].map(([n, t, b]) => <div key={n} className="border-l border-primary/60 pl-6"><span className="font-mono text-[10px] text-secondary">{n}</span><h3 className="mt-7 font-display text-2xl">{t}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{b}</p></div>)}</div></section>
      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:grid-cols-[1fr_.75fr] md:items-center md:px-10 md:py-32 lg:px-14"><div className="image-hover aspect-video overflow-hidden"><img src="/lesson-surf.jpg" alt="Instructor and student sharing a surf moment" className="h-full w-full object-cover" /></div><div><SectionLabel index="02">Our promise</SectionLabel><h2 className="font-display text-4xl leading-[.98] tracking-[-.05em] md:text-5xl">Come as you are.<br /><span className="text-primary">Leave more you.</span></h2><p className="mt-6 text-sm leading-7 text-muted-foreground">Your ability, age, language or travel style is welcome here. Tell us what a memorable day looks like and we will help you find it.</p><Link href="/contact" className="focus-ring mt-8 inline-flex items-center gap-3 bg-primary px-5 py-4 font-mono text-[10px] uppercase tracking-[.14em] text-background" data-testid="link-about-contact">Start a conversation <ArrowRight size={14} /></Link></div></section>
    </main>
  </Shell>;
}

const services = [
  { n: '01', title: 'First wave lesson', tag: 'For beginners', price: 'from 550K', detail: '2 hours', copy: 'A soft landing into surf. Warm-up, ocean basics, board handling and the confidence to stand up — all with a coach close by.', points: ['Small group coaching', 'Board & rash vest included', 'Beach safety briefing'] },
  { n: '02', title: 'Guided surf trip', tag: 'For wave chasers', price: 'from 850K', detail: 'Half day', copy: 'Let the conditions lead. We read the coast, choose the right break and get you there with a local guide who knows the rhythm.', points: ['Spot selection by tide', 'Transport from Balangan area', 'Photos on request'] },
  { n: '03', title: 'Private session', tag: 'For your crew', price: 'from 1.2M', detail: '2 hours', copy: 'Your pace, your questions, your goals. A focused session for solo travelers, couples or a crew who want the ocean to themselves.', points: ['One-on-one attention', 'Flexible timing', 'Progress plan included'] },
];

function Services() {
  return <Shell><PageHero kicker="Surf days / 05" title={<>Choose your <span className="text-primary">water</span> story.</>} text="Three ways in. Every session is built around the conditions, your confidence and the kind of memory you want to take home." />
    <main><section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32 lg:px-14"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><SectionLabel index="01">The sessions</SectionLabel><h2 className="font-display max-w-lg text-4xl leading-[.98] tracking-[-.05em] md:text-6xl">No two surf days<br /><span className="text-primary">feel the same.</span></h2></div><p className="max-w-xs text-sm leading-6 text-muted-foreground">Tell us your level and your dates. We will match you with the right tide.</p></div><div className="grid gap-5">{services.map((s) => <article key={s.n} className="group grid gap-8 border border-border bg-card p-6 transition-colors hover:border-primary/60 md:grid-cols-[70px_1.2fr_1fr_170px] md:items-start md:p-8" data-testid={`card-session-${s.n}`}><span className="font-mono text-[10px] text-secondary">{s.n}</span><div><span className="eyebrow">{s.tag}</span><h3 className="mt-3 font-display text-3xl tracking-[-.04em] md:text-4xl">{s.title}</h3></div><div><p className="text-sm leading-6 text-muted-foreground">{s.copy}</p><ul className="mt-5 grid gap-2">{s.points.map(p => <li key={p} className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.08em] text-foreground/70"><Check size={12} className="text-primary" />{p}</li>)}</ul></div><div className="flex items-center justify-between border-t border-border pt-5 md:block md:border-t-0 md:pt-0 md:text-right"><div><span className="font-display text-2xl text-primary">{s.price}</span><span className="ml-2 font-mono text-[9px] uppercase text-muted-foreground">{s.detail}</span></div><Link href="/contact" className="focus-ring mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.12em] text-primary" data-testid={`link-session-book-${s.n}`}>Reserve <ArrowRight size={13} /></Link></div></article>)}</div></section>
      <section className="border-y border-border bg-[#081b22]"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-24 md:grid-cols-[.7fr_1.3fr] md:px-10 md:py-28 lg:px-14"><div><SectionLabel index="02">Included</SectionLabel><h2 className="font-display text-4xl leading-[.98] tracking-[-.05em]">The details<br />matter.</h2></div><div className="grid gap-px border border-border bg-border sm:grid-cols-2"><div className="bg-card p-6"><Compass className="text-primary" size={20} /><h3 className="mt-8 font-display text-xl">Local knowledge</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">We choose the safest, most fun option for the day — not the most convenient.</p></div><div className="bg-card p-6"><Waves className="text-primary" size={20} /><h3 className="mt-8 font-display text-xl">Gear that works</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Boards and rash vests are ready. Bring swimwear, water and a willingness to get wet.</p></div><div className="bg-card p-6"><Star className="text-secondary" size={20} /><h3 className="mt-8 font-display text-xl">Good company</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Small groups make room for better coaching and easier introductions.</p></div><div className="bg-card p-6"><MapPin className="text-secondary" size={20} /><h3 className="mt-8 font-display text-xl">Easy meeting point</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">We meet at Balangan Beach, with pickup options available for nearby stays.</p></div></div></div></section>
      <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32 lg:px-14"><div className="relative overflow-hidden border border-border bg-card p-7 md:p-12"><div className="absolute right-0 top-0 h-full w-1/3 bg-[url('/board-detail.jpg')] bg-cover bg-center opacity-30 mix-blend-screen" /><div className="relative max-w-xl"><p className="eyebrow">Not sure yet?</p><h2 className="font-display mt-4 text-4xl leading-[.96] tracking-[-.05em] md:text-6xl">Start with a hello.</h2><p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">Send us your dates, your crew and what you have in mind. We will take it from there.</p><Link href="/contact" className="focus-ring mt-8 inline-flex items-center gap-3 bg-primary px-5 py-4 font-mono text-[10px] uppercase tracking-[.14em] text-background" data-testid="link-services-contact">Ask Ossy <ArrowRight size={14} /></Link></div></div></section>
    </main>
  </Shell>;
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    window.setTimeout(() => { setSending(false); setSubmitted(true); }, 650);
  };
  return <Shell><PageHero kicker="Contact / 06" title={<>Let's find your <span className="text-primary">wave.</span></>} text="Tell us a little about your trip. We usually reply within the day, especially when the tide is looking good." image="/hero-surf.jpg" />
    <main><section className="mx-auto grid max-w-[1440px] gap-16 px-5 py-24 md:grid-cols-[.75fr_1.25fr] md:px-10 md:py-32 lg:px-14"><div><SectionLabel index="01">Reach out</SectionLabel><h2 className="font-display max-w-sm text-4xl leading-[.98] tracking-[-.05em] md:text-6xl">A good surf day starts with a message.</h2><div className="mt-12 grid gap-7"><a href={whatsapp} target="_blank" rel="noreferrer" className="focus-ring group flex items-start gap-4" data-testid="link-contact-whatsapp"><span className="flex h-9 w-9 items-center justify-center border border-primary/60 text-primary"><Phone size={15} /></span><span><span className="eyebrow block">WhatsApp</span><span className="mt-1 block text-lg transition-colors group-hover:text-primary">+62 877-9706-1297</span></span></a><a href="mailto:ossysurfschool@gmail.com" className="focus-ring group flex items-start gap-4" data-testid="link-contact-email"><span className="flex h-9 w-9 items-center justify-center border border-primary/60 text-primary"><Mail size={15} /></span><span><span className="eyebrow block">Email</span><span className="mt-1 block text-lg transition-colors group-hover:text-primary">ossysurfschool@gmail.com</span></span></a><a href={maps} target="_blank" rel="noreferrer" className="focus-ring group flex items-start gap-4" data-testid="link-contact-location"><span className="flex h-9 w-9 items-center justify-center border border-primary/60 text-primary"><MapPin size={15} /></span><span><span className="eyebrow block">Where to find us</span><span className="mt-1 block text-lg transition-colors group-hover:text-primary">Balangan Beach, Bali ↗</span></span></a></div><div className="mt-10 flex gap-4"><a href="https://www.youtube.com/@SurfTripBali" target="_blank" rel="noreferrer" className="focus-ring flex h-9 w-9 items-center justify-center border border-border text-muted-foreground hover:border-primary hover:text-primary" data-testid="link-contact-youtube"><Youtube size={16} /></a><a href="mailto:ossysurfschool@gmail.com" className="focus-ring flex h-9 w-9 items-center justify-center border border-border text-muted-foreground hover:border-primary hover:text-primary" data-testid="link-contact-mail-icon"><Instagram size={16} /></a></div></div>
      <div className="border border-border bg-card p-6 md:p-9">{submitted ? <div className="flex min-h-[430px] flex-col justify-center"><span className="flex h-12 w-12 items-center justify-center bg-primary text-background"><Check size={24} /></span><p className="eyebrow mt-8">Message received</p><h2 className="font-display mt-3 text-4xl leading-none tracking-[-.05em]">We will meet you in the water.</h2><p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">Thanks for reaching out. While you wait, you can send the same details straight to WhatsApp for the quickest reply.</p><div className="mt-8 flex flex-wrap gap-3"><a href={whatsapp} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 bg-primary px-4 py-3 font-mono text-[10px] uppercase tracking-[.12em] text-background" data-testid="link-success-whatsapp">Open WhatsApp <ArrowRight size={13} /></a><button type="button" onClick={() => setSubmitted(false)} className="focus-ring border border-border px-4 py-3 font-mono text-[10px] uppercase tracking-[.12em] text-muted-foreground hover:border-primary hover:text-primary" data-testid="button-send-another">Send another</button></div></div> : <form onSubmit={submit} className="grid gap-6" aria-label="Surf day enquiry form"><div><label htmlFor="name" className="eyebrow">Your name</label><input id="name" name="name" required placeholder="How should we call you?" className="focus-ring mt-3 w-full border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none" data-testid="input-name" /></div><div><label htmlFor="email" className="eyebrow">Email address</label><input id="email" name="email" type="email" required placeholder="you@example.com" className="focus-ring mt-3 w-full border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none" data-testid="input-email" /></div><div><label htmlFor="dates" className="eyebrow">When are you in Bali?</label><input id="dates" name="dates" required placeholder="Dates or a rough idea" className="focus-ring mt-3 w-full border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none" data-testid="input-dates" /></div><div><label htmlFor="message" className="eyebrow">Your surf story</label><textarea id="message" name="message" rows={4} required placeholder="Tell us your level, your crew and what you are hoping for..." className="focus-ring mt-3 w-full resize-none border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none" data-testid="input-message" /></div><button type="submit" disabled={sending} className="focus-ring mt-3 inline-flex w-full items-center justify-center gap-3 bg-primary px-5 py-4 font-mono text-[10px] uppercase tracking-[.14em] text-background transition-colors hover:bg-primary/85 disabled:cursor-wait disabled:opacity-60" data-testid="button-submit-contact">{sending ? 'Sending your note...' : 'Send enquiry'} {sending ? null : <Send size={14} />}</button><p className="text-center font-mono text-[9px] uppercase tracking-[.1em] text-muted-foreground">Prefer instant? WhatsApp us at +62 877-9706-1297</p></form>}</div></section>
      <section className="border-y border-border bg-[#081b22]"><div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14"><div><p className="eyebrow">The meeting point</p><h2 className="font-display mt-3 text-3xl tracking-[-.04em]">Balangan Beach, South Kuta</h2></div><a href={maps} target="_blank" rel="noreferrer" className="focus-ring inline-flex w-fit items-center gap-2 border border-primary px-4 py-3 font-mono text-[10px] uppercase tracking-[.13em] text-primary hover:bg-primary hover:text-background" data-testid="link-contact-map">Open Google Maps <MoveUpRight size={13} /></a></div></section>
    </main>
  </Shell>;
}

function NotFoundPage() {
  return <Shell><main className="flex min-h-[78dvh] items-center px-5 pt-28 md:px-10 lg:px-14"><div className="mx-auto w-full max-w-[1440px]"><p className="eyebrow">Signal lost / 404</p><h1 className="font-display mt-5 max-w-2xl text-[clamp(4rem,11vw,9rem)] font-semibold leading-[.84] tracking-[-.08em]">This wave<br /><span className="text-primary">isn't here.</span></h1><p className="mt-8 max-w-md text-base leading-7 text-muted-foreground">The page you are looking for may have drifted with the tide. Head back to shore and choose a new line.</p><Link href="/" className="focus-ring mt-8 inline-flex items-center gap-3 bg-primary px-5 py-4 font-mono text-[10px] uppercase tracking-[.14em] text-background" data-testid="link-404-home">Back to home <ArrowRight size={14} /></Link></div></main></Shell>;
}

function Router() {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}><Switch><Route path="/" component={Home} /><Route path="/about" component={About} /><Route path="/services" component={Services} /><Route path="/contact" component={Contact} /><Route component={NotFoundPage} /></Switch></ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;