import { ImageCard } from "@/components/ImageCard";

import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export const Portfolio = () => {
  return (
    <section className="text-center">
      <div>
        <div className="sticky top-0 bg-white">
          <h3 className="text-purple-600">Portfolio</h3>
        </div>
        <div className="mx-auto my-6 max-w-4xl p-6">
          <p>
            As a self-taught developer, most of the projects you will find here
            are the result of my learning experiences, tutorials, and mockups.
            However, I am excited to share that I am now starting to build
            real-world projects that I hope real users can benefit from. These
            projects will be showcased here soon after they are completed. As a
            passionate and motivated learner, I am always seeking new challenges
            and opportunities to enhance my skills and knowledge in web
            development. I believe that every project I undertake is an
            opportunity to learn and grow.
          </p>
        </div>
        <div className="mx-auto my-6 max-w-7xl p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6">
          <ImageCard
            src={web5}
            alt="website"
            title="Frontend Mentor"
            paragraph="My Frontend Mentor portfolio showing my front-end skills practice. All built on my own based on design specificities"
            href="https://www.frontendmentor.io/profile/LanceLiang2011/"
            shadow={true}
            skills={["HTML", "CSS", "JavaScript"]}
          />
          <ImageCard
            src={web6}
            alt="website"
            title="Chronic Pain Tracker"
            paragraph="Buiding a web-app tracking chronic pain of user with Next.js and supabase. Practising Next 13 app route."
            href="https://date-tracker-flax.vercel.app/"
            shadow={true}
            skills={["Nextjs", "Supabase", "MUI"]}
          />
          <ImageCard
            src={web4}
            alt="website"
            title="IMDb Clone"
            paragraph="A practising clone project. Building IMBd clone using Next.js 13, tailwind css and TMDB api"
            href="https://imdb-clone-coral.vercel.app/"
            shadow={true}
            skills={["Nextjs", "Tailwind", "api"]}
          />
          <ImageCard
            src={web1}
            alt="website"
            title="Crown Online Shoping"
            paragraph="A learning project from React Developer in 2023. Designed by Yihua Zhang from Zero To Mastery."
            href="https://crwn-clothing-udemy.netlify.app"
            shadow={true}
            skills={["React", "Firestore", "Sass"]}
          />
          <ImageCard
            src={web2}
            alt="website"
            title="React Meals"
            paragraph="A learning project from React - The Complete Guide. Designed by Maximilian Schwarzmüller."
            href="https://react-meal-context.netlify.app/"
            shadow={true}
            skills={["React", "Firebase", "Reducer"]}
          />
          <ImageCard
            src={web3}
            alt="website"
            title="Astro Blog"
            paragraph="A simple Markdown Blog Site build by Astro, following the official guide. Astro Island build by Preact"
            href="https://astro-blog-practice.netlify.app/"
            shadow={true}
            skills={["Astro", "Preact"]}
          />
        </div>
      </div>
    </section>
  );
};
