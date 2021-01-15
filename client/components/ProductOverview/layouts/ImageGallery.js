import Carousel from '@brainhubeu/react-carousel';
import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../context/ProductContext';

export const ImageGallery = () => {
  const [caroulVal, setCaroulVal] = useState(0);
  const { curStyle } = useContext(ProductContext);
  const [caroulImgs, setCaroulImgs] = useState([]);

  const getCaroulImgs = () => {
    setCaroulImgs([]);
    curStyle.photos.forEach((photo) => {
      setCaroulImgs([
        ...caroulImgs,
        <img height="630px" width="800px" src={photo.url} />,
      ]);
    });
  };

  useEffect(() => {
    getCaroulImgs();
  }, [curStyle]);

  const [slides, setSlides] = useState([
    <img
      height="630px"
      width="800px"
      src={
        'https://i.picsum.photos/id/482/200/200.jpg?hmac=_oPafYMoTEVlnjtzFvYD5JoiK6Q-xfxbki4tYEMuGRI'
      }
    />,
    <img
      height="630px"
      width="800px"
      src={
        'https://i.picsum.photos/id/577/200/200.jpg?hmac=o426LHIb2MgD4TJnSfBnhpGdOTOdofsp1A7yraIpo-Y'
      }
    />,
    <img
      height="630px"
      width="800px"
      src={
        'https://i.picsum.photos/id/61/200/200.jpg?hmac=RL-JLeHTLsWK7354qjYNQ1iuDxeoCv-kYRTUYun2h34'
      }
    />,
    <img
      height="630px"
      width="800px"
      src={
        'https://i.picsum.photos/id/58/200/200.jpg?hmac=aol3E3KC2fpsVXlPhgxLR9-CLoUQa-kbswhZx-gYzCE'
      }
    />,
    <img
      height="630px"
      width="800px"
      src={
        'https://i.picsum.photos/id/622/200/200.jpg?hmac=0opC4wvaKSUqImE8atOt5HC8k6S4bXipDuItdfzK9s4'
      }
    />,
  ]);

  const updateVal = (v) => [setCaroulVal(v)];

  return (
    <div className="mGalleryBody">
      {/* <Carousel value={caroulVal} slides={slides} onChange={setCaroulVal} /> */}
      {/* <div className="mSubImages">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}
    </div>
  );
};
