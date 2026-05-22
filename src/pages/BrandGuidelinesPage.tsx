import { motion } from 'motion/react';
import { 
  Activity, 
  Copy, 
  Check, 
  Type, 
  Palette, 
  Layout, 
  MousePointer2, 
  ChevronRight,
  ArrowRight,
  FileText,
  Image as ImageIcon,
  Component,
  Sparkles,
  Globe,
  Database,
  ShieldCheck,
  Target,
  Users,
  Download
} from 'lucide-react';
import { useState, useRef } from 'react';
import { PreFooterCTA } from '../components/PreFooterCTA';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const ColorSwatch = ({ name, hex, rgb, description }: { name: string; hex: string; rgb: string; description: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative">
      <div 
        className="w-full aspect-square rounded-[2rem] shadow-sm mb-4 border border-slate-100 dark:border-white/10 overflow-hidden cursor-pointer"
        onClick={copyToClipboard}
        style={{ backgroundColor: hex }}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 backdrop-blur-[2px]">
          {copied ? <Check className="text-white w-6 h-6" /> : <Copy className="text-white w-6 h-6" />}
        </div>
      </div>
      <div className="px-2">
        <h4 className="text-[14px] font-bold text-brand-950 dark:text-white mb-1 uppercase tracking-wider">{name}</h4>
        <div className="flex flex-col gap-0.5 mb-2">
          <p className="text-[11px] font-mono text-slate-400 uppercase leading-none">{hex}</p>
          <p className="text-[11px] font-mono text-slate-400 uppercase leading-none">{rgb}</p>
        </div>
        <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{description}</p>
      </div>
    </div>
  );
};

