"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Globe, 
  FileText, 
  ShieldAlert, 
  Users, 
  BarChart3, 
  Share2, 
  Star, 
  Bell, 
  Zap, 
  GraduationCap, 
  Cpu,
  ArrowLeft,
  ArrowRight,
  MessageSquare,
  Search,
  Maximize,
  Minimize,
  Menu,
  X,
  Crown,
  Lightbulb,
  Building2,
  ChevronDown,
  CheckCircle2,
  Camera,
  ArrowUpRight,
  ArrowDownRight,
  Database,
  Clock,
  Calendar as CalendarIcon,
  ShieldCheck,
  Quote,
  Smartphone,
  Monitor,
  Book,
  Heart,
  Mic,
  Coffee,
  Play
} from "lucide-react";
import styles from "./slide.module.css";
import slidesData from "./data.json";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  body: string;
  layout: string;
  icon?: string;
}

export default function SlidePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const slides = slidesData as Slide[];
  const totalSlides = slides.length;

  function handleNext() {
    setDirection("next");
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  }

  function handlePrev() {
    setDirection("prev");
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }

  function jumpToSlide(index: number) {
    setDirection(index > currentSlide ? "next" : "prev");
    setCurrentSlide(index);
    setShowSidebar(false);
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setDirection("next");
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setDirection("prev");
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Escape") {
        setShowSidebar(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [totalSlides]);

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const slide = slides[currentSlide];
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  // Parse inline markdown: **bold**, *italic*, `code`
  const parseInlineMarkdown = (text: string): React.ReactNode => {
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**'))
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      if (part.startsWith('*') && part.endsWith('*'))
        return <em key={i}>{part.slice(1, -1)}</em>;
      if (part.startsWith('`') && part.endsWith('`'))
        return <code key={i} style={{ background: 'rgba(142,21,64,0.08)', padding: '0.1em 0.4em', borderRadius: '4px', fontSize: '0.9em' }}>{part.slice(1, -1)}</code>;
      return part;
    });
  };

  const renderContent = (content: string) => {
    if (content.startsWith("<ul>")) {
      const listItems = content.replace(/<\/?ul>/g, '').split('</li>').filter(i => i.trim() !== "");
      return (
        <ul>
          {listItems.map((item, index) => {
            const cleanItem = item.replace(/<li>/, '');
            const boldParsed = cleanItem.replace(/<b>(.*?)<\/b>/g, '**$1**');
            return (
              <li key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                {parseInlineMarkdown(boldParsed)}
              </li>
            );
          })}
        </ul>
      );
    }
    if (content.includes("1.") || content.includes("•")) {
      const items = content.split("\n").filter(i => i.trim() !== "");
      return (
        <ul>
          {items.map((item, index) => (
            <li key={index} style={{ animationDelay: `${index * 0.15}s` }}>{parseInlineMarkdown(item.replace(/^[•\d\.\s]+/, ""))}</li>
          ))}
        </ul>
      );
    }
    return <p>{parseInlineMarkdown(content)}</p>;
  };

  const renderChallenges = (content: string) => {
    const items = content.replace(/<\/?ul>/g, '').split('</li>').filter(i => i.trim() !== "");
    const challengeIcons = [<Zap key="zap" />, <MessageSquare key="msg" />, <Search key="search" />];
    
    return (
      <div className={styles.challengesGrid}>
        {items.map((item, index) => {
          const cleanItem = item.replace(/<li>/, '');
          const titleMatch = cleanItem.match(/<b>(.*?)<\/b>/);
          const title = titleMatch ? titleMatch[1].replace(':', '') : "Tantangan";
          const rawDesc = cleanItem.replace(/<b>.*?<\/b>:?/, '').trim();
          
          return (
            <div key={index} className={styles.challengeCard} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className={styles.challengeIcon}>
                {challengeIcons[index]}
              </div>
              <h3>{title}</h3>
              <p>{parseInlineMarkdown(rawDesc)}</p>
            </div>
          );
        })}
      </div>
    );
  };

  // Universal Smart Cards Layout
  const renderCards = (content: string) => {
    const rawItems = content.replace(/<\/?ul>/g, "").split("</li>").filter(i => i.trim() !== "");
    const items = rawItems.map(item => {
      const clean = item.replace(/<li>/, "");
      const titleMatch = clean.match(/<b>(.*?)<\/b>/);
      const title = titleMatch ? titleMatch[1].replace(":", "") : "";
      
      // Preserve newlines if any
      const rawDesc = clean.replace(/<b>.*?<\/b>:?/, "").replace(/<br\s*\/?>/g, "\n").trim();
      
      let Icon = CheckCircle2;
      const t = title.toLowerCase();
      // Smart Icon Mapping Contextual
      if (t.includes("hukum") || t.includes("patroli") || t.includes("uu ") || t.includes("hoaks") || t.includes("aman") || t.includes("krisis")) Icon = ShieldAlert;
      else if (t.includes("tim") || t.includes("warga") || t.includes("opd") || t.includes("relawan") || t.includes("masyarakat") || t.includes("kader")) Icon = Users;
      else if (t.includes("digital") || t.includes("siber") || t.includes("media") || t.includes("kanal") || t.includes("platform")) Icon = Globe;
      else if (t.includes("cepat") || t.includes("respon") || t.includes("kilat") || t.includes("langsung")) Icon = Zap;
      else if (t.includes("edukasi") || t.includes("training") || t.includes("akademi") || t.includes("buku")) Icon = GraduationCap;
      else if (t.includes("data") || t.includes("info") || t.includes("fakta") || t.includes("tulisan") || t.includes("laporan")) Icon = FileText;
      else if (t.includes("pimpinan") || t.includes("kepala") || t.includes("wali kota") || t.includes("otoritas")) Icon = Crown;

      return { title, desc: rawDesc, Icon };
    });

    return (
      <div className={styles.universalGrid}>
        {items.map((item, i) => (
          <div key={i} className={styles.universalCard} style={{ animationDelay: `${i * 0.15}s` }}>
            <div className={styles.universalIconBox}>
              <item.Icon size={28} strokeWidth={2} />
            </div>
            <strong className={styles.universalTitle}>{item.title}</strong>
            <p className={styles.universalDesc}>{parseInlineMarkdown(item.desc)}</p>
          </div>
        ))}
      </div>
    );
  };

  // Orgchart renderer for Slide 4 (One-Gate Policy)
  const renderOrgchart = (content: string) => {
    const tiers = [
      {
        icon: <Crown size={22} strokeWidth={2} />,
        label: "WALI KOTA & WAKIL WALI KOTA",
        role: "Pemegang Otoritas & Penentu Kebijakan",
        badge: "KOMANDO TERTINGGI",
        accent: "var(--primary)",
      },
      {
        icon: <Lightbulb size={22} strokeWidth={2} />,
        label: "TIM KHUSUS KOMUNIKASI",
        role: "Think-Tank Strategis & Grand Narrative",
        badge: "PERENCANA",
        accent: "#6b1735",
      },
      {
        icon: <Share2 size={22} strokeWidth={2} />,
        label: "DISKOMINFO",
        role: "Lengan Eksekutor & Distributor Konten",
        badge: "EKSEKUTOR",
        accent: "#8c3755",
      },
      {
        icon: <Building2 size={22} strokeWidth={2} />,
        label: "OPD LINTAS SEKTOR",
        role: "Implementasi Teknis Terkoordinasi",
        badge: "IMPLEMENTOR",
        accent: "#a85070",
      },
      {
        icon: <Users size={22} strokeWidth={2} />,
        label: "MASYARAKAT KOTA SUKABUMI",
        role: "Penerima Pesan & Agen Partisipasi",
        badge: "AUDIENS",
        accent: "#D4AF37",
      },
    ];

    const rawItems = content.replace(/<\/?ul>/g, "").split("</li>").filter(i => i.trim() !== "");
    const principles = rawItems.map((item) => {
      const clean = item.replace(/<li>/, "");
      const titleMatch = clean.match(/<b>(.*?)<\/b>/);
      const title = titleMatch ? titleMatch[1].replace(":", "") : "";
      const boldParsed = clean.replace(/<b>(.*?)<\/b>/g, "**$1**");
      const desc = boldParsed.replace(/<b>.*?<\/b>:?/, "").trim();
      return { title, desc };
    });

    return (
      <div className={styles.orgchartWrapper}>
        {/* Left: Hierarchy Flow */}
        <div className={styles.orgchartFlow}>
          {tiers.map((tier, i) => (
            <div key={i} className={styles.orgchartTierGroup}>
              <div
                className={styles.orgchartTier}
                style={{ "--tier-accent": tier.accent } as React.CSSProperties}
              >
                <div className={styles.orgchartIconBox}>{tier.icon}</div>
                <div className={styles.orgchartInfo}>
                  <span className={styles.orgchartBadge}>{tier.badge}</span>
                  <span className={styles.orgchartLabel}>{tier.label}</span>
                  <span className={styles.orgchartRole}>{tier.role}</span>
                </div>
              </div>
              {i < tiers.length - 1 && (
                <div className={styles.orgchartArrow}>
                  <ChevronDown size={16} strokeWidth={2.5} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right: Key Principles */}
        <div className={styles.orgchartPrinciples}>
          <div className={styles.orgchartPrinciplesTitle}>Prinsip Utama</div>
          {principles.map((p, i) => (
            <div key={i} className={styles.orgchartPrinciple}>
              <div className={styles.orgchartPrincipleCheck}>
                <CheckCircle2 size={18} strokeWidth={2} />
              </div>
              <div>
                <strong className={styles.orgchartPrincipleTitle}>{p.title}</strong>
                <p className={styles.orgchartPrincipleDesc}>{parseInlineMarkdown(p.desc)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Renderer for Slide 5 (Formula 60-30-10)
  const renderFormula = (content: string) => {
    const rawItems = content.replace(/<\/?ul>/g, "").split("</li>").filter(i => i.trim() !== "");
    const items = rawItems.map(item => {
      const clean = item.replace(/<li>/, "");
      const percentMatch = clean.match(/<b>(\d+)%/);
      const percent = percentMatch ? percentMatch[1] : "0";
      const titleMatch = clean.match(/<b>.*?% (.*?)<\/b>/);
      const title = titleMatch ? titleMatch[1].replace(":", "") : "";
      const desc = clean.replace(/<b>.*?<\/b>:?/, "").trim();
      return { percent, title, desc };
    });

    return (
      <div className={styles.formulaLayout}>
        <div className={styles.formulaImageWrapper}>
          <img src="/formula.png" alt="Distribusi Konten 60-30-10" className={styles.formulaImage} />
        </div>
        <div className={styles.formulaWrapper}>
          {items.map((item, i) => (
            <div 
              key={i} 
              className={`${styles.formulaCard} ${styles.staggerItem}`} 
              style={{ animationDelay: `${(i + 1) * 150}ms` }}
            >
              <div className={styles.formulaCircle}>
                <span className={styles.formulaPercent}>{item.percent}%</span>
              </div>
              <div className={styles.formulaContent}>
                <strong className={styles.formulaTitle}>{item.title}</strong>
                <div className={styles.formulaProgressBg}>
                  <div className={styles.formulaProgressFill} style={{ width: `${item.percent}%`, animationDelay: `${(i + 1) * 150 + 200}ms` }} />
                </div>
                <p className={styles.formulaDesc}>{parseInlineMarkdown(item.desc)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Renderer for Slide 7 & 6 (Synergy & Social)
  const renderSynergy = (content: string, type?: string) => {
    const rawItems = content.replace(/<\/?ul>/g, "").split("</li>").filter(i => i.trim() !== "");
    const items = rawItems.map(item => {
      const clean = item.replace(/<li>/, "");
      const titleMatch = clean.match(/<b>(.*?)<\/b>/);
      const title = titleMatch ? titleMatch[1].replace(":", "") : "";
      const desc = clean.replace(/<b>.*?<\/b>:?/, "").trim();
      
      let Icon = Star;
      if (title.includes("City Info")) Icon = Smartphone;
      else if (title.includes("Eksekutif")) Icon = Coffee;
      else if (title.includes("Briefing")) Icon = Mic;
      else if (title.includes("Nasional")) Icon = Globe;
      else if (title.includes("Instagram")) Icon = Camera;
      else if (title.includes("TikTok")) Icon = Zap;
      else if (title.includes("Facebook")) Icon = Users;
      else if (title.includes("YouTube") || title.includes("Youtube")) Icon = Play;
      else if (title.includes("Twitter") || title.includes("X:")) Icon = MessageSquare;

      return { title, desc, Icon };
    });

    const imgSrc = type === "social_synergy" ? "/social-media-command.png" : "/media-synergy.png";
    const imgAlt = type === "social_synergy" ? "Visualisasi Command Center Media Sosial" : "Visualisasi Sinergi Media";

    return (
      <div className={styles.formulaLayout}>
        <div className={styles.formulaImageWrapper}>
          <img src={imgSrc} alt={imgAlt} className={styles.formulaImage} />
        </div>
        <div className={styles.formulaWrapper}>
          {items.map((item, i) => (
            <div 
              key={i} 
              className={`${styles.synergyCard} ${styles.staggerItem}`}
              style={{ animationDelay: `${(i + 1) * 150}ms` }}
            >
              <div className={styles.synergyIconBox}>
                <item.Icon size={24} />
              </div>
              <div className={styles.synergyContent}>
                <strong className={styles.synergyTitle}>{item.title}</strong>
                <p className={styles.synergyDesc}>{parseInlineMarkdown(item.desc)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Renderer for Slide 6 & 8 (Social Media & KOL)
  const renderSocial = (content: string, type: string) => {
    const rawItems = content.replace(/<\/?ul>/g, "").split("</li>").filter(i => i.trim() !== "");
    const items = rawItems.map(item => {
      const clean = item.replace(/<li>/, "");
      const platformMatch = clean.match(/<b>(.*?)<\/b>/);
      const platform = platformMatch ? platformMatch[1].replace(":", "") : "";
      const desc = clean.replace(/<b>.*?<\/b>:?/, "").trim();
      
      let Icon = Star; 
      
      if (platform.includes("Instagram")) Icon = Camera;
      if (platform.includes("TikTok") || platform.includes("Reels")) Icon = Zap;
      if (platform.includes("Facebook")) Icon = Globe;
      if (platform.includes("KOL") || platform.includes("Kreator")) Icon = Users;

      return { platform, desc, Icon };
    });

    return (
      <div className={styles.socialGrid}>
        {items.map((item, i) => (
          <div key={i} className={styles.socialCard}>
            <div className={styles.socialHeader}>
              <div className={styles.socialIconBox}>
                <item.Icon size={24} />
              </div>
              <strong className={styles.socialPlatform}>{item.platform}</strong>
            </div>
            <p className={styles.socialDesc}>{parseInlineMarkdown(item.desc)}</p>
          </div>
        ))}
      </div>
    );
  };

  // Renderer for Slide 11 (Sentiment Analysis)
  const renderSentiment = (content: string) => {
    const rawItems = content.replace(/<\/?ul>/g, "").split("</li>").filter(i => i.trim() !== "");
    const items = rawItems.map(item => {
      const clean = item.replace(/<li>/, "");
      const typeMatch = clean.match(/<b>(.*?)\(/);
      const type = typeMatch ? typeMatch[1].trim() : "";
      const labelMatch = clean.match(/\((.*?)\)/);
      const label = labelMatch ? labelMatch[1] : "";
      const desc = clean.replace(/<b>.*?<\/b>:?/, "").replace(/\(.*?\)/, "").trim();
      
      let status: 'positive' | 'negative' | 'neutral' = 'neutral';
      let Icon = ChevronDown; // fallback
      if (type.includes("Positif")) { status = 'positive'; Icon = ArrowUpRight; }
      if (type.includes("Negatif")) { status = 'negative'; Icon = ArrowDownRight; }

      return { type, label, desc, status, Icon };
    });

    return (
      <div className={styles.sentimentWrapper}>
        {items.map((item, i) => (
          <div key={i} className={`${styles.sentimentCard} ${styles[item.status]}`}>
            <div className={styles.sentimentIcon}>
              <item.Icon size={32} />
            </div>
            <div className={styles.sentimentInfo}>
              <div className={styles.sentimentHeader}>
                <strong className={styles.sentimentType}>{item.type}</strong>
                <span className={styles.sentimentLabel}>{item.label}</span>
              </div>
              <p className={styles.sentimentDesc}>{parseInlineMarkdown(item.desc)}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Renderer for Slide 12 (Big Data)
  const renderBigData = (content: string) => {
    const rawItems = content.replace(/<\/?ul>/g, "").split("</li>").filter(i => i.trim() !== "");
    const items = rawItems.map(item => {
      const clean = item.replace(/<li>/, "");
      const titleMatch = clean.match(/<b>(.*?)<\/b>/);
      const title = titleMatch ? titleMatch[1].replace(":", "") : "";
      const desc = clean.replace(/<b>.*?<\/b>:?/, "").trim();
      return { title, desc };
    });

    return (
      <div className={styles.universalGrid}>
        {items.map((item, n, arr) => (
          <div 
            key={n} 
            className={`${styles.universalCard} ${styles.staggerItem}`}
            style={{ animationDelay: `${(n + 1) * 100}ms` }}
          >
            <div className={styles.universalIconBox}>
              <Database size={20} />
            </div>
            <div className={styles.dataContent}>
              <strong className={styles.dataTitle}>{item.title}</strong>
              <p className={styles.dataDesc}>{parseInlineMarkdown(item.desc)}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Renderer for Slide 15 (Golden Time Timeline)
  const renderTimeline = (content: string) => {
    const rawItems = content.replace(/<\/?ul>/g, "").split("</li>").filter(i => i.trim() !== "");
    const items = rawItems.map(item => {
      const clean = item.replace(/<li>/, "");
      const timeMatch = clean.match(/<b>(.*?)<\/b>/);
      const time = timeMatch ? timeMatch[1].replace(":", "") : "";
      const desc = clean.replace(/<b>.*?<\/b>:?/, "").trim();
      return { time, desc };
    });

    return (
      <div className={styles.timelineWrapper}>
        {items.map((item, i) => (
          <div key={i} className={styles.timelineItem}>
            <div className={styles.timelineLeft}>
              <div className={styles.timelineCircle}>
                <Clock size={16} />
              </div>
              {i < items.length - 1 && <div className={styles.timelineLine} />}
            </div>
            <div className={styles.timelineContent}>
              <strong className={styles.timelineTime}>{item.time}</strong>
              <p className={styles.timelineDesc}>{parseInlineMarkdown(item.desc)}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Renderer for Slide 17 (Counter-Narrative)
  const renderCounter = (content: string) => {
    const rawItems = content.replace(/<\/?ul>/g, "").split("</li>").filter(i => i.trim() !== "");
    const items = rawItems.map(item => {
      const clean = item.replace(/<li>/, "");
      const titleMatch = clean.match(/<b>(.*?)<\/b>/);
      const title = titleMatch ? titleMatch[1].replace(":", "") : "";
      const desc = clean.replace(/<b>.*?<\/b>:?/, "").trim();
      return { title, desc };
    });

    return (
      <div className={styles.counterGrid}>
        {items.map((item, i) => (
          <div key={i} className={styles.counterCard}>
            <div className={styles.counterHeader}>
              <ShieldCheck size={20} className={styles.counterIcon} />
              <strong className={styles.counterTitle}>{item.title}</strong>
            </div>
            <p className={styles.counterDesc}>{parseInlineMarkdown(item.desc)}</p>
          </div>
        ))}
      </div>
    );
  };

  // Renderer for Slide 18 (Calendar/Isu Tematik)
  const renderCalendar = (content: string) => {
    const rawItems = content.replace(/<\/?ul>/g, "").split("</li>").filter(i => i.trim() !== "");
    const items = rawItems.map(item => {
      const clean = item.replace(/<li>/, "");
      const titleMatch = clean.match(/<b>(.*?)<\/b>/);
      const title = titleMatch ? titleMatch[1].replace(":", "") : "";
      const desc = clean.replace(/<b>.*?<\/b>:?/, "").trim();
      return { title, desc };
    });

    return (
      <div className={styles.calendarGrid}>
        {items.map((item, i) => (
          <div key={i} className={styles.calendarCard}>
            <div className={styles.calendarTop}>
              <CalendarIcon size={20} />
              <strong className={styles.calendarTitle}>{item.title}</strong>
            </div>
            <div className={styles.calendarBody}>
              <p className={styles.calendarDesc}>{parseInlineMarkdown(item.desc)}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Renderer for Slide 19 (Focus Statement)
  const renderFocus = (content: string) => {
    return (
      <div className={styles.focusWrapper}>
        <div className={styles.focusQuote}>
          <Quote size={40} className={styles.focusQuoteIcon} />
          <p className={styles.focusText}>{parseInlineMarkdown(content)}</p>
        </div>
        <div className={styles.focusDecoration} />
      </div>
    );
  };

  // Renderer for Slide 20 (Visual Storytelling)
  const renderStory = (content: string) => {
    const rawItems = content.replace(/<\/?ul>/g, "").split("</li>").filter(i => i.trim() !== "");
    const items = rawItems.map(item => {
      const clean = item.replace(/<li>/, "");
      const titleMatch = clean.match(/<b>(.*?)<\/b>/);
      const title = titleMatch ? titleMatch[1].replace(":", "") : "";
      const desc = clean.replace(/<b>.*?<\/b>:?/, "").trim();
      
      let Icon = Camera;
      if (title.includes("Warga")) Icon = Heart;
      if (title.includes("Vlog")) Icon = Smartphone;

      return { title, desc, Icon };
    });

    return (
      <div className={styles.storyGrid}>
        {items.map((item, i) => (
          <div key={i} className={styles.storyCard}>
            <div className={styles.storyIconBox}>
              <item.Icon size={24} />
            </div>
            <strong className={styles.storyTitle}>{item.title}</strong>
            <p className={styles.storyDesc}>{parseInlineMarkdown(item.desc)}</p>
          </div>
        ))}
      </div>
    );
  };

  // Renderer for Slide 21 (Leadership Media)
  const renderLeadership = (content: string) => {
    const rawItems = content.replace(/<\/?ul>/g, "").split("</li>").filter(i => i.trim() !== "");
    const items = rawItems.map(item => {
      const clean = item.replace(/<li>/, "");
      const titleMatch = clean.match(/<b>(.*?)<\/b>/);
      const title = titleMatch ? titleMatch[1].replace(":", "") : "";
      const desc = clean.replace(/<b>.*?<\/b>:?/, "").trim();
      return { title, desc };
    });

    return (
      <div className={styles.leadershipList}>
        {items.map((item, i) => (
          <div key={i} className={styles.leadershipItem}>
            <div className={styles.leadershipBullet} />
            <div className={styles.leadershipContent}>
              <strong className={styles.leadershipTitle}>{item.title}</strong>
              <p className={styles.leadershipDesc}>{parseInlineMarkdown(item.desc)}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Renderer for Slide 22-23 (Digital Services)
  const renderService = (content: string) => {
    const rawItems = content.replace(/<\/?ul>/g, "").split("</li>").filter(i => i.trim() !== "");
    const items = rawItems.map(item => {
      const clean = item.replace(/<li>/, "");
      const titleMatch = clean.match(/<b>(.*?)<\/b>/);
      const title = titleMatch ? titleMatch[1].replace(":", "") : "";
      const desc = clean.replace(/<b>.*?<\/b>:?/, "").trim();
      
      let Icon = Zap;
      if (title.includes("SUPER") || title.includes("Dashboard")) Icon = Monitor;
      if (title.includes("Cetek") || title.includes("Kesehatan")) Icon = Heart; // fallback to Heart

      return { title, desc, Icon };
    });

    return (
      <div className={styles.serviceGrid}>
        {items.map((item, i) => (
          <div key={i} className={styles.serviceCard}>
            <div className={styles.serviceIconWrap}>
              <item.Icon size={24} />
            </div>
            <div className={styles.serviceInfo}>
              <strong className={styles.serviceTitle}>{item.title}</strong>
              <p className={styles.serviceDesc}>{parseInlineMarkdown(item.desc)}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Renderer for Slide 24 (Academy)
  const renderAcademy = (content: string) => {
    const rawItems = content.replace(/<\/?ul>/g, "").split("</li>").filter(i => i.trim() !== "");
    const items = rawItems.map(item => {
      const clean = item.replace(/<li>/, "");
      const titleMatch = clean.match(/<b>(.*?)<\/b>/);
      const title = titleMatch ? titleMatch[1].replace(":", "") : "";
      const desc = clean.replace(/<b>.*?<\/b>:?/, "").trim();
      return { title, desc };
    });

    return (
      <div className={styles.academyBox}>
        {items.map((item, i) => (
          <div key={i} className={styles.academyItem}>
            <div className={styles.academyBadge}>
              <Book size={14} />
              MODUL {i+1}
            </div>
            <strong className={styles.academyTitle}>{item.title}</strong>
            <p className={styles.academyDesc}>{parseInlineMarkdown(item.desc)}</p>
          </div>
        ))}
      </div>
    );
  };

  // Renderer for Slide 27 (Budget)
  const renderBudget = (content: string) => {
    const rawItems = content.replace(/<\/?ul>/g, "").split("</li>").filter(i => i.trim() !== "");
    const items = rawItems.map(item => {
      const clean = item.replace(/<li>/, "");
      const titleMatch = clean.match(/<b>(.*?)<\/b>/);
      const title = titleMatch ? titleMatch[1].replace(":", "") : "";
      const desc = clean.replace(/<b>.*?<\/b>:?/, "").trim();
      return { title, desc };
    });

    return (
      <div className={styles.budgetGrid}>
        {items.map((item, i) => (
          <div key={i} className={styles.budgetCard}>
            <div className={styles.budgetIconCircle}>
              <Database size={20} />
            </div>
            <div className={styles.budgetContent}>
              <strong className={styles.budgetTitle}>{item.title}</strong>
              <p className={styles.budgetDesc}>{parseInlineMarkdown(item.desc)}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Renderer for Slide 28 (KPI Grid)
  const renderKPI = (content: string) => {
    const rawItems = content.replace(/<\/?ul>/g, "").split("</li>").filter(i => i.trim() !== "");
    const items = rawItems.map(item => {
      const clean = item.replace(/<li>/, "");
      const titleMatch = clean.match(/<b>(.*?)<\/b>/);
      const title = titleMatch ? titleMatch[1].replace(":", "") : "";
      const desc = clean.replace(/<b>.*?<\/b>:?/, "").trim();
      return { title, desc };
    });

    return (
      <div className={styles.kpiGrid}>
        {items.map((item, i) => (
          <div key={i} className={styles.kpiCard}>
            <div className={styles.kpiNumber}>0{i+1}</div>
            <strong className={styles.kpiTitle}>{item.title}</strong>
            <div className={styles.kpiDivider} />
            <p className={styles.kpiDesc}>{parseInlineMarkdown(item.desc)}</p>
          </div>
        ))}
      </div>
    );
  };

  // Renderer for Slide 30 (Crisis Flowchart)
  const renderCrisisFlow = (content: string) => {
    const rawItems = content.replace(/<\/?ul>/g, "").split("</li>").filter(i => i.trim() !== "");
    const items = rawItems.map(item => {
      const clean = item.replace(/<li>/, "");
      const titleMatch = clean.match(/<b>(.*?)<\/b>/);
      const title = titleMatch ? titleMatch[1].replace(":", "") : "";
      const desc = clean.replace(/<b>.*?<\/b>:?/, "").trim();
      return { title, desc };
    });

    const icons = [Zap, Search, Users, Share2, ShieldAlert];

    return (
      <div className={styles.flowWrapper}>
        {items.map((item, i) => {
          const StepIcon = icons[i] || CheckCircle2;
          return (
            <div key={i} className={styles.flowStep}>
              <div className={styles.flowLeft}>
                <div className={styles.flowConnector}>
                  <div className={styles.flowIconBox}>
                    <StepIcon size={20} />
                  </div>
                  {i < items.length - 1 && <div className={styles.flowLine} />}
                </div>
              </div>
              <div className={styles.flowRight}>
                <div className={styles.flowCard}>
                  <strong className={styles.flowTitle}>{item.title}</strong>
                  <p className={styles.flowDesc}>{parseInlineMarkdown(item.desc)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Modern, Consistent Lucide Icons
  const renderIcon = (iconName: string) => {
    const iconProps = { size: 72, strokeWidth: 2 };
    switch (iconName) {
      case "Users": return <Users {...iconProps} />;
      case "Share2": return <Share2 {...iconProps} />;
      case "Star": return <Star {...iconProps} />;
      case "Bell": return <Bell {...iconProps} />;
      case "BarChart3": return <BarChart3 {...iconProps} />;
      case "ShieldAlert": return <ShieldAlert {...iconProps} />;
      case "FileText": return <FileText {...iconProps} />;
      case "Zap": return <Zap {...iconProps} />;
      case "GraduationCap": return <GraduationCap {...iconProps} />;
      case "Globe": return <Globe {...iconProps} />;
      case "Cpu":
      case "cpu": return <Cpu {...iconProps} />;  // handle both cases
      default: return null;
    }
  };

  return (
    <>
      {/* Sidebar Overlay */}
      {showSidebar && (
        <div className={styles.sidebarOverlay} onClick={() => setShowSidebar(false)} />
      )}

      {/* Sidebar Navigation */}
      <aside className={`${styles.sidebar} ${showSidebar ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <span>Daftar Slide</span>
          <button className={styles.sidebarClose} onClick={() => setShowSidebar(false)}>
            <X size={18} />
          </button>
        </div>
        <div className={styles.sidebarList}>
          {slides.map((s, i) => (
            <button
              key={s.id}
              className={`${styles.sidebarItem} ${i === currentSlide ? styles.sidebarItemActive : ''}`}
              onClick={() => jumpToSlide(i)}
            >
              <span className={styles.sidebarNum}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.sidebarTitle}>{s.title}</span>
            </button>
          ))}
        </div>
      </aside>

      <div className={styles.progressContainer}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      </div>

      <header className={styles.formalHeader}>
        <div className={styles.headerLeft}>
          <button className={styles.menuBtn} onClick={() => setShowSidebar(true)} title="Navigasi Slide">
            <Menu size={20} />
          </button>
          <div className={styles.logoPlaceholder}>
            <Image src="/Logo_Sukabumi.png" alt="Logo Sukabumi" width={45} height={45} className={styles.logoImg} />
          </div>
          <div className={styles.headerText}>
            <div className={styles.orgName}>PEMERINTAH KOTA SUKABUMI</div>
            <div className={styles.docTitle}>Buku Putih Strategi Komunikasi Publik</div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.slideNumberBadge}>LEMBAR {currentSlide + 1} / {totalSlides}</div>
          <button className={styles.fullscreenBtn} onClick={toggleFullscreen} title={isFullscreen ? 'Keluar Fullscreen' : 'Mode Fullscreen'}>
            {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
          </button>
        </div>
      </header>

      <nav className={styles.nav}>
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentSlide === 0}
          className={styles.btn}
        >
          <ArrowLeft size={18} /> Sebelumnya
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={currentSlide === totalSlides - 1}
          className={`${styles.btn} ${styles.primaryBtn}`}
        >
          Selanjutnya <ArrowRight size={18} />
        </button>
      </nav>

      <footer className={styles.formalFooter}>
        <div>DOKUMEN STRATEGIS &mdash; RAHASIA NEGARA</div>
        <div>&copy; 2026 PEMERINTAH KOTA SUKABUMI</div>
      </footer>

      <main className={styles.container}>
        <Link href="/" className={styles.backBtn}>
          &larr; Kembali ke Beranda
        </Link>

        <div
          key={currentSlide}
          className={`${styles.slideCard} ${currentSlide === 0 ? styles.coverCard : ""} ${styles[`layout_${slide.layout}`] || ""} ${styles[`anim_${direction}`]}`}
        >
          {currentSlide !== 0 && (
            <div className={styles.slidePageWatermark}>
              {String(currentSlide + 1).padStart(2, "0")}
            </div>
          )}

          {currentSlide === 0 ? (
            <div className={styles.heroCover}>
              <div className={styles.heroTextContent}>
                <Image 
                  src="/Logo_Sukabumi.png" 
                  alt="Logo Sukabumi" 
                  width={120} 
                  height={120} 
                  className={styles.heroSmallLogo} 
                />
                <h1 className={styles.slideTitle}>{slide.title}</h1>
                <h2 className={styles.slideSubtitle}>{slide.subtitle}</h2>
                <div className={styles.slideBody}>
                  {renderContent(slide.body)}
                </div>
              </div>

              <div className={styles.heroImageContainer}>
                <Image 
                  src="/Foto Walikota_Wakil.png" 
                  alt="Wali Kota dan Wakil Wali Kota Sukabumi" 
                  width={400} 
                  height={400} 
                  className={styles.leadersPhoto} 
                  priority 
                />
              </div>
            </div>
          ) : (
            <>
              {(slide.layout === "split" || slide.layout === "hero" || slide.layout === "closing" || slide.layout === "alert") && (
                <div className={styles.slideIcon}>
                  {renderIcon(slide.icon || "")}
                </div>
              )}
              <div className={styles.slideContent}>
                <h1 className={styles.slideTitle}>{slide.title}</h1>
                <h2 className={styles.slideSubtitle}>{slide.subtitle}</h2>
                <div className={styles.slideBody}>
                  {slide.layout === "challenges" 
                    ? renderChallenges(slide.body) 
                    : slide.layout === "cards"
                    ? renderCards(slide.body)
                    : slide.layout === "orgchart"
                    ? renderOrgchart(slide.body)
                    : slide.layout === "formula"
                    ? renderFormula(slide.body)
                    : slide.layout === "synergy" || slide.layout === "social_synergy"
                    ? renderSynergy(slide.body, slide.layout)
                    : slide.layout === "social" || slide.layout === "kol" || slide.layout === "media"
                    ? renderSocial(slide.body, slide.layout)
                    : slide.layout === "sentiment"
                    ? renderSentiment(slide.body)
                    : slide.layout === "bigdata"
                    ? renderBigData(slide.body)
                    : slide.layout === "timeline"
                    ? renderTimeline(slide.body)
                    : slide.layout === "counter"
                    ? renderCounter(slide.body)
                    : slide.layout === "calendar"
                    ? renderCalendar(slide.body)
                    : slide.layout === "focus"
                    ? renderFocus(slide.body)
                    : slide.layout === "story"
                    ? renderStory(slide.body)
                    : slide.layout === "leadership"
                    ? renderLeadership(slide.body)
                    : slide.layout === "service"
                    ? renderService(slide.body)
                    : slide.layout === "academy"
                    ? renderAcademy(slide.body)
                    : slide.layout === "budget"
                    ? renderBudget(slide.body)
                    : slide.layout === "kpi_grid"
                    ? renderKPI(slide.body)
                    : slide.layout === "crisis_flow"
                    ? renderCrisisFlow(slide.body)
                    : renderContent(slide.body)
                  }
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
