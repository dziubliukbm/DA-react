import React, {Component} from 'react';
import Image_section from '../components/ImageSection/ImageSection';
import AboutUs from '../components/AboutUs/AboutUs';
import PortfolioSection from '../components/PortfolioSection/PortfolioSection';
import QuotationSection from '../components/QuotationSecction/QuotationSection';
import Form from '../components/Form/Form'
import Contacts from '../components/Contacts/Contacts';

function MainPage () {
    return (
        <>
<Image_section/>
<div id='WhoWe'>
<AboutUs/>
</div>
<PortfolioSection/>
<QuotationSection/>
<Form/>
<div id='Contacts'>
<Contacts/>
</div>
</>
    )
}

export default MainPage;