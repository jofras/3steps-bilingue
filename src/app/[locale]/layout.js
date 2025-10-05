// src/app/[locale]/layout.js
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function LocaleLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20 md:pt-24">
        {children}
      </main>
      <Footer />
    </>
  );
}