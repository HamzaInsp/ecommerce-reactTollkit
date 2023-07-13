import React, { useState } from 'react'
import NavBar from './pages/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

export default function Cart() {
  const dispatch = useDispatch()
  const productItems = useSelector((state) => state.cart)
  const [cartItems, setCartItems] = useState(productItems)

  const removeItem = (id) => {
    let newList = cartItems.filter((cartList) => cartList.id !== id)
    setCartItems(newList)
    dispatch(remove(id))
  }

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <NavBar />
      <h1>Cart</h1>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {cartItems && cartItems?.map((itemList, i) => (
            <div key={i} className="group shadow-xl shadow-cyan-100/50 rounded-2xl flex flex-col justify-around">
              <div className=" overflow-hidden rounded-md group-hover:opacity-75 lg:h-80">
                <img
                  src={itemList?.image}
                  alt={itemList?.category}
                  className="h-full w-11/12 lg:h-full lg:w-11/12 m-auto"
                />
              </div>
              <div className="mt-4 px-2">
                <div>
                  <h3 className="text-md font-bold text-gray-700 text-start pb-2">
                    <a href="#">
                      <span aria-hidden="true" className="" />
                      {itemList?.title}
                    </a>
                  </h3>
                  <p className="text-sm font-medium text-gray-900 text-start">
                    <span className='text-md font-bold '>Price:</span>
                    {"$" + itemList?.price}
                  </p>
                </div>
                <div className='text-start hidden'>
                  <p className="mt-1 text-sm text-gray-500">{itemList?.description.slice(0, 150) + " "}
                    <a href="#" className="text-sm font-semibold text-blue-400 py-2 ">
                      Read More <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </div>
                <div className='py-4 '>
                  <button className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => removeItem(itemList.id)}>
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>

    </div>
  )
}
