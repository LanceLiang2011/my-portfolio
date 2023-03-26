import { Header } from '@/components/Header';
import Gallery from './Gallery';
import { Intro } from './Intro';
import { Portfolio } from './Portfolio';
import { Skills } from './Skills';

export default function Home() {
  return (
    <>
      <Intro />
      <br />
      <Skills />
      <br />
      <Portfolio />
      <br />
      <Gallery />
    </>
  );
}
