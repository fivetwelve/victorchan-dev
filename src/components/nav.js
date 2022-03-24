import * as React from 'react';
import { Link } from 'gatsby';

const navStyle =
  ' text-lg bg-amber-200 inline-block relative no-underline px-1';
const navDropShadowStyle = {
  boxShadow: '1px 1px 3px 1px rgb(0 0 0 / 10%)',
};

const Nav = ({ currentPage }) => {
  return (
    <div>
      <menu className="flex justify-between float-right w-52">
        {currentPage !== 'recent' && (
          <div style={navDropShadowStyle}>
            <Link to="/" className={`text ${navStyle}`}>
              Recent Work
            </Link>
          </div>
        )}
        {currentPage !== 'past' && (
          <div style={navDropShadowStyle}>
            <Link to="/past" className={`text ${navStyle}`}>
              Past Work
            </Link>
          </div>
        )}
        {currentPage !== 'about' && (
          <div style={navDropShadowStyle}>
            <Link to="/about" className={`text ${navStyle}`}>
              About Me
            </Link>
          </div>
        )}
      </menu>
    </div>
  );
};

export default Nav;
