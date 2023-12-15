import React from 'react';

const Greeting = ({ language }) => {
  return (
    <div className="inline-block mx-4 text-l md:text-l lg:text-l font-semibold">
      {language}
    </div>
  );
};

export default Greeting;