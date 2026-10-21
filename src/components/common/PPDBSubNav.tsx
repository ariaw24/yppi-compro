import { Icon } from './Icon';

interface PPDBSubNavProps {
  current: 'ppdb-lengkap' | 'ppdb-syarat' | 'ppdb-alur' | 'ppdb-login';
}

export function PPDBSubNav({ current }: PPDBSubNavProps) {
  const tabs = [
    { id: 'ppdb-lengkap', label: 'Ringkasan PPDB', href: '#ppdb-lengkap', icon: 'graduation' as const },
    { id: 'ppdb-syarat', label: 'Informasi & Syarat', href: '#ppdb-syarat', icon: 'book' as const },
    { id: 'ppdb-alur', label: 'Alur & Gelombang', href: '#ppdb-alur', icon: 'compass' as const },
    { id: 'ppdb-login', label: 'Portal Calon Siswa', href: '#login-ppdb', icon: 'lock' as const },
  ];

  return (
    <div className="ppdb-subnav" role="navigation" aria-label="Navigasi Modul PPDB">
      {tabs.map((tab) => (
        <a
          key={tab.id}
          href={tab.href}
          className={`ppdb-subnav-btn ${current === tab.id ? 'active' : ''}`}
          aria-current={current === tab.id ? 'page' : undefined}
        >
          <Icon name={tab.icon} size={15} />
          <span>{tab.label}</span>
        </a>
      ))}
    </div>
  );
}
