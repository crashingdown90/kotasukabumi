import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Share2, GraduationCap, ArrowRight } from "lucide-react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="animate-fade">
        <nav className={styles.nav}>
          <div className={styles.navBrand}>
            <Image src="/Logo_Sukabumi.png" alt="Logo Sukabumi" width={40} height={40} className={styles.logoImg} />
            <div className={`${styles.logo} text-gradient`}>Kota Sukabumi</div>
          </div>
          <div className={styles.navLinks}>
            <a href="#strategi" className={styles.navItem}>Strategi</a>
            <Link href="/slide" className={styles.navItem}>Paparan</Link>
            <a href="#kontak" className={styles.navItem}>Kontak</a>
          </div>
        </nav>

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>Layanan Informasi Publik</div>
            <h1 className="text-gradient">Strategi Komunikasi Publik:<br/>Walikota &amp; Wakil Walikota Sukabumi</h1>
            <p className={styles.subtitle}>
              Membangun Kepercayaan, Transparansi, dan Kedekatan Melalui Komunikasi Strategis yang Inovatif dan Responsif.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/slide" className={styles.primaryBtn}>
                Lihat Paparan Strategis
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <Image 
              src="/Foto Walikota_Wakil.png" 
              alt="Walikota &amp; Wakil Walikota Sukabumi" 
              width={800} 
              height={600} 
              className={styles.heroImg}
              priority
            />
          </div>
        </section>

        {/* Statistics Section */}
        <section className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>29</span>
            <span className={styles.statLabel}>Lembar Strategi</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>7</span>
            <span className={styles.statLabel}>Bidang Fokus</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>&lt; 2 Jam</span>
            <span className={styles.statLabel}>Target Golden Time</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>80%</span>
            <span className={styles.statLabel}>Target Sentimen Positif</span>
          </div>
        </section>

        {/* Feature Cards */}
        <section id="strategi" className={styles.features}>
          <div className="glass glass-hover">
            <div className={styles.featureIcon}>
              <ShieldCheck size={40} strokeWidth={2} />
            </div>
            <h3 className="text-gradient-secondary">Manajemen Sentiment &amp; Krisis</h3>
            <p>Strategi mitigasi dan pengelolaan narasi publik yang efektif untuk menjaga integritas institusi.</p>
          </div>
          <div className="glass glass-hover">
            <div className={styles.featureIcon}>
              <Share2 size={40} strokeWidth={2} />
            </div>
            <h3 className="text-gradient-secondary">Omnichannel Engagement</h3>
            <p>Kehadiran digital yang responsif di seluruh platform media sosial untuk menjangkau seluruh lapisan masyarakat.</p>
          </div>
          <div className="glass glass-hover">
            <div className={styles.featureIcon}>
              <GraduationCap size={40} strokeWidth={2} />
            </div>
            <h3 className="text-gradient-secondary">Literasi &amp; Edukasi Publik</h3>
            <p>Menyampaikan program kerja secara transparan dan menarik untuk meningkatkan pemahaman publik.</p>
          </div>
        </section>

        {/* CTA Section */}
        <section id="kontak" className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <h2>Siap Melihat Seluruh Strategi?</h2>
            <p>Buku Putih Komunikasi Publik H. Ayep Zaki &amp; H. Bobby Maulana tersedia dalam format paparan interaktif 29 slide.</p>
            <Link href="/slide" className={styles.primaryBtn}>
              Buka Paparan Strategis <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>© 2026 Pemerintah Kota Sukabumi. Strategi Komunikasi Publik Terpadu.</p>
        </footer>
      </div>
    </main>
  );
}
