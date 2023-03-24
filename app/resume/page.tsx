import React from 'react';

const ResumePage = () => {
  return (
    <section className='text-center p-10'>
      <h2>Resume</h2>
      <br />
      <h3>Education</h3>
      <br />
      <ol className='relative border-l border-gray-200 dark:border-gray-700'>
        <li className='mb-10 ml-6'>
          <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
            <svg
              aria-hidden='true'
              className='w-3 h-3 text-blue-800 dark:text-blue-300'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </span>
          <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
            Translational Research in Health Science{' '}
            <span className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3'>
              Latest
            </span>
          </h3>
          <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            Since August, 2021
          </time>
          <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
            Master of Health Science, University of Toronto
          </p>
        </li>
        <li className='mb-10 ml-6'>
          <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
            <svg
              aria-hidden='true'
              className='w-3 h-3 text-blue-800 dark:text-blue-300'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </span>
          <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
            Ph.D. in physiology
          </h3>
          <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            From August 2016 to July 2021
          </time>
          <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
            In Peking University Health Science Center, studying obesity,
            type-2-diabetes, gut microbiome and Hypoxia-inducable-factor.
          </p>
        </li>
        <li className='ml-6'>
          <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
            <svg
              aria-hidden='true'
              className='w-3 h-3 text-blue-800 dark:text-blue-300'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </span>
          <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
            Bachelor in Basic Health Science
          </h3>
          <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            From August 2011 to July 2016
          </time>
          <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
            Bachelor in Basic Medical Science, Peking University. Studing basic
            medical subject matters, including anatomy, biostatistics,
            epidemiology, immunology, physiology,etc...
          </p>
        </li>
      </ol>
    </section>
  );
};

export default ResumePage;
