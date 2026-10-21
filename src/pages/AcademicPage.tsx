import { useState } from 'react';
import { Button, Icon, MediaPlaceholder, SectionIntro } from '@/components/common';
import { academicTabs, heroImage, libraryImage } from '@/data';
import type { IconName } from '@/types';

export function AcademicPage() {
  const [activeTab, setActiveTab] = useState('ringkasan');
  const tabContent: Record<string, [string, string]> = {
    ringkasan: [
      'Pembelajaran yang Terarah dan Relevan',
      'Halaman akademik ini menyiapkan ruang untuk kurikulum, proses belajar, asesmen, dan kalender sekolah. Detail resmi akan diperbarui setelah dokumen akademik tersedia.',
    ],
    kurikulum: [
      'Struktur Kurikulum Sekolah',
      'Nama kurikulum, alokasi pembelajaran, mata pelajaran, dan muatan lokal belum dikonfirmasi. Informasi berikut hanya menunjukkan struktur penyajian yang disiapkan.',
    ],
    evaluasi: [
      'Pendampingan dan Evaluasi Belajar',
      'Contoh pendekatan evaluasi mencakup umpan balik, asesmen formatif, refleksi, dan komunikasi perkembangan belajar dengan keluarga. Seluruh rincian masih dummy.',
    ],
  };

  return (
    <main className="academic-page inner-page">
      <section className="inner-hero inner-hero--academic">
        <div className="inner-hero__pattern" />
        <div className="container inner-hero__grid">
          <div className="inner-hero__copy">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="#beranda">Beranda</a><span>/</span><strong>Akademik</strong>
            </nav>
            <span className="eyebrow"><i />Informasi akademik</span>
            <h1>Perjalanan Belajar yang <em>Bermakna</em></h1>
            <p>Informasi mengenai kurikulum, program pembelajaran, pendampingan siswa, dan agenda akademik SMP YPPI Ar Rahmah.</p>
            <div className="inner-hero__actions">
              <Button href="#akademik-kurikulum">Jelajahi Kurikulum</Button>
              <Button href="#akademik-program" variant="secondary">Program Pembelajaran</Button>
            </div>
          </div>
          <div className="inner-hero__visual">
            <MediaPlaceholder src={libraryImage} label="ACADEMIC_HERO_IMAGE" />
            <span className="inner-hero__stamp">
              <Icon name="book" />
              <strong>Learn · Reflect · Grow</strong>
              <small>Konsep kreatif sementara</small>
            </span>
          </div>
        </div>
      </section>

      <section id="akademik-kurikulum" className="academic-overview section">
        <div className="container">
          <div className="content-tabs" role="tablist" aria-label="Informasi akademik">
            {academicTabs.map(([id, label]) => (
              <button
                key={id}
                role="tab"
                aria-selected={activeTab === id}
                className={activeTab === id ? 'is-active' : ''}
                onClick={() => setActiveTab(id)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="academic-overview__panel" key={activeTab}>
            <div>
              <span className="eyebrow"><i />{activeTab}</span>
              <h2>{tabContent[activeTab][0]}</h2>
              <p>{tabContent[activeTab][1]}</p>
              <span className="verification-pill"><Icon name="spark" size={15} /> Detail akademik menunggu verifikasi</span>
            </div>
            <div className="academic-facts">
              {[
                ['Kurikulum resmi', 'Belum tersedia'],
                ['Tahun ajaran', 'Menunggu konfirmasi'],
                ['Muatan lokal', 'Belum tersedia'],
                ['Sistem evaluasi', 'Menunggu dokumen'],
              ].map(([label, value]) => (
                <div key={label}><small>{label}</small><strong>{value}</strong></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="akademik-program" className="learning-programs section">
        <div className="container">
          <div className="section-heading-row">
            <SectionIntro
              eyebrow="Program pembelajaran"
              title="Ruang Belajar yang Aktif dan Terarah"
              body="Contoh kategori berikut masih berupa dummy dan tidak dimaksudkan sebagai klaim program resmi sekolah."
            />
            <span className="dummy-label">Program dummy</span>
          </div>
          <div className="learning-programs__grid">
            {[
              ['book', 'Pembelajaran Inti', 'Contoh pembelajaran mata pelajaran inti dengan tujuan belajar dan pendampingan yang terstruktur.', 'Akademik'],
              ['spark', 'Project-Based Learning', 'Contoh proyek lintas pelajaran untuk melatih kolaborasi, komunikasi, dan pemecahan masalah.', 'Eksplorasi'],
              ['leaf', 'Literasi Al-Qur’an', 'Contoh pendampingan membaca dan memahami nilai Al-Qur’an. Pelaksanaannya belum dikonfirmasi.', 'Keislaman'],
              ['graduation', 'Klinik Belajar', 'Contoh sesi pendampingan bagi siswa yang membutuhkan penguatan materi atau tantangan tambahan.', 'Pendampingan'],
              ['compass', 'Eksplorasi Karier', 'Contoh pengenalan minat, potensi, dan wawasan pendidikan lanjutan secara bertahap.', 'Pengembangan'],
              ['users', 'Kolaborasi Orang Tua', 'Contoh komunikasi perkembangan belajar antara wali kelas, siswa, dan keluarga.', 'Kemitraan'],
            ].map(([icon, title, text, category], index) => (
              <article className="learning-card" key={title}>
                <div><span><Icon name={icon as IconName} /></span><small>0{index + 1}</small></div>
                <em>{category}</em>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="learning-card__status">Contoh program</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="learning-approach section">
        <div className="container learning-approach__grid">
          <div className="learning-approach__visual">
            <MediaPlaceholder src={heroImage} label="CLASSROOM_LEARNING_IMAGE" />
            <div><Icon name="spark" /><span><strong>Pembelajaran bertumbuh</strong><small>Konsep desain — belum terverifikasi</small></span></div>
          </div>
          <div>
            <SectionIntro
              eyebrow="Pendekatan belajar"
              title="Dari Memahami hingga Menerapkan"
              body="Contoh alur pengalaman belajar yang menempatkan siswa sebagai peserta aktif."
            />
            <ol className="approach-list">
              {[
                ['Memahami', 'Mengenali konsep dan menghubungkannya dengan pengetahuan awal.'],
                ['Mengeksplorasi', 'Bertanya, berdiskusi, dan mencoba berbagai cara untuk menemukan jawaban.'],
                ['Menerapkan', 'Menggunakan pengetahuan dalam tugas, proyek, atau konteks keseharian.'],
                ['Merefleksikan', 'Meninjau proses dan menyusun langkah perkembangan berikutnya.'],
              ].map(([title, text], index) => (
                <li key={title}><span>0{index + 1}</span><div><strong>{title}</strong><p>{text}</p></div></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="akademik-kalender" className="academic-calendar section">
        <div className="container">
          <div className="section-heading-row">
            <SectionIntro
              eyebrow="Kalender akademik"
              title="Agenda Belajar dan Kegiatan Sekolah"
              body="Tanggal berikut hanya contoh tata letak dan bukan jadwal resmi sekolah."
            />
            <span className="dummy-label">Tanggal dummy</span>
          </div>
          <div className="calendar-layout">
            <div className="calendar-month">
              <div>
                <button aria-label="Bulan sebelumnya">←</button>
                <strong>Contoh Bulan Akademik</strong>
                <button aria-label="Bulan berikutnya">→</button>
              </div>
              <div className="calendar-grid">
                {['S', 'S', 'R', 'K', 'J', 'S', 'M', ...Array.from({ length: 28 }, (_, i) => `${i + 1}`)].map((day, index) => (
                  <span className={index === 18 || index === 25 ? 'has-event' : ''} key={`${day}-${index}`}>
                    {day}
                  </span>
                ))}
              </div>
            </div>
            <div className="calendar-events">
              <h3>Contoh Agenda</h3>
              {[
                ['12', 'Asesmen Pembelajaran', 'Jadwal belum dikonfirmasi'],
                ['19', 'Pertemuan Orang Tua', 'Agenda belum dikonfirmasi'],
                ['26', 'Proyek Kelas', 'Kegiatan belum dikonfirmasi'],
              ].map(([date, title, status]) => (
                <article key={date}><span>{date}</span><div><strong>{title}</strong><small>{status}</small></div></article>
              ))}
              <Button href="#kontak" variant="text">Tanyakan kalender resmi</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="inner-cta section">
        <div className="container inner-cta__panel">
          <div>
            <span className="eyebrow eyebrow--light"><i />Informasi lebih lanjut</span>
            <h2>Punya Pertanyaan tentang Akademik?</h2>
            <p>Hubungi sekolah untuk memperoleh informasi kurikulum dan program pembelajaran yang telah dikonfirmasi.</p>
          </div>
          <div>
            <Button href="#kontak" variant="light">Hubungi Sekolah</Button>
            <Button href="#kesiswaan-lengkap" variant="secondary">Lihat Kesiswaan</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