const BrandGuidelinesPage = () => {
  const [copiedFont, setCopiedFont] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const copyFont = (font: string) => {
    navigator.clipboard.writeText(font);
    setCopiedFont(font);
    setTimeout(() => setCopiedFont(null), 2000);
  };

  const downloadPDF = async () => {
    if (!contentRef.current) return;
    
    setIsDownloading(true);
    try {
      const element = contentRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('techknomatic-brand-guidelines.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="pt-[140px] bg-white dark:bg-brand-950 min-h-screen" ref={contentRef}>
      {/* Hero Section */}
      <section className="px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="text-center md:text-left">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-accent mb-4 block">Design System</span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-950 dark:text-white mb-6">
                Brand Guidelines
              </h1>
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium max-w-3xl leading-relaxed">
                Our visual identity is a reflection of our commitment to precision, clarity, and innovation. This system provides the foundation for building consistent and impactful experiences.
              </p>
            </div>
            <button 
              onClick={downloadPDF}
              disabled={isDownloading}
              className="flex items-center gap-3 px-8 py-4 bg-brand-950 dark:bg-white text-white dark:text-brand-950 text-[11px] font-black uppercase tracking-widest rounded-2xl hover:bg-brand-900 dark:hover:bg-slate-100 transition-all shadow-xl shadow-brand-950/10 disabled:opacity-50 disabled:cursor-wait shrink-0 h-fit mb-2"
            >
              {isDownloading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 dark:border-brand-950/30 border-t-white dark:border-t-brand-950 rounded-full animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  Download PDF
                </>
              )}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-brand-900/40 border-y border-slate-100 dark:border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Activity className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="section-heading uppercase">Logo Usage</h2>
                </div>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8">
                  The Techknomatic logo represents the intersection of data (Activity icon) and human-centric engineering. It should be used consistently to build brand recognition and trust.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-[13px] font-bold text-slate-600 dark:text-slate-300">
                    <Check className="w-4 h-4 text-green-500" />
                    Maintain clear space around the logo
                  </div>
                  <div className="flex items-center gap-3 text-[13px] font-bold text-slate-600 dark:text-slate-300">
                    <Check className="w-4 h-4 text-green-500" />
                    Use direct monochromatic versions on complex backgrounds
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-brand-950 p-12 rounded-[3rem] border border-slate-100 dark:border-white/10 flex flex-col items-center justify-center gap-6 group">
                  <div className="flex items-center gap-3 scale-150 py-10">
                    <div className="w-10 h-10 bg-brand-950 rounded-xl flex items-center justify-center text-white">
                      <Activity className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-brand-950 uppercase">Techknomatic</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-accent transition-colors">Primary Light Theme</span>
                </div>
                <div className="bg-brand-950 p-12 rounded-[3rem] border border-white/5 flex flex-col items-center justify-center gap-6 group">
                  <div className="flex items-center gap-3 scale-150 py-10">
                    <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white">
                      <Activity className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white uppercase">Techknomatic</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-accent transition-colors">Primary Dark Theme</span>
                </div>
              </div>
              <div className="bg-accent p-12 rounded-[3rem] flex flex-col items-center justify-center gap-6 group">
                <div className="flex items-center gap-3 scale-150 py-10">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-accent">
                    <Activity className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-bold tracking-tight text-white uppercase">Techknomatic</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">Inverted Accent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg text-accent">
                  <Palette className="w-5 h-5" />
                </div>
                <h2 className="section-heading uppercase">Color Palette</h2>
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Our colors are rooted in trust and energy. Deep navy provides stability, while vibrant orange brings dynamic energy to actionable elements.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <ColorSwatch 
              name="Brand Primary" 
              hex="#020617" 
              rgb="rgb(2, 6, 23)"
              description="Used for main backgrounds, navigation, and primary text in light mode." 
            />
            <ColorSwatch 
              name="Brand Surface" 
              hex="#0a0f1d" 
              rgb="rgb(10, 15, 29)"
              description="A slightly lighter variant for card backgrounds and elevated surfaces." 
            />
            <ColorSwatch 
              name="Brand Utility" 
              hex="#0f172a" 
              rgb="rgb(15, 23, 42)"
              description="Used for borders, icons, and supporting structural elements in dark mode." 
            />
            <ColorSwatch 
              name="Accent Orange" 
              hex="#F17E21" 
              rgb="rgb(241, 126, 33)"
              description="Our action color for buttons, active links, and highlighting critical data." 
            />
            <ColorSwatch 
              name="Success" 
              hex="#22c55e" 
              rgb="rgb(34, 197, 94)"
              description="System feedback color for positive states, growth, and completion." 
            />
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="py-32 px-6 bg-slate-50 dark:bg-brand-925/40 border-y border-slate-100 dark:border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg text-accent">
                  <Type className="w-5 h-5" />
                </div>
                <h2 className="section-heading uppercase">Typography</h2>
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8">
                Clean, legible, and authoritative. Our primary typeface is Inter, designed for maximum clarity across all digital interfaces.
              </p>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-12">
              <div 
                className="group p-10 bg-white dark:bg-brand-950 rounded-[2.5rem] border border-slate-100 dark:border-white/10 hover:shadow-xl transition-all cursor-pointer relative overflow-hidden"
                onClick={() => copyFont('Inter')}
              >
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <span className="text-[12px] font-black uppercase tracking-widest text-slate-400">Primary Font (Sans-Serif)</span>
                  {copiedFont === 'Inter' && <Check className="w-4 h-4 text-accent" />}
                </div>
                <div className="space-y-12 relative z-10">
                  <div>
                    <h3 className="text-7xl font-bold tracking-tighter text-brand-950 dark:text-white font-sans mb-4">Inter</h3>
                    <p className="text-lg text-slate-500 font-medium font-sans mb-8">Authoritative and modern. Designed for maximum legibility.</p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-end justify-between border-b border-slate-100 dark:border-white/5 pb-4">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-accent block mb-2">Heading 1</span>
                        <h1 className="text-6xl font-bold tracking-tighter text-brand-950 dark:text-white">Main Headline</h1>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">72PX / 1.1LH / BOLD</span>
                    </div>

                    <div className="flex items-end justify-between border-b border-slate-100 dark:border-white/5 pb-4">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-accent block mb-2">Heading 2</span>
                        <h2 className="section-heading">Section Title</h2>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">40PX / 1.2LH / BOLD</span>
                    </div>

                    <div className="flex items-end justify-between border-b border-slate-100 dark:border-white/5 pb-4">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-accent block mb-2">Heading 3</span>
                        <h3 className="text-2xl font-bold tracking-tight text-brand-950 dark:text-white">Subsection Title</h3>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">24PX / 1.3LH / BOLD</span>
                    </div>

                    <div className="flex items-end justify-between border-b border-slate-100 dark:border-white/5 pb-4">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-accent block mb-2">Heading 4</span>
                        <h4 className="text-xl font-bold tracking-tight text-brand-950 dark:text-white">Minor Title</h4>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">20PX / 1.4LH / BOLD</span>
                    </div>

                    <div className="flex items-end justify-between border-b border-slate-100 dark:border-white/5 pb-4">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-accent block mb-2">Heading 5</span>
                        <h5 className="text-[16px] font-bold tracking-tight text-brand-950 dark:text-white uppercase">Small Heading</h5>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">16PX / 1.5LH / BOLD</span>
                    </div>

                    <div className="flex items-end justify-between border-b border-slate-100 dark:border-white/5 pb-4">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-accent block mb-2">Heading 6</span>
                        <h6 className="text-[14px] font-bold tracking-tight text-brand-950 dark:text-white uppercase">Accent Heading</h6>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">14PX / 1.6LH / BOLD</span>
                    </div>

                    <div className="flex items-end justify-between border-b border-slate-100 dark:border-white/5 pb-4">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-accent block mb-2">Body Text</span>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-lg">Our data-driven strategies empower decision-makers across the enterprise.</p>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">18PX / 1.6LH / MEDIUM</span>
                    </div>

                    <div className="flex items-end justify-between border-b border-slate-100 dark:border-white/5 pb-4">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-accent block mb-2">Caption Medium</span>
                        <p className="text-[14px] text-slate-400 font-bold uppercase tracking-wider">Strategic Overview 2026</p>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">14PX / 1.0LH / BOLD</span>
                    </div>

                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-accent block mb-2">Caption Small</span>
                        <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.2em]">Updated May 2026</p>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">11PX / 1.0LH / BLACK</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Elements Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent/10 rounded-lg text-accent">
                <MousePointer2 className="w-5 h-5" />
              </div>
              <h2 className="section-heading uppercase">Interactive Elements</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-8 p-10 bg-slate-50 dark:bg-brand-925/40 rounded-[3rem] border border-slate-100 dark:border-white/5">
              <h4 className="text-[12px] font-black uppercase tracking-widest text-slate-400">Buttons & Actions</h4>
              <div className="flex flex-col gap-4">
                <button className="px-8 py-3.5 bg-accent text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-lg shadow-accent/20 hover:bg-accent/90 transition-all text-center">Primary Action</button>
                <button className="px-8 py-3.5 bg-white dark:bg-white/10 text-brand-950 dark:text-white border border-slate-200 dark:border-white/10 text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-50 dark:hover:bg-white/20 transition-all text-center">Secondary Action</button>
                <button className="flex items-center gap-2 text-accent font-black uppercase tracking-widest text-[11px] group">
                  Text Interaction <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="space-y-8 p-10 bg-white dark:bg-brand-950 rounded-[3rem] border border-slate-100 dark:border-white/10 shadow-lg shadow-slate-100/50">
              <h4 className="text-[12px] font-black uppercase tracking-widest text-slate-400">Card System</h4>
              <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h5 className="text-[16px] font-bold text-brand-950 dark:text-white mb-2">Bento Pattern</h5>
                <p className="text-[13px] text-slate-500 leading-relaxed font-medium">Cards use generous rounding and subtle borders to create a soft, high-tech interface.</p>
              </div>
            </div>

            <div className="space-y-8 p-10 bg-slate-50 dark:bg-brand-925/40 rounded-[3rem] border border-slate-100 dark:border-white/5">
              <h4 className="text-[12px] font-black uppercase tracking-widest text-slate-400">Iconography Style</h4>
              <div className="grid grid-cols-4 gap-6">
                {[Sparkles, Globe, Activity, Layout, Database, ShieldCheck, Target, Users].map((Icon, idx) => (
                  <div key={idx} className="w-12 h-12 bg-white dark:bg-brand-950 rounded-xl flex items-center justify-center text-slate-400 border border-slate-100 dark:border-white/10 hover:text-accent transition-colors">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                ))}
              </div>
              <p className="text-[12px] text-slate-500 font-medium leading-relaxed uppercase tracking-wider">Using Lucide Icons - 1.5pt Stroke weight</p>
            </div>
          </div>
        </div>
      </section>

      <PreFooterCTA />
    </div>
  );
};

export default BrandGuidelinesPage;
