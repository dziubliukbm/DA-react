import React, {Component} from 'react';
import './ImageProjectsSection.css';
import ProjectBtn from '../ProjectBtn/ProjectBtn'

function ImageProjectsSection (){
    return (
        <div class="projects_header_image">
        <div class="projects_style_img">
            <div class="projects_text_wrapper">
                <h1 class="projects_article">Дизайн інтерє'ру </h1>
                <p class="projects_article_text">Від ідеї до реалізації</p>
                <ProjectBtn/>
            </div>
        </div>
    </div>
    )
}

export default ImageProjectsSection;

