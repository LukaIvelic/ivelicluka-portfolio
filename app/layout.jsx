import LenisScroll from './components/lenis/lenis';
import './global.css'

export const metadata = {
  title: "Luka Ivelić | Design, Development & Graphics",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  const addons = <>
    <LenisScroll/>
  </>;

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {/* <script src='https://unpkg.com/react-scan/dist/auto.global.js' defer></script> */}
        {addons}
        {children}
      </body>
    </html>
  );
}
