import type {Metadata} from 'next';
import { Montserrat, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Estética by Euge - Elegancia & Perfección',
  description: 'Descubre la sofisticación del cuidado de uñas profesional con Euge.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${cormorant.variable} h-full`}>
      <body className="h-full flex flex-col font-sans antialiased" suppressHydrationWarning>
        <Script 
          id="setmore-fetch-fix"
          strategy="beforeInteractive"
        >
          {`
            (function() {
              try {
                const desc = Object.getOwnPropertyDescriptor(window, 'fetch');
                if (desc && !desc.set && desc.configurable) {
                  const originalFetch = window.fetch;
                  Object.defineProperty(window, 'fetch', {
                    configurable: true,
                    enumerable: true,
                    get: function() { return originalFetch; },
                    set: function(v) { console.warn('Setmore tried to overwrite fetch'); }
                  });
                }
              } catch (e) {}
            })();
          `}
        </Script>
        <Script 
          id="anywhere_book_now_script" 
          src="https://assets.setmore.com/integration/book-now/live/v1/anywhere-book-now.js" 
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
