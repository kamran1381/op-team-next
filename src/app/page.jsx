import React from 'react';
import Sectionone from '@/components/homePageSections/sectionone';
import Sectionthree from '@/components/homePageSections/sectionthree';
import Sectiontwo from '@/components/homePageSections/sectiontwo';
import Sectionfour from '@/components/homePageSections/sectionfour';

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <Sectionone />
      <Sectiontwo />
      <Sectionthree />
      <Sectionfour />
    </div>
  );
}

export default Home;
