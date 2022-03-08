import * as React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import { StaticImage } from 'gatsby-plugin-image';
import almex01 from '../images/almex-01.jpg';
import almex02 from '../images/almex-02.jpg';
import almex03 from '../images/almex-03.jpg';

const options = {
  buttons: {
    showAutoplayButton: false,
    showDownloadButton: false,
    showFullscreenButton: false,
    showThumbnailsButton: false,
    // backgroundColor: 'rgba(30,30,36,0.8)',
    // iconColor: 'rgba(255, 0, 255, 0.8)',
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

const RecentGallery = (props) => {
  return (
    <SRLWrapper {...props} options={options}>
      <div className="flex space-x-12 xl:space-x-4 xl:justify-between mt-10">
        <a href={almex01}>
          <StaticImage
            src="../images/almex--thumb-01.jpg"
            alt="Almex Group's homepage"
          />
        </a>
        <a href={almex02}>
          <StaticImage
            src="../images/almex--thumb-02.jpg"
            alt="Almex Group product page"
          />
        </a>
        <a href={almex03}>
          <StaticImage
            src="../images/almex--thumb-03.jpg"
            alt="Almex Group's Fusion Points loyalty website"
          />
        </a>
      </div>
    </SRLWrapper>
  );
};

export default RecentGallery;
