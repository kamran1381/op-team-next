import React from 'react';
import Sectionone from '@/app/home/sectionone';
import Sectionthree from '@/app/home/sectionthree';
import Sectiontwo from '@/app/home/sectiontwo';
import Sectionfour from '@/app/home/sectionfour';

const Home = () => {
  return (
    <div className='flex flex-col items-center  '>
      <Sectionone />
      <Sectiontwo />
      <Sectionthree />
      <Sectionfour />
    </div>
  );
}

export default Home;
