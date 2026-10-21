import { useState, type FormEvent } from 'react';
import { Button, Icon, PPDBSubNav } from '@/components/common';
import { authService } from '@/services';

export function PPDBLoginPage() {
  const [isRegister, setIsRegister] = useState(() => window.location.hash === '#daftar-ppdb');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [originSchool, setOriginSchool] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleFillDemo = () => {
    setUsername('PPDB-2025-089');
    setPassword('siswa123');
    setError('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = authService.loginStudent(username, password);
    if (!result.success) {
      setError(result.message || 'Login gagal.');
      return;
    }
    setError('');
    setIsLoggedIn(true);
  };

  return (
    <main className="inner-page" style={{ background: 'linear-gradient(135deg, var(--warm), #f1f5ed)', minHeight: '80vh', paddingBottom: 60 }}>
      <div className="container" style={{ paddingTop: 32 }}>
        <PPDBSubNav current="ppdb-login" />
      </div>
      <div className="portal-container" style={{ paddingTop: 10 }}>
        <nav className="breadcrumb" style={{ justifyContent: 'center' }}>
          <a href="#beranda">Beranda</a><span>/</span><a href="#ppdb-lengkap">Informasi PPDB</a><span>/</span><strong>Portal PPDB</strong>
        </nav>

        <div className="portal-card">
          {isLoggedIn ? (
            <div style={{ textAlign: 'center' }}>
              <img
                src="/logo.png"
                alt="Logo SMP YPPI Ar Rahmah"
                style={{ height: 64, width: 'auto', objectFit: 'contain', margin: '0 auto 14px', display: 'block' }}
              />
              <h2 style={{ color: 'var(--blue)', fontSize: 24, marginBottom: 8 }}>Portal Calon Siswa</h2>
              <p style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 24 }}>
                Selamat datang, <strong>{fullName || 'Ahmad Fauzi'}</strong>. Data Anda tercatat dalam sistem seleksi PPDB SMP YPPI Ar Rahmah.
              </p>

              <div style={{ background: '#f8fafc', border: '1px solid var(--border)', borderRadius: 14, padding: 20, textAlign: 'left', marginBottom: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 600 }}>NO. REGISTRASI</span>
                  <span style={{ background: '#dcfce7', color: '#166534', padding: '3px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700 }}>
                    BERKAS LOLOS VERIFIKASI
                  </span>
                </div>
                <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--blue)' }}>PPDB-2025-089</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>Jalur: <strong>Prestasi Tahfiz Al-Qur'an (2 Juz)</strong></div>
                <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>Asal Sekolah: <strong>SDIT Al-Ihsan Bogor</strong></div>

                <hr style={{ borderColor: 'var(--border)', margin: '14px 0' }} />

                <div style={{ fontSize: 13, color: 'var(--ink)' }}>
                  <strong>📅 Jadwal Tes Pemetaan & Wawancara:</strong><br />
                  Sabtu, 14 Desember 2024 (08.30 – 11.00 WIB)<br />
                  <small style={{ color: 'var(--muted)' }}>Lokasi: Kampus SMP YPPI Ar Rahmah, Ruang Kelas 7A</small>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="button button--primary"
                  onClick={() => alert('Fitur unduh bukti pendaftaran PDF siap dicetak.')}
                >
                  Cetak Kartu Ujian (PDF)
                </button>
                <button
                  type="button"
                  className="button button--secondary"
                  onClick={() => setIsLoggedIn(false)}
                >
                  Keluar / Ganti Akun
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="portal-header">
                <img
                  src="/logo.png"
                  alt="Logo SMP YPPI Ar Rahmah"
                  style={{ height: 68, width: 'auto', objectFit: 'contain', margin: '0 auto 14px', display: 'block' }}
                />
                <h2>Portal PPDB Online</h2>
                <p>SMP YPPI Ar Rahmah — Tahun Ajaran 2025/2026</p>
              </div>

              <div className="portal-tabs">
                <button
                  type="button"
                  className={`portal-tab-btn ${!isRegister ? 'active' : ''}`}
                  onClick={() => { setIsRegister(false); setError(''); }}
                >
                  Masuk ke Akun
                </button>
                <button
                  type="button"
                  className={`portal-tab-btn ${isRegister ? 'active' : ''}`}
                  onClick={() => { setIsRegister(true); setError(''); }}
                >
                  Daftar Akun Baru
                </button>
              </div>

              <div className="portal-demo-alert">
                <div>
                  <strong>💡 Coba Akun Demo Pendaftar:</strong><br />
                  User: <code>PPDB-2025-089</code> · Sandi: <code>siswa123</code>
                </div>
                <button type="button" className="portal-demo-btn" onClick={handleFillDemo}>
                  Isi Otomatis
                </button>
              </div>

              {error && (
                <div style={{ padding: '10px 14px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, color: '#991b1b', fontSize: 13, marginBottom: 16 }}>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {isRegister && (
                  <>
                    <div className="portal-form-group">
                      <label htmlFor="reg-name">Nama Lengkap Calon Siswa</label>
                      <input
                        id="reg-name"
                        type="text"
                        className="portal-input"
                        placeholder="Contoh: Muhammad Fauzi"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                    <div className="portal-form-group">
                      <label htmlFor="reg-school">Asal Sekolah (SD/MI)</label>
                      <input
                        id="reg-school"
                        type="text"
                        className="portal-input"
                        placeholder="Contoh: SDIT Al-Ihsan"
                        value={originSchool}
                        onChange={(e) => setOriginSchool(e.target.value)}
                      />
                    </div>
                  </>
                )}

                <div className="portal-form-group">
                  <label htmlFor="login-username">
                    {isRegister ? 'NISN / Nomor Handphone WhatsApp' : 'Nomor Pendaftaran / NISN / Email'}
                  </label>
                  <input
                    id="login-username"
                    type="text"
                    className="portal-input"
                    placeholder={isRegister ? 'Masukkan NISN atau No WA aktif' : 'Contoh: PPDB-2025-089'}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="portal-form-group">
                  <label htmlFor="login-password">Kata Sandi</label>
                  <input
                    id="login-password"
                    type="password"
                    className="portal-input"
                    placeholder="Masukkan kata sandi"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="button button--primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: 12 }}
                >
                  {isRegister ? 'Daftarkan Akun PPDB' : 'Masuk ke Portal PPDB'}
                </button>
              </form>

              <div style={{ textAlign: 'center', marginTop: 20 }}>
                <a href="#ppdb-lengkap" style={{ fontSize: 13, color: 'var(--green)', fontWeight: 600 }}>
                  ← Kembali ke Halaman Informasi PPDB
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
