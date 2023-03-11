import { Header } from '@/components/Header';
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
    </>
  );
}
