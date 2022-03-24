import * as React from 'react';
// import { Link } from 'gatsby';
import siteLogo from '../images/command-line.svg';

// const navStyle = ' text-lg bg-amber-200 inline-block relative no-underline ';

const Masthead = ({ currentPage }) => {
  return (
    <div>
      <img src={siteLogo} />
    </div>
  );
};

export default Masthead;
