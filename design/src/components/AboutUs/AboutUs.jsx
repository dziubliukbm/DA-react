import React, {Component} from 'react';
import './AboutUs.css'
import FoundersImage from './Images/women-1209678_1920.jpg'

function AboutUs () {
    return (
        
        <div class="about-us-section">
            <a name="whoWeAre"></a>
            <div class="image-wrapper">
                <img class="about-us-img" src={FoundersImage} alt="designer_founders"/>
            </div>
            <div class="about-us-text">
            <h2 class="about-us-article">Кто мы </h2>
            <p class="about-us-text-info">Lorem <br/> ipsum dolor sit amet consectetur adipisicing elit. Inventore
                labore, sit animi rem nam ullam quis, nihil soluta natus veniam eveniet tempore! Placeat sequi delectus
                <br/>
                ipsa sapiente, velit necessitatibus labore quasi natus et praesentium quidem, eligendi iusto itaque,
                doloribus ad laboriosam. Distinctio quaerat beatae asperiores pariatur. Mollitia enim quod cupiditate
                accusamus aperiam dolorem natus sit eum! Ea modi ut deleniti quam eius, iste quisquam nemo eum, in
                veritatis odio corporis!</p>
            </div>
            </div> 
    )
}

export default AboutUs;