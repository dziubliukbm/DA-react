import React, {Component} from 'react';
import './Footer.css';

function Footer () {
    return (
<footer>
        <div class="footer-wrapper">
            <h2 class="company_name"> Nazva kompanii</h2>
            <ul class="nav_bottom">
                <li class="list-item"><a class="list-item-link" href="#">Кто мы</a></li>
                <li class="list-item"><a class="list-item-link" href="#">Работы</a></li>
                <li class="list-item"><a class="list-item-link" href="#">Услуги и цены</a></li>
                <li class="list-item"><a class="list-item-link" href="#">Контакты</a></li>
            </ul>
            <p class="rights">All Rights Reserved</p>
        </div>
    </footer>
    )
}

export default Footer;