import * as React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import Masthead from '../components/masthead';
import Nav from '../components/nav';
import Seo from '../components/seo';
import Footer from '../components/footer';
import { makeid } from '../utils/functions';

import sea1 from '../images/sea-1.png';
import sea2 from '../images/sea-2.png';

import colorfield from '../images/agencies/colorfield.svg';
import ibm from '../images/agencies/ibm.svg';
import lollipop from '../images/agencies/lollipop.svg';
import organic from '../images/agencies/organic.svg';
import proximity from '../images/agencies/proximity.svg';
import publicisSapient from '../images/agencies/publicis-sapient.svg';
import publicis from '../images/agencies/publicis.svg';

import airCanada from '../images/clients/air-canada.svg';
import almex from '../images/clients/almex.svg';
import cargill from '../images/clients/cargill.svg';
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
import motiva from '../images/clients/motiva.svg';
import pcf from '../images/clients/pcf.svg';
import nvidia from '../images/clients/nvidia.svg';
import rdio from '../images/clients/rdio.svg';
import subaru from '../images/clients/subaru.svg';
import tjx from '../images/clients/tjx.svg';

// styles
const headlineStyle =
  'font-headline text-2xl md:text-3xl text-slate-800 bg-amber-400 inline pr-1 pb-1 md:pr-2 md:pb-1.5';
const paragraphStyle = 'text-slate-600 text-xl mb-5';
const dropShadowStyle = {
  boxShadow: '1px 2px 6px 2px rgb(0 0 0 / 10%)',
};
const h1DropShadowStyle = {
  boxShadow: '1px 1px 3px 1px rgb(0 0 0 / 10%)',
};
const logoStyle =
  'max-h-32 w-48 mb-4 p-7 inline-flex justify-center overflow-hidden rounded-full hover:scale-150 duration-300 ease-in-out bg-none';

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
  { src: almex, alt: 'Almex Group' },
  { src: cargill, alt: 'Cargill' },
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
  { src: manulife, alt: 'Manulife Financial Corporation' },
  { src: motiva, alt: 'Motiva' },
  { src: nvidia, alt: 'Nvidia' },
  { src: pcf, alt: "President's Choice Financial" },
  { src: rdio, alt: 'Rdio' },
  { src: subaru, alt: 'Subaru' },
  { src: tjx, alt: 'The TJX Companies' },
];

// markup
const PastWorkPage = () => {
  return (
    <div className="--body2  font-serif">
      <Seo title="Past Work" />
      <Masthead />
      <Nav currentPage="past" />
      <SimpleReactLightbox>
        <main className="inline-block pt-8 px-5 lg:px-24">
          <div id="main" className="w-full mb-8">
            <h1
              className="inline-flex px-4 py-2 rotate-2 -translate-x-3 text-3xl md:text-4xl bg-white"
              style={h1DropShadowStyle}
            >
              Past Work
            </h1>
          </div>

          <div className="prose max-w-full xl:w-3/4 xl:float-left">
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
              <div className="mt-3 mb-7">
                <h2 className={headlineStyle}>Agencies</h2>
              </div>
              {/* <h3 className="underline text-xl">Client</h3> */}
              <p className={paragraphStyle}>
                I've had the pleasure to work with various
                organizations&mdash;small and large&mdash;throughout my career.
                As anyone might tell you, it's not the size of the organization
                but the people on each project that make the experience
                worthwhile.
              </p>
              {agencies.length > 0 && (
                <div className="flex flex-wrap items-center">
                  {agencies.map((elem) => (
                    <div
                      className="inline-flex flex-col align-center"
                      key={makeid()}
                    >
                      <span className={logoStyle}>
                        <img
                          src={elem.src}
                          alt={elem.alt}
                          className="my-0 mx-auto"
                        />
                      </span>
                      <span className="text-center mx-auto">{elem.alt}</span>
                    </div>
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
              <div className="mt-3 mb-7">
                <h2 className={headlineStyle}>Clients & Brands</h2>
              </div>
              <h3 className="underline text-xl">Industries</h3>
              <ul className={paragraphStyle}>
                <li>agriculture & large industry</li>
                <li>automotive</li>
                <li>computer & consumer electronics</li>
                <li>financial</li>
                <li>entertainment</li>
                <li>public sector</li>
                <li>retail</li>
              </ul>
              {clients.length > 0 && (
                <div className="flex flex-wrap items-center">
                  {clients.map((elem) => (
                    <span className={logoStyle} key={makeid()}>
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
          {/* <aside className="prose w-full max-w-full xl:w-1/3 xl:float-right xl:pl-2">
          <div
            className="bg-white rounded py-8 px-4 w-full md:px-8 mb-14 rotate-0.5 xl:ml-3"
            style={dropShadowStyle}
          >
            <div className="relative -mt-3">
              <span className="absolute w-full -top-12">
                <img src={sea3} alt="" className="my-0 mx-auto" />
              </span>
            </div>
            <div className="mt-3 mb-7">
              <h2 className={headlineStyle}>Gallery</h2>
            </div>
          </div>
        </aside> */}
          {/* Gallery ends */}
        </main>
      </SimpleReactLightbox>
      <Footer />
    </div>
  );
};

export default PastWorkPage;
