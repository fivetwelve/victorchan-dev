import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
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
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';
import Masthead from '../components/masthead';
import Nav from '../components/nav';
import Seo from '../components/seo';

// import ImageGallery from '../components/imageGallery';
import tape1 from '../images/tape-1.png';
import tape2 from '../images/tape-2.png';
import tape3 from '../images/tape-3.png';
import almex01 from '../images/screenshots/almex-01.jpg';
import almex02 from '../images/screenshots/almex-02.jpg';
import almex03 from '../images/screenshots/almex-03.jpg';
import almex04 from '../images/screenshots/almex-04.jpg';
import almex05 from '../images/screenshots/almex-05.jpg';
import almex06 from '../images/screenshots/almex-06.jpg';
import Footer from '../components/footer';

// styles
const headlineStyle =
  'font-headline text-2xl md:text-3xl text-slate-800 bg-amber-400 inline pr-1 pb-1 md:pr-2 md:pb-1.5';
const paragraphStyle = 'text-slate-600 text-xl mb-5';
const linkStyle = 'text bg-amber-200 inline-block relative no-underline px-0.5';
const dropShadowStyle = {
  boxShadow: '1px 2px 6px 2px rgb(0 0 0 / 10%)',
};
const h1DropShadowStyle = {
  boxShadow: '1px 1px 3px 1px rgb(0 0 0 / 10%)',
};
const lightboxOptions = {
  buttons: {
    showAutoplayButton: false,
    showDownloadButton: false,
    showFullscreenButton: false,
    showThumbnailsButton: false,
    iconColor: 'rgba(0, 0, 0, 1)',
  },
  caption: {
    captionContainerPadding: '20px 0',
  },
  settings: {
    autoplaySpeed: 0,
    overlayColor: 'rgba(30, 30, 30, 0.85)',
  },
};

