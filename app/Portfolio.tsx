import { ImageCard } from '@/components/ImageCard';

import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import web7 from '../public/web7.png';
import web8 from '../public/web8.png';
import web9 from '../public/web9.png';

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
            src={web9}
            alt="website"
            title="Code Collider"
            paragraph="A Blue Ocean project for Hack Reactor. A team project buiding a website for developers to cooperate, share and mentor dev projects."
            href="https://code-collider.up.railway.app/"
            shadow={true}
            skills={['Nextjs', 'Supabase', 'Reactjs']}
          />
          <ImageCard
            src={web8}
            alt="website"
            title="Innovo Labs Consulting"
            paragraph="A website I build for a consulting startup using Astro.build. A mult-page static website with 99 Lighthouse Performance score."
            href="https://innovolabsconsulting.ca/"
            shadow={true}
            skills={['Astro.build', 'Tailwindcss']}
          />
        <ImageCard
            src={web7}
            alt="website"
            title="Toyproblem Overflow"
            paragraph="A minimal viable product for Hack Reactor that built in 2 days. A website for users to post, solve and share coding problems."
            href="https://toyproblem-overflow.vercel.app/"
            shadow={true}
            skills={['Nextjs', 'Supabase', 'PrismaORM']}
          />
          <ImageCard
            src={web5}
            alt="website"
            title="Frontend Mentor"
            paragraph="My Frontend Mentor portfolio showing my front-end skills practice. All built on my own based on design specificities"
            href="https://www.frontendmentor.io/profile/LanceLiang2011/"
            shadow={true}
            skills={['HTML', 'CSS', 'JavaScript']}
          />

          <ImageCard
            src={web3}
            alt="website"
            title="Lamazon Ecommerce"
            paragraph="A mockup e-commerce project buiding with Next.js, Prisma. Mongodb and Next Auth. Support anonymous cart using cookies."
            href="https://lamazon-one.vercel.app/"
            shadow={true}
            skills={['Nextjs', 'Prisma', 'NextAuth']}
          />

          <ImageCard
            src={web4}
            alt="website"
            title="IMDb Clone"
            paragraph="A practising clone project. Building IMBd clone using Next.js 13, tailwind css and TMDB api"
            href="https://imdb-clone-coral.vercel.app/"
            shadow={true}
            skills={['Nextjs', 'Tailwind', 'api']}
          />
          <ImageCard
            src={web1}
            alt="website"
            title="Crown Online Shoping"
            paragraph="A learning project from React Developer in 2023. Designed by Yihua Zhang from Zero To Mastery."
            href="https://crwn-clothing-udemy.netlify.app"
            shadow={true}
            skills={['React', 'Firestore', 'Sass']}
          />
          <ImageCard
            src={web2}
            alt="website"
            title="React Meals"
            paragraph="A learning project from React - The Complete Guide. Designed by Maximilian Schwarzmüller."
            href="https://react-meal-context.netlify.app/"
            shadow={true}
            skills={['React', 'Firebase', 'Reducer']}
          />
          <ImageCard
            src={web6}
            alt="website"
            title="Chronic Pain Tracker"
            paragraph="Buiding a web-app tracking chronic pain of user with Next.js and supabase. Practising Next 13 app route."
            href="https://date-tracker-flax.vercel.app/"
            shadow={true}
            skills={['Nextjs', 'Supabase', 'MUI']}
          />
        </div>
      </div>
    </section>
  );
};
