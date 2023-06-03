import Image from "next/image";
import me from "../public/me.png";
import {
  AiFillMediumCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

export const Intro = () => {
  return (
    <>
      <section className="text-center p-10">
        <h2>Lance Xianyi Liang</h2>
        <h3 className="md:text-4xl lg:text-5xl md:my-6">
          Researcher & Developer
        </h3>
        <p className="md:text-2xl lg:text-3xl md:my-4">
          A Ph.D. in physiology. A Traslational Research student. A
          self-learning Developer.
        </p>
      </section>
      <div className="text-4xl md:text-5xl lg:text-6xl flex justify-center gap-16 py-3 text-gray-600">
        <a target="_blank" href="https://medium.com/@liangxianyi2011_28511">
          <AiFillMediumCircle className="icon hover:text-zinc-800" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/xianyi-liang-a52672160/"
        >
          <AiFillLinkedin className="icon hover:text-indigo-800" />
        </a>
        <a target="_blank" href="https://github.com/LanceLiang2011">
          <AiFillGithub className="icon hover:text-slate-800" />
        </a>
      </div>
      <div className="relative overflow-hidden mt-16 mx-auto  rounded-full w-80 h-80">
        <Image className="mx-auto" src={me} alt="My personal avatar" />
      </div>
    </>
  );
};
