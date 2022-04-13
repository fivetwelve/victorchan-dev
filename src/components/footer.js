import * as React from 'react';
import { Link } from 'gatsby';

const Footer = (props) => {
  const year = new Date().getFullYear();
  const { disableLink } = props;
  return (
    <div className="w-full float-left text-lg text-slate-600 pl-5 lg:pl-24 pb-8">
      &copy; Copyright {year}{' '}
      {disableLink ? (
        <>Victor Chan</>
      ) : (
        <Link
          to="/about#contact"
          className="text bg-amber-200 inline-block relative no-underline px-0.5"
          aria-label="Link goes to my contact form."
        >
          Victor Chan
        </Link>
      )}
    </div>
  );
};

export default Footer;
