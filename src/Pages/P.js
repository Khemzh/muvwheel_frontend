import React, { useState } from 'react';
import Paid from './Paid.js';
import PaidSuccess from './PaidSuccess.js';

const P = () => {
  const [currentPage, setCurrentPage] = useState('/');

  const changePage = (page) => {
    setCurrentPage(page);
  };

  let currentPageComponent;
  if (currentPage === '/') {
    currentPageComponent = <Paid changePage={changePage} />;
  } else if (currentPage === '/PaidSuccess') {
    currentPageComponent = <PaidSuccess changePage={changePage} />;
  }

  return (
    <div>
      {currentPageComponent}
    </div>
  );
};

export default P;