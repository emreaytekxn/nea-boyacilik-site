import { useEffect, useState } from "react";
import { ArrowUpRight, CalendarDays, Check, Hammer, Menu, Ruler, Sparkles, X } from "lucide-react";

const heroVideo = "/media/nea-hero.mp4";
const heroImage = "/media/nea-green-painting.png";
const cleaningImage = "/media/nea-cleaning-detail.png";
const plasterImage = "/media/nea-plaster-repair.png";
const texture = "/media/nea-workshop-texture.png";
const detail = "/media/nea-detail.png";
const interiorImage = "/media/nea-interior-finish.png";

const services = [
  { number: "01", title: "Boya & Badana", text: "Duvar ve tavan yüzeylerini hazırlıyor, renk uygulamalarını dengeli ve temiz bir sonuç hedefiyle tamamlıyoruz.", image: interiorImage, icon: Sparkles, label: "RENK UYGULAMASI / TEMİZ SONUÇ" },
  { number: "02", title: "Temiz Uygulama", text: "Mobilya, zemin ve sabit yüzeyleri koruyarak çalışma alanını düzenli tutuyor; uygulama sonunda alanı temiz teslim ediyoruz.", image: cleaningImage, icon: Check, label: "KORUMA / DÜZENLİ TESLİM" },
  { number: "03", title: "Alçı & Tamirat", text: "Çatlak, delik ve yüzey bozukluklarını gideriyor; boya öncesi düzgün ve dayanıklı yüzeyler hazırlıyoruz.", image: plasterImage, icon: Ruler, label: "YÜZEY HAZIRLIĞI / ÖZEN" },
  { number: "04", title: "Dekorasyon & Kırım", text: "Mekânın ihtiyaçlarına uygun dekorasyon ve kırım işlerini planlı, kontrollü ve güvenli bir çalışma düzeniyle yürütüyoruz.", image: detail, icon: Hammer, label: "PLANLI UYGULAMA / KONTROL" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [photoName, setPhotoName] = useState("");
  const [videoName, setVideoName] = useState("");

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal-on-scroll");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.14 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };
  const submitAppointment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return <main className="site-shell">
    <header className="site-header"><a className="brand" href="#top" aria-label="NEA Boyacılık ana sayfa"><span className="brand-mark aa-mark" aria-label="NEA Boyacılık marka sembolü">NEA</span><span><strong>NEA BOYACILIK</strong><small>BOYA • TAMİRAT • DEKORASYON</small></span></a><nav className={menuOpen ? "desktop-nav is-open" : "desktop-nav"} aria-label="Ana menü"><button onClick={() => scrollTo("hizmetler")}>Hizmetler</button><button onClick={() => scrollTo("yaklasim")}>Yaklaşımımız</button><button onClick={() => scrollTo("iletisim")}>Teklif al</button></nav><button className="header-call" onClick={() => scrollTo("iletisim")}><CalendarDays size={16} /><span>Teklif al</span></button><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menüyü aç/kapat">{menuOpen ? <X size={22} /> : <Menu size={22} />}</button></header>
    <section id="top" className="hero-section"><div className="hero-copy reveal-up"><p className="eyebrow"><span /> NEA BOYACILIK / PROFESYONEL UYGULAMA</p><h1>Mekânlarınızı <em>özenli işçilikle</em> yeniliyoruz.</h1><p className="hero-lede">Boya, tamirat ve dekorasyon uygulamalarında planlı çalışma, temiz detaylar ve mekâna değer katan sonuçlar sunuyoruz.</p><div className="hero-actions"><button className="button button-primary" onClick={() => scrollTo("iletisim")}>Teklif alın <ArrowUpRight size={18} /></button><button className="text-link" onClick={() => scrollTo("hizmetler")}>Hizmetleri incele <span>↘</span></button></div><div className="hero-proof"><span>●</span><p>İşin başından sonuna<br /><strong>düzenli, kontrollü ve özenli uygulama.</strong></p></div></div><div className="hero-visual reveal-up delay-1"><div className="hero-image-frame"><video className="hero-video" autoPlay muted loop playsInline poster={heroImage} aria-label="Yeşil tonlarda profesyonel boya uygulaması videosu"><source src={heroVideo} type="video/mp4" /></video><span className="video-label">NEA UYGULAMA / 01</span></div><div className="hero-stamp"><span>NEA</span><small>Temiz iş<br />net sonuç</small></div><div className="measurement measurement-top">UYGULAMA / 01</div><div className="measurement measurement-bottom">DÜZ • TEMİZ • ZAMANINDA</div></div></section>
    <section className="service-intro section-pad reveal-on-scroll" id="hizmetler"><div className="section-label">01 / HİZMETLER</div><div className="intro-grid"><h2>Her uygulamada <span>kalıcı ve temiz bir sonuç</span> hedefliyoruz.</h2><p>İhtiyacı doğru analiz ediyor, uygun uygulama planını oluşturuyor ve işin her aşamasında kalite ile düzeni koruyoruz.</p></div><div className="service-list">{services.map(({ number, title, text, image, icon: Icon, label }) => <article className="service-row reveal-on-scroll" key={number}><div className="service-number">{number}</div><div className="service-image"><img src={image} alt={`${title} hizmeti NEA Boyacılık`} /><span>{label}</span></div><div className="service-copy"><div className="service-heading"><div className="service-icon"><Icon size={20} strokeWidth={1.7} /></div><h3>{title}</h3></div><p>{text}</p></div><ArrowUpRight className="service-arrow" size={24} /></article>)}</div></section>
    <section className="statement-section reveal-on-scroll"><div className="statement-art"><img src={texture} alt="Titiz boya uygulamasında yüzey ve detay çalışması" /><span className="field-mark">NEA / UYGULAMA</span></div><div className="statement-copy"><p className="eyebrow"><span /> ÇALIŞMA YAKLAŞIMIMIZ</p><h2>İyi sonuç, <em>iyi hazırlıkla başlar.</em></h2><p>Her proje; yüzey hazırlığı, doğru malzeme seçimi, dikkatli uygulama ve temiz teslim adımlarıyla bir bütün olarak ele alınır.</p><button className="text-link light" onClick={() => scrollTo("iletisim")}>Projenizi paylaşın <span>↗</span></button></div></section>
    <section className="about-section section-pad reveal-on-scroll" id="yaklasim"><div className="about-photo"><img src={heroImage} alt="NEA Boyacılık tarafından tamamlanan yeşil duvar uygulaması" /><span className="photo-caption">NEA BOYACILIK / UYGULAMA DETAYI</span></div><div className="about-copy"><div className="section-label">02 / YAKLAŞIMIMIZ</div><h2>Her projeyi <span>özen ve sorumlulukla</span> tamamlıyoruz.</h2><p>NEA Boyacılık, yaşam alanları ve iş yerleri için temiz, dengeli ve uzun ömürlü uygulamalar sunar. Çalışma alanının korunmasından son kontrole kadar her aşamayı planlı biçimde yürütürüz.</p><div className="about-points"><div><strong>01</strong><span>İhtiyacı analiz ederiz</span></div><div><strong>02</strong><span>Alanı ve yüzeyi koruruz</span></div><div><strong>03</strong><span>Temiz teslim ederiz</span></div></div></div></section>
    <section className="appointment-section reveal-on-scroll" id="iletisim"><div className="appointment-heading"><p className="eyebrow"><span /> 03 / TEKLİF AL</p><h2>Projenizi paylaşın,<br /><em>uygun çözümü planlayalım.</em></h2><p>İhtiyacınızı daha doğru değerlendirebilmemiz için aşağıdaki formu doldurun. Mekânın fotoğrafı ve kısa videosu, ön çalışma sürecini hızlandırır.</p></div><form className="appointment-form" onSubmit={submitAppointment}><div className="form-row"><label>Adınız soyadınız<input name="name" required placeholder="Ad Soyad" /></label><label>Telefon numaranız<input name="contact" required type="tel" placeholder="Telefon numarası" /></label></div><div className="form-row"><label>Tercih ettiğiniz tarih<input name="date" required type="date" /></label><label>İş türü<select name="service" defaultValue="boya"><option value="boya">Boya & Badana</option><option value="tamirat">Tamirat</option><option value="alci">Alçı işleri</option><option value="dekorasyon">Dekorasyon / Kırım</option></select></label></div><label>Projenizi kısaca açıklayın<textarea name="details" required placeholder="Hangi alanda, hangi uygulamaya ihtiyaç duyuyorsunuz?" rows={4} /></label><div className="upload-grid"><label className="upload-box"><span>01 / MEKÂN FOTOĞRAFI *</span><strong>{photoName || "Fotoğraf seçin"}</strong><input required type="file" accept="image/*" onChange={(e) => setPhotoName(e.target.files?.[0]?.name || "")} /></label><label className="upload-box"><span>02 / KISA VİDEO *</span><strong>{videoName || "Video seçin"}</strong><input required type="file" accept="video/*" onChange={(e) => setVideoName(e.target.files?.[0]?.name || "")} /></label></div><button className="button button-green" type="submit"><CalendarDays size={18} /> Teklif talebi gönder</button>{submitted && <p className="form-note">Talebiniz alındı. NEA Boyacılık ekibi, paylaştığınız bilgiler üzerinden sizinle iletişime geçecektir.</p>}</form></section>
    <footer className="site-footer"><div className="footer-brand"><span className="brand-mark small aa-mark" aria-hidden="true">NEA</span><strong>NEA BOYACILIK</strong></div><p>Boya • Badana • Tamirat • Alçı • Dekorasyon • Kırım</p><button className="text-link" onClick={() => scrollTo("iletisim")}>Teklif al ↗</button></footer>
  </main>;
}