// data
const stackData = [
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
const IndexPage = () => {
  return (
    <div className="--body1 font-serif">
      <Seo title="Home Page | Recent Work" />
      <Masthead />
      <Nav currentPage="recent" />
      <SimpleReactLightbox>
        <main className="inline-block pt-8 px-5 lg:px-24">
          <div id="main" className="w-full mb-8">
            <h1
              className="inline-flex px-4 py-2 -rotate-2 -translate-x-3 text-3xl md:text-4xl bg-white"
              style={h1DropShadowStyle}
            >
              Recent Work
            </h1>
          </div>
          <div className="prose max-w-full xl:w-2/3 xl:float-left">
            {/* Mission brief starts */}
            <div
              className="bg-white rounded py-8 px-4 md:px-8 mb-16"
              style={dropShadowStyle}
            >
              <div className="relative -mt-3">
                <span className="absolute w-full -top-12">
                  <img src={tape1} alt="" className="my-0 mx-auto" />
                </span>
              </div>
              <div className="mt-3 mb-7">
                <h2 className={headlineStyle}>Briefing</h2>
              </div>
              <h3 className="underline text-xl">Client</h3>
              <p className={paragraphStyle}>
                <a
                  href="https://www.almex.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={linkStyle}
                >
                  Almex Group
                </a>
              </p>
              <h3 className="underline text-xl">Objective</h3>
              <p className={paragraphStyle}>
                Build the client a new website! That required putting together a
                complete tech stack that encompassed content management,
                deployment, search capability, and form submissions at the
                minimum. It also needed to support multiple languages, multiple
                regions, and a couple of hundred products that needed to follow
                a defined category hierarchy.
              </p>
              <p className={paragraphStyle}>
                Additional supporting sites were built; one to allow customers
                to login and view their loyalty points and another to manage
                said customer accounts.
              </p>
            </div>
            {/* Mission brief ends */}

            {/* Approach starts */}
            <div
              className="bg-white rounded py-8 px-4 md:px-8 mb-16"
              style={dropShadowStyle}
            >
              <div className="relative -mt-3">
                <span className="absolute w-full -mt-12">
                  <img src={tape2} alt="" className="my-0 mx-auto" />
                </span>
              </div>
              <div className="mt-3 mb-7">
                <h2 className={headlineStyle}>Strategy</h2>
              </div>
              <h3 className="underline text-xl">Challenges</h3>
              <p className={paragraphStyle}>
                The website was originally built atop Textpattern&mdash;a
                somewhat obsolete PHP-based CMS&mdash; and its version of PHP
                had long been deprecated by their hosting provider. The site
                design was not responsive and the content management and
                multilingual support was not easily scalable. Attempts to
                upgrade the CMS and PHP to current versions brought errors and
                would have necessitated PHP expertise that was outside my
                wheelhouse. The site was also hosted on a shared virtual server
                which I suspected would have to be upgraded or migrated to
                handle the additional traffic the client envisioned.
              </p>
              <h3 className="underline text-xl">Solution</h3>
              <p className={paragraphStyle}>
                I wanted the site to take a serverless approach and propagate to
                a CDN rather than reside on a single server. I also wanted to
                plan the architecture and devops to be easier to manage and
                integrate. Using third-party resources and API (PaaS) would
                allow the site to better handle long-term growth of both content
                and audience.
              </p>
              <p className={paragraphStyle}>
                I proposed a{' '}
                <a
                  href="https://jamstack.org/what-is-jamstack/"
                  target="_blank"
                  rel="noreferrer"
                  className={linkStyle}
                >
                  Jamstack
                </a>{' '}
                solution and provided estimates of monthly operating costs to
                the client who gave their blessing to proceed. One advantage to
                using PaaS is being able to better judge costs than estimating
                that associated with writing all the functionality from scratch
                or with integrating an expensive enterprise software that has
                very narrow platform requirements and admin-level access.
              </p>
              <p className={paragraphStyle}>
                The site framework used Gatsby in order to make most of the site
                statically rendered and therefore quick to load and render. It
                was deployed on Netlify's CDN using their CI pipeline with the
                project's Git repository. The website data and content were set
                up in GraphCMS and mapped into the front-end templates' GraphQL.
                Algolia was integrated to provide Search functionality. In
                addition, server-side code was needed for form submission and
                product synchronization with Algolia so they were written as
                Netlify's version of Amazon Lambda functions. Last but not
                least, taking advantage of Slack's webhooks allowed us to
                trigger builds (dev or production) with keywords in our team
                chat, avoiding the need for any admin dashboards or devops
                knowledge for the folks needing site rebuilds whenever content
                and not code was updated.
              </p>
              <p className={paragraphStyle}>
                The loyalty site was built with a similar architecture but at a
                much smaller scale. Airtable and some REST APIs were used to
                manage membership data and Auth0 was integrated to manage
                sign-ups and authentication.
              </p>
              <p className={paragraphStyle}>
                The project was not without its challenges. It did survive
                breaking changes from major updates of both Gatsby and GraphCMS
                and there is a constant challenge and desire to reduce build
                times. Nonetheless, the interconnectedness of all the services
                and components is testament to how far web production has come
                to enabling small teams&mdash;or even one person&mdash;to
                accomplish so much on their own.
              </p>
              <h3 className="underline text-xl">Tech Stack</h3>
              <dl className="mt-6" style={{ columns: '2 auto' }}>
                {stackData.map((element, idx) => (
                  <dd key={`stack-${idx}`} className="flex mb-1.5">
                    <span className="flex justify-center w-9">
                      <FontAwesomeIcon
                        icon={element.icon}
                        size="xl"
                        className="fa-pull-left"
                      />
                    </span>
                    <a
                      href={element.url}
                      target="_blank"
                      rel="noreferrer"
                      className={linkStyle}
                    >
                      {element.text}
                    </a>
                  </dd>
                ))}
              </dl>
            </div>
            {/* Approach ends */}
          </div>

          {/* Gallery starts */}
          <aside className="prose w-full max-w-full xl:w-1/3 xl:float-right xl:pl-2">
            <div
              className="bg-white rounded py-8 px-4 w-full md:px-8 mb-16 xl:ml-3"
              style={dropShadowStyle}
            >
              <div className="relative -mt-3">
                <span className="absolute w-full -top-12">
                  <img src={tape3} alt="" className="my-0 mx-auto" />
                </span>
              </div>
              <div className="mt-3 mb-7">
                <h2 className={headlineStyle}>Gallery</h2>
                <SRLWrapper options={lightboxOptions}>
                  {/* <ul className="--gallery flex flex-wrap space-x-12 xl:space-x-4 xl:justify-between mt-10"> */}
                  <ul className="--gallery flex flex-wrap">
                    <li className="p-3 overflow-hidden">
                      <a href={almex01}>
                        <StaticImage
                          src="../images/screenshots/almex--thumb-01.jpg"
                          alt="Almex Group's homepage."
                        />
                      </a>
                    </li>
                    <li className="p-3 overflow-hidden">
                      <a href={almex02}>
                        <StaticImage
                          src="../images/screenshots/almex--thumb-02.jpg"
                          alt="Almex Group product page."
                        />
                      </a>
                    </li>
                    <li className="p-3 overflow-hidden">
                      <a href={almex03}>
                        <StaticImage
                          src="../images/screenshots/almex--thumb-03.jpg"
                          alt="Page that filters documents and videos from all product
                    pages."
                        />
                      </a>
                    </li>
                    <li className="p-3 overflow-hidden">
                      <a href={almex04}>
                        <StaticImage
                          src="../images/screenshots/almex--thumb-04.jpg"
                          alt="Historical timeline with details that show more in a modal."
                        />
                      </a>
                    </li>
                    <li className="p-3 overflow-hidden">
                      <a href={almex05}>
                        <StaticImage
                          src="../images/screenshots/almex--thumb-05.jpg"
                          alt="Global offices in Google Maps with detailed pins."
                        />
                      </a>
                    </li>
                    <li className="p-3 overflow-hidden">
                      <a href={almex06}>
                        <StaticImage
                          src="../images/screenshots/almex--thumb-06.jpg"
                          alt="Almex Group's Fusion Points loyalty website."
                        />
                      </a>
                    </li>
                  </ul>
                </SRLWrapper>
              </div>
            </div>
          </aside>
          {/* Gallery ends */}
        </main>
      </SimpleReactLightbox>
      <Footer />
    </div>
  );
};

export default IndexPage;
