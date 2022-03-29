import React from 'react';
import { ChartPieIcon, CheckCircleIcon } from '@heroicons/react/solid';

const Benefits = (props) => {
    return (
        <div>
            <p className='flex item-center'><CheckCircleIcon className='w-6 h-6 mr-2 text-green-500'></CheckCircleIcon>
                {props.benefit}</p>

        </div>
    );
};

export default Benefits;