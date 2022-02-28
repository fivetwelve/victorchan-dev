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
import tape1 from '../images/tape-1.png';
import tape2 from '../images/tape-2.png';
import tape3 from '../images/tape-3.png';

// styles
const headlineStyle =
  'font-headline text-2xl md:text-3xl text-slate-800 bg-amber-400 inline pr-1 pb-1 md:pr-2 md:pb-1.5';
const paragraphStyle = 'text-slate-600 text-xl mb-5';
const linkStyle =
  'bg-amber-400 bg-opacity-50 inline-block relative no-underline';
const dropShadowStyle = {
  boxShadow: '1px 2px 6px 2px rgb(0 0 0 / 10%)',
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
const IndexPage = () => {
  return (
    <main className="py-24 px-5 md:px-24 font-serif">
      {/* <title>Home Page</title> */}

      <div className="w-full mb-8">
        <h2 className="text-3xl md:text-4xl">Recent Work</h2>
      </div>
      <div className="prose max-w-full xl:w-2/3 xl:float-left">
        {/* <h2 className="text-3xl md:text-4xl">Recent Work</h2> */}
        {/* Mission brief starts */}
        <div
          className="bg-white rounded py-8 px-4 md:px-8 mb-10 rotate-0.5"
          style={dropShadowStyle}
        >
          <div className="relative -mt-3">
            <span className="absolute w-full -top-12">
              <img src={tape1} role="img" alt="" className="my-0 mx-auto" />
            </span>
          </div>
          <div className="mt-3">
            <h2 className={headlineStyle}>Briefing</h2>
          </div>
          <h3 className="underline text-xl">Client</h3>
          <p className={paragraphStyle}>
            <a
              href="https://www.almex.com/"
              target="_blank"
              rel="noreferrer"
              className={`text ${linkStyle}`}
            >
              Almex Group
            </a>
          </p>
          <h3 className="underline text-xl">Objective</h3>
          <p className={paragraphStyle}>
            Build the client a new website! That required putting together a
            complete tech stack that encompassed content management, deployment,
            search and form submissions at the minimum. It also needed to
            support multiple languages, multiple regions, and a couple of
            hundred products that needed to follow a defined category hierarchy.
          </p>
          <p className={paragraphStyle}>
            Additional supporting sites were built; one to allow customers to
            login and view their loyalty points while another to manage said
            customer accounts.
          </p>
        </div>
        {/* Mission brief ends */}

        {/* Approach starts */}
        <div
          className="bg-white rounded py-8 px-4 md:px-8 mb-10 rotate-0.5"
          style={dropShadowStyle}
        >
          <div className="relative -mt-3">
            <span className="absolute w-full -top-12">
              <img src={tape2} role="img" alt="" className="my-0 mx-auto" />
            </span>
          </div>
          <div className="mt-3">
            <h2 className={headlineStyle}>Strategy</h2>
          </div>
          <h3 className="underline text-xl">Challenges</h3>
          <p className={paragraphStyle}>
            At the time, the website employed Textpattern&mdash;a somewhat
            obsolete PHP-based CMS&mdash;atop of a deprecated version of PHP,
            and had been poorly maintained. The site design was not responsive
            and the content management was not easily scalable from its existing
            dozens of products to an anticipation of hundreds. Multilingual
            support was very rudimentary and attempts to upgrade everything
            brought errors and would have necessitated a lot of PHP expertise
            which is outside my wheelhouse. The site was also running off a
            shared virtual server which I suspected would not scale too well
            with additional traffic nor international visitors.
          </p>
          <h3 className="underline text-xl">Solution</h3>
          <p className={paragraphStyle}>
            I wanted their site to take advantage of cloud resources and make
            their (currently non-existant) devops a lot friendlier and easier to
            manage by relying on PaaS (if I am categorizing the services
            correctly) as well as being able handle long-term growth and traffic
            by way of deploying to a CDN.
          </p>
          <p className={paragraphStyle}>
            I proposed a{' '}
            <a
              href="https://jamstack.org/what-is-jamstack/"
              target="_blank"
              rel="noreferrer"
              className={`text ${linkStyle}`}
            >
              Jamstack
            </a>{' '}
            approach and provided estimates of monthly operating costs to the
            client who gave their blessing to proceed and begin anew.
          </p>
          <p className={paragraphStyle}>
            The site framework used Gatsby in order to make most of the site
            statically rendered and therefore quick to load and render. It was
            deployed on Netlify's CDN using their CI pipeline with the project's
            Git repository. The website data and content were set up in GraphCMS
            and mapped into the front-end components and templates GraphQL.
            Algolia was integrated to provide Search functionality. In addition,
            a couple of server-side utilities were needed for form submission
            and product synchronization with Algolia so they were created using
            Netlify's Amazon Lambda implementation. Last but not least, taking
            advantage of Slack's webhooks allowed us to trigger builds (dev or
            production) with keywords in our team chat, avoiding the need for
            any admin dashboards or devops knowledge for the folks needing site
            rebuilds.
          </p>
          <p className={paragraphStyle}>
            The loyalty site was built with a similar architecture but at a much
            smaller scale. Airtable and some REST APIs were used to manage
            membership data and Auth0 was integrated to manage sign-ups and
            authentication.
          </p>
          <p className={paragraphStyle}>
            The project was not without its challenges. It did survive breaking
            changes from major updates of both Gatsby and GraphCMS and there is
            a constant challenge and desire to reduce build times. Nonetheless,
            the interconnectedness of all the services and components is
            testament to how far web production has come to enabling small
            teams&mdash;or even one person&mdash;to accomplish so much on their
            own.
          </p>
          <h3 className="underline text-xl">Tech Stack</h3>
          <dl className="mt-6" style={{ columns: '2 auto' }}>
            {stack.map((element, idx) => (
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
                  className={`text ${linkStyle}`}
                >
                  {element.text}
                </a>
              </dd>
            ))}
          </dl>
        </div>
        {/* Approach ends */}
      </div>

      <aside className="prose w-full max-w-full lg:w-1/3 xl:float-right xl:pl-2">
        <div
          className="bg-white rounded py-8 px-4 w-full md:px-8 mb-10 rotate-0.5 xl:ml-3"
          style={dropShadowStyle}
        >
          <div className="relative -mt-3">
            <span className="absolute w-full -top-12">
              <img src={tape3} role="img" alt="" className="my-0 mx-auto" />
            </span>
          </div>
          <div className="mt-3">
            <h2 className={headlineStyle}>Gallery</h2>
          </div>
          <h3 className="underline text-xl">Client</h3>
          <p className={paragraphStyle}>
            <a
              href="https://www.almex.com/"
              target="_blank"
              rel="noreferrer"
              className={`text ${linkStyle}`}
            >
              Almex Group
            </a>
          </p>
        </div>

        {/* <div className="relative -mt-3">
            <span className="absolute w-full -top-12">
              <img src={tape3} role="img" alt="" className="my-0 mx-auto" />
            </span>
          </div>
          <div className="mt-3">
            <h2 className={headlineStyle}>Gallery</h2>
          </div>
          <h3 className="underline text-xl">Client</h3>
          <p className={paragraphStyle}>Plenty of stuff</p>
        </div> */}
      </aside>
    </main>
  );
};

export default IndexPage;
