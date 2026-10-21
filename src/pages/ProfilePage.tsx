import { useState } from 'react';
import { Button, Icon, MediaPlaceholder, SectionIntro } from '@/components/common';
import { libraryImage, profileTabs } from '@/data';
import type { IconName } from '@/types';

export function ProfilePage() {
  const [activeTab, setActiveTab] = useState('tentang');
  const activeProfile = profileTabs.find((tab) => tab.id === activeTab) ?? profileTabs[0];

  return (
    <main className="profile-page">
      <section className="profile-hero">
        <div className="profile-hero__pattern" />
        <div className="container profile-hero__grid">
          <div className="profile-hero__copy">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="#beranda">Beranda</a><span>/</span><strong>Profil Sekolah</strong>
            </nav>
            <span className="eyebrow"><i />Profil sekolah</span>
            <h1>Mengenal Lebih Dekat <em>SMP YPPI Ar Rahmah</em></h1>
            <p>Ruang informasi mengenai identitas, perjalanan, arah pendidikan, serta orang-orang yang bertumbuh bersama sekolah.</p>
            <div className="profile-hero__actions">
              <Button href="#profil-identitas">Lihat Identitas</Button>
              <Button href="#profil-visi" variant="secondary">Visi & Misi</Button>
            </div>
          </div>
          <div className="profile-hero__visual">
            <MediaPlaceholder src={libraryImage} label="SCHOOL_PROFILE_HERO_IMAGE" />
            <div className="profile-hero__location"><Icon name="map" /><span><small>Lokasi</small><strong>Seuseupan, Ciawi, Bogor</strong></span></div>
          </div>
        </div>
      </section>

      <section className="profile-overview section">
        <div className="container">
          <div className="profile-tabs" role="tablist" aria-label="Informasi profil sekolah">
            {profileTabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={activeTab === tab.id ? 'profile-tab--active' : ''}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="profile-tab-panel" role="tabpanel" key={activeProfile.id}>
            <div><span>0{profileTabs.findIndex((tab) => tab.id === activeTab) + 1}</span><small>Informasi sekolah</small></div>
            <h2>{activeProfile.title}</h2>
            <p>{activeProfile.text}</p>
            <span className="verification-pill"><Icon name="spark" size={15} /> Informasi terbatas — perlu verifikasi lanjutan</span>
          </div>
        </div>
      </section>

      <section id="profil-identitas" className="identity section">
        <div className="container identity__grid">
          <div>
            <SectionIntro
              eyebrow="Identitas sekolah"
              title="Informasi Dasar SMP YPPI Ar Rahmah"
              body="Data resmi dan lambang kelembagaan SMP YPPI Ar Rahmah yang menjadi simbol arah perjuangan pendidikan."
            />
            <div style={{ background: 'var(--white)', padding: 22, borderRadius: 'var(--radius)', border: '1px solid var(--border)', textAlign: 'center', marginTop: 20 }}>
              <img src="/logo.png" alt="Lambang Resmi SMP YPPI Ar Rahmah" style={{ height: 115, width: 'auto', margin: '0 auto 12px', display: 'block' }} />
              <strong style={{ display: 'block', color: 'var(--blue)', fontSize: 14 }}>Lambang Resmi SMP YPPI Ar Rahmah</strong>
              <small style={{ color: 'var(--muted)', fontSize: 11 }}>Simbol ilmu yang bermartabat, berakar pada aqidah, dan berbuah akhlak mulia.</small>
            </div>
            <div className="identity__note" style={{ marginTop: 16 }}><Icon name="spark" /><p><strong>Prinsip publikasi</strong><span>Informasi kelembagaan disajikan transparan dan terverifikasi.</span></p></div>
          </div>
          <dl className="identity-list">
            {[
              ['Nama sekolah', 'SMP YPPI Ar Rahmah', 'Terverifikasi'],
              ['Jenjang', 'Sekolah Menengah Pertama', 'Terverifikasi'],
              ['Status', 'Sekolah swasta', 'Terverifikasi'],
              ['Karakter lembaga', 'Sekolah Islam Terpadu', 'Terverifikasi'],
              ['Lokasi', 'Seuseupan, Ciawi, Kabupaten Bogor, Jawa Barat', 'Terverifikasi'],
              ['Lambang Resmi', 'Terdaftar & Digunakan Penuh', 'Terverifikasi'],
              ['NPSN & akreditasi', 'Menunggu dokumen resmi', 'Belum tersedia'],
            ].map(([label, value, status]) => (
              <div key={label}><dt>{label}</dt><dd>{value}</dd><small className={status === 'Belum tersedia' ? 'is-pending' : ''}>{status}</small></div>
            ))}
          </dl>
        </div>
      </section>

      <section className="history section">
        <div className="container">
          <div className="section-heading-row">
            <SectionIntro
              eyebrow="Sejarah sekolah"
              title="Perjalanan yang Terus Bertumbuh"
              body="Contoh penyajian lini masa berikut masih berupa dummy. Tahun dan peristiwa akan diganti setelah arsip sejarah sekolah tersedia."
            />
            <span className="dummy-label">Lini masa dummy</span>
          </div>
          <div className="timeline">
            {[
              ['Tahun pendirian', 'Awal Perjalanan', 'Cerita pendirian sekolah dan semangat para penggagas akan ditampilkan di sini.'],
              ['Tonggak perkembangan', 'Bertumbuh Bersama', 'Perkembangan lingkungan belajar, komunitas, dan pelayanan pendidikan akan dirangkum di sini.'],
              ['Hari ini', 'Melanjutkan Ikhtiar', 'Arah perkembangan sekolah saat ini akan ditulis berdasarkan dokumen dan pernyataan resmi.'],
            ].map(([year, title, text], index) => (
              <article className="timeline__item" key={title}>
                <span className="timeline__dot">0{index + 1}</span>
                <div><small>{year}</small><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="profil-visi" className="profile-vision section">
        <div className="profile-vision__pattern" />
        <div className="container profile-vision__grid">
          <div>
            <SectionIntro
              eyebrow="Arah pendidikan"
              title="Visi, Misi, dan Tujuan Sekolah"
              body="Redaksi resmi belum tersedia. Struktur berikut menunjukkan bagaimana informasi akan disajikan setelah sekolah memberikan dokumen terverifikasi."
              light
            />
            <span className="profile-vision__warning">Konten dummy — bukan visi dan misi resmi</span>
          </div>
          <div className="profile-vision__content">
            <article><span><Icon name="compass" /></span><div><small>Visi sekolah</small><h3>Rumusan visi resmi akan ditampilkan di sini</h3><p>Area ini disiapkan untuk satu pernyataan visi yang ringkas, jelas, dan sesuai dokumen sekolah.</p></div></article>
            <article><span><Icon name="book" /></span><div><small>Misi pendidikan</small><h3>Pilar pelaksanaan pendidikan</h3><ul><li>Contoh poin misi pendidikan pertama.</li><li>Contoh poin pembinaan karakter siswa.</li><li>Contoh poin kemitraan sekolah dan keluarga.</li></ul></div></article>
            <article><span><Icon name="leaf" /></span><div><small>Tujuan sekolah</small><h3>Arah perkembangan peserta didik</h3><p>Tujuan pendidikan akan ditampilkan tanpa mengubah redaksi dan makna dokumen resmi.</p></div></article>
          </div>
        </div>
      </section>

      <section className="profile-values section">
        <div className="container">
          <SectionIntro
            eyebrow="Nilai pendidikan"
            title="Nilai yang Menjadi Arah Bertumbuh"
            body="Konsep nilai berikut digunakan sebagai dummy desain dan masih menunggu konfirmasi sekolah."
          />
          <div className="profile-values__grid">
            {[
              ['spark', 'Iman', 'Membentuk kebiasaan baik yang berakar pada nilai keislaman.'],
              ['book', 'Ilmu', 'Menumbuhkan rasa ingin tahu dan semangat belajar sepanjang hayat.'],
              ['users', 'Akhlak', 'Membangun sikap santun, jujur, bertanggung jawab, dan peduli.'],
              ['leaf', 'Tumbuh', 'Memberi ruang bagi potensi, kemandirian, dan perkembangan siswa.'],
            ].map(([icon, title, text], index) => (
              <article key={title}><div><Icon name={icon as IconName} /></div><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><small>Nilai dummy</small></article>
            ))}
          </div>
        </div>
      </section>

      <section className="leadership section">
        <div className="container leadership__grid">
          <div className="leadership__portrait">
            <div><Icon name="users" size={42} /><span>HEADMASTER_PORTRAIT</span><small>Foto resmi belum tersedia</small></div>
          </div>
          <div>
            <SectionIntro
              eyebrow="Kepala sekolah"
              title="Sambutan Pimpinan Sekolah"
              body="Bagian ini disiapkan untuk sambutan resmi kepala sekolah."
            />
            <blockquote>“Teks sambutan kepala sekolah akan ditampilkan di sini setelah naskah resmi dan persetujuan publikasi tersedia.”</blockquote>
            <div className="leadership__name"><strong>Nama kepala sekolah</strong><small>Menunggu informasi resmi</small></div>
          </div>
        </div>
      </section>

      <section id="profil-organisasi" className="organization section">
        <div className="container">
          <div className="section-heading-row">
            <SectionIntro
              eyebrow="Organisasi"
              title="Struktur Organisasi Sekolah"
              body="Bagan berikut merupakan contoh struktur visual, bukan susunan jabatan resmi SMP YPPI Ar Rahmah."
            />
            <span className="dummy-label">Struktur dummy</span>
          </div>
          <div className="org-chart">
            <div className="org-card org-card--primary"><small>Pimpinan</small><strong>Kepala Sekolah</strong><span>Nama belum tersedia</span></div>
            <div className="org-chart__line" />
            <div className="org-chart__branches">
              {['Bidang Kurikulum', 'Bidang Kesiswaan', 'Administrasi', 'Koordinator Program'].map((role) => (
                <div className="org-card" key={role}><small>Contoh bidang</small><strong>{role}</strong><span>Data belum tersedia</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="profile-people section">
        <div className="container profile-people__grid">
          <SectionIntro
            eyebrow="Pendidik & tenaga kependidikan"
            title="Orang-Orang di Balik Lingkungan Belajar"
            body="Nama, jabatan, dan profil pendidik akan ditampilkan setelah memperoleh persetujuan dan data resmi."
          />
          <div className="profile-people__portraits">
            {[1, 2, 3, 4].map((item) => (
              <article key={item}><div><Icon name="users" size={28} /></div><span>TEACHER_PORTRAIT</span><strong>Nama pendidik</strong><small>Jabatan belum tersedia</small></article>
            ))}
          </div>
          <Button href="#kontak">Hubungi Sekolah</Button>
        </div>
      </section>

      <section className="profile-cta section">
        <div className="container profile-cta__panel">
          <div><span className="eyebrow eyebrow--light"><i />Kenali lebih dekat</span><h2>Mari Terhubung dengan SMP YPPI Ar Rahmah</h2><p>Dapatkan informasi terbaru melalui kanal resmi sekolah setelah detail kontak dikonfirmasi.</p></div>
          <div><Button href="#beranda" variant="light">Kembali ke Beranda</Button><Button href="#ppdb-lengkap" variant="secondary">Informasi PPDB</Button></div>
        </div>
      </section>
    </main>
  );
}
