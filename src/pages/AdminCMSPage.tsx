import { useState, type FormEvent } from 'react';
import { Icon } from '@/components/common';
import { authService, ppdbService, articleService } from '@/services';
import type { ApplicantModel, ArticleModel } from '@/models';

interface AdminCMSPageProps {
  onBackToPublic: () => void;
}

export function AdminCMSPage({ onBackToPublic }: AdminCMSPageProps) {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminUser, setAdminUser] = useState('');
  const [adminPass, setAdminPass] = useState('');
  const [adminTab, setAdminTab] = useState<'ppdb' | 'berita' | 'pengaturan'>('ppdb');
  const [applicants, setApplicants] = useState<ApplicantModel[]>(() => ppdbService.getApplicants());
  const [articles, setArticles] = useState<ArticleModel[]>(() => articleService.getArticles());
  const [error, setError] = useState('');

  const handleAdminLogin = (e: FormEvent) => {
    e.preventDefault();
    const result = authService.loginAdmin(adminUser, adminPass);
    if (result.success) {
      setIsAdminLoggedIn(true);
      setError('');
    } else {
      setError(result.message || 'Login gagal.');
    }
  };

  const handleQuickDemo = () => {
    setAdminUser('admin');
    setAdminPass('admin123');
    setError('');
  };

  const toggleStatus = (id: string) => {
    const updated = ppdbService.toggleApplicantStatus(id);
    setApplicants(updated);
  };

  const handleAddArticle = () => {
    const title = prompt('Masukkan judul berita baru:');
    if (title && title.trim()) {
      const updated = articleService.addArticle(title.trim());
      setArticles(updated);
    }
  };

  if (!isAdminLoggedIn) {
    return (
      <div className="admin-shell" style={{ display: 'grid', placeItems: 'center', minHeight: '100vh', padding: 20 }}>
        <div style={{ width: '100%', maxWidth: 440, background: 'var(--white)', padding: 36, borderRadius: 20, boxShadow: '0 20px 40px rgba(0,0,0,0.08)', border: '1px solid #e2e8e3' }}>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <img
              src="/logo.png"
              alt="Logo SMP YPPI Ar Rahmah"
              style={{ height: 64, width: 'auto', objectFit: 'contain', margin: '0 auto 12px', display: 'block' }}
            />
            <span className="admin-badge">AREA KHUSUS PETUGAS</span>
            <h2 style={{ color: 'var(--blue)', fontSize: 22, marginTop: 12, marginBottom: 6 }}>Portal CMS & Admin</h2>
            <p style={{ color: 'var(--muted)', fontSize: 13 }}>SMP YPPI Ar Rahmah — Pengelolaan Konten & PPDB</p>
          </div>

          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 10, padding: 12, fontSize: 12, color: '#166534', marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong>Akun Demo Admin:</strong><br />
              User: <code>admin</code> · Sandi: <code>admin123</code>
            </div>
            <button type="button" className="portal-demo-btn" onClick={handleQuickDemo}>
              Isi Demo
            </button>
          </div>

          {error && (
            <div style={{ padding: '8px 12px', background: '#fef2f2', color: '#991b1b', borderRadius: 8, fontSize: 12, marginBottom: 16 }}>
              {error}
            </div>
          )}

          <form onSubmit={handleAdminLogin}>
            <div className="portal-form-group">
              <label>Username Petugas</label>
              <input
                type="text"
                className="portal-input"
                placeholder="Masukkan username admin"
                value={adminUser}
                onChange={(e) => setAdminUser(e.target.value)}
              />
            </div>
            <div className="portal-form-group">
              <label>Kata Sandi</label>
              <input
                type="password"
                className="portal-input"
                placeholder="Masukkan kata sandi"
                value={adminPass}
                onChange={(e) => setAdminPass(e.target.value)}
              />
            </div>
            <button type="submit" className="button button--primary" style={{ width: '100%', justifyContent: 'center', marginTop: 10 }}>
              Masuk ke Dashboard Admin
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: 22 }}>
            <button
              type="button"
              onClick={onBackToPublic}
              style={{ background: 'none', border: 'none', color: 'var(--muted)', fontSize: 12, cursor: 'pointer', textDecoration: 'underline' }}
            >
              ← Kembali ke Website Profil Publik
            </button>
          </div>
        </div>
      </div>
    );
  }

  const stats = ppdbService.getStats();

  return (
    <div className="admin-shell">
      <header className="admin-topbar">
        <div className="admin-brand">
          <img
            src="/logo-white.png"
            alt="Logo SMP YPPI Ar Rahmah"
            style={{ height: 36, width: 'auto', objectFit: 'contain', display: 'block' }}
          />
          <div>
            <strong>SMP YPPI Ar Rahmah</strong>
            <span style={{ opacity: 0.7, fontSize: 11, marginLeft: 8 }}>Portal CMS & Administrasi</span>
          </div>
          <span className="admin-badge">Admin Aktif</span>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <button
            type="button"
            onClick={onBackToPublic}
            style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: 'none', padding: '6px 14px', borderRadius: 8, fontSize: 12, cursor: 'pointer' }}
          >
            🌐 Lihat Web Publik
          </button>
          <button
            type="button"
            onClick={() => setIsAdminLoggedIn(false)}
            style={{ background: '#ef4444', color: 'white', border: 'none', padding: '6px 14px', borderRadius: 8, fontSize: 12, cursor: 'pointer', fontWeight: 600 }}
          >
            Keluar
          </button>
        </div>
      </header>

      <div className="container" style={{ paddingBlock: 30 }}>
        {/* KPI Grid */}
        <div className="admin-kpi-grid">
          <div className="admin-kpi-card">
            <small>Total Pendaftar PPDB</small>
            <strong>{stats.total}</strong>
            <span style={{ fontSize: 11, color: 'var(--green)', marginTop: 4 }}>↑ 12 pendaftar minggu ini</span>
          </div>
          <div className="admin-kpi-card">
            <small>Berkas Menunggu Verifikasi</small>
            <strong style={{ color: '#d97706' }}>{stats.pending}</strong>
            <span style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4 }}>Perlu tindakan panitia</span>
          </div>
          <div className="admin-kpi-card">
            <small>Siswa Diterima</small>
            <strong style={{ color: 'var(--green)' }}>{stats.accepted}</strong>
            <span style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4 }}>Gelombang 1</span>
          </div>
          <div className="admin-kpi-card">
            <small>Konten Berita Aktif</small>
            <strong>{articles.length}</strong>
            <span style={{ fontSize: 11, color: 'var(--blue)', marginTop: 4 }}>Tersedia di web profil</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          <button
            type="button"
            className={`portal-tab-btn ${adminTab === 'ppdb' ? 'active' : ''}`}
            onClick={() => setAdminTab('ppdb')}
            style={{ maxWidth: 220, background: adminTab === 'ppdb' ? 'var(--blue)' : 'var(--white)', color: adminTab === 'ppdb' ? 'white' : 'var(--ink)' }}
          >
            📋 Data Pendaftar PPDB
          </button>
          <button
            type="button"
            className={`portal-tab-btn ${adminTab === 'berita' ? 'active' : ''}`}
            onClick={() => setAdminTab('berita')}
            style={{ maxWidth: 220, background: adminTab === 'berita' ? 'var(--blue)' : 'var(--white)', color: adminTab === 'berita' ? 'white' : 'var(--ink)' }}
          >
            📰 Manajemen Berita Web
          </button>
          <button
            type="button"
            className={`portal-tab-btn ${adminTab === 'pengaturan' ? 'active' : ''}`}
            onClick={() => setAdminTab('pengaturan')}
            style={{ maxWidth: 220, background: adminTab === 'pengaturan' ? 'var(--blue)' : 'var(--white)', color: adminTab === 'pengaturan' ? 'white' : 'var(--ink)' }}
          >
            ⚙️ Status Gelombang PPDB
          </button>
        </div>

        {adminTab === 'ppdb' && (
          <div className="admin-table-card">
            <div className="admin-table-header">
              <h3>Daftar Calon Peserta Didik Baru (TP 2025/2026)</h3>
              <span style={{ fontSize: 12, color: 'var(--muted)' }}>Klik status untuk mengubah</span>
            </div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>No. Reg</th>
                  <th>Nama Calon Siswa</th>
                  <th>Asal Sekolah</th>
                  <th>Jalur</th>
                  <th>Status Seleksi</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {applicants.map((app) => (
                  <tr key={app.id}>
                    <td><strong>{app.id}</strong></td>
                    <td>{app.name}</td>
                    <td>{app.school}</td>
                    <td>{app.track}</td>
                    <td>
                      <span style={{
                        padding: '4px 10px',
                        borderRadius: 999,
                        fontSize: 11,
                        fontWeight: 700,
                        background: app.isAccepted() ? '#dcfce7' : app.isVerified() ? '#e0f2fe' : '#fef3c7',
                        color: app.isAccepted() ? '#166534' : app.isVerified() ? '#075985' : '#92400e'
                      }}>
                        {app.status}
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => toggleStatus(app.id)}
                        style={{ background: 'var(--surface-green)', border: '1px solid var(--border)', color: 'var(--green)', padding: '4px 8px', borderRadius: 6, fontSize: 11, fontWeight: 600, cursor: 'pointer' }}
                      >
                        Ubah Status
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {adminTab === 'berita' && (
          <div className="admin-table-card">
            <div className="admin-table-header">
              <h3>Kelola Berita & Pengumuman Sekolah</h3>
              <button
                type="button"
                className="portal-demo-btn"
                onClick={handleAddArticle}
              >
                + Tambah Berita Baru
              </button>
            </div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Judul Artikel</th>
                  <th>Tanggal</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((art) => (
                  <tr key={art.title}>
                    <td><strong>{art.title}</strong></td>
                    <td>{art.date}</td>
                    <td>
                      <span style={{ padding: '3px 8px', borderRadius: 999, fontSize: 11, background: art.isPublished() ? '#dcfce7' : '#f3f4f6', color: art.isPublished() ? '#166534' : '#6b7280' }}>
                        {art.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {adminTab === 'pengaturan' && (
          <div style={{ background: 'var(--white)', padding: 30, borderRadius: 16, border: '1px solid #e2e8e3' }}>
            <h3 style={{ color: 'var(--blue)', fontSize: 18, marginBottom: 12 }}>Pengaturan Kuota & Gelombang PPDB</h3>
            <p style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 20 }}>
              Atur ketersediaan pendaftaran publik di halaman web utama secara langsung.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}>
                <input type="checkbox" defaultChecked />
                <strong>Buka Pendaftaran Gelombang 1 (01 Okt – 31 Des 2024)</strong>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}>
                <input type="checkbox" defaultChecked />
                <strong>Tampilkan Banner Status PPDB Aktif di Halaman Beranda</strong>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}>
                <input type="checkbox" defaultChecked />
                <strong>Izinkan Calon Siswa Mengunggah Berkas Mandiri</strong>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
