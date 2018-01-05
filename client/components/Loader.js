import React from 'react';
import ReactLoading from 'react-loading';
import MinimalLayout from './MinimalLayout';

const Loader = () => (
  <MinimalLayout>
    <div>
      <ReactLoading className='loader' type='bubbles' color='green' height='335px' width='175px' />
    </div>
  </MinimalLayout>
);

export default Loader;