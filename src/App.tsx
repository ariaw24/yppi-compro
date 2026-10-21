import { Announcement, Footer, Header } from '@/components/layout';
import { useHashRouter, useRevealAnimation } from '@/hooks';
import {
  AcademicPage,
  AdminCMSPage,
  HomePage,
  PPDBAlurGelombangPage,
  PPDBInfoSyaratPage,
  PPDBLoginPage,
  PPDBPage,
  ProfilePage,
  StudentPage,
} from '@/pages';

export default function App() {
  const {
    activePage,
    menuOpen,
    setMenuOpen,
    openDropdown,
    setOpenDropdown,
  } = useHashRouter();

  useRevealAnimation(activePage);

  if (activePage === 'admin') {
    return (
      <AdminCMSPage
        onBackToPublic={() => {
          window.location.hash = '#beranda';
        }}
      />
    );
  }

  return (
    <div id="beranda" className="site-shell">
      <Announcement />
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />

      {activePage === 'profile' && <ProfilePage />}
      {activePage === 'academic' && <AcademicPage />}
      {activePage === 'student' && <StudentPage />}
      {activePage === 'ppdb' && <PPDBPage />}
      {activePage === 'ppdb-syarat' && <PPDBInfoSyaratPage />}
      {activePage === 'ppdb-alur' && <PPDBAlurGelombangPage />}
      {activePage === 'ppdb-login' && <PPDBLoginPage />}
      {activePage === 'home' && <HomePage />}

      <Footer />
    </div>
  );
}
