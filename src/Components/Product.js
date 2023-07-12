import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import {useDispatch} from 'react-redux';
import {add} from '../store/cartSlice'

export default function Product() {

    const dispatch = useDispatch()

    const [products, setProducts] = useState("")

    useEffect(() => {
        const fetchProduct = async () => {
            const productResponse = await fetch('https://fakestoreapi.com/products')
            const productsData = await productResponse.json()
            setProducts(productsData)
        }

        fetchProduct()
    }, [])

    const addToCard = (productList) => {
        // dispatch an add action 
        dispatch(add(productList))
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl pb-9 font-bold tracking-tight text-gray-900">All Products</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products && products?.map((productList, i) => (
                        <div key={i} className="group shadow-xl shadow-cyan-100/50 rounded-2xl flex flex-col justify-around">
                            <div className=" overflow-hidden rounded-md group-hover:opacity-75 lg:h-80">
                                <img
                                    src={productList?.image}
                                    alt={productList?.category}
                                    className="h-full w-11/12 lg:h-full lg:w-11/12 m-auto"
                                />
                            </div>
                            <div className="mt-4 px-2">
                                <div>
                                    <h3 className="text-md font-bold text-gray-700 text-start pb-2">
                                        <a href="#">
                                            <span aria-hidden="true" className="" />
                                            {productList?.title}
                                        </a>
                                    </h3>
                                    <p className="text-sm font-medium text-gray-900 text-start"><span className='text-md font-bold '>Price:</span> {"$" + productList?.price}</p>
                                </div>
                                <div className='text-start hidden'>
                                    <p className="mt-1 text-sm text-gray-500">{productList?.description.slice(0, 150) + " "}
                                        <a href="#" className="text-sm font-semibold text-blue-400 py-2 ">
                                            Read More <span aria-hidden="true">→</span>
                                        </a>
                                    </p>
                                </div>
                                <div className='py-4 '>
                                    <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => addToCard(productList)}>
                                        Add To Card
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* footer section  */}
            <Footer />
        </div>

    )
}
