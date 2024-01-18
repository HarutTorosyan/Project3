import React from 'react';
import AgencySlider from './components/agencySlider';

export default function Agency() {
  return (
    <div className='px-5 max-lg:mt-5 2xl:px-0 max-w-screen-2xl mx-auto'>
        <div className='bg-blackimg bg-center rounded-3xl'>
            <div className='py-28 px-5 xl:py-40'>
                <AgencySlider />
            </div>
        </div>
    </div>
  )
}
