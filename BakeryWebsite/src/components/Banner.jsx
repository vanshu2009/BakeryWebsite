import React from 'react'

const Banner = () => {
  return (
    <div className='section-container bg-container-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
    <div className='py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
    {/* images */}
    <div className='md:w-1/2'>
      <img src='../../public/images/home/banner1.png' alt=''/>
      <div className='flex flex-col  md:flex-row items-center justify-around -mt-14 gap-4'>
      <div className='flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
        <img src='../../public/images/home/blueberry.jpg' className='rounded-2xl' alt=''/>
        <div className='space-y-1'>
          <h5>Blueberry Cake</h5>
          <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                    
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    defaultChecked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                </div>
                <p className='text-red'>$5.00</p>
        </div>
      </div>
      <div className='sm:flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
        <img src='../../public/images/home/cupcake.jpg' className='rounded-2xl' alt=''/>
        <div className='space-y-1'>
          <h5>Blueberry Cake</h5>
          <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                    
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    defaultChecked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                </div>
                <p className='text-red'>$5.00</p>
        </div>
      </div>
      </div>
    </div>
    {/* tests */}
    <div className='md:w-1/2 space-y-7 px-4'>
        <h2 className="md:text-5xl text-4xl font-bold ms:leading-snug leading-snug text-black">
          Baked with <span className="text-pink "> Love</span>,
          Served with a <span className="text-pink">Smile</span>
          </h2>
          <p className="text-xl text-[#4A4A4A]">
          Where Every Loaf Tells a Tale of Artistry and Passionate Baking
          </p>
          <button className=" bg-pink px-8 py-3 font-semibold text-white rounded-full">
            Order Now
          </button>
    </div>
    
    </div>
      
    </div>
  )
}

export default Banner
