import * as React from 'react';
import siteLogo from '../images/command-line.svg';

// const navStyle = ' text-lg bg-amber-200 inline-block relative no-underline ';

const Masthead = () => {
  return (
    <header>
      <a
        className="absolute left-60 top-0.5 transition -translate-y-full focus:translate-y-0"
        href="#main"
      >
        Skip to content
      </a>
      <div className="w-52 mt-px mb-10" role="banner">
        <a
          href="https://github.com/fivetwelve/victorchan-dev"
          target="_blank"
          rel="noreferrer"
        >
          <span className="hidden">
            Easter Egg! Click here to view or download the source code for this
            site.
          </span>
          <img src={siteLogo} alt="Developer portfolio for Victor Chan" />
        </a>
      </div>
    </header>
  );
};

export default Masthead;
