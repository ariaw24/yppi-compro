import { useState } from 'react';
import { Button, Icon, MediaPlaceholder, PPDBSubNav, SectionIntro } from '@/components/common';
import {
  activityImage,
  heroImage,
  initialApplicants,
  ppdbSelectionTests,
  ppdbStats,
  ppdbStepGuides,
  ppdbWavesDetailed,
} from '@/data';

export function PPDBAlurGelombangPage() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [activeWaveFilter, setActiveWaveFilter] = useState<number>(1);
  const activeStep = ppdbStepGuides[activeStepIndex];

  // Interactive Checklist for Steps
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({
    '01': true,
  });

  const toggleStep = (stepNum: string) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepNum]: !prev[stepNum],
    }));
  };

  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const flowPercent = Math.round((completedCount / ppdbStepGuides.length) * 100);

  return (
    <main className="ppdb-page inner-page">
      {/* Hero Section */}
      <section className="inner-hero inner-hero--ppdb">
        <div className="inner-hero__pattern" />
        <div className="container inner-hero__grid">
          <div className="inner-hero__copy">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="#beranda">Beranda</a>
              <span>/</span>
              <a href="#ppdb-lengkap">PPDB</a>
              <span>/</span>
              <strong>Alur & Gelombang</strong>
            </nav>

            <div className="ppdb-status-ribbon">
              <span className="ppdb-status-indicator" />
              <span>
                Status PPDB: <strong>Gelombang 1 (Utama) Sedang Berlangsung</strong>
              </span>
            </div>

            <h1>Alur Pendaftaran & <em>Jadwal Gelombang PPDB</em></h1>
            <p>
              Pelajari 5 langkah mudah pendaftaran santri/siswa baru SMP YPPI Ar Rahmah, tanggal penting tiap gelombang,
              serta materi observasi dan tes pemetaan ramah anak.
            </p>

            <div className="ppdb-action-bar">
              <Button href="#login-ppdb">Mulai Pendaftaran Online</Button>
              <Button href="#daftar-ppdb" variant="secondary">Buat Akun Portal</Button>
              <Button href="#ppdb-syarat" variant="light">Cek Syarat & Biaya</Button>
            </div>
          </div>

          <div className="inner-hero__visual">
            <MediaPlaceholder src={heroImage} label="PPDB_ALUR_HERO_IMAGE" />
            <span className="inner-hero__stamp">
              <Icon name="compass" />
              <strong>Alur Terpadu Online</strong>
              <small>SMP YPPI Ar Rahmah Bogor</small>
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section" style={{ paddingTop: 32 }}>
        <div className="container">
          {/* Sub Navigation Bar */}
          <PPDBSubNav current="ppdb-alur" />

          {/* Quick Metrics */}
          <div className="ppdb-metric-grid">
            <div className="ppdb-metric-card">
              <small>Gelombang Berjalan</small>
              <strong style={{ color: '#16a34a' }}>Gelombang 1</strong>
              <span style={{ fontSize: 12, color: 'var(--green)', fontWeight: 600 }}>01 Okt – 31 Des 2024</span>
            </div>
            <div className="ppdb-metric-card">
              <small>Keterisian Kuota Gelombang 1</small>
              <strong>{ppdbStats.quotaFilled} / 90 Kursi</strong>
              <div className="ppdb-progress-wrap">
                <div
                  className="ppdb-progress-bar"
                  style={{ width: `${Math.round((ppdbStats.quotaFilled / 90) * 100)}%` }}
                />
              </div>
              <span style={{ fontSize: 11, color: 'var(--muted)' }}>
                {Math.round((ppdbStats.quotaFilled / 90) * 100)}% Terisi (Sisa {ppdbStats.quotaRemaining} Kursi)
              </span>
            </div>
            <div className="ppdb-metric-card">
              <small>Tahapan Alur</small>
              <strong>5 Langkah</strong>
              <span style={{ fontSize: 12, color: 'var(--blue)' }}>Dari Daftar hingga Masuk Sekolah</span>
            </div>
            <div className="ppdb-metric-card">
              <small>Total Pendaftar Terdata</small>
              <strong>{ppdbStats.totalApplicants} Siswa</strong>
              <span style={{ fontSize: 12, color: 'var(--green)' }}>SD/MI Wilayah Ciawi & Sekitarnya</span>
            </div>
          </div>

          {/* SECTION 1: JADWAL & DETAIL GELOMBANG */}
          <div style={{ marginTop: 48 }} id="jadwal-gelombang">
            <SectionIntro
              eyebrow="Jadwal & Kuota"
              title="Waktu dan Tahapan Penerimaan Tiap Gelombang"
              body="Kami menyarankan pendaftaran dilakukan pada Gelombang 1 untuk mendapatkan diskon 20% uang pangkal serta kuota prioritas kelas unggulan tahfiz."
            />

            <div className="ppdb-wave-grid">
              {ppdbWavesDetailed.map((wave) => (
                <div
                  key={wave.name}
                  className={`ppdb-wave-card ${wave.isActive ? 'is-active' : ''}`}
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <span className={`ppdb-wave-badge ${wave.badgeClass}`}>{wave.status}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--blue)' }}>
                      Kuota: {wave.quota} Siswa
                    </span>
                  </div>

                  <h3 style={{ color: 'var(--blue)', fontSize: 18, marginBottom: 6 }}>{wave.name}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 14 }}>📅 {wave.period}</p>

                  <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: 10, fontSize: 12, marginBottom: 16, border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span>Kursi Terisi:</span>
                      <strong>{wave.filled} Siswa</strong>
                    </div>
                    <div className="ppdb-progress-wrap" style={{ margin: '4px 0 6px' }}>
                      <div
                        className="ppdb-progress-bar"
                        style={{ width: `${Math.round((wave.filled / wave.quota) * 100)}%` }}
                      />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--muted)' }}>
                      <span>Sisa Kursi: <strong>{wave.remaining} Kursi</strong></span>
                      <span>{Math.round((wave.filled / wave.quota) * 100)}%</span>
                    </div>
                  </div>

                  <div style={{ color: 'var(--green)', fontSize: 12, fontWeight: 600, marginBottom: 16 }}>
                    ✨ {wave.highlight}
                  </div>

                  {/* Wave Timeline Milestones */}
                  <div style={{ marginTop: 'auto', paddingTop: 14, borderTop: '1px dashed var(--border)' }}>
                    <strong style={{ display: 'block', fontSize: 12, color: 'var(--blue)', marginBottom: 8 }}>
                      Timeline Penting:
                    </strong>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 11 }}>
                      {wave.timeline.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--ink)' }}>
                          <span style={{ color: 'var(--muted)' }}>{item.event}:</span>
                          <strong>{item.date}</strong>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: 18 }}>
                    {wave.isActive ? (
                      <Button href="#login-ppdb" style={{ width: '100%', justifyContent: 'center' }}>
                        Daftar Gelombang Ini
                      </Button>
                    ) : (
                      <button
                        type="button"
                        disabled
                        style={{
                          width: '100%',
                          padding: '10px',
                          borderRadius: 10,
                          background: '#f1f5f9',
                          color: '#94a3b8',
                          border: 'none',
                          fontSize: 13,
                          fontWeight: 600,
                        }}
                      >
                        Dibuka {wave.period.split('–')[0]}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 2: 5 LANGKAH ALUR PENDAFTARAN LENGKAP & INTERAKTIF */}
          <div style={{ marginTop: 56 }} id="alur-lima-langkah">
            <SectionIntro
              eyebrow="Alur 5 Langkah"
              title="Panduan Interaktif Alur Pendaftaran Online"
              body="Klik setiap tahapan di bawah untuk melihat rincian instruksi teknis, dokumen yang diperlukan, dan tips agar pendaftaran Anda berjalan lancar."
            />

            {/* Stepper Buttons Nav */}
            <div className="ppdb-stepper-nav" role="tablist">
              {ppdbStepGuides.map((step, idx) => (
                <button
                  key={step.step}
                  type="button"
                  className={`ppdb-stepper-btn ${activeStepIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveStepIndex(idx)}
                >
                  <span style={{ fontSize: 11, fontWeight: 800, opacity: 0.8 }}>LANGKAH {step.step}</span>
                  <strong>{step.title}</strong>
                  <small style={{ fontSize: 11, opacity: 0.75 }}>⏱️ {step.timeEstimate}</small>
                </button>
              ))}
            </div>

            {/* Active Step Detailed Card */}
            <div
              style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: 32,
                boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
                <div>
                  <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: 999, background: 'var(--surface-green)', color: 'var(--blue)', fontSize: 12, fontWeight: 800, marginBottom: 6 }}>
                    TAHAP {activeStep.step} DARI 05
                  </span>
                  <h3 style={{ color: 'var(--blue)', fontSize: 22, margin: 0 }}>{activeStep.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: 14, margin: '6px 0 0' }}>{activeStep.shortDesc}</p>
                </div>

                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <Button href={activeStep.actionLink}>{activeStep.actionText}</Button>
                  <button
                    type="button"
                    onClick={() => toggleStep(activeStep.step)}
                    style={{
                      padding: '10px 16px',
                      borderRadius: 10,
                      border: '1px solid var(--border)',
                      background: completedSteps[activeStep.step] ? '#dcfce7' : '#fff',
                      color: completedSteps[activeStep.step] ? '#166534' : 'var(--muted)',
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    <Icon name="check" size={14} />
                    {completedSteps[activeStep.step] ? 'Telah Selesai' : 'Tandai Selesai'}
                  </button>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginTop: 24 }}>
                <div style={{ background: '#f8fafc', padding: 22, borderRadius: 14, border: '1px solid var(--border)' }}>
                  <h4 style={{ color: 'var(--blue)', fontSize: 15, marginBottom: 12 }}>
                    📋 Panduan Langkah Demi Langkah:
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: 20, fontSize: 13, lineHeight: 1.8, color: 'var(--ink)' }}>
                    {activeStep.details.map((detail, idx) => (
                      <li key={idx} style={{ marginBottom: 6 }}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{ background: '#f0fdf4', padding: 18, borderRadius: 12, border: '1px solid #bbf7d0' }}>
                    <strong style={{ color: '#166534', fontSize: 13 }}>💡 Tips Sukses di Langkah Ini:</strong>
                    <p style={{ color: '#166534', fontSize: 12, margin: '6px 0 0', lineHeight: 1.6 }}>
                      {activeStep.step === '01' && 'Simpan screenshot Nomor Registrasi akun Anda. Nomor ini digunakan setiap kali login dan verifikasi berkas.'}
                      {activeStep.step === '02' && 'Pastikan data Nomor Induk Siswa Nasional (NISN) sesuai dengan data rapor SD/MI asal agar sinkronisasi Dapodik berhasil.'}
                      {activeStep.step === '03' && 'Foto dokumen di tempat terang agar tulisan pada Akta dan Kartu Keluarga terbaca tajam tanpa buram.'}
                      {activeStep.step === '04' && 'Anak tidak perlu cemas atau tegang! Tes pemetaan didesain ramah, menyenangkan, dan berfokus pada potensi unik anak.'}
                      {activeStep.step === '05' && 'Segera selesaikan verifikasi daftar ulang untuk memilih ukuran seragam dan mendapatkan paket modul.'}
                    </p>
                  </div>

                  <div style={{ background: 'var(--warm)', padding: 18, borderRadius: 12, border: '1px solid var(--border)' }}>
                    <strong style={{ color: 'var(--blue)', fontSize: 13 }}>⏱️ Perkiraan Waktu Pelaksanaan:</strong>
                    <p style={{ color: 'var(--ink)', fontSize: 12, margin: '4px 0 0' }}>
                      {activeStep.timeEstimate}
                    </p>
                  </div>
                </div>
              </div>

              {/* Prev / Next navigation buttons */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 28, paddingTop: 18, borderTop: '1px solid #f1f5f9' }}>
                <button
                  type="button"
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 8,
                    border: '1px solid var(--border)',
                    background: '#fff',
                    color: activeStepIndex === 0 ? '#cbd5e1' : 'var(--blue)',
                    cursor: activeStepIndex === 0 ? 'not-allowed' : 'pointer',
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  ← Langkah Sebelumnya
                </button>

                <span style={{ fontSize: 12, color: 'var(--muted)', alignSelf: 'center' }}>
                  Langkah {activeStepIndex + 1} dari {ppdbStepGuides.length}
                </span>

                <button
                  type="button"
                  disabled={activeStepIndex === ppdbStepGuides.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(ppdbStepGuides.length - 1, prev + 1))}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 8,
                    border: '1px solid var(--border)',
                    background: '#fff',
                    color: activeStepIndex === ppdbStepGuides.length - 1 ? '#cbd5e1' : 'var(--blue)',
                    cursor: activeStepIndex === ppdbStepGuides.length - 1 ? 'not-allowed' : 'pointer',
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Langkah Berikutnya →
                </button>
              </div>
            </div>
          </div>

          {/* SECTION 3: PANDUAN MATERI TES PEMETAAN */}
          <div style={{ marginTop: 56 }} id="ppdb-alur-materi">
            <SectionIntro
              eyebrow="Observasi Ramah Anak"
              title="Materi Tes Pemetaan & Asesmen Karakter"
              body="SMP YPPI Ar Rahmah memprioritaskan kenyamanan calon siswa. Asesmen bertujuan mengenali kemampuan awal santri untuk penempatan bimbingan yang tepat, bukan untuk mendiskriminasi."
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginTop: 28 }}>
              {ppdbSelectionTests.map((test, idx) => (
                <div key={idx} style={{ background: 'var(--white)', padding: 26, borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <span style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--surface-green)', color: 'var(--green)', display: 'grid', placeItems: 'center' }}>
                      <Icon name={test.icon as any} size={18} />
                    </span>
                    <span style={{ padding: '3px 8px', borderRadius: 999, background: 'var(--warm)', color: 'var(--blue)', fontSize: 11, fontWeight: 700 }}>
                      {test.badge}
                    </span>
                  </div>

                  <h3 style={{ color: 'var(--blue)', fontSize: 17, marginBottom: 8 }}>{test.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: 12, lineHeight: 1.5, marginBottom: 16 }}>{test.desc}</p>

                  <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12, lineHeight: 1.7, color: 'var(--ink)' }}>
                    {test.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 4: DATA CALON PENDAFTAR REALTIME (SINKRON CMS) */}
          <div style={{ marginTop: 56 }}>
            <SectionIntro
              eyebrow="Transparansi Seleksi"
              title="Aktivitas & Status Verifikasi Calon Pendaftar"
              body="Data pendaftar tersinkronisasi langsung dengan sistem administrasi sekolah, memastikan seluruh proses verifikasi transparan dan adil."
            />

            <div className="ppdb-table-wrapper">
              <table className="ppdb-table">
                <thead>
                  <tr>
                    <th>No. Registrasi</th>
                    <th>Nama Calon Siswa</th>
                    <th>Asal Sekolah SD/MI</th>
                    <th>Jalur Pendaftaran</th>
                    <th>Status Seleksi</th>
                  </tr>
                </thead>
                <tbody>
                  {initialApplicants.map((applicant) => (
                    <tr key={applicant.id}>
                      <td>
                        <strong style={{ color: 'var(--blue)' }}>{applicant.id}</strong>
                      </td>
                      <td>
                        <strong>{applicant.name}</strong>
                      </td>
                      <td style={{ color: 'var(--muted)', fontSize: 12 }}>{applicant.school}</td>
                      <td>
                        <span style={{ padding: '2px 8px', borderRadius: 999, background: 'var(--surface-green)', color: 'var(--blue)', fontSize: 11, fontWeight: 600 }}>
                          {applicant.track}
                        </span>
                      </td>
                      <td>
                        <span
                          style={{
                            padding: '3px 10px',
                            borderRadius: 999,
                            fontSize: 11,
                            fontWeight: 700,
                            background:
                              applicant.status === 'Diterima'
                                ? '#dcfce7'
                                : applicant.status === 'Lolos Verifikasi'
                                  ? '#e0e7ff'
                                  : '#fef3c7',
                            color:
                              applicant.status === 'Diterima'
                                ? '#166534'
                                : applicant.status === 'Lolos Verifikasi'
                                  ? '#3730a3'
                                  : '#92400e',
                          }}
                        >
                          {applicant.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ textAlign: 'center', marginTop: 18 }}>
              <small style={{ color: 'var(--muted)', fontSize: 12 }}>
                Sudah mendaftar? Masuk ke portal untuk memeriksa status berkas pendaftaran Anda secara detail.
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box Bottom */}
      <section className="inner-cta section">
        <div className="container inner-cta__panel">
          <div>
            <span className="eyebrow eyebrow--light"><i />Siap Memulai Pendaftaran?</span>
            <h2>Wujudkan Pendidikan Islami Terbaik Bersama Ar Rahmah</h2>
            <p>Panitia siap memandu Anda melalui setiap tahapan pendaftaran online dan offline.</p>
          </div>
          <div>
            <Button href="#login-ppdb" variant="light">Daftar Akun Portal</Button>
            <Button href="#ppdb-syarat" variant="secondary">Lihat Syarat & Biaya</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
