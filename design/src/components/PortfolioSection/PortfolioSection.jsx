import React, {Component} from 'react';
import './PortfolioSection.css'
import LivingRoom from './Images/living-room-with-furnitures-3457299.jpg';
import Kitchen from './Images/kitchen-and-dining-area-1080721.jpg';

function PortfolioSection (){
    return (
        <div class="portfolio-wrapper">
        <div class="portfolio-section">
            <h2 class="portfolio-article">
                Наши работы
            </h2>
            <div class="portfolio">
            <div class="portfolio-jobs">
            <div class="portfolio-job-wrapper">
                        <div class="portfolio-img__wrapper">
                            <img class="portfolio-image" src={LivingRoom}/>
                        </div>
                        <div class="portfolio-description__wrp">
                            <h2 class="square">112 m</h2>
                            <h3 class="porfolio-job-description">
                                Терраса квартира в ЖК newEngland
                            </h3>
                        </div>
                    </div>
                    <div class="portfolio-job-wrapper" id="kitchen">
                        <div class="portfolio-img__wrapper">
                            <img class="portfolio-image" src={Kitchen}/>
                        </div>
                        <div class="portfolio-description__wrp">
                            <h2 class="square">32 m</h2>
                            <h3 class="porfolio-job-description">
                                Стильная кухня в ЖК Таджикибуд
                            </h3>
                        </div>
                    </div>
            </div>
            </div>
            <button class="btn "> Все работы </button>
        </div>
        </div>
    )
}

export default PortfolioSection;