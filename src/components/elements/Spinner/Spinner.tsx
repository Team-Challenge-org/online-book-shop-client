import React from 'react';
import { FadeLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <>
      <FadeLoader
        color="#196C67"
        height={12}
        width={4}
        cssOverride={{ height: '48px', width: '48px' }}
      />
    </>
  );
};

export default Spinner;
