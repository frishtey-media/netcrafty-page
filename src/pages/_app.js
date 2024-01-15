import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css';
import '@/styles/fonts.css';
import { useEffect } from 'react';
import ThemeProvider from '@/theme';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
