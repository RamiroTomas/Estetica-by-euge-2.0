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
                var originalFetch = window.fetch;
                var desc = Object.getOwnPropertyDescriptor(window, 'fetch');
                if (desc && desc.configurable) {
                  Object.defineProperty(window, 'fetch', {
                    configurable: true,
                    enumerable: true,
                    get: function() { return originalFetch; },
                    set: function(v) { 
                      console.warn('Blocked attempt to overwrite window.fetch');
                    }
                  });
                } else {
                  // If not configurable, we try to shadow it if possible, 
                  // but usually window properties are hard to shadow.
                  // We've done our best.
                }
              } catch (e) {
                console.error('Fetch fix failed:', e);
              }
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
