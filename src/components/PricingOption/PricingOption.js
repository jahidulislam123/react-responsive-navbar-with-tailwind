import { ArrowRightIcon, ChartPieIcon, CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefits from '../Benefits/Benefits';

const PricingOption = (props) => {
    const { name, price, benefits } = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 p-2 rounded text-xl font-bold'>{name}</h2>

            <span className='text-5xl font-bold'>{price}</span>
            <span className='text-xl font-bold text-gray-500'>/mo</span>
            <div >
                <h3 className='text-xl text-left' >Benefits:</h3>
                {
                    benefits.map(benefit => <Benefits
                        benefit={benefit}
                    ></Benefits>)
                }

            </div>
            <button className='bg-green-500 flex justify-center w-full py-2 rounded mt-6 text-white hover:text-green-700 font-bold'>Buy Now
                <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PricingOption;