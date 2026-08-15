/* Usta Atölyesi stili: sıcak kiremit vurgu, asimetrik editorial yerleşim, saha notu etiketleri ve doğrudan iletişim. */
import { useState } from "react";
import { ArrowUpRight, Check, ChevronDown, Hammer, Menu, Phone, Ruler, Sparkles, X } from "lucide-react";

const portrait = "/manus-storage/adem-aytekin-portrait_56ce12dd.jpg";
const texture = "/manus-storage/adem-aytekin-workshop-texture_9da4e52c.png";
const detail = "/manus-storage/adem-aytekin-detail_9e34b63f.png";
const mark = "/manus-storage/adem-aytekin-mark_b6c01796.png";

const services = [
  { number: "01", title: "Boya & Badana", text: "Duvarları doğru hazırlık, temiz uygulama ve dengeli renklerle yeniliyoruz.", icon: Sparkles },
  { number: "02", title: "Tamirat", text: "Ev ve iş yerindeki küçük büyük onarımları tek elde, düzenli biçimde çözüyoruz.", icon: Hammer },
  { number: "03", title: "Alçı İşleri", text: "Çatlak, pürüz ve yüzey bozukluklarını düzgün ve boyaya hazır hale getiriyoruz.", icon: Ruler },
  { number: "04", title: "Kırım İşleri", text: "Planlı, kontrollü ve mümkün olan en temiz şekilde söküm ve kırım yapıyoruz.", icon: Check },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Adem Aytekin Dekorasyon ana sayfa">
          <span className="brand-mark"><img src={mark} alt="Adem Aytekin Dekorasyon marka sembolü" /></span>
          <span><strong>ADEM AYTEKİN</strong><small>DEKORASYON &amp; TAMİRAT</small></span>
        </a>
        <nav className={menuOpen ? "desktop-nav is-open" : "desktop-nav"} aria-label="Ana menü">
          <button onClick={() => scrollTo("hizmetler")}>Hizmetler</button>
          <button onClick={() => scrollTo("hakkimizda")}>Usta hakkında</button>
          <button onClick={() => scrollTo("iletisim")}>İletişim</button>
        </nav>
        <a className="header-call" href="tel:+905555555555"><Phone size={16} /> <span>Hemen ara</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy reveal-up">
          <p className="eyebrow"><span /> EVİNİZ İÇİN USTA EMEĞİ</p>
          <h1>Duvarı yenilemekle kalmayız, <em>odayı yeniden kurarız.</em></h1>
          <p className="hero-lede">Boya, tamirat ve dekorasyon işlerinde temiz işçilik, açık iletişim ve yılların saha deneyimi.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => scrollTo("iletisim")}>İşinizi anlatın <ArrowUpRight size={18} /></button>
            <button className="text-link" onClick={() => scrollTo("hizmetler")}>Hizmetleri incele <span>↘</span></button>
          </div>
          <div className="hero-proof"><span>●</span><p>İşin başından sonuna<br /><strong>tek usta, net çözüm.</strong></p></div>
        </div>
        <div className="hero-visual reveal-up delay-1">
          <div className="hero-image-frame"><img src={texture} alt="Boyaya hazırlanan dokulu duvar yüzeyi ve usta işçiliği" /></div><div className="hero-portrait-inset"><img src={portrait} alt="Adem Aytekin, doğal bir portre" /><span>USTA / AA</span></div>
          <div className="hero-stamp"><span>AA</span><small>Atölye<br />damgası</small></div>
          <div className="measurement measurement-top">İŞÇİLİK / 01</div>
          <div className="measurement measurement-bottom">DÜZ • TEMİZ • ZAMANINDA</div>
        </div>
      </section>

      <section className="service-intro section-pad" id="hizmetler">
        <div className="section-label">01 / HİZMETLER</div>
        <div className="intro-grid"><h2>İşinizin ihtiyacı neyse, <span>oradan başlarız.</span></h2><p>Her mekânın ihtiyacı farklıdır. Önce dinler, sonra yüzeyi ve işi doğru planlarız. Böylece sürpriz değil, düzgün bir sonuç çıkar.</p></div>
        <div className="service-list">{services.map(({ number, title, text, icon: Icon }) => <article className="service-row" key={number}><span className="service-number">{number}</span><div className="service-icon"><Icon size={22} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="service-arrow" size={24} /></article>)}</div>
      </section>

      <section className="statement-section"><div className="statement-art"><img src={detail} alt="Alçı ve boya uygulamasında el işçiliği detayı" /><span className="field-mark">AA / 02</span></div><div className="statement-copy"><p className="eyebrow"><span /> SAHADAN NOT</p><h2>İyi iş, <em>detayda</em> belli olur.</h2><p>Koruma, hazırlık, doğru malzeme ve temizlik… İşin görünmeyen kısmını doğru yaptığımızda sonuç kendini gösterir.</p><button className="text-link light" onClick={() => scrollTo("iletisim")}>Ustanızla konuşun <span>↗</span></button></div></section>

      <section className="about-section section-pad" id="hakkimizda"><div className="about-photo"><img src={detail} alt="Duvar yüzeyinde özenli alçı ve boya uygulaması" /><span className="photo-caption">YÜZEY HAZIRLIĞI / ÖNCE</span></div><div className="about-copy"><div className="section-label">02 / USTA HAKKINDA</div><h2>İşinizi <span>özenle</span> teslim ederiz.</h2><p>Adem Aytekin olarak ev, ofis ve dükkânlarda boya badana, alçı, tamirat, dekorasyon ve kırım işlerini bir bütün olarak ele alıyoruz.</p><div className="about-points"><div><strong>01</strong><span>Temiz çalışma</span></div><div><strong>02</strong><span>Net fiyatlandırma</span></div><div><strong>03</strong><span>Zamanında teslim</span></div></div></div></section>

      <section className="contact-section" id="iletisim"><div className="contact-inner"><div className="contact-title"><img src={mark} alt="Adem Aytekin atölye damgası" /><p className="eyebrow"><span /> BİR İŞİNİZ Mİ VAR?</p><h2>İşi konuşalım,<br /><em>birlikte netleştirelim.</em></h2></div><div className="contact-actions"><a className="button button-light" href="tel:+905555555555"><Phone size={18} /> 0555 555 55 55</a><a className="whatsapp-link" href="https://wa.me/905555555555" target="_blank" rel="noreferrer">WhatsApp’tan yazın <ArrowUpRight size={17} /></a><small>Fotoğraf göndererek hızlıca bilgi alabilirsiniz.</small></div></div></section>

      <footer className="site-footer"><div className="footer-brand"><span className="brand-mark small"><img src={mark} alt="" /></span><strong>ADEM AYTEKİN</strong></div><p>Boya • Tamirat • Dekorasyon • Alçı • Kırım</p><span>© 2026 Adem Aytekin</span></footer>
      <a className="floating-call" href="tel:+905555555555" aria-label="Adem Aytekin'i ara"><Phone size={20} /></a>
    </main>
  );
}
