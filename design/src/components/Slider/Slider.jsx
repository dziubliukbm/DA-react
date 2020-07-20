import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Slider.css'

class MyComponent extends React.Component {

  render() {

    const images = [
      {
        original: 'https://cdn.pixabay.com/photo/2020/05/12/15/46/iceberg-5163649_1280.jpg',
      },
      {
        original: './components/Slider/women-1209678_1920.jpg',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
      },
    ];

    return (
      <div className="slider-wrapper">
       <div className="slider-block__wrapper">
      <ImageGallery className="slider" items={images} showPlayButton={false} showThumbnails={false} showBullets={true} originalClass='a'
    />
    </div>
   <div className="project-article">
    <h3 className="project-article__name"> Квартира в якомусь ЖК файного типу</h3>
    <h4 className="project-article__square"> 78 m2</h4>
    <p className="project-article__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sunt ex molestias tenetur animi at blanditiis, commodi optio quia possimus odit nostrum! Nisi obcaecati voluptatum quis veniam illo dicta impedit blanditiis.optio quia possimus odit nostrum! Nisi obcaecati voluptatum quis veniam illo dicta impedit blanditiis.  </p>
</div>
    </div>
    );
  }
}

export default MyComponent;

