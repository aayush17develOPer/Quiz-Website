import React from 'react';
// import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col items-center mt-10'>
      
<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to the ultimate Quizzing platform</h1>
<p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Enhance your knowledge by taking a quiz or create a quiz to give back to the community.</p>
<div className='flex flex-row flex-wrap justify-around'>
<div>
    <a href="/takeQuiz" class="inline-flex items-center justify-center mr-9 px-5 py-3 text-base font-medium text-center text-white bg-green-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    Take quiz
    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    </a>
</div>

<div>
    <a href="/createQuiz" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    Create quiz
    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a></div>
</div>

    </div>
  )
}

export default Home
