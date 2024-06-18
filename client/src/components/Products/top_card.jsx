import React from 'react'

function Top_card() {
  return (
    <div>        
    <div className='h-[46vh] w-[18vw] bg-white m-auto mt-4 shadow-2xl rounded-3xl overflow-hidden flex flex-col gap-2'>
      <img className=' object-cover h-[22vh] w-full mx-auto' src="images/products/milk-3.jpeg"></img>
      <h1 className="text-[25px] mx-6 font-semibold"> COW MILK</h1>
      <h1 className="text-[22px] mx-6 font-semibold"> Rs 60.00</h1>
      <h1 className="text-[15px] mx-6 font-semibold line-through"> Rs 100.00</h1>
      <div className="flex mx-6 items-center">
        {Array.from({ length: 5 }).map((_, starIndex) => (
          <svg
            key={starIndex}
            className={`h-6 w-6 ${starIndex < 4 ? 'text-yellow-500' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </div>
      <button className="h-[4vh] w-[8.5vw] text-[18px] font-extrabold rounded-xl bg-blue-400 m-auto transition-all ease-in-out hover:text-white hover:bg-blue-500">Add to cart</button>

    </div>
    </div>
  )
}

export default Top_card
