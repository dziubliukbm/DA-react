import React, {Component} from 'react';
import ImageProjectsSection from '../components/ImageProjectsSection /ImageProjectsSection'
import ImageGallery from '../components/Slider/Slider'
import Form from '../components/Form/Form';
import SliderKitchen from '../components/SliderKirchen/Slider';
import SLiderLivingRoom from '../components/SliderLivingRoom/Slider';
import '../components/ProjectsList/ProjectList.css'
function Portfolio () {
    return (
    <>
  <>
        <div className="projects-variety">
        <ul className="projects-list">
            <li className="projects-list__item"><a href="#">  Все работы</a></li>
            <li className="projects-list__item"><a href="#">Квартиры</a></li>
            <li className="projects-list__item"><a href="#">Кухни</a></li>
            <li className="projects-list__item"><a href="#">Спальни</a></li>
            <li className="projects-list__item"><a href="#">Детские</a></li>
            <li className="projects-list__item"><a href="#">Санузлы</a></li>
            <li className="projects-list__item"><a href="#">Гостинные</a></li>
            <li className="projects-list__item"><a href="#">Коммерчиские</a></li>
        </ul>
    </div>
    </>
<ImageProjectsSection/>
<ImageGallery/>
<SliderKitchen/>
<SLiderLivingRoom/>
<Form/>
</>
    )
}

export default Portfolio;