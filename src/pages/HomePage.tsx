import { useState } from 'react';
import { Button, Icon, MediaPlaceholder, SectionIntro } from '@/components/common';
import { activityImage, faqs, heroImage, libraryImage, quickLinks } from '@/data';
import type { IconName } from '@/types';

export function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main>
      <section className="hero section">
        <div className="hero__pattern" />
        <div className="container hero__grid">
          <div className="hero__copy">
            <span className="eyebrow"><i />Pendidikan Islam yang bertumbuh</span>
            <h1>Membentuk Generasi <em>Berilmu</em>, Berakhlak, dan Siap Bertumbuh.</h1>
            <p>Kenali SMP YPPI Ar Rahmah melalui informasi pendidikan, kegiatan siswa, lingkungan belajar, dan berbagai informasi resmi sekolah.</p>
            <div className="hero__actions">
              <Button href="#profil-lengkap">Kenali Sekolah Kami</Button>
              <Button href="#ppdb-lengkap" variant="secondary">Informasi PPDB</Button>
            </div>
            <p className="content-note">Pesan kreatif sementara — bukan slogan resmi sekolah.</p>
          </div>
          <div className="hero__visual">
            <div className="hero__arch" />
            <MediaPlaceholder src={heroImage} label="HERO_SCHOOL_IMAGE" />
          </div>
        </div>
      </section>

      <section className="quick section section--tight" aria-label="Akses cepat">
        <div className="container quick__grid">
          {quickLinks.map((item, index) => (
            <a className="quick-card" href={item.href} key={item.title}>
              <span className="quick-card__number">0{index + 1}</span>
              <span className="quick-card__icon"><Icon name={item.icon} /></span>
              <strong>{item.title}</strong><p>{item.text}</p>
              <span className="quick-card__link">Selengkapnya <Icon name="arrow" size={17} /></span>
            </a>
          ))}
        </div>
      </section>

      <section id="profil" className="about section">
        <div className="container about__grid">
          <div className="about__visual">
            <MediaPlaceholder src={libraryImage} label="SCHOOL_PROFILE_IMAGE" />
            <div className="about__place"><Icon name="map" /><span><small>Lokasi sekolah</small><strong>Seuseupan, Ciawi, Bogor</strong></span></div>
          </div>
          <div className="about__copy">
            <SectionIntro eyebrow="Tentang sekolah" title="Mengenal SMP YPPI Ar Rahmah" />
            <p className="lead">SMP YPPI Ar Rahmah merupakan sekolah menengah pertama swasta Islam yang berlokasi di Seuseupan, Ciawi, Kabupaten Bogor, Jawa Barat.</p>
            <p>Informasi mengenai sejarah, identitas kelembagaan, dan pendekatan pendidikan akan dilengkapi setelah dokumen resmi sekolah tersedia.</p>
            <div className="verified-note"><Icon name="spark" /><span><strong>Komitmen pada informasi yang akurat</strong><small>Konten faktual ditampilkan hanya setelah diverifikasi oleh sekolah.</small></span></div>
            <Button href="#profil-lengkap" variant="text">Lihat profil lengkap</Button>
          </div>
        </div>
      </section>

      <section className="values section">
        <div className="values__motif" />
        <div className="container values__grid">
          <SectionIntro eyebrow="Arah pendidikan" title="Menumbuhkan Ilmu, Menguatkan Akhlak" body="Ruang untuk menyampaikan visi pendidikan dan nilai sekolah secara jernih, hangat, dan bermakna." light />
          <div className="values__cards">
            {[
              ['01', 'Visi Sekolah', 'Rumusan visi resmi akan ditampilkan setelah sekolah memberikan dokumen terverifikasi.'],
              ['02', 'Misi Pendidikan', 'Poin misi sekolah akan disusun sesuai redaksi resmi tanpa perubahan makna.'],
              ['03', 'Nilai & Tujuan', 'Nilai karakter dan tujuan pendidikan menunggu konfirmasi resmi dari sekolah.'],
            ].map(([number, title, text]) => (
              <article className="value-card" key={title}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section id="akademik" className="programs section">
        <div className="container">
          <div className="section-heading-row">
            <SectionIntro eyebrow="Akademik" title="Perjalanan Belajar yang Bermakna" body="Kerangka informasi akademik yang akan dilengkapi berdasarkan kurikulum dan program resmi sekolah." />
            <Button href="#akademik-lengkap" variant="text">Jelajahi akademik</Button>
          </div>
          <div className="programs__grid">
            {[
              ['book', 'Kurikulum', 'Informasi struktur kurikulum sekolah akan diperbarui setelah terverifikasi.'],
              ['spark', 'Program Pembelajaran', 'Rincian kegiatan belajar dan pendekatan pengajaran akan hadir di bagian ini.'],
              ['leaf', 'Pembinaan Karakter', 'Informasi pembinaan karakter akan disajikan sesuai program resmi sekolah.'],
            ].map(([icon, title, text], index) => (
              <article className="program-card" key={title}>
                <div className="program-card__top"><span><Icon name={icon as IconName} /></span><small>0{index + 1}</small></div>
                <h3>{title}</h3><p>{text}</p><a href="#informasi">Informasi selengkapnya <Icon name="arrow" size={17} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="featured section" aria-labelledby="featured-title">
        <div className="container">
          <div className="featured__heading">
            <SectionIntro
              eyebrow="Program unggulan"
              title="Program untuk Tumbuh Lebih Utuh"
              body="Contoh struktur program unggulan untuk kebutuhan desain. Nama dan detail berikut masih berupa data dummy dan bukan program resmi sekolah."
            />
            <span className="dummy-label">Konten dummy — menunggu verifikasi</span>
          </div>
          <div className="featured__grid">
            {[
              ['graduation', 'Kelas Tahfiz & Pembiasaan Ibadah', 'Contoh program pendampingan hafalan, praktik ibadah, dan pembiasaan nilai Islami dalam keseharian siswa.'],
              ['book', 'Literasi & Numerasi Terpadu', 'Contoh kegiatan penguatan kemampuan membaca, menulis, bernalar, dan memecahkan masalah secara terarah.'],
              ['spark', 'Digital Creative Learning', 'Contoh pembelajaran keterampilan digital melalui proyek kreatif, presentasi, dan penggunaan teknologi secara bertanggung jawab.'],
              ['users', 'Leadership & Character Camp', 'Contoh kegiatan pembinaan kepemimpinan, kemandirian, kerja sama, serta kepedulian sosial siswa.'],
            ].map(([icon, title, text], index) => (
              <article className="featured-card" key={title}>
                <div className="featured-card__meta">
                  <span><Icon name={icon as IconName} /></span>
                  <small>Dummy 0{index + 1}</small>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="featured-card__status">Belum terverifikasi</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kesiswaan" className="activities section">
        <div className="container">
          <SectionIntro eyebrow="Kehidupan siswa" title="Belajar, Berkarya, dan Bertumbuh Bersama" body="Sorotan kegiatan akan diisi dengan dokumentasi resmi agar keluarga dapat melihat pengalaman belajar siswa secara autentik." />
          <div className="activities__grid">
            <MediaPlaceholder src={activityImage} label="STUDENT_ACTIVITY_IMAGE" className="media--large" />
            <MediaPlaceholder src={heroImage} label="CLASSROOM_IMAGE" />
            <div className="activity-callout"><span><Icon name="users" /></span><h3>Ruang untuk setiap potensi</h3><p>Ekstrakurikuler, kegiatan sekolah, dan prestasi siswa akan ditampilkan setelah datanya tersedia.</p><Button href="#kesiswaan-lengkap" variant="light">Lihat kegiatan siswa</Button></div>
          </div>
        </div>
      </section>

      <section id="fasilitas" className="facilities section">
        <div className="container">
          <div className="section-heading-row">
            <SectionIntro eyebrow="Fasilitas" title="Lingkungan Belajar dan Fasilitas Sekolah" body="Galeri fasilitas akan menggunakan dokumentasi dan nama fasilitas yang telah dikonfirmasi sekolah." />
            <Button href="#fasilitas" variant="text">Lihat galeri</Button>
          </div>
          <div className="facilities__grid">
            {['FACILITY_IMAGE 01', 'FACILITY_IMAGE 02', 'FACILITY_IMAGE 03'].map((label, index) => (
              <MediaPlaceholder key={label} src={index === 1 ? heroImage : libraryImage} label={label} />
            ))}
          </div>
        </div>
      </section>

      <section className="people section">
        <div className="container people__grid">
          <div>
            <SectionIntro eyebrow="Pendidik" title="Mengenal Pendidik dan Tenaga Kependidikan" body="Profil kepala sekolah, guru, dan tenaga kependidikan akan disajikan berdasarkan data resmi—tanpa nama atau jabatan fiktif." />
            <Button href="#profil-lengkap" variant="text">Lihat halaman pendidik</Button>
          </div>
          <div className="portrait-grid">
            {[1, 2, 3].map((item) => (
              <div className="portrait-placeholder" key={item}><Icon name="users" size={30} /><span>TEACHER_PORTRAIT</span><small>Data profil belum tersedia</small></div>
            ))}
          </div>
        </div>
      </section>

      <section id="informasi" className="news section">
        <div className="container">
          <div className="section-heading-row">
            <SectionIntro eyebrow="Informasi terkini" title="Kabar dan Informasi Sekolah" body="Area editorial untuk berita, pengumuman, dan agenda resmi sekolah." />
            <Button href="#informasi" variant="text">Lihat semua informasi</Button>
          </div>
          <div className="news__grid">
            {[
              ['Berita Sekolah', 'Judul berita sekolah akan ditampilkan di area ini', libraryImage],
              ['Pengumuman', 'Informasi resmi dan terbaru untuk keluarga sekolah', heroImage],
              ['Agenda', 'Jadwal kegiatan akan hadir setelah dikonfirmasi', activityImage],
            ].map(([category, title, image]) => (
              <article className="news-card" key={category}>
                <div className="news-card__image" data-placeholder-label="NEWS_THUMBNAIL"><img src={image} alt="Foto ilustrasi berita sekolah, bukan dokumentasi resmi" /></div>
                <div className="news-card__body"><div><span>{category}</span><time>DD · MM · YYYY</time></div><h3>{title}</h3><p>Ringkasan konten resmi akan tampil di sini setelah materi publikasi tersedia.</p><a href="#informasi">Baca selengkapnya <Icon name="arrow" size={17} /></a></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ppdb" className="ppdb section">
        <div className="container ppdb__panel">
          <div className="ppdb__copy">
            <span className="eyebrow eyebrow--light"><i />PPDB TP 2025/2026</span>
            <h2>Mulai Langkah Baru Bersama SMP YPPI Ar Rahmah.</h2>
            <p>Penerimaan Peserta Didik Baru Gelombang 1 sedang dibuka. Dapatkan potongan 20% uang pangkal, beasiswa tahfiz, dan seleksi transparan.</p>
            <div className="ppdb__actions">
              <Button href="#ppdb-syarat" variant="light">Informasi & Syarat</Button>
              <Button href="#ppdb-alur" variant="secondary">Alur & Gelombang</Button>
              <a href="#login-ppdb">Portal Calon Siswa <Icon name="arrow" size={17} /></a>
            </div>
          </div>
          <div className="ppdb__steps">
            {[
              ['01', 'Pilih Jalur & Siapkan Dokumen Berkas'],
              ['02', 'Daftar Akun Online di Portal Calon Siswa'],
              ['03', 'Ikuti Pemetaan Karakter & Observasi Qur’an'],
            ].map(([num, step]) => (
              <div key={num}>
                <span>{num}</span>
                <strong>{step}</strong>
              </div>
            ))}
            <small>📍 Kampus: Seuseupan, Ciawi, Bogor · Kontak panitia aktif setiap hari kerja.</small>
          </div>
        </div>
      </section>

      <section className="faq section">
        <div className="container faq__grid">
          <div><SectionIntro eyebrow="Pertanyaan umum" title="Informasi yang Sering Ditanyakan" body="Jawaban sementara dirancang untuk mengarahkan pengunjung ke sumber informasi resmi." /><p className="faq__help">Belum menemukan jawaban? <a href="#kontak">Hubungi pihak sekolah</a></p></div>
          <div className="accordion">
            {faqs.map(([question, answer], index) => (
              <article className={`faq-item ${openFaq === index ? 'faq-item--open' : ''}`} key={question}>
                <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                  <span>{question}</span><i><Icon name="chevron" size={18} /></i>
                </button>
                <div className="faq-item__answer"><p>{answer}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kontak" className="contact section">
        <div className="container contact__grid">
          <div className="contact__copy">
            <SectionIntro eyebrow="Kontak & lokasi" title="Mari Terhubung dengan Sekolah" body="Kunjungi lokasi sekolah atau gunakan kanal resmi setelah nomor telepon dan email dikonfirmasi." />
            <div className="contact__items">
              <div><span><Icon name="map" /></span><p><small>Alamat terverifikasi sebagian</small><strong>Seuseupan, Ciawi, Kabupaten Bogor, Jawa Barat</strong></p></div>
              <div><span><Icon name="phone" /></span><p><small>Nomor telepon</small><strong>Menunggu informasi resmi</strong></p></div>
              <div><span><Icon name="mail" /></span><p><small>Email sekolah</small><strong>Menunggu informasi resmi</strong></p></div>
            </div>
            <div className="gmail-panel">
              <span className="gmail-panel__icon"><Icon name="mail" /></span>
              <div>
                <small>Hubungi melalui email</small>
                <strong>Kirim pesan menggunakan Gmail</strong>
                <p>Alamat Gmail resmi sekolah belum dikonfirmasi. Tombol ini membuka formulir email baru tanpa penerima.</p>
              </div>
              <a
                className="button button--primary"
                href="https://mail.google.com/mail/?view=cm&fs=1&su=Informasi%20SMP%20YPPI%20Ar%20Rahmah"
                target="_blank"
                rel="noreferrer"
              >
                Buka Gmail <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
          <div className="map-placeholder">
            <div className="map-placeholder__grid" /><span><Icon name="map" size={28} /></span><strong>MAP_LOCATION_PLACEHOLDER</strong><small>Peta resmi akan ditampilkan setelah alamat lengkap dikonfirmasi.</small>
          </div>
        </div>
      </section>
    </main>
  );
}
