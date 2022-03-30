import * as React from 'react';
import siteLogo from '../images/command-line.svg';

// const navStyle = ' text-lg bg-amber-200 inline-block relative no-underline ';

const Masthead = () => {
  return (
    <div className="w-52 mb-10" role="banner">
      <a
        href="https://github.com/fivetwelve/victorchan-dev"
        target="_blank"
        rel="noreferer"
      >
        <span className="hidden">
          Easter Egg! Click here to view or download the source code for this
          site.
        </span>
        <img src={siteLogo} alt="Developer portfolio for Victor Chan" />
      </a>
    </div>
  );
};

export default Masthead;
