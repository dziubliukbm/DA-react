import React, {Component} from 'react';
import PriceServices from '../components/PriceServices/PriceServices'
import ImageSetion from '../components/ImageSection/ImageSection'
import ImageSection from '../components/ImageSection/ImageSection';
import Form from '../components/Form/Form'

function ServicesAndPrices () {
    return (
        <>
        <ImageSection/>
        <PriceServices/>
        <Form/>
        </>
    )
}

export default ServicesAndPrices ;