import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartNetwork,
  faCodeBranch,
  faDatabase,
  faEnvelope,
  faFrame,
  faList,
  faMagnifyingGlass,
  faPlay,
  faUsers,
} from '@fortawesome/pro-light-svg-icons';
import Nav from '../components/nav';
import tool1 from '../images/tool-1.svg';
import tool2 from '../images/tool-2.svg';
import tool3 from '../images/tool-3.svg';

// styles
const headlineStyle =
  'font-headline text-2xl md:text-3xl text-slate-800 bg-amber-400 inline pr-1 pb-1 md:pr-2 md:pb-1.5';
const paragraphStyle = 'text-slate-600 text-xl mb-5';
const footnoteStyle = 'text-slate-600 text-m mb-5';
const linkStyle = 'bg-amber-200 inline-block relative no-underline';
const dropShadowStyle = {
  boxShadow: '1px 2px 6px 2px rgb(0 0 0 / 10%)',
};
const h1DropShadowStyle = {
  boxShadow: '1px 1px 3px 1px rgb(0 0 0 / 10%)',
};

// data
const stack = [
  { text: 'Gatsby', url: 'https://www.gatsbyjs.com/', icon: faFrame },
  { text: 'GraphCMS', url: 'https://graphcms.com/', icon: faDatabase },
  { text: 'Netlify', url: 'https://www.netlify.com/', icon: faChartNetwork },
  {
    text: 'Algolia',
    url: 'https://www.algolia.com/',
    icon: faMagnifyingGlass,
  },
  { text: 'Mailjet', url: 'https://www.mailjet.com/', icon: faEnvelope },
  { text: 'Airtable', url: 'https://www.airtable.com/', icon: faList },
  { text: 'Auth0', url: 'https://auth0.com/', icon: faUsers },
  {
    text: 'Bitbucket',
    url: 'https://bitbucket.org/product/',
    icon: faCodeBranch,
  },
  { text: 'Slack', url: 'https://slack.com/', icon: faPlay },
];

// markup
const AboutMePage = () => {
  return (
    <main className="--body3 py-24 px-5 md:px-24 font-serif">
      {/* <title>Home Page</title> */}

      <Nav currentPage="about" />

      <div className="w-full mb-8">
        <h1
          className="inline-flex px-4 py-2 -rotate-3 translate-x-2 text-3xl md:text-4xl bg-white"
          style={h1DropShadowStyle}
        >
          About Me
        </h1>
      </div>
      <div className="prose max-w-full xl:w-2/3 xl:float-left">
        {/* Skills starts */}
        <div
          className="bg-white rounded py-8 px-4 md:px-8 mb-14 rotate-0.5"
          style={dropShadowStyle}
        >
          <div className="relative -mt-3">
            <span className="absolute w-full -top-12">
              <img src={tool1} alt="" className="my-0 mx-auto w-48" />
            </span>
          </div>
          <div className="mt-3">
            <h2 className={headlineStyle}>Skills</h2>
          </div>
          <h3 className="underline text-xl">Technical</h3>
          <p className={paragraphStyle}>
            <ul>
              <li>HTML, CSS/SCSS, JavaScript</li>
              <li>React, Gatsby, Vue*</li>
              <li>graphQL</li>
              <li>experience working with REST APIs</li>
              <li>npm, yarn </li>
              <li>Git, SVN*</li>
              <li>experience with CI/CD workflows</li>
            </ul>
          </p>
          <h3 className="underline text-xl">Software</h3>
          <p className={paragraphStyle}>
            <ul>
              <li>VS Code; Sublime, Atom (deprecated)</li>
              <li>
                Adobe Photoshop, Illustrator, InDesign (intermediate to expert)
              </li>
              <li>Adobe After Effects, Premiere (beginner)</li>
              <li>Adobe Animate (AKA Flash)*</li>
              <li>Sketch</li>
              <li>Microsoft Office</li>
            </ul>
          </p>
          <p className={footnoteStyle}>
            * previous experience that may now be deprecated with respect to
            current versions
          </p>
        </div>
        {/* Skills ends */}

        {/* Background starts */}
        <div
          className="bg-white rounded py-8 px-4 md:px-8 mb-10 rotate-0.5"
          style={dropShadowStyle}
        >
          <div className="relative -mt-3">
            <span className="absolute w-full -mt-12">
              <img src={tool2} alt="" className="my-0 mx-auto  w-48" />
            </span>
          </div>
          <div className="mt-3">
            <h2 className={headlineStyle}>Background</h2>
          </div>
          <h3 className="underline text-xl">Influences</h3>
          <p className={paragraphStyle}>
            I have post-secondary degrees (BSc Civil Eng., MBA) but they
            essentially distill down to an affinity for problem-solving and a
            sensitivity to the less-technical (aspects of a project (the human
            and business factors, after all).
          </p>
          <p className={paragraphStyle}>
            Design and creativity are very motivating and important to me. They
            are underlying factors in how I approach ideation and solutions. I
            have worked closely with designers and user experience researchers
            which allows me to view the expectation and outcome of my work more
            holistically as well as more sympathetically from the standpoint of
            the end user.
          </p>
          <p className={paragraphStyle}>
            I strive to build with a designer's eye and an engineer's exacting
            tolerance. This means sometimes finding the best compromise between
            left- and right-brained approaches to maximize efficiency through
            optimization and still delivering on a creative vision.
          </p>

          <h3 className="underline text-xl">Being Different</h3>
          <p className={paragraphStyle}>
            Being Canadian makes me feel like I can be self-deprecating and
            laugh at myself at the same time. Yet, growing up Asian makes me
            also sensitive to intolerance. Inclusion and openness are values I
            appreciate and projects made up of people with different
            perspectives and cultural sensitivities have been positive
            experiences.
          </p>
          <h3 className="underline text-xl"></h3>
          <p></p>
        </div>
        {/* Background ends */}
      </div>
    </main>
  );
};

export default AboutMePage;
