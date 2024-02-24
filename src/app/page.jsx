import React from 'react';
import Sectionone from '@/components/homePageSections/sectionone';
import Sectionthree from '@/components/homePageSections/sectionthree';
import Sectiontwo from '@/components/homePageSections/sectiontwo';

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <Sectionone />
      <Sectiontwo />
      <Sectionthree />
    </div>
  );
}

export default Home;
