import { Icon } from '@/components/common';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__pattern" />
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="brand brand--footer">
            <img src="/logo-white.png" alt="Logo SMP YPPI Ar Rahmah" className="brand__logo brand__logo--footer" />
            <span><strong>SMP YPPI</strong><small>AR RAHMAH</small></span>
          </div>
          <p>Portal profil dan informasi resmi sekolah menengah pertama swasta Islam di Seuseupan, Ciawi, Bogor.</p>
        </div>
        <div><h3>Jelajahi</h3><a href="#profil-lengkap">Profil Sekolah</a><a href="#akademik-lengkap">Akademik</a><a href="#kesiswaan-lengkap">Kesiswaan</a><a href="#fasilitas">Fasilitas</a></div>
        <div><h3>Informasi</h3><a href="#informasi">Berita Sekolah</a><a href="#informasi">Pengumuman</a><a href="#ppdb-syarat">Informasi & Syarat PPDB</a><a href="#ppdb-alur">Alur & Gelombang</a><a href="#login-ppdb">Portal Masuk PPDB</a><a href="#kontak">Kontak</a></div>
        <div><h3>Lokasi</h3><p>Seuseupan, Ciawi<br />Kabupaten Bogor<br />Jawa Barat</p><a className="footer__link" href="#kontak">Lihat lokasi <Icon name="arrow" size={16} /></a></div>
      </div>
      <div className="container footer__bottom"><p>© 2025 SMP YPPI Ar Rahmah. Hak cipta dilindungi.</p><div><a href="#privasi">Kebijakan Privasi</a><a href="#akses">Aksesibilitas</a><a href="#admin" style={{ opacity: 0.7, marginLeft: 12 }}>🔒 Login CMS Admin</a></div></div>
    </footer>
  );
}
