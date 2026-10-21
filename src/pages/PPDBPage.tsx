import { useState } from 'react';
import { Button, Icon, MediaPlaceholder, PPDBSubNav, SectionIntro } from '@/components/common';
import { heroImage, ppdbJalur, ppdbSteps, ppdbWaves } from '@/data';

export function PPDBPage() {
  const [activeTab, setActiveTab] = useState<'alur' | 'syarat' | 'jalur' | 'biaya'>('alur');

  return (
    <main className="ppdb-page inner-page">
      <section className="inner-hero inner-hero--ppdb">
        <div className="inner-hero__pattern" />
        <div className="container inner-hero__grid">
          <div className="inner-hero__copy">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="#beranda">Beranda</a><span>/</span><strong>Informasi PPDB</strong>
            </nav>
            <div className="ppdb-status-ribbon">
              <span className="ppdb-status-indicator" />
              <span>PPDB TP 2025/2026: <strong>Gelombang 1 Sedang Dibuka</strong></span>
            </div>
            <h1>Penerimaan Peserta Didik Baru <em>SMP YPPI Ar Rahmah</em></h1>
            <p>
              Bergabunglah bersama keluarga besar SMP YPPI Ar Rahmah di Seuseupan, Ciawi, Bogor.
              Membentuk generasi berilmu, berkarakter Islami, dan siap menghadapi tantangan masa depan.
            </p>
            <div className="ppdb-action-bar">
              <Button href="#login-ppdb">Masuk Portal PPDB</Button>
              <Button href="#ppdb-syarat" variant="secondary">Laman Informasi & Syarat</Button>
              <Button href="#ppdb-alur" variant="light">Laman Alur & Gelombang</Button>
            </div>
          </div>
          <div className="inner-hero__visual">
            <MediaPlaceholder src={heroImage} label="PPDB_HERO_IMAGE" />
            <span className="inner-hero__stamp">
              <Icon name="graduation" />
              <strong>Tahun Ajaran 2025/2026</strong>
              <small>SMP YPPI Ar Rahmah</small>
            </span>
          </div>
        </div>
      </section>

      {/* Gelombang Pendaftaran Section */}
      <section className="section" id="ppdb-alur" style={{ paddingTop: 32 }}>
        <div className="container">
          <PPDBSubNav current="ppdb-lengkap" />
          <SectionIntro
            eyebrow="Jadwal & Gelombang"
            title="Waktu dan Tahapan Pendaftaran Siswa Baru"
            body="Pilih gelombang pendaftaran yang sesuai. Kami menyarankan pendaftaran di Gelombang 1 untuk mendapatkan kuota prioritas."
          />

          <div className="ppdb-wave-grid">
            {ppdbWaves.map((wave) => (
              <div key={wave.name} className={`ppdb-wave-card ${wave.isActive ? 'is-active' : ''}`}>
                <span className={`ppdb-wave-badge ${wave.badgeClass}`}>{wave.status}</span>
                <h3 style={{ color: 'var(--blue)', fontSize: 18, marginBottom: 8 }}>{wave.name}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 12 }}>📅 {wave.period}</p>
                <div style={{ background: 'var(--warm)', padding: '10px 14px', borderRadius: 10, fontSize: 12, marginBottom: 12 }}>
                  <strong>Kuota:</strong> {wave.quota}
                </div>
                <div style={{ color: 'var(--green)', fontSize: 12, fontWeight: 600 }}>
                  ✨ {wave.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Langkah Alur Pendaftaran */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <SectionIntro
            eyebrow="Alur Pendaftaran"
            title="5 Langkah Mudah Mendaftar di SMP YPPI Ar Rahmah"
            body="Proses pendaftaran dirancang transparan, fleksibel secara online, dan didampingi langsung oleh panitia sekolah."
          />

          <div className="ppdb-flow-grid">
            {ppdbSteps.map((step) => (
              <div key={step.num} className="ppdb-flow-item">
                <div className="ppdb-flow-num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Button href="#login-ppdb">Mulai Pendaftaran Online Sekarang</Button>
          </div>
        </div>
      </section>

      {/* Jalur & Syarat Berkas */}
      <section className="section">
        <div className="container">
          <div className="content-tabs" role="tablist">
            <button
              className={activeTab === 'alur' ? 'is-active' : ''}
              onClick={() => setActiveTab('alur')}
            >
              Jalur Pendaftaran
            </button>
            <button
              className={activeTab === 'syarat' ? 'is-active' : ''}
              onClick={() => setActiveTab('syarat')}
            >
              Syarat & Dokumen Berkas
            </button>
            <button
              className={activeTab === 'biaya' ? 'is-active' : ''}
              onClick={() => setActiveTab('biaya')}
            >
              Biaya & Beasiswa
            </button>
          </div>

          {activeTab === 'alur' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginTop: 28 }}>
              {ppdbJalur.map((jalur) => (
                <div key={jalur.title} style={{ background: 'var(--white)', padding: 26, borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                  <span style={{ display: 'inline-block', padding: '3px 8px', borderRadius: 999, background: 'var(--surface-green)', color: 'var(--green)', fontSize: 11, fontWeight: 700, marginBottom: 14 }}>
                    {jalur.tag}
                  </span>
                  <h3 style={{ color: 'var(--blue)', fontSize: 17, marginBottom: 8 }}>{jalur.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{jalur.desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'syarat' && (
            <div style={{ background: 'var(--white)', padding: 36, borderRadius: 'var(--radius)', border: '1px solid var(--border)', marginTop: 28 }}>
              <h3 style={{ color: 'var(--blue)', fontSize: 20, marginBottom: 16 }}>📋 Dokumen Persyaratan yang Harus Disiapkan</h3>
              <ul style={{ color: 'var(--ink)', fontSize: 14, lineHeight: 2, paddingLeft: 22 }}>
                <li>Fotokopi Akta Kelahiran calon siswa (2 lembar)</li>
                <li>Fotokopi Kartu Keluarga (KK) yang masih berlaku (2 lembar)</li>
                <li>Fotokopi Ijazah / Surat Keterangan Lulus (SKL) SD/MI yang dilegalisir (2 lembar)</li>
                <li>Fotokopi Rapor kelas 4, 5, dan 6 (semester ganjil)</li>
                <li>Pas foto terbaru ukuran 3x4 berwarna dengan latar belakang merah/biru (4 lembar)</li>
                <li>Sertifikat piagam hafalan Al-Qur'an atau kejuaraan lomba (khusus jalur prestasi)</li>
                <li>Surat Keterangan Tidak Mampu (SKTM) dari kelurahan (khusus jalur afirmasi)</li>
              </ul>
              <div style={{ marginTop: 20, padding: 14, background: '#f0fdf4', borderRadius: 10, color: '#166534', fontSize: 13 }}>
                💡 <em>Seluruh dokumen diunggah dalam format PDF/JPG melalui portal PPDB online setelah membuat akun.</em>
              </div>
            </div>
          )}

          {activeTab === 'biaya' && (
            <div style={{ background: 'var(--white)', padding: 36, borderRadius: 'var(--radius)', border: '1px solid var(--border)', marginTop: 28 }}>
              <h3 style={{ color: 'var(--blue)', fontSize: 20, marginBottom: 12 }}>💳 Komitmen Biaya Terjangkau & Program Beasiswa</h3>
              <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                SMP YPPI Ar Rahmah berkomitmen menghadirkan pendidikan berkualitas dengan pembiayaan yang transparan, dapat diangsur, serta menyediakan program subsidi silang bagi keluarga yang membutuhkan.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                <div style={{ background: 'var(--warm)', padding: 18, borderRadius: 12, border: '1px solid var(--border)' }}>
                  <small style={{ color: 'var(--muted)' }}>Formulir Pendaftaran</small>
                  <strong style={{ display: 'block', fontSize: 18, color: 'var(--blue)', marginTop: 4 }}>Rp 150.000</strong>
                  <span style={{ fontSize: 11, color: 'var(--green)' }}>Termasuk paket ujian & map</span>
                </div>
                <div style={{ background: 'var(--warm)', padding: 18, borderRadius: 12, border: '1px solid var(--border)' }}>
                  <small style={{ color: 'var(--muted)' }}>Infaq Pengembangan (Uang Pangkal)</small>
                  <strong style={{ display: 'block', fontSize: 18, color: 'var(--blue)', marginTop: 4 }}>Dapat Diangsur</strong>
                  <span style={{ fontSize: 11, color: 'var(--green)' }}>Diskon 20% di Gelombang 1</span>
                </div>
                <div style={{ background: 'var(--warm)', padding: 18, borderRadius: 12, border: '1px solid var(--border)' }}>
                  <small style={{ color: 'var(--muted)' }}>Beasiswa Tahfiz Qur'an</small>
                  <strong style={{ display: 'block', fontSize: 18, color: 'var(--blue)', marginTop: 4 }}>Hingga 100% Bebas SPP</strong>
                  <span style={{ fontSize: 11, color: 'var(--green)' }}>Hafalan minimal 2 Juz</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Box Bottom */}
      <section className="inner-cta section">
        <div className="container inner-cta__panel">
          <div>
            <span className="eyebrow eyebrow--light"><i />Portal pendaftaran online</span>
            <h2>Sudah Memiliki Akun PPDB?</h2>
            <p>Masuk ke portal pendaftar untuk melengkapi berkas, melihat hasil verifikasi, dan memantau jadwal seleksi.</p>
          </div>
          <div>
            <Button href="#login-ppdb" variant="light">Masuk Portal PPDB</Button>
            <Button href="#daftar-ppdb" variant="secondary">Daftar Akun Baru</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
