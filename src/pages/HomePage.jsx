import React from 'react';
import Hero from '../sections/Hero/Hero';
import ValueProposal from '../sections/ValueProposal/ValueProposal';
import PageTeasers from '../sections/PageTeasers/PageTeasers';

const HomePage = () => {
  return (
    <main className="bg-brand-black">
      <Hero />
      <ValueProposal />
      <PageTeasers />
      {/* Additional sections can be added here */}
    </main>
  );
};

export default HomePage;
