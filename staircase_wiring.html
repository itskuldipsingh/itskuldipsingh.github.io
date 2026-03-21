import React, { useState } from 'react';
import { 
  Lightbulb, 
  Zap, 
  ShieldAlert, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  Cpu, 
  Target, 
  ListChecks, 
  Table, 
  Wrench,
  Hammer
} from 'lucide-react';

const SECTIONS = ['aim', 'req', 'theory', 'demo', 'safety'];

const ReferenceCircuitDiagram = ({ sw1, sw2, isLightOn }) => (
  <svg viewBox="0 0 600 400" className="w-full h-auto bg-white rounded-2xl border-2 border-slate-200 shadow-inner p-6">
    {/* Terminal Labels */}
    <text x="40" y="55" className="text-[14px] font-bold fill-black">N (Neutral)</text>
    <text x="40" y="255" className="text-[14px] font-bold fill-red-600">L (Phase)</text>

    {/* NEUTRAL WIRE (Black) - Directly connected to Left of Lamp */}
    <path d="M 60 50 L 275 50" stroke="#000000" strokeWidth="4" fill="none" strokeLinecap="round" />
    
    {/* LAMP (Centered) */}
    <g transform="translate(300, 50)">
      <circle r="25" stroke="#1e293b" strokeWidth="2" fill={isLightOn ? "#fef08a" : "white"} />
      <line x1="-15" y1="-15" x2="15" y2="15" stroke="#ef4444" strokeWidth="2" />
      <line x1="15" y1="-15" x2="-15" y2="15" stroke="#ef4444" strokeWidth="2" />
      <text x="0" y="45" textAnchor="middle" className="text-[10px] font-black fill-slate-600 uppercase tracking-widest">Load / Lamp</text>
      {isLightOn && <circle r="25" fill="#facc15" opacity="0.4" className="animate-pulse" />}
    </g>

    {/* PHASE RETURN WIRE (Red) - Connected to Right of Lamp to S2 COM */}
    <path d="M 325 50 L 550 50 L 550 250 L 485 250" stroke="#ef4444" strokeWidth="4" fill="none" strokeLinecap="round" />

    {/* PHASE INLET WIRE (Red) - Entering S1 COM */}
    <path d="M 60 250 L 115 250" stroke="#ef4444" strokeWidth="4" fill="none" strokeLinecap="round" />

    {/* SWITCH 1 */}
    <g transform="translate(150, 250)">
      <circle r="30" fill="none" stroke="#1e293b" strokeWidth="2" />
      <circle cx="-35" cy="0" r="4" fill="#1e293b" /> 
      <circle cx="15" cy="-15" r="4" fill="#1e293b" /> 
      <circle cx="15" cy="15" r="4" fill="#1e293b" />
      <line x1="-35" y1="0" x2="12" y2={sw1 === 'UP' ? -15 : 15} stroke="#1e293b" strokeWidth="5" strokeLinecap="round" className="transition-all duration-300" />
      <text x="0" y="55" textAnchor="middle" className="text-[9px] font-bold fill-slate-900 uppercase">Two-Way S1</text>
    </g>

    {/* TRAVELER 1 (Red Path - Top) */}
    <path d="M 165 235 L 165 150 L 435 150 L 435 235" stroke="#ef4444" strokeWidth="3" fill="none" />
    {/* TRAVELER 2 (Red Path - Bottom) */}
    <path d="M 165 265 L 230 265 L 230 220 L 370 220 L 370 265 L 435 265" stroke="#ef4444" strokeWidth="3" fill="none" />

    {/* SWITCH 2 */}
    <g transform="translate(450, 250)">
      <circle r="30" fill="none" stroke="#1e293b" strokeWidth="2" />
      <circle cx="35" cy="0" r="4" fill="#1e293b" /> 
      <circle cx="-15" cy="-15" r="4" fill="#1e293b" /> 
      <circle cx="-15" cy="15" r="4" fill="#1e293b" />
      <line x1="35" y1="0" x2="-12" y2={sw2 === 'UP' ? -15 : 15} stroke="#1e293b" strokeWidth="5" strokeLinecap="round" className="transition-all duration-300" />
      <text x="0" y="55" textAnchor="middle" className="text-[9px] font-bold fill-slate-900 uppercase">Two-Way S2</text>
    </g>

    {/* CURRENT DIRECTION ANIMATION */}
    {isLightOn && (
      <g>
        <circle r="4" fill="#ffffff">
           <animateMotion dur="2.5s" repeatCount="indefinite" path="M 60 250 L 115 250" />
        </circle>
        <circle r="4" fill="#ffffff">
           <animateMotion 
             dur="2.5s" 
             repeatCount="indefinite" 
             path={sw1 === 'UP' 
               ? "M 115 250 L 165 235 L 165 150 L 435 150 L 435 235" 
               : "M 115 250 L 165 265 L 230 265 L 230 220 L 370 220 L 370 265 L 435 265"} 
           />
        </circle>
        <circle r="4" fill="#ffffff">
           <animateMotion dur="2.5s" repeatCount="indefinite" path="M 435 235 L 485 250 L 550 250 L 550 50 L 325 50" />
        </circle>
        <circle r="3" fill="#94a3b8">
           <animateMotion dur="2.5s" repeatCount="indefinite" path="M 275 50 L 60 50" />
        </circle>
      </g>
    )}
  </svg>
);

