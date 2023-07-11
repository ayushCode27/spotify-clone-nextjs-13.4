import './globals.css';
import { Figtree } from 'next/font/google';
import MainComponent from '@/components/MainComponent';
import SupabaseProvider from '@/providers/SupabaseProvider';
import UserProvider from '@/providers/UserProvider';

const font = Figtree({ subsets: ['latin'] });

export const metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <SupabaseProvider>
          <UserProvider>
            <MainComponent>{children}</MainComponent>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
