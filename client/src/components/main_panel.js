import React from 'react';
import chat from '../images/locker-dynamic-clay.png';
import av1 from '..//images/AVATARZ 1.png';
import av2 from '..//images/AVATARZ 2.png';
import av3 from '..//images/AVATARZ 3.png';
import av4 from '..//images/AVATARZ 4.png';
import av5 from '..//images/AVATARZ 5.png';

const MainPanel = () => {
    return (
<>
    {/* First row */}
    <div className="grid sm:pt-10 lg:grid-cols-2">
        <div className="">
            <img className="object-cover" src={chat} />
        </div>
        
        <div className="mx-auto pt-10 md:pl-20">
            <div className='text-right'>
                <div className='inline-block text-left'>
                    <h1 className='text-4xl font-bold text-gray-100'>Canada has stated that all New light-duty cars and passenger trucks are to be zero-emission by</h1>
                    <h1 className='text-4xl font-bold text-green-300'>2035</h1>
                    <h1 className='text-xl italic text-gray-500'><a href="https://www.nrcan.gc.ca/energy-efficiency/transportation-alternative-fuels/zero-emission-vehicle-infrastructure-program/21876">Government of Canada</a></h1>
                </div>
            </div>
        </div>
    </div>

    {/* Second row */}
    <div className="grid sm:p-10 pb-20 lg:grid-cols-2"> 
        <div className="mx-auto pt-20 md:pl-20">
            <div className='text-right'>
                <div className='inline-block text-left'>
                    <h1 className='text-4xl font-bold text-gray-100'>Currently, the number of <span className='text-purple-300'>Gas</span> stations far out weighs the number of <span className='text-green-300'>Electric charging</span> stations in Canada</h1>
                </div>
            </div>
        </div>

        <div className="mx-auto pt-20 md:pl-20">
            <h1> 
                <span className='text-8xl text-purple-300 font-thin'>11405</span> 
                <span className='text-gray-100'> vs </span> 
                <span className='text-4xl text-green-300 font-thin'>6687</span>
            </h1>
        </div>
    </div>
</>
    )
}
export default MainPanel;