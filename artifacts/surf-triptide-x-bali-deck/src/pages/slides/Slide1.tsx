import logo from '@assets/IMG-20260625-WA0001_1_1787316305623.jpg';
import siteReference from '@assets/Website_Design_(Based_on_Reference)_20260716_085502_0000_1787309323841.png';

export default function Slide1() {
  return <div className="relative h-screen w-screen overflow-hidden bg-[#071b2b]">
    <img src={siteReference} crossOrigin="anonymous" alt="Surf TripTide-X Bali website reference" className="absolute inset-0 h-full w-full object-cover opacity-35" />
    <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(7,27,43,.94)_8%,rgba(7,27,43,.70)_55%,rgba(7,27,43,.38))]" />
    <div className="relative flex h-full flex-col justify-between px-[7vw] py-[6vh] text-[#edf6f6]">
      <div className="flex items-start justify-between border-b border-white/20 pb-[3vh]"><div className="flex items-center gap-[1.2vw]"><img src={logo} crossOrigin="anonymous" alt="Tide-X Surf School logo" className="h-[9vw] w-[9vw] max-h-[12vh] max-w-[12vh] rounded-full object-cover" /><div className="text-[1.5vw] font-bold uppercase tracking-[.12em]">Surf TripTide-X Bali</div></div><div className="font-mono text-[1.5vw] uppercase tracking-[.15em] text-[#9edbe2]">Project deck / 2026</div></div>
      <div className="max-w-[70vw]"><p className="mb-[3vh] font-mono text-[1.5vw] uppercase tracking-[.24em] text-[#9edbe2]">Ossy Surf Trip Bali</p><h1 className="font-display text-[8.2vw] leading-[.94] tracking-[-.04em] text-[#f1f5f3]"><span className="block">Surf TripTide-X</span><span className="block text-[#70ced8]">Bali.</span></h1><p className="mt-[4vh] max-w-[43vw] text-[2vw] leading-[1.4] text-[#d5e3e3]"><span className="block">A surf school website for Ossy Surf Trip Bali</span><span className="block">Balangan Beach · Bali</span></p></div>
      <div className="flex items-end justify-between border-t border-white/20 pt-[3vh]"><div className="text-[1.5vw] text-[#c7d8d9]">Ride the waves. Live the dream.</div><div className="font-mono text-[1.5vw] uppercase tracking-[.14em] text-[#9edbe2]">Balangan Beach</div></div>
    </div>
  </div>;
}