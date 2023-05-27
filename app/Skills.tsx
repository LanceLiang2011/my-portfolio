import { Card } from "@/components/Card";
import Image from "next/image";
import app from "../public/application.png";
import api from "../public/api.png";
import analysis from "../public/analysis.png";

export const Skills = () => {
  return (
    <section className=" text-center mt-10">
      <h3 className="text-purple-600">Skills & Qualifications</h3>
      <div className="lg:flex lg:gap-3 xl:gap-6">
        <Card title="Website development">
          <div className="md:flex items-center max-w-lg ">
            <Image
              src={app}
              className="mx-auto"
              alt="web application icon"
              width={150}
            />
          </div>
          <p>
            I have experience designing and building various web applications
            such as static websites, dynamic websites, and single-page
            applications (SPAs) using{" "}
            <span className="badge-yellow">JavaScript</span>
            frameworks like <span className="badge-gray">Next.js</span> ,{" "}
            <span className="badge-blue">React.js</span> with{" "}
            <span className="badge-purple">Redux</span>, and{" "}
            <span className="badge-pink">Astro</span>. I have worked with
            <span className="badge-yellow">Figma</span>,
            <span className="badge-green">Css</span>,
            <span className="badge-pink">Sass</span> and
            <span className="badge-cyan">Tailwind.css</span>, to create visually
            appealing and responsive user interfaces.
          </p>
        </Card>
        <Card title="Buiding Fullstack Webapp">
          <div className="md:flex items-center max-w-lg ">
            <Image
              src={api}
              className="mx-auto"
              alt="web application icon"
              width={150}
            />
          </div>
          <p>
            I am proficient in building full-stack applications using{" "}
            <span className="badge-gray">Next.js</span>
            and backend technologies such as{" "}
            <span className="badge-pink">Firebase</span> or{" "}
            <span className="badge-green">Mongodb</span> . I have experience
            building server-side web apps and apis using{" "}
            <span className="badge-gray">Express.js</span> , and I understand
            the fundamental principles of building scalable, maintainable, and
            performant full-stack applications.
          </p>
        </Card>
        <Card title="Data Science">
          <div className="md:flex items-center max-w-lg ">
            <Image
              src={analysis}
              className="mx-auto"
              alt="web application icon"
              width={150}
            />
          </div>
          <p>
            I have experience in data analysis using{" "}
            <span className="badge-yellow">Python</span> and the{" "}
            <span className="badge-blue">Tidyverse</span> of R. I am proficient
            in data wrangling, cleaning, and visualization techniques using
            libraries such as matplotlib/seaborn, numpy, ggplot2, and dplyr. I
            have experience performing CRUD against database uding{" "}
            <span className="badge-cyan">MySQL</span>. I have experience
            building machine learning models using{" "}
            <span className="badge-blue">Scikit-Learn</span> and{" "}
            <span className="badge-yellow">TensorFlow</span>.
          </p>
        </Card>
      </div>
    </section>
  );
};
