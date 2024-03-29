import React from 'react';

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 </p>
                        <p className='py-2 border-b mx-8'>NBLKCBZLSQB</p>
                        <p className='py-2 border-b mx-8'>SJBMJBCZ</p>
                    </div>
                    <button className='bg-primary w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <h2 className='text-2xl font-bold text-center py-8'>Single User PER 6 MONTYHS</h2>
                    <p className='text-center text-4xl font-bold'>$449</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1NLNLZNLnslnr</p>
                        <p className='py-2 border-b mx-8'>SJ JSBKMJSK</p>
                    </div>
                    <button className='bg-neutral text-primary w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    
                    <h2 className='text-2xl font-bold text-center py-8'>trio User</h2>
                    <p className='text-center text-4xl font-bold'>$949</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>5cyuclutd</p>
                        <p className='py-2 border-b mx-8'>bmlfbsdmbfoiugzer</p>
                        <p className='py-2 border-b mx-8'>SenB</p>
                    </div>
                    <button className='bg-primary w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;