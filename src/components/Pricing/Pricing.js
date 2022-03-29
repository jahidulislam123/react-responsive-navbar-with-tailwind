import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    // data banacci 
    const pricingOption = [
        {
            id: 1, name: "Free", price: 0, benefits: [
                'lifetime free',
                'unlimited deals',
                'localized deals',
                'fantastics deals',
                'crazy deals'
            ]
        },
        {
            id: 2, name: "regular", price: 33, benefits: [
                'everything on  free',
                'unlimited deals',
                'localized deals',
                'fantastics deals',
                'crazy deals'
            ]
        },
        {
            id: 3, name: "premium", price: 55, benefits: [
                'evething on regular ',
                'unlimited deals',
                'localized deals',
                'fantastics deals',
                'crazy deals'
            ]
        },
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8' >
            <h1 className='text-6xl font-sans text-white'>Best deals of the town</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque libero ullam illum autem minus? Impedit, quisquam neque. Omnis, amet sunt!</p>
            <div className='grid md:grid-cols-3 gap-3 mt-4' >

                {
                    pricingOption.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;