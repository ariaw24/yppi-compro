import { useState } from 'react';
import { Button, Icon, MediaPlaceholder, SectionIntro } from '@/components/common';
import { activityCategories, activityImage, heroImage, libraryImage } from '@/data';
import type { IconName } from '@/types';

export function StudentPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const activities = [
    ['Organisasi', 'Organisasi Siswa', 'Contoh ruang untuk belajar memimpin, berkomunikasi, dan bertanggung jawab.', 'users'],
    ['Olahraga', 'Klub Olahraga', 'Contoh kegiatan kebugaran, sportivitas, dan kerja sama dalam tim.', 'compass'],
    ['Seni', 'Seni & Kreativitas', 'Contoh ruang ekspresi melalui seni visual, pertunjukan, atau karya kreatif.', 'spark'],
    ['Keagamaan', 'Pembinaan Keagamaan', 'Contoh kegiatan pembiasaan ibadah dan penguatan karakter Islami.', 'book'],
    ['Organisasi', 'Kepemimpinan Siswa', 'Contoh program pelatihan kepemimpinan dan pelayanan di lingkungan sekolah.', 'graduation'],
    ['Seni', 'Media & Dokumentasi', 'Contoh kegiatan produksi media dan dokumentasi kegiatan siswa.', 'leaf'],
  ];
  const filteredActivities = activeCategory === 'Semua' ? activities : activities.filter(([category]) => category === activeCategory);

  return (
    <main className="student-page inner-page">
      <section className="inner-hero inner-hero--student">
        <div className="inner-hero__pattern" />
        <div className="container inner-hero__grid">
          <div className="inner-hero__copy">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="#beranda">Beranda</a><span>/</span><strong>Kesiswaan</strong>
            </nav>
            <span className="eyebrow"><i />Kehidupan siswa</span>
            <h1>Belajar, Berkarya, dan <em>Bertumbuh Bersama</em></h1>
            <p>Ruang untuk mengenal kegiatan siswa, ekstrakurikuler, pembinaan karakter, dan perkembangan potensi di lingkungan sekolah.</p>
            <div className="inner-hero__actions">
              <Button href="#kesiswaan-ekstrakurikuler">Jelajahi Kegiatan</Button>
              <Button href="#kesiswaan-karakter" variant="secondary">Pembinaan Karakter</Button>
            </div>
          </div>
          <div className="inner-hero__visual inner-hero__visual--student">
            <MediaPlaceholder src={activityImage} label="STUDENT_LIFE_HERO_IMAGE" />
            <div className="student-photo-small"><img src={heroImage} alt="Ilustrasi aktivitas belajar, bukan dokumentasi sekolah" /></div>
          </div>
        </div>
      </section>

      <section className="student-intro section">
        <div className="container student-intro__grid">
          <SectionIntro
            eyebrow="Pengembangan siswa"
            title="Setiap Siswa Memiliki Ruang untuk Bertumbuh"
            body="Kegiatan kesiswaan dirancang sebagai ruang untuk mengembangkan karakter, relasi sosial, kreativitas, dan potensi siswa. Rincian resmi masih menunggu konfirmasi sekolah."
          />
          <div className="student-intro__points">
            {[
              ['users', 'Kebersamaan'],
              ['spark', 'Kreativitas'],
              ['compass', 'Kepemimpinan'],
              ['leaf', 'Karakter'],
            ].map(([icon, title]) => (
              <div key={title}>
                <span><Icon name={icon as IconName} /></span>
                <strong>{title}</strong>
                <small>Konsep nilai dummy</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kesiswaan-ekstrakurikuler" className="extracurricular section">
        <div className="container">
          <div className="section-heading-row">
            <SectionIntro
              eyebrow="Ekstrakurikuler"
              title="Temukan Ruang untuk Minat dan Bakat"
              body="Gunakan filter untuk melihat contoh kategori kegiatan. Seluruh kegiatan di bawah masih berupa data dummy."
            />
            <span className="dummy-label">Kegiatan dummy</span>
          </div>
          <div className="activity-filters" role="group" aria-label="Filter kegiatan">
            {activityCategories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? 'is-active' : ''}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="extracurricular__grid" key={activeCategory}>
            {filteredActivities.map(([category, title, text, icon], index) => (
              <article className="activity-card" key={title}>
                <div className="activity-card__top">
                  <span><Icon name={icon as IconName} /></span>
                  <small>0{index + 1}</small>
                </div>
                <em>{category}</em>
                <h3>{title}</h3>
                <p>{text}</p>
                <div><span>Data dummy</span><Icon name="arrow" size={16} /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kesiswaan-karakter" className="character section">
        <div className="character__pattern" />
        <div className="container character__grid">
          <div>
            <SectionIntro
              eyebrow="Pembinaan karakter"
              title="Kebiasaan Baik yang Tumbuh Setiap Hari"
              body="Contoh kerangka pembinaan karakter berikut bukan program resmi dan perlu disesuaikan dengan praktik sekolah."
              light
            />
            <span className="profile-vision__warning">Kerangka dummy — menunggu verifikasi</span>
          </div>
          <div className="character__steps">
            {[
              ['01', 'Mengenal Nilai', 'Siswa memahami alasan dan makna di balik kebiasaan baik.'],
              ['02', 'Membiasakan', 'Nilai dipraktikkan secara konsisten dalam kegiatan sehari-hari.'],
              ['03', 'Merefleksikan', 'Siswa meninjau pengalaman dan dampak dari setiap tindakan.'],
              ['04', 'Memberi Teladan', 'Siswa bertumbuh menjadi pribadi yang memberi pengaruh positif.'],
            ].map(([number, title, text]) => (
              <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="student-gallery section">
        <div className="container">
          <SectionIntro
            eyebrow="Galeri kegiatan"
            title="Momen Belajar di Luar Kelas"
            body="Seluruh foto berikut merupakan ilustrasi dan bukan dokumentasi SMP YPPI Ar Rahmah."
          />
          <div className="student-gallery__grid">
            <MediaPlaceholder src={activityImage} label="STUDENT_ACTIVITY_IMAGE_01" />
            <MediaPlaceholder src={heroImage} label="STUDENT_ACTIVITY_IMAGE_02" />
            <MediaPlaceholder src={libraryImage} label="STUDENT_ACTIVITY_IMAGE_03" />
          </div>
        </div>
      </section>

      <section id="kesiswaan-prestasi" className="achievements section">
        <div className="container achievements__grid">
          <div>
            <SectionIntro
              eyebrow="Prestasi siswa"
              title="Mengapresiasi Setiap Proses dan Pencapaian"
              body="Belum ada data prestasi terverifikasi yang siap dipublikasikan."
            />
            <Button href="#kontak" variant="text">Kirim informasi prestasi</Button>
          </div>
          <div className="achievement-empty">
            <span><Icon name="graduation" size={30} /></span>
            <h3>Data prestasi sedang disiapkan</h3>
            <p>Prestasi akademik maupun nonakademik akan ditampilkan setelah nama kegiatan, tingkat kompetisi, tahun, dan dokumentasinya diverifikasi.</p>
            <small>EMPTY_STATE · VERIFIED DATA ONLY</small>
          </div>
        </div>
      </section>

      <section className="inner-cta section">
        <div className="container inner-cta__panel inner-cta__panel--green">
          <div>
            <span className="eyebrow eyebrow--light"><i />Bertumbuh bersama</span>
            <h2>Kenali Lebih Dekat Kehidupan Siswa</h2>
            <p>Hubungi sekolah untuk memperoleh informasi resmi mengenai kegiatan dan pendampingan siswa.</p>
          </div>
          <div>
            <Button href="#kontak" variant="light">Hubungi Sekolah</Button>
            <Button href="#akademik-lengkap" variant="secondary">Lihat Akademik</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
