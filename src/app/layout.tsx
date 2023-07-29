import Navbar from '@/components/navbar';
import './global.css'
import Footer from '@/components/footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang='en'>
        <body>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    );
  }