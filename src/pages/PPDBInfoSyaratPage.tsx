import { useState } from 'react';
import { Button, Icon, MediaPlaceholder, PPDBSubNav, SectionIntro } from '@/components/common';
import {
  heroImage,
  libraryImage,
  ppdbDocumentChecklist,
  ppdbFaqData,
  ppdbFeeItems,
  ppdbGeneralRequirements,
  ppdbStats,
  ppdbTrackDetails,
} from '@/data';

export function PPDBInfoSyaratPage() {
  const [activeTab, setActiveTab] = useState<'jalur' | 'berkas' | 'biaya' | 'kriteria'>('jalur');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Interactive Checklist State
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({
    'Akta Kelahiran Calon Siswa': true,
    'Kartu Keluarga (KK)': true,
    'KTP Kedua Orang Tua / Wali': true,
  });

  const toggleDoc = (docName: string) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [docName]: !prev[docName],
    }));
  };

  const totalMandatoryDocs = ppdbDocumentChecklist.filter((d) => d.mandatory).length;
  const checkedMandatoryCount = ppdbDocumentChecklist.filter(
    (d) => d.mandatory && checkedDocs[d.name],
  ).length;
  const progressPercent = Math.round((checkedMandatoryCount / totalMandatoryDocs) * 100);

  // Interactive Calculator State
  const [calcTrack, setCalcTrack] = useState<'reguler' | 'tahfiz' | 'akademik-bakat' | 'afirmasi'>('reguler');
  const [isWave1, setIsWave1] = useState(true);
  const [isInstallment, setIsInstallment] = useState(false);

  // Fee calculation
  const baseUangPangkal = 3500000;
  const uangPangkal = isWave1 ? baseUangPangkal * 0.8 : baseUangPangkal; // 20% discount in wave 1
  let trackDiscount = 0;
  let sppAmount = 350000;

  if (calcTrack === 'tahfiz') {
    trackDiscount = 1000000; // potongan beasiswa tahfiz
    sppAmount = 0; // 100% bebas SPP
  } else if (calcTrack === 'akademik-bakat') {
    trackDiscount = 875000; // potongan prestasi juara 25%
  } else if (calcTrack === 'afirmasi') {
    trackDiscount = 1750000; // subsidi 50%
    sppAmount = 175000;
  }

  const finalUangPangkal = Math.max(0, uangPangkal - trackDiscount);
  const formulir = 150000;
  const seragam = 950000;
  const buku = 650000;
  const totalBiayaAwal = formulir + finalUangPangkal + seragam + buku + sppAmount;

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
              <strong>Informasi & Syarat</strong>
            </nav>

            <div className="ppdb-status-ribbon">
              <span className="ppdb-status-indicator" />
              <span>
                PPDB TP {ppdbStats.academicYear}: <strong>{ppdbStats.activeWaveName} Sedang Dibuka</strong>
              </span>
            </div>

            <h1>Informasi, Jalur & Syarat <em>PPDB SMP YPPI Ar Rahmah</em></h1>
            <p>
              Panduan lengkap pendaftaran peserta didik baru, rincian 4 jalur penerimaan, kelengkapan berkas dokumen,
              serta simulasi transparansi biaya pendidikan tahun ajaran {ppdbStats.academicYear}.
            </p>

            <div className="ppdb-action-bar">
              <Button href="#login-ppdb">Masuk Portal PPDB</Button>
              <Button href="#daftar-ppdb" variant="secondary">Daftar Akun Baru</Button>
              <Button href="#ppdb-alur" variant="light">Lihat Alur & Gelombang</Button>
            </div>
          </div>

          <div className="inner-hero__visual">
            <MediaPlaceholder src={libraryImage} label="PPDB_SYARAT_HERO_IMAGE" />
            <span className="inner-hero__stamp">
              <Icon name="book" />
              <strong>Jalur & Berkas Resmi</strong>
              <small>SMP YPPI Ar Rahmah Bogor</small>
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section" style={{ paddingTop: 32 }}>
        <div className="container">
          {/* Sub Navigation Bar */}
          <PPDBSubNav current="ppdb-syarat" />

          {/* Quick Metrics */}
          <div className="ppdb-metric-grid">
            <div className="ppdb-metric-card">
              <small>Total Daya Tampung</small>
              <strong>{ppdbStats.totalCapacity} Siswa</strong>
              <span style={{ fontSize: 12, color: 'var(--green)', fontWeight: 600 }}>5 Rombongan Belajar (Rombel)</span>
            </div>
            <div className="ppdb-metric-card">
              <small>Status Gelombang 1</small>
              <strong style={{ color: '#16a34a' }}>Sisa {ppdbStats.quotaRemaining} Kursi</strong>
              <span style={{ fontSize: 12, color: 'var(--muted)' }}>Dari 90 Kuota Utama</span>
            </div>
            <div className="ppdb-metric-card">
              <small>Pilihan Jalur Masuk</small>
              <strong>4 Jalur</strong>
              <span style={{ fontSize: 12, color: 'var(--blue)' }}>Reguler, Tahfiz, Bakat, Afirmasi</span>
            </div>
            <div className="ppdb-metric-card">
              <small>Beasiswa Pendidikan</small>
              <strong style={{ color: '#ca8a04' }}>Hingga 100%</strong>
              <span style={{ fontSize: 12, color: 'var(--green)' }}>Bebas SPP bagi Hafiz Qur’an</span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div style={{ marginTop: 44, display: 'flex', justifyContent: 'center' }}>
            <div className="content-tabs" role="tablist">
              <button
                className={activeTab === 'jalur' ? 'is-active' : ''}
                onClick={() => setActiveTab('jalur')}
              >
                1. Jalur Pendaftaran
              </button>
              <button
                className={activeTab === 'berkas' ? 'is-active' : ''}
                onClick={() => setActiveTab('berkas')}
              >
                2. Syarat Dokumen & Checklist
              </button>
              <button
                className={activeTab === 'biaya' ? 'is-active' : ''}
                onClick={() => setActiveTab('biaya')}
              >
                3. Biaya & Kalkulator Simulasi
              </button>
              <button
                className={activeTab === 'kriteria' ? 'is-active' : ''}
                onClick={() => setActiveTab('kriteria')}
              >
                4. Kriteria Kelulusan & Beasiswa
              </button>
            </div>
          </div>

          {/* TAB 1: JALUR PENDAFTARAN */}
          {activeTab === 'jalur' && (
            <div style={{ marginTop: 24 }}>
              <SectionIntro
                eyebrow="Pilihan Jalur Masuk"
                title="Pilih Jalur yang Paling Sesuai dengan Potensi Calon Siswa"
                body="SMP YPPI Ar Rahmah membuka kesempatan yang luas dan inklusif bagi seluruh putra-putri berprestasi dan berkarakter Islami di wilayah Bogor dan sekitarnya."
              />

              <div className="ppdb-track-grid">
                {ppdbTrackDetails.map((track) => (
                  <div key={track.id} className="ppdb-track-card">
                    <div className="ppdb-track-header">
                      <div>
                        <span
                          style={{
                            display: 'inline-block',
                            padding: '3px 10px',
                            borderRadius: 999,
                            background:
                              track.badgeColor === 'green'
                                ? '#dcfce7'
                                : track.badgeColor === 'amber'
                                  ? '#fef3c7'
                                  : track.badgeColor === 'purple'
                                    ? '#f3e8ff'
                                    : 'var(--surface-green)',
                            color:
                              track.badgeColor === 'green'
                                ? '#166534'
                                : track.badgeColor === 'amber'
                                  ? '#92400e'
                                  : track.badgeColor === 'purple'
                                    ? '#6b21a8'
                                    : 'var(--blue)',
                            fontSize: 11,
                            fontWeight: 700,
                            marginBottom: 8,
                          }}
                        >
                          {track.tag}
                        </span>
                        <h3 style={{ color: 'var(--blue)', fontSize: 19, margin: 0 }}>{track.name}</h3>
                      </div>
                      <span className="ppdb-track-quota">Kuota: {track.quota}</span>
                    </div>

                    <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
                      {track.target}
                    </p>

                    <div style={{ background: '#f8fafc', padding: 16, borderRadius: 12, marginBottom: 16, border: '1px solid var(--border)' }}>
                      <strong style={{ display: 'block', fontSize: 13, color: 'var(--blue)', marginBottom: 8 }}>
                        📌 Syarat Khusus Jalur:
                      </strong>
                      <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12, lineHeight: 1.8, color: 'var(--ink)' }}>
                        {track.criteria.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '1px dashed var(--border)' }}>
                      <strong style={{ display: 'block', fontSize: 12, color: 'var(--green)', marginBottom: 6 }}>
                        ✨ Keunggulan & Benefit Jalur:
                      </strong>
                      <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12, lineHeight: 1.7, color: 'var(--muted)' }}>
                        {track.benefits.map((benefit, idx) => (
                          <li key={idx}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Syarat Umum Accordion Card */}
              <div style={{ background: 'var(--white)', padding: 32, borderRadius: 'var(--radius)', border: '1px solid var(--border)', marginTop: 36 }}>
                <h3 style={{ color: 'var(--blue)', fontSize: 20, marginBottom: 8 }}>
                  📖 Persyaratan Umum Calon Peserta Didik Baru
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 20 }}>
                  Berlaku bagi seluruh pendaftar dari semua jalur penerimaan di SMP YPPI Ar Rahmah.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                  {ppdbGeneralRequirements.map((req, idx) => (
                    <div key={idx} style={{ background: 'var(--warm)', padding: 18, borderRadius: 12, border: '1px solid var(--border)' }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--blue)', background: 'rgba(30,77,43,0.08)', padding: '2px 8px', borderRadius: 6 }}>
                        {req.badge}
                      </span>
                      <h4 style={{ color: 'var(--blue)', fontSize: 15, margin: '8px 0 6px' }}>{req.title}</h4>
                      <p style={{ color: 'var(--ink)', fontSize: 12, lineHeight: 1.6, margin: 0 }}>{req.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SYARAT DOKUMEN & CHECKLIST INTERAKTIF */}
          {activeTab === 'berkas' && (
            <div style={{ marginTop: 24 }}>
              <SectionIntro
                eyebrow="Kelengkapan Dokumen"
                title="Daftar Berkas Persyaratan Administrasi & Uji Mandiri"
                body="Seluruh berkas persyaratan diunggah melalui formulir digital di Portal PPDB Online, dan salinan fotokopi diserahkan saat pelaksanaan tes pemetaan."
              />

              {/* Interactive Readiness Widget */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #f0fdf4, #e8f5ec)',
                  border: '1px solid #bbf7d0',
                  borderRadius: 'var(--radius)',
                  padding: 24,
                  marginBottom: 28,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 20,
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <h4 style={{ color: 'var(--blue)', fontSize: 17, marginBottom: 4 }}>
                    Simulasi Kesiapan Berkas Anda: {progressPercent}% Selesai
                  </h4>
                  <p style={{ color: 'var(--muted)', fontSize: 13, margin: 0 }}>
                    {checkedMandatoryCount} dari {totalMandatoryDocs} dokumen wajib telah siap. Centang daftar di bawah untuk mengecek kelengkapan Anda!
                  </p>
                  <div style={{ width: 280, maxWidth: '100%', height: 10, background: '#dcfce7', borderRadius: 999, overflow: 'hidden', marginTop: 10 }}>
                    <div
                      style={{
                        width: `${progressPercent}%`,
                        height: '100%',
                        background: progressPercent === 100 ? '#16a34a' : 'var(--blue)',
                        transition: 'width 0.4s ease',
                      }}
                    />
                  </div>
                </div>

                <div>
                  {progressPercent === 100 ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: '#16a34a', color: '#fff', borderRadius: 999, fontSize: 13, fontWeight: 700 }}>
                      <Icon name="check" size={16} /> Berkas Siap Diunggah!
                    </span>
                  ) : (
                    <Button href="#login-ppdb" variant="primary">Unggah di Portal PPDB</Button>
                  )}
                </div>
              </div>

              {/* Table of Documents */}
              <div className="ppdb-table-wrapper">
                <table className="ppdb-table">
                  <thead>
                    <tr>
                      <th style={{ width: 44, textAlign: 'center' }}>Cek</th>
                      <th>Nama Dokumen Persyaratan</th>
                      <th>Bentuk & Format Berkas</th>
                      <th>Sifat</th>
                      <th>Keterangan Penting</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ppdbDocumentChecklist.map((doc) => {
                      const isChecked = !!checkedDocs[doc.name];
                      return (
                        <tr key={doc.name} style={{ background: isChecked ? '#f7faf7' : undefined }}>
                          <td style={{ textAlign: 'center' }}>
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleDoc(doc.name)}
                              style={{ width: 17, height: 17, cursor: 'pointer', accentColor: 'var(--green)' }}
                              aria-label={`Tandai berkas ${doc.name}`}
                            />
                          </td>
                          <td>
                            <strong style={{ color: isChecked ? 'var(--blue)' : 'var(--ink)' }}>{doc.name}</strong>
                          </td>
                          <td style={{ color: 'var(--muted)', fontSize: 12 }}>{doc.format}</td>
                          <td>
                            <span
                              style={{
                                display: 'inline-block',
                                padding: '2px 8px',
                                borderRadius: 999,
                                fontSize: 11,
                                fontWeight: 700,
                                background: doc.mandatory ? '#fee2e2' : '#f1f5f9',
                                color: doc.mandatory ? '#991b1b' : '#475569',
                              }}
                            >
                              {doc.mandatory ? 'Wajib' : 'Tambahan'}
                            </span>
                          </td>
                          <td style={{ fontSize: 12, color: 'var(--muted)' }}>{doc.note}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div style={{ marginTop: 24, padding: 18, background: '#fffbeb', border: '1px solid #fef3c7', borderRadius: 12, color: '#92400e', fontSize: 13, display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ fontSize: 20 }}>💡</span>
                <div>
                  <strong>Panduan Format Digital:</strong> Seluruh berkas scan/foto diunggah dalam format PDF atau JPG/PNG dengan resolusi terbaca jelas (maksimal 2MB per file) setelah login ke akun portal pendaftar.
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: BIAYA & SIMULASI KALKULATOR */}
          {activeTab === 'biaya' && (
            <div style={{ marginTop: 24 }}>
              <SectionIntro
                eyebrow="Transparansi Biaya"
                title="Investasi Pendidikan yang Terjangkau & Penuh Maslahat"
                body="SMP YPPI Ar Rahmah mengedepankan prinsip keterbukaan, tidak ada biaya tersembunyi, serta memberikan kemudahan skema cicilan untuk keluarga siswa."
              />

              {/* Fee Breakdown Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                {ppdbFeeItems.map((fee, idx) => (
                  <div key={idx} style={{ background: 'var(--white)', padding: 22, borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--green)', textTransform: 'uppercase' }}>
                      {fee.type}
                    </span>
                    <h4 style={{ color: 'var(--blue)', fontSize: 15, margin: '8px 0 4px' }}>{fee.name}</h4>
                    <strong style={{ display: 'block', fontSize: 22, color: 'var(--blue)', margin: '8px 0' }}>
                      {fee.amount}
                    </strong>
                    <p style={{ color: 'var(--muted)', fontSize: 12, lineHeight: 1.5, margin: 0 }}>{fee.desc}</p>
                    <div style={{ marginTop: 12, paddingTop: 10, borderTop: '1px solid #f1f5f9', fontSize: 11, color: 'var(--ink)' }}>
                      ℹ️ {fee.note}
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive Cost Calculator */}
              <div className="ppdb-calc-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14, marginBottom: 20 }}>
                  <div>
                    <h3 style={{ color: 'var(--blue)', fontSize: 19, margin: 0 }}>
                      🧮 Kalkulator Simulasi Estimasi Biaya Awal
                    </h3>
                    <p style={{ color: 'var(--muted)', fontSize: 13, margin: '4px 0 0' }}>
                      Pilih jalur pendaftaran dan gelombang untuk menghitung estimasi biaya masuk pertama.
                    </p>
                  </div>
                  <span style={{ padding: '6px 14px', borderRadius: 999, background: 'var(--surface-green)', color: 'var(--blue)', fontSize: 12, fontWeight: 700 }}>
                    Simulasi Otomatis
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 24 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--blue)', marginBottom: 6 }}>
                      Pilih Jalur Masuk:
                    </label>
                    <select
                      value={calcTrack}
                      onChange={(e) => setCalcTrack(e.target.value as any)}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--border)', background: 'var(--white)', fontSize: 13, fontWeight: 600 }}
                    >
                      <option value="reguler">Jalur Reguler (SD/MI)</option>
                      <option value="tahfiz">Jalur Prestasi Tahfiz Qur'an (Beasiswa)</option>
                      <option value="akademik-bakat">Jalur Prestasi Akademik/Bakat (Diskon)</option>
                      <option value="afirmasi">Jalur Afirmasi / Kemitraan (Subsidi)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--blue)', marginBottom: 6 }}>
                      Waktu Pendaftaran:
                    </label>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <button
                        type="button"
                        onClick={() => setIsWave1(true)}
                        style={{
                          flex: 1,
                          padding: '10px',
                          borderRadius: 10,
                          fontSize: 12,
                          fontWeight: 700,
                          border: '1px solid',
                          borderColor: isWave1 ? 'var(--blue)' : 'var(--border)',
                          background: isWave1 ? 'var(--blue)' : 'var(--white)',
                          color: isWave1 ? '#fff' : 'var(--muted)',
                          cursor: 'pointer',
                        }}
                      >
                        Gelombang 1 (-20%)
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsWave1(false)}
                        style={{
                          flex: 1,
                          padding: '10px',
                          borderRadius: 10,
                          fontSize: 12,
                          fontWeight: 700,
                          border: '1px solid',
                          borderColor: !isWave1 ? 'var(--blue)' : 'var(--border)',
                          background: !isWave1 ? 'var(--blue)' : 'var(--white)',
                          color: !isWave1 ? '#fff' : 'var(--muted)',
                          cursor: 'pointer',
                        }}
                      >
                        Gelombang 2 / 3
                      </button>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--blue)', marginBottom: 6 }}>
                      Metode Infaq Pengembangan:
                    </label>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <button
                        type="button"
                        onClick={() => setIsInstallment(false)}
                        style={{
                          flex: 1,
                          padding: '10px',
                          borderRadius: 10,
                          fontSize: 12,
                          fontWeight: 700,
                          border: '1px solid',
                          borderColor: !isInstallment ? 'var(--green)' : 'var(--border)',
                          background: !isInstallment ? 'var(--surface-green)' : 'var(--white)',
                          color: 'var(--blue)',
                          cursor: 'pointer',
                        }}
                      >
                        Lunas Sekaligus
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsInstallment(true)}
                        style={{
                          flex: 1,
                          padding: '10px',
                          borderRadius: 10,
                          fontSize: 12,
                          fontWeight: 700,
                          border: '1px solid',
                          borderColor: isInstallment ? 'var(--green)' : 'var(--border)',
                          background: isInstallment ? 'var(--surface-green)' : 'var(--white)',
                          color: 'var(--blue)',
                          cursor: 'pointer',
                        }}
                      >
                        Cicil 3x Angsuran
                      </button>
                    </div>
                  </div>
                </div>

                {/* Calculation Summary Box */}
                <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 14, padding: 22 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14, fontSize: 13, borderBottom: '1px solid #f1f5f9', paddingBottom: 14 }}>
                    <div>
                      <span style={{ color: 'var(--muted)' }}>Formulir & Tes:</span>
                      <strong style={{ display: 'block', color: 'var(--blue)' }}>Rp 150.000</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--muted)' }}>Infaq Pengembangan (Net):</span>
                      <strong style={{ display: 'block', color: 'var(--blue)' }}>
                        Rp {finalUangPangkal.toLocaleString('id-ID')}
                      </strong>
                      {isInstallment && (
                        <small style={{ color: 'var(--green)' }}>
                          (± Rp {Math.round(finalUangPangkal / 3).toLocaleString('id-ID')}/bulan)
                        </small>
                      )}
                    </div>
                    <div>
                      <span style={{ color: 'var(--muted)' }}>Seragam (5 Stel):</span>
                      <strong style={{ display: 'block', color: 'var(--blue)' }}>Rp 950.000</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--muted)' }}>Paket Buku (1 Thn):</span>
                      <strong style={{ display: 'block', color: 'var(--blue)' }}>Rp 650.000</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--muted)' }}>SPP Bulan Juli:</span>
                      <strong style={{ display: 'block', color: 'var(--blue)' }}>
                        {sppAmount === 0 ? 'GRATIS (Beasiswa)' : `Rp ${sppAmount.toLocaleString('id-ID')}`}
                      </strong>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, flexWrap: 'wrap', gap: 12 }}>
                    <div>
                      <span style={{ fontSize: 13, color: 'var(--muted)' }}>Total Perkiraan Biaya Masuk Awal:</span>
                      <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--blue)' }}>
                        Rp {totalBiayaAwal.toLocaleString('id-ID')}
                      </div>
                    </div>
                    <Button href="#login-ppdb">Daftar Sekarang dengan Jalur Ini</Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: KRITERIA KELULUSAN & BEASISWA */}
          {activeTab === 'kriteria' && (
            <div style={{ marginTop: 24 }}>
              <SectionIntro
                eyebrow="Standar Kelulusan"
                title="Kriteria Penilaian Seleksi & Skema Beasiswa Unggulan"
                body="Sistem seleksi di SMP YPPI Ar Rahmah menekankan pada kesiapan pembinaan karakter, potensi akademik dasar, dan kecintaan pada Al-Qur’an."
              />

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                {/* Bobot Seleksi */}
                <div style={{ background: 'var(--white)', padding: 26, borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                  <h3 style={{ color: 'var(--blue)', fontSize: 18, marginBottom: 16 }}>📊 Komponen & Bobot Kelulusan</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {[
                      ['Kelengkapan Berkas & Keabsahan NISN', '30%', 'Data rapor SD/MI dan ketaatan administrasi'],
                      ['Tes Diagnostik Literasi & Numerasi', '35%', 'Kemampuan nalar dasar dan logika berpikir'],
                      ['Pemetaan Bacaan Al-Qur’an & Tajwid', '25%', 'Kefasihan membaca dan hafalan juz amma'],
                      ['Wawancara Komitmen Orang Tua & Siswa', '10%', 'Keselarasan pembinaan adab & ibadah harian'],
                    ].map(([label, pct, note]) => (
                      <div key={label} style={{ background: '#f8fafc', padding: 12, borderRadius: 10 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: 13, color: 'var(--blue)', marginBottom: 2 }}>
                          <span>{label}</span>
                          <span style={{ color: 'var(--green)' }}>{pct}</span>
                        </div>
                        <small style={{ color: 'var(--muted)', fontSize: 11 }}>{note}</small>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skema Beasiswa */}
                <div style={{ background: 'var(--white)', padding: 26, borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                  <h3 style={{ color: 'var(--blue)', fontSize: 18, marginBottom: 16 }}>🏅 Skema Beasiswa Siswa Berprestasi</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <div style={{ padding: 14, background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 10 }}>
                      <strong style={{ color: '#166534', fontSize: 14 }}>Beasiswa Tahfiz Al-Qur’an Mutqin</strong>
                      <p style={{ fontSize: 12, color: '#166534', margin: '4px 0 0', lineHeight: 1.5 }}>
                        Bebas 100% biaya SPP bulanan bagi siswa dengan hafalan mutqin minimal 2 Juz, serta potongan uang pangkal hingga 50%.
                      </p>
                    </div>

                    <div style={{ padding: 14, background: '#fffbeb', border: '1px solid #fef3c7', borderRadius: 10 }}>
                      <strong style={{ color: '#92400e', fontSize: 14 }}>Beasiswa Juara Kompetisi Sains / Olahraga / Seni</strong>
                      <p style={{ fontSize: 12, color: '#92400e', margin: '4px 0 0', lineHeight: 1.5 }}>
                        Keringanan biaya uang pangkal hingga 50% bagi peraih medali juara 1-3 tingkat Kabupaten Bogor atau Provinsi Jawa Barat.
                      </p>
                    </div>

                    <div style={{ padding: 14, background: '#f3e8ff', border: '1px solid #e9d5ff', borderRadius: 10 }}>
                      <strong style={{ color: '#6b21a8', fontSize: 14 }}>Beasiswa Afirmasi YPPI</strong>
                      <p style={{ fontSize: 12, color: '#6b21a8', margin: '4px 0 0', lineHeight: 1.5 }}>
                        Bantuan biaya pendidikan penuh atau bersubsidi bagi anak yatim dhuafa dan keluarga prasejahtera yang berkeinginan kuat belajar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FAQ Accordion Section */}
          <div style={{ marginTop: 52 }}>
            <SectionIntro
              eyebrow="Tanya Jawab PPDB"
              title="Pertanyaan yang Sering Diajukan Seputar Pendaftaran"
              body="Temukan jawaban cepat seputar persyaratan berkas, seragam, jadwal, dan mekanisme tes pemetaan."
            />

            <div className="accordion" style={{ marginTop: 24 }}>
              {ppdbFaqData.map((faq, index) => (
                <article
                  key={index}
                  className={`faq-item ${openFaq === index ? 'faq-item--open' : ''}`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                  >
                    <span>{faq.q}</span>
                    <i><Icon name="chevron" size={18} /></i>
                  </button>
                  <div className="faq-item__answer">
                    <p>{faq.a}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Helpdesk Contacts */}
          <div
            style={{
              background: 'var(--white)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: 28,
              marginTop: 40,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 20,
              alignItems: 'center',
            }}
          >
            <div>
              <span className="eyebrow"><i />Layanan Informasi Panitia</span>
              <h3 style={{ color: 'var(--blue)', fontSize: 20, margin: '6px 0 8px' }}>
                Butuh Bantuan Lebih Lanjut Seputar Syarat?
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: 13, margin: 0, lineHeight: 1.6 }}>
                Sekretariat PPDB SMP YPPI Ar Rahmah siap melayani konsultasi pendaftaran secara langsung di sekolah atau melalui kanal komunikasi online.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: 'var(--ink)' }}>
                <span style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--surface-green)', color: 'var(--green)', display: 'grid', placeItems: 'center' }}>
                  <Icon name="map" size={16} />
                </span>
                <span>Seuseupan, Ciawi, Kabupaten Bogor, Jawa Barat</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: 'var(--ink)' }}>
                <span style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--surface-green)', color: 'var(--green)', display: 'grid', placeItems: 'center' }}>
                  <Icon name="phone" size={16} />
                </span>
                <span>Senin – Sabtu: 08.00 – 15.00 WIB (Jam Kerja Panitia)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box Bottom */}
      <section className="inner-cta section">
        <div className="container inner-cta__panel">
          <div>
            <span className="eyebrow eyebrow--light"><i />Langkah Awal Bergabung</span>
            <h2>Sudah Memahami Seluruh Persyaratan?</h2>
            <p>Daftarkan akun calon siswa sekarang untuk mengamankan kuota utama di Gelombang 1 TP {ppdbStats.academicYear}.</p>
          </div>
          <div>
            <Button href="#login-ppdb" variant="light">Masuk Portal Pendaftaran</Button>
            <Button href="#ppdb-alur" variant="secondary">Pelajari Alur & Gelombang</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
