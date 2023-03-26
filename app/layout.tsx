import { Header } from '@/components/Header';
import './globals.css';
import { HTML } from './HTML';

export const metadata = {
  title: 'Lance Liang Portfolio',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HTML>{children}</HTML>;
}