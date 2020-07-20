import React, {Component} from 'react';
import './Contacts.css';
import Founder from './Image/founder.jpg';
import Facebook from '../Social-Media-SVG-components /Facebook';
import Instagram from '../Social-Media-SVG-components /Instagram';
import Phone from '../Social-Media-SVG-components /Phone';
import Mail from '../Social-Media-SVG-components /Mail';
import Telegram from '../Social-Media-SVG-components /Telegram';

function Contacts () {
    return (
    <div class="contact-wrapper">
        <a name="Contacts"></a>
        <div class="contact-background">
            <div class="contact-background-style">
                <h2 class="contacts-article">Контакты</h2><br/>
                <p class="contacts-text">Будем рады видеть Вас среди наших клиентов!</p>
                <div class="social-media-links">
                    <ul class="social-list__bottom">
    <li class="social-list-item "><a href="#"><Instagram className="social-icons__bottom"/></a></li>
    <li class="social-list-item "><a href="#"><Facebook className="social-icons__bottom"/></a></li>
                        <li class="social-list-item "><Phone className="social-icons__bottom"/><a href="tel:096-416-85-69"></a></li>
                        <li class="social-list-item "><Mail className="social-icons__bottom"/><a href="mailto:bohdan.dz.92@gmail.com"></a></li>
                    </ul>
                </div>
                <div class="founder-card">
                    <img src={Founder} alt="founder" class="founder-image"/>
                    <p class="founder-text">Founder <span class="founder-name">Зоряна Дзюблюк</span></p>
                    <div class="social-media-links">
                        <ul class="social-list__bottom">
                            <li class="social-list-item"><a href="#"><Instagram className="social-icons__bottom"/></a></li>
                            <li class="social-list-item"><a href="#"><Facebook className="social-icons__bottom"/></a></li>
                            <li class="social-list-item"><a href="tel:096-416-85-69"><Phone className="social-icons__bottom"/></a></li>
                            <li class="social-list-item"><a href="https://telegram.me/groupname"><Telegram className="social-icons__bottom"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Contacts;