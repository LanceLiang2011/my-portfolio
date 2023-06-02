import { Header } from "@/components/Header";
import Gallery from "./Gallery";
import { Intro } from "./Intro";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";
import Jupyter from "./jupyter";

export default function Home() {
  return (
    <>
      <Intro />
      <br />
      <Skills />
      <br />
      <Portfolio />
      <br />
      <Jupyter />
      <br />
      {/* <Gallery />
      <br /> */}
      <a
        href="#"
        type="button"
        className="mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Top
        <span className="sr-only">Icon description</span>
      </a>
    </>
  );
}
