import React, {Component} from 'react';
import './Form.css'

function Form () {
    return (
        <div class="form-wrapper">
        <p class="form-article">Заказать дизайн интерьера</p>
        <form action="#" id="contact-form" method="POST">
            <div class="contact-form-wrp">
                <div class="contact-inputs">
                    <input class="contact-input" type="text" name="name" placeholder="Имя" required/>
                    <input class="contact-input" type="email" name="email" placeholder="Ваш e-mail" required/>
                    <input class="contact-input" type="text" name="phone-number" placeholder="телефон"/>
                </div>
                <div class="contact-textarea-wrp">
                    <textarea class="contact-input" name="body" cols="30" rows="10"
                        placeholder="Задайте вопрос"></textarea>
                </div>
            </div>
            <button class="contact-submit" type="submit">Отправить
            </button>
        </form>
    </div>
    )
}

export default Form;