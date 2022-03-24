import * as React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import Nav from '../components/nav';

import sea1 from '../images/sea-1.png';
import sea2 from '../images/sea-2.png';
import sea3 from '../images/sea-3.png';

import colorfield from '../images/agencies/colorfield.svg';
import ibm from '../images/agencies/ibm.svg';
import lollipop from '../images/agencies/lollipop.svg';
import organic from '../images/agencies/organic.svg';
import proximity from '../images/agencies/proximity.svg';
import publicisSapient from '../images/agencies/publicis-sapient.svg';
import publicis from '../images/agencies/publicis.svg';

import airCanada from '../images/clients/air-canada.svg';
import cityOfToronto from '../images/clients/city-of-toronto.svg';
import dt from '../images/clients/dt.svg';
import firstNiagara from '../images/clients/first-niagara.svg';
import gillette from '../images/clients/gillette.svg';
import gg from '../images/clients/gg.svg';
import hp from '../images/clients/hp.svg';
import intel from '../images/clients/intel.svg';
import lg from '../images/clients/lg.svg';
import loblaws from '../images/clients/loblaws.svg';
import logitech from '../images/clients/logitech.svg';
import manulife from '../images/clients/manulife.svg';
import pcf from '../images/clients/pcf.svg';
import nvidia from '../images/clients/nvidia.svg';
import rdio from '../images/clients/rdio.svg';

// styles
const headlineStyle =
  'font-headline text-2xl md:text-3xl text-slate-800 bg-amber-400 inline pr-1 pb-1 md:pr-2 md:pb-1.5';
const paragraphStyle = 'text-slate-600 text-xl mb-5';
const linkStyle = 'bg-amber-200 inline-block relative no-underline';
const dropShadowStyle = {
  boxShadow: '1px 2px 6px 2px rgb(0 0 0 / 10%)',
};
const h1DropShadowStyle = {
  boxShadow: '1px 1px 3px 1px rgb(0 0 0 / 10%)',
};
const logoStyle =
  'h-24 w-24 mr-4 mb-4 p-2 inline-flex overflow-hidden rounded-full ring-1 ring-black hover:scale-150   duration-300 ease-in-out bg-white';

// data
const agencies = [
  { src: colorfield, alt: 'Colorfield' },
  { src: ibm, alt: 'IBM' },
  { src: lollipop, alt: 'Lollipop' },
  { src: organic, alt: 'Organic' },
  { src: proximity, alt: 'Proximity' },
  { src: publicisSapient, alt: 'Publicis Sapient' },
  { src: publicis, alt: 'Publicis' },
];

const clients = [
  { src: airCanada, alt: 'Air Canada' },
  { src: cityOfToronto, alt: 'City of Toronto' },
  { src: dt, alt: 'Definitive Technology' },
  { src: firstNiagara, alt: 'First Niagara Bank' },
  { src: gillette, alt: 'Gillette' },
  { src: gg, alt: 'Governor General of Canada Awards' },
  { src: hp, alt: 'hp' },
  { src: intel, alt: 'Intel' },
  { src: lg, alt: 'LG' },
  { src: loblaws, alt: 'Loblaws' },
  { src: logitech, alt: 'Logitech' },
  { src: manulife, alt: 'Financial Corporation' },
  { src: nvidia, alt: 'Nvidia' },
  { src: pcf, alt: "President's Choice Financial" },
  { src: rdio, alt: 'rdio' },
];

// markup
const PastWorkPage = () => {
  return (
    <SimpleReactLightbox className="font-serif">
      <main className="--body2 inline-block py-24 px-5 md:px-24 font-serif">
        {/* <title>Home Page</title> */}

        <Nav currentPage="past" />

        <div className="w-full mb-8">
          <h1
            className="inline-flex px-4 py-2 rotate-2 -translate-x-3 text-3xl md:text-4xl bg-white"
            style={h1DropShadowStyle}
          >
            Past Work
          </h1>
        </div>

        <div className="prose max-w-full xl:w-2/3 xl:float-left">
          {/* Agencies starts */}
          <div
            className="bg-white rounded py-8 px-4 md:px-8 mb-14 rotate-0.5"
            style={dropShadowStyle}
          >
            <div className="relative -mt-3">
              <span className="absolute w-full -top-12">
                <img src={sea1} alt="" className="my-0 mx-auto" />
              </span>
            </div>
            <div className="mt-3">
              <h2 className={headlineStyle}>Agencies</h2>
            </div>
            {/* <h3 className="underline text-xl">Client</h3> */}
            <p className={paragraphStyle}>
              I've had the pleasure to work with various
              organizations&mdash;small and large&mdash;throughout my career. As
              anyone might tell you, it's not the size of the organization but
              the people on each project that make the experience worthwhile.
              {/* <a
                href="https://www.almex.com/"
                target="_blank"
                rel="noreferrer"
                className={`text ${linkStyle}`}
              >
                Almex Group
              </a> */}
            </p>
            {agencies.length > 0 && (
              <div>
                {agencies.map((elem) => (
                  <span className={logoStyle}>
                    <img
                      src={elem.src}
                      alt={elem.alt}
                      className="my-0 mx-auto"
                    />
                  </span>
                ))}
              </div>
            )}
          </div>
          {/* Agencies ends */}

          {/* Clients & Brands starts */}
          <div
            className="bg-white rounded py-8 px-4 md:px-8 mb-14 rotate-0.5"
            style={dropShadowStyle}
          >
            <div className="relative -mt-3">
              <span className="absolute w-full -mt-12">
                <img src={sea2} alt="" className="my-0 mx-auto" />
              </span>
            </div>
            <div className="mt-3">
              <h2 className={headlineStyle}>Clients & Brands</h2>
            </div>
            <h3 className="underline text-xl">Industries</h3>
            <ul className={paragraphStyle}>
              <li>agriculture & manufacturing</li>
              <li>computer & consumer electronics</li>
              <li>financial</li>
              <li>entertainment</li>
              <li>public sector</li>
              <li>retail</li>
            </ul>
            {clients.length > 0 && (
              <div>
                {clients.map((elem) => (
                  <span className={logoStyle}>
                    <img
                      src={elem.src}
                      alt={elem.alt}
                      className="my-0 mx-auto"
                    />
                  </span>
                ))}
              </div>
            )}
          </div>
          {/* Clients & Brands ends */}
        </div>

        {/* Gallery starts */}
        <aside className="prose w-full max-w-full xl:w-1/3 xl:float-right xl:pl-2">
          <div
            className="bg-white rounded py-8 px-4 w-full md:px-8 mb-14 rotate-0.5 xl:ml-3"
            style={dropShadowStyle}
          >
            <div className="relative -mt-3">
              <span className="absolute w-full -top-12">
                <img src={sea3} alt="" className="my-0 mx-auto" />
              </span>
            </div>
            <div className="mt-3">
              <h2 className={headlineStyle}>Gallery</h2>
            </div>
          </div>
        </aside>
        {/* Gallery ends */}
      </main>
    </SimpleReactLightbox>
  );
};

export default PastWorkPage;
