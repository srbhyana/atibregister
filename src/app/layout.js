import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Atib · Early Access',
  description: 'Your positioning kept pure.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
