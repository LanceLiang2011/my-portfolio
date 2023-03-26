import { ImageCard } from '@/components/ImageCard';

import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';

export const Portfolio = () => {
  return (
    <section className='text-center'>
      <div>
        <h3 className='text-purple-600'>Portfolio</h3>
        <div className='mx-auto my-6 max-w-4xl p-6'>
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
        <div className='mx-auto my-6 max-w-7xl p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6'>
          <ImageCard
            src={web1}
            alt='website'
            title='Crown Online Shoping'
            paragraph='A learning project from React Developer in 2023. Designed by Yihua Zhang from Zero To Mastery.'
            href='https://crwn-clothing-udemy.netlify.app'
            shadow={true}
            skills={['React', 'Firestore', 'Sass']}
          />
          <ImageCard
            src={web2}
            alt='website'
            title='React Meals'
            paragraph='A learning project from React - The Complete Guide. Designed by Maximilian Schwarzmüller.'
            href='https://react-meal-context.netlify.app/'
            shadow={true}
            skills={['React', 'Firebase', 'Reducer']}
          />
          <ImageCard
            src={web3}
            alt='website'
            title='Astro Blog'
            paragraph='A simple Markdown Blog Site build by Astro, following the official guide. Astro Island build by Preact'
            href='https://astro-blog-practice.netlify.app/'
            shadow={true}
            skills={['Astro', 'Preact']}
          />
        </div>
      </div>
    </section>
  );
};