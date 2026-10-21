import { Icon } from '@/components/common';

export function Announcement() {
  return (
    <div className="announcement">
      <div className="container announcement__inner">
        <p><span>Informasi</span> Pengumuman resmi sekolah akan ditampilkan di sini setelah terverifikasi.</p>
        <a href="#informasi">Lihat informasi <Icon name="arrow" size={15} /></a>
      </div>
    </div>
  );
}
