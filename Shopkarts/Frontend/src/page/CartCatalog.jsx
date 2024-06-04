import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';

const CartCatalog = () => {
  const { Cart } = useSelector((states) => states);

  return (
    <div>
      <div className=' h-screen   '>
        <div className=' lg:flex  lg:justify-evenly  lg:items-center  sm:grid-cols-2'>
          <div className='  w-[500px] bg-white'>
            {/* card side componensts */}

            {
              Cart && Cart.length > 0 ? (
                <>

                </>
              ) : (
                <>
                  <div>
                    <div className='  text-center  p-4 lg:flex  
                    lg:justify-evenly lg:items-center h-screen 
                    sm:blocks  mr-[6px]'>
                      <h1 className=' lg:text-2xl  sm:text-2xl  font-extralight '>
                        Cart is Empty<span className=' size-96'>😔</span>Add Something
                      </h1>
                      <NavLink to="/">
                        <div className=' lg:w-[200px] rounded-lg m-auto cursor-pointer 
                        transition-all duration-100 hover:bg-slate-300
                        bg-green-400 outline p-3'>

                          <button className=' '>Shop Now</button>
                        </div>
                      </NavLink>
                    </div> 
                  </div>

                </>
              )
            }
          </div>


        </div>

      </div>
    </div>
  )
}

export default CartCatalog