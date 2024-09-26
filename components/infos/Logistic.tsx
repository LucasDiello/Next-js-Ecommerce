import React from 'react'

const Logistic = () => {
  return (
    <div className="w-full lg:h-[90vh] flex flex-col justify-center">
    <div className="row1-container">
      <div className="box box-down cyan space-y-5">
        <h2 className='font-bold text-xl'>Checked Products</h2>
        <p>
          Our products are checked and tested before being sent to you.
        </p>
        <img
          src="https://assets.codepen.io/2301174/icon-supervisor.svg"
          alt=""
          className="w-[20px] !m-0 xl:w-[70px]"
        />
      </div>

      <div className="box red space-y-5">
        <h2 className='font-bold text-xl'>Ready for Delivery</h2>
        <p>
          Our warehouses are fully stocked and ready to serve you.
        </p>
        <img
          src="https://assets.codepen.io/2301174/icon-team-builder.svg"
          alt=""
          className="w-[20px] !m-0 xl:w-[70px]"
        />
      </div>

      <div className="box box-down blue space-y-5">
        <h2 className='font-bold text-xl'>Priced Products</h2>
        <p>
          Our products are priced to ensure the best value for your money.
        </p>
        <img
          src="https://assets.codepen.io/2301174/icon-calculator.svg"
          alt=""
          className="w-[20px] !m-0 xl:w-[70px]"
        />
      </div>
    </div>
    <div className="row2-container">
      <div className="box orange space-y-5">
        <h2 className='font-bold text-xl'>Designed</h2>
        <p>
          Our products are designed to meet your needs and desires.
        </p>
        <img
          src="https://assets.codepen.io/2301174/icon-karma.svg"
          alt=""
          className="w-[20px] !m-0 xl:w-[70px]"
        />
      </div>
    </div>
  </div>
  )
}

export default Logistic
