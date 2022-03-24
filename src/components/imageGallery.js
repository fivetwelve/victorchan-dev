import * as React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { makeid } from '../utils/functions';

const options = {
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

const ImageGallery = (props) => {
  const { galleryData } = props;
  console.log('galleryData');
  console.log(galleryData);
  return (
    <SRLWrapper options={options}>
      <div className="flex flex-wrap space-x-12 xl:space-x-4 xl:justify-between mt-10 mb-10">
        {galleryData.length > 0 &&
          galleryData.map((elem) => (
            <a href={elem.href} key={makeid()}>
              <StaticImage
                src="../images/screenshots/almex--thumb-01.jpg"
                alt={elem.alt}
              />
            </a>
          ))}
        {/* <a href={almex01}>
          <StaticImage
            src="../images/screenshots/almex--thumb-01.jpg"
            alt="Almex Group's homepage"
          />
        </a>
        <a href={almex02}>
          <StaticImage
            src="../images/screenshots/almex--thumb-02.jpg"
            alt="Almex Group product page"
          />
        </a>
        <a href={almex03}>
          <StaticImage
            src="../images/screenshots/almex--thumb-03.jpg"
            alt="Almex Group's Fusion Points loyalty website"
          />
        </a> */}
      </div>
    </SRLWrapper>
  );
};

export default ImageGallery;
