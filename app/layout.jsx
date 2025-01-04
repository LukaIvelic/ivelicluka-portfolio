import LenisScroll from './components/lenis/lenis';
import './global.css'

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  const addons = <>
    <LenisScroll/>
  </>;

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {addons}
        {children}
      </body>
    </html>
  );
}
