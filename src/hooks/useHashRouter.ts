import { useEffect, useState } from 'react';
import type { PageName } from '@/types';

export function getPageFromHash(hash: string): PageName {
  if (hash === '#admin' || hash.startsWith('#admin-')) return 'admin';
  if (hash === '#login-ppdb' || hash === '#daftar-ppdb' || hash.startsWith('#ppdb-portal')) return 'ppdb-login';
  if (hash === '#ppdb-syarat' || hash === '#ppdb-info' || hash.startsWith('#ppdb-syarat-')) return 'ppdb-syarat';
  if (hash === '#ppdb-alur' || hash === '#ppdb-gelombang' || hash.startsWith('#ppdb-alur-')) return 'ppdb-alur';
  if (hash.startsWith('#ppdb')) return 'ppdb';
  if (hash.startsWith('#profil-')) return 'profile';
  if (hash.startsWith('#akademik-')) return 'academic';
  if (hash.startsWith('#kesiswaan-')) return 'student';
  return 'home';
}

export function useHashRouter() {
  const [activePage, setActivePage] = useState<PageName>(() => getPageFromHash(window.location.hash));
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const targetHash = window.location.hash;
      const nextPage = getPageFromHash(targetHash);
      setActivePage(nextPage);
      setMenuOpen(false);
      setOpenDropdown(null);
      window.setTimeout(() => {
        const target = document.querySelector(targetHash || '#beranda');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return { activePage, setActivePage, menuOpen, setMenuOpen, openDropdown, setOpenDropdown };
}
