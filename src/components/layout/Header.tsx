import { Icon, Button } from '@/components/common';
import { navItems } from '@/data';

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  openDropdown: string | null;
  setOpenDropdown: (label: string | null) => void;
}

export function Header({ menuOpen, setMenuOpen, openDropdown, setOpenDropdown }: HeaderProps) {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#beranda" aria-label="SMP YPPI Ar Rahmah - Beranda">
          <img src="/logo.png" alt="Logo SMP YPPI Ar Rahmah" className="brand__logo" />
          <span><strong>SMP YPPI</strong><small>AR RAHMAH</small></span>
        </a>
        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Navigasi utama">
          {navItems.map((item) => item.children ? (
            <div className={`nav-group ${openDropdown === item.label ? 'nav-group--open' : ''}`} key={item.label}>
              <a href={item.href} onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>{item.label}</a>
              <button
                className="nav-group__toggle"
                onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                aria-label={`${openDropdown === item.label ? 'Tutup' : 'Buka'} submenu ${item.label}`}
                aria-expanded={openDropdown === item.label}
              >
                <Icon name="chevron" size={14} />
              </button>
              <div className="nav-dropdown">
                <small>{item.label}</small>
                {item.children.map(([label, href]) => <a key={label} href={href} onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>{label}<Icon name="arrow" size={14} /></a>)}
              </div>
            </div>
          ) : (
            <a key={item.label} href={item.href} onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>{item.label}</a>
          ))}
          <Button href="#ppdb-lengkap">PPDB</Button>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'} aria-expanded={menuOpen}>
          <Icon name={menuOpen ? 'x' : 'menu'} size={24} />
        </button>
      </div>
    </header>
  );
}