export default function App() {
  const [idx, setIdx] = useState(0);
  const [sw1, setSw1] = useState('UP');
  const [sw2, setSw2] = useState('UP');

  const section = SECTIONS[idx];
  const isLightOn = sw1 === sw2;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-12 font-sans selection:bg-red-100">
      {/* Static Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm">
        <h1 className="text-xs font-black text-slate-500 uppercase tracking-widest">Electrical Wiring Lab</h1>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-24" id="main-content">
        <header className="mb-12">
          <h2 className="text-4xl font-black text-slate-800 flex items-center gap-4">
             <span className="p-3 bg-white rounded-2xl shadow-md text-red-500">
                {section === 'aim' && <Target size={32} />}
                {section === 'req' && <ListChecks size={32} />}
                {section === 'theory' && <Cpu size={32} />}
                {section === 'demo' && <Zap size={32} />}
                {section === 'safety' && <ShieldAlert size={32} />}
             </span>
             {section.charAt(0).toUpperCase() + section.slice(1)}
          </h2>
        </header>

        {section === 'aim' && (
          <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border-l-[12px] border-red-500 animate-in fade-in slide-in-from-bottom-4">
            <h3 className="text-xl font-black mb-4 uppercase text-slate-400 tracking-tight">Experiment Objective</h3>
            <p className="text-2xl text-slate-600 italic font-medium leading-relaxed">
              "To implement a staircase wiring system using two 2-way switches (SPDT) to control a single lamp from two separate locations."
            </p>
          </div>
        )}

        {section === 'req' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 animate-in fade-in zoom-in-95">
            {[
              { name: '2-Way Switch', spec: '6A, 250V', icon: 'switch' },
              { name: 'Lamp Holder', spec: 'Pendent Type', icon: 'bulb' },
              { name: 'PVC Copper Wire', spec: '1.5 sq mm', icon: 'wire' },
              { name: 'Neon Tester', spec: '500V', icon: 'zap' },
              { name: 'Insulated Plier', spec: 'Standard', icon: 'wrench' },
              { name: 'Electric Hammer', spec: '250g', icon: 'hammer' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border-2 border-transparent hover:border-red-400 transition-all text-center group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                   {item.icon === 'bulb' ? <Lightbulb size={32} className="text-yellow-500" /> : <Zap size={32} className="text-red-500" />}
                </div>
                <h4 className="font-black text-slate-800 text-lg mb-1">{item.name}</h4>
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">{item.spec}</p>
              </div>
            ))}
          </div>
        )}

        {section === 'theory' && (
          <div className="bg-white p-10 rounded-[3rem] shadow-xl space-y-8 animate-in fade-in">
            <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight">Circuit Wiring Logic</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              The Neutral wire is connected directly to the load (Lamp). The Phase wire enters the Common terminal of Switch 1. 
              The two traveler terminals of Switch 1 are connected to the traveler terminals of Switch 2. 
              Finally, the Common terminal of Switch 2 returns to the load, completing the circuit.
            </p>
            <div className="p-4 bg-slate-50 rounded-2xl border-2 border-slate-100 overflow-x-auto">
                <ReferenceCircuitDiagram sw1={sw1} sw2={sw2} isLightOn={isLightOn} />
            </div>
          </div>
        )}

        {section === 'demo' && (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8">
            <div className="bg-slate-950 p-6 rounded-[3rem] shadow-2xl relative h-[520px] border-[10px] border-slate-900">
               <div className="absolute inset-0 p-4 z-10 opacity-95">
                 <ReferenceCircuitDiagram sw1={sw1} sw2={sw2} isLightOn={isLightOn} />
               </div>

               <div className="absolute bottom-6 left-1/4 -translate-x-1/2 z-20">
                  <button onClick={() => setSw1(sw1 === 'UP' ? 'DOWN' : 'UP')} className={`w-20 h-32 rounded-3xl border-4 p-3 flex flex-col items-center justify-between transition-all ${sw1 === 'UP' ? 'bg-slate-700 border-slate-500 shadow-xl' : 'bg-slate-800 border-slate-900'}`}>
                    <div className={`w-full h-10 rounded-xl transition-all ${sw1 === 'UP' ? 'bg-white shadow-[0_0_20px_white]' : 'bg-slate-950 opacity-40'}`} />
                    <div className={`w-full h-10 rounded-xl transition-all ${sw1 === 'DOWN' ? 'bg-white shadow-[0_0_20px_white]' : 'bg-slate-950 opacity-40'}`} />
                  </button>
                  <p className="text-[10px] text-white font-black mt-4 uppercase text-center tracking-tighter">Switch 1 Position</p>
               </div>

               <div className="absolute bottom-6 right-1/4 translate-x-1/2 z-20">
                  <button onClick={() => setSw2(sw2 === 'UP' ? 'DOWN' : 'UP')} className={`w-20 h-32 rounded-3xl border-4 p-3 flex flex-col items-center justify-between transition-all ${sw2 === 'UP' ? 'bg-slate-700 border-slate-500 shadow-xl' : 'bg-slate-800 border-slate-900'}`}>
                    <div className={`w-full h-10 rounded-xl transition-all ${sw2 === 'UP' ? 'bg-white shadow-[0_0_20px_white]' : 'bg-slate-950 opacity-40'}`} />
                    <div className={`w-full h-10 rounded-xl transition-all ${sw2 === 'DOWN' ? 'bg-white shadow-[0_0_20px_white]' : 'bg-slate-950 opacity-40'}`} />
                  </button>
                  <p className="text-[10px] text-white font-black mt-4 uppercase text-center tracking-tighter">Switch 2 Position</p>
               </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl">
               <h3 className="text-xl font-black text-slate-800 mb-8 flex items-center gap-3 uppercase">
                 <Table size={24} className="text-red-500" /> Switching Logic Table
               </h3>
               <div className="overflow-hidden rounded-2xl border-2 border-slate-100">
                 <table className="w-full text-left">
                   <thead className="bg-slate-50">
                     <tr>
                        {["Switch 1", "Switch 2", "Active Traveler", "Light State"].map((c, i) => <th key={i} className="p-5 text-xs font-black uppercase tracking-tighter text-slate-400">{c}</th>)}
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-100">
                      {[
                        { s1: 'UP', s2: 'UP', path: 'Traveler 1 (Top)', status: 'ON' },
                        { s1: 'UP', s2: 'DOWN', path: 'Open Circuit', status: 'OFF' },
                        { s1: 'DOWN', s2: 'UP', path: 'Open Circuit', status: 'OFF' },
                        { s1: 'DOWN', s2: 'DOWN', path: 'Traveler 2 (Bottom)', status: 'ON' },
                      ].map((row, i) => {
                        const active = sw1 === row.s1 && sw2 === row.s2;
                        return (
                          <tr key={i} className={`transition-all ${active ? 'bg-red-50 font-bold' : ''}`}>
                            <td className="p-5 text-sm">{row.s1}</td>
                            <td className="p-5 text-sm">{row.s2}</td>
                            <td className="p-5 text-sm italic text-slate-400">{row.path}</td>
                            <td className="p-5">
                              <span className={`px-4 py-1 rounded-full text-[10px] font-black ${row.status === 'ON' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                {row.status}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                   </tbody>
                 </table>
               </div>
            </div>
          </div>
        )}

        {section === 'safety' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-8">
            <div className="bg-red-600 text-white p-10 rounded-[3rem] shadow-2xl flex items-center gap-10">
               <ShieldAlert size={72} className="animate-pulse" />
               <div>
                  <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Essential safety standards</h3>
                  <p className="font-medium opacity-90 italic border-t border-red-400/30 pt-2 mt-2">Always follow standard electrical safety protocols during installation.</p>
               </div>
            </div>
            {[
              "Standard color coding must be followed: use red for phase and black for neutral wires.",
              "The live input must always be connected to the common terminal of the first switch.",
              "Ensure all traveler wire connections are properly tightened and insulated to prevent sparking.",
              "The load (lamp) should always be placed on the return path before the final neutral connection.",
              "Always use a neon tester to verify the presence of voltage before touching any metal terminals."
            ].map((rule, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-md border-2 border-slate-100 flex items-center gap-8 group hover:border-red-200 transition-colors">
                 <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center font-black flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">{i+1}</div>
                 <p className="text-slate-700 text-lg leading-snug font-medium">{rule}</p>
              </div>
            ))}
          </div>
        )}

        <footer className="mt-20 flex justify-between items-center pt-10 border-t-2 border-slate-200">
          <button onClick={() => setIdx(idx - 1)} disabled={idx === 0} className={`px-10 py-5 rounded-[2rem] font-black uppercase text-xs tracking-widest flex items-center gap-3 transition-all ${idx === 0 ? 'opacity-0' : 'bg-white shadow-xl hover:bg-slate-50 border-2 border-slate-100'}`}>
            <ArrowLeft size={18} /> Back
          </button>
          
          <div className="flex gap-4">
            {SECTIONS.map((_, i) => <div key={i} className={`h-3 rounded-full transition-all duration-500 ${i === idx ? 'w-12 bg-red-500' : 'w-3 bg-slate-200'}`} />)}
          </div>

          <button onClick={() => idx < SECTIONS.length - 1 ? setIdx(idx + 1) : null} className={`px-14 py-5 rounded-[2rem] font-black uppercase text-xs tracking-[0.2em] flex items-center gap-3 transition-all shadow-2xl ${idx === SECTIONS.length - 1 ? 'bg-green-100 text-green-600' : 'bg-red-600 text-white hover:bg-red-700'}`}>
            {idx === SECTIONS.length - 1 ? <><CheckCircle size={22} /> FINISHED</> : <>Next <ArrowRight size={22} /></>}
          </button>
        </footer>
      </main>
    </div>
  );
}
