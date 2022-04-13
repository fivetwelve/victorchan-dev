import * as React from 'react';
import Masthead from '../components/masthead';
import Nav from '../components/nav';
import Seo from '../components/seo';
import ContactForm from '../components/contactForm';
import Footer from '../components/footer';
import tool1 from '../images/tool-1.svg';
import tool2 from '../images/tool-2.svg';
import tool3 from '../images/tool-3.svg';
import tape4 from '../images/tape-4.png';

// styles
const headlineStyle =
  'font-headline text-2xl md:text-3xl text-slate-800 bg-amber-400 inline pr-1 md:pr-2 md:pb-1.5';
const linkStyle =
  'text bg-amber-200 inline-block relative no-underline px-0.5 leading-tight';
const paragraphStyle = 'text-slate-600 text-xl mb-5';
const footnoteStyle = 'text-slate-600 text-m mb-5';
const dropShadowStyle = {
  boxShadow: '1px 2px 6px 2px rgb(0 0 0 / 10%)',
};
const h1DropShadowStyle = {
  boxShadow: '1px 1px 3px 1px rgb(0 0 0 / 10%)',
};

// markup
const AboutMePage = () => {
  return (
    <div className="--body3 font-serif">
      <Seo title="About Me" />
      <Masthead />
      <Nav currentPage="about" />
      <main className="inline-block pt-8 px-5 lg:px-24">
        <div id="main" className="w-full mb-8">
          <h1
            className="inline-flex px-4 py-2 -rotate-3 translate-x-2 text-3xl md:text-4xl bg-white"
            style={h1DropShadowStyle}
          >
            About Me
          </h1>
        </div>
        <div className="prose max-w-full xl:w-3/4 xl:float-left">
          {/* Skills starts */}
          <div
            className="bg-white rounded py-8 px-4 md:px-8 mb-16"
            style={dropShadowStyle}
          >
            <div className="relative -mt-3">
              <span className="absolute w-full -top-12">
                <img src={tool1} alt="" className="my-0 mx-auto w-48" />
              </span>
            </div>
            <div className="mt-3 mb-7">
              <h2 className={headlineStyle}>Skills</h2>
            </div>
            <h3 className="underline text-xl">Technical</h3>
            <p className={paragraphStyle}>
              I am a front-end & integration developer with lots of graphics
              production chops.
            </p>
            <ul className={paragraphStyle}>
              <li>HTML, CSS/SCSS, JavaScript, ActionScript 3*</li>
              <li>npm ecosystem</li>
              <li>React, Gatsby, Vue*</li>
              <li>GraphQL</li>
              <li>experience working with REST APIs</li>
              <li>npm, yarn, grunt*, gulp* </li>
              <li>Git, SVN*</li>
              <li>Jira for bug reporting</li>
              <li>familiarity with a11y practices</li>
              <li>
                familiarity with writing unit tests (it's a work-in-progress!)
              </li>
              <li>experience with CI/CD workflows</li>
            </ul>
            <h3 className="underline text-xl">Software</h3>
            <p className={paragraphStyle}>
              I love working with software but these are generally the tools I
              use (or have used) for development.
            </p>
            <ul className={paragraphStyle}>
              <li>VS Code; Sublime*, Atom*</li>
              <li>
                Adobe Photoshop, Illustrator, InDesign (intermediate to expert)
              </li>
              <li>
                Adobe After Effects, Media Encoder, Premiere (basic production
                experience)
              </li>
              <li>Adobe Animate (AKA Flash)*</li>
              <li>Sketch, Figma</li>
              <li>Microsoft Office</li>
            </ul>
            <p className={footnoteStyle}>
              * previous experience that may now be deprecated
            </p>
          </div>
          {/* Skills ends */}

          {/* Background starts */}

          <div
            className="bg-white rounded py-8 px-4 md:px-8 mb-16"
            style={dropShadowStyle}
          >
            <div className="relative -mt-3">
              <span className="absolute w-full -mt-12">
                <img src={tool2} alt="" className="my-0 mx-auto  w-48" />
              </span>
            </div>
            <div className="mt-3 mb-7">
              <h2 className={headlineStyle}>Background</h2>
            </div>
            <h3 className="underline text-xl">Influences</h3>
            <p className={paragraphStyle}>
              I have post-secondary degrees (BSc Civil Eng., MBA) but they
              essentially distill down to an affinity for problem-solving and a
              awareness of the less-technical (the human and business factors of
              any project are important, as well).
            </p>
            <p className={paragraphStyle}>
              Design and creativity are very motivating and important to me.
              They are underlying factors in how I approach ideation and
              solutions. I have worked closely with designers and user
              experience researchers which allows me to view the expectation and
              outcome of my work more holistically as well as more
              sympathetically from the standpoint of the end user.
            </p>
            <p className={paragraphStyle}>
              I strive to build with a designer's eye and an engineer's exacting
              tolerance. This means sometimes finding the best compromise
              between left- and right-brained approaches to maximize efficiency
              through optimization and still delivering on a creative vision.
              Sometimes it requires questioning and very often it also means
              listening a whole lot.
            </p>

            <h3 className="underline text-xl">Being Different</h3>
            <p className={paragraphStyle}>
              Being Canadian makes me feel like I can be self-deprecating and
              laugh at myself at the same time. Yet, growing up Asian made me
              also sensitive to intolerance. Inclusion, equality and openness
              are values I appreciate; projects I have been part of that
              consisted of people with different perspectives and cultural
              sensitivities have been positive experiences.
            </p>
          </div>
          {/* Background ends */}

          {/* Contact starts */}
          <div
            className="bg-white rounded py-8 px-4 md:px-8 mb-16"
            style={dropShadowStyle}
            id="contact"
          >
            <div className="relative -mt-3">
              <span className="absolute w-full -mt-12">
                <img src={tool3} alt="" className="my-0 mx-auto  w-48" />
              </span>
            </div>
            <div className="mt-3 mb-7">
              <h2 className={headlineStyle}>Contact Me</h2>
            </div>
            <p className={paragraphStyle}>
              I'm always on the lookout for a good collab or project. I would
              love to hear from you!
            </p>
            <ContactForm />
          </div>
          {/* Contact ends */}

          {/* Colophon starts */}
          <div
            className="bg-white rounded py-8 px-4 md:px-8 mb-16"
            style={dropShadowStyle}
          >
            <div className="relative -mt-3">
              <span className="absolute w-full -mt-12">
                <img src={tape4} alt="" className="my-0 mx-auto  w-48" />
              </span>
            </div>
            <div className="mt-3 mb-7">
              <h2 className={headlineStyle}>Colophon</h2>
            </div>
            <h3 className="underline text-xl">Site Information</h3>
            <p className={paragraphStyle}>
              This site was built using the{' '}
              <a
                className={linkStyle}
                href="https://www.gatsbyjs.com/"
                target="_blank"
                rel="noreferrer"
              >
                Gatsby
              </a>{' '}
              framework and{' '}
              <a
                className={linkStyle}
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
              >
                Tailwind CSS
              </a>{' '}
              for efficient atomic styling, and kindly hosted on{' '}
              <a
                className={linkStyle}
                href="https://www.netlify.com/"
                target="_blank"
                rel="noreferrer"
              >
                Netlify
              </a>
              .
            </p>
            <p className={paragraphStyle}>
              The typefaces used belong to the{' '}
              <a
                className={linkStyle}
                href="https://fonts.google.com/?query=zilla+slab"
                target="_blank"
                rel="noreferrer"
              >
                Zilla Slab family
              </a>{' '}
              by Typotheque.
            </p>
            <h3 className="underline text-xl">Source Code</h3>
            <p className={paragraphStyle}>
              <a
                className={linkStyle}
                href="https://github.com/fivetwelve/victorchan-dev"
                target="_blank"
                rel="noreferrer"
              >
                Code for this site
              </a>{' '}
              can be downloaded or cloned for your own purposes, whether it's
              for learning, modification or re-use, with the exception of the
              imagery and text content. Please see the README and LICENSE files
              for more information.
            </p>
          </div>
        </div>
      </main>
      <Footer disableLink={true} />
    </div>
  );
};

export default AboutMePage;
