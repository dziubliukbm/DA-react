import React, {Component} from 'react';
import './ProjectList.css';

function ProjectsList () {
    return (
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
    )
}

export default ProjectsList;