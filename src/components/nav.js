import * as React from 'react';
import { Link } from 'gatsby';

const activeStyle =
  'text text-lg bg-amber-200 inline-block relative no-underline px-1';
const inactiveStyle =
  'text text-lg bg-white inline-block relative px-1 opacity-80';
const navDropShadowStyle = {
  boxShadow: '1px 1px 3px 1px rgb(0 0 0 / 10%)',
};

const Nav = ({ currentPage }) => {
  // only Recent has an aside so align nav appropriately for the other pages
  let navPosition = currentPage === 'recent' ? '' : 'xl:w-3/4';
  return (
    <div className={navPosition}>
      <menu className="flex justify-between float-right w-80 mb-8 md:mb-0">
        <div style={navDropShadowStyle}>
          {(currentPage !== 'recent' && (
            <Link to="/" className={activeStyle}>
              Recent Work
            </Link>
          )) || <span className={inactiveStyle}>Recent Work</span>}
        </div>
        <div style={navDropShadowStyle}>
          {(currentPage !== 'past' && (
            <Link to="/past" className={activeStyle}>
              Past Work
            </Link>
          )) || <span className={inactiveStyle}>Past Work</span>}
        </div>
        <div style={navDropShadowStyle}>
          {(currentPage !== 'about' && (
            <Link to="/about" className={activeStyle}>
              About Me
            </Link>
          )) || <span className={inactiveStyle}>About Me</span>}
        </div>
      </menu>
    </div>
  );
};

export default Nav;
