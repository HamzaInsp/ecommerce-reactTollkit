import React, { useEffect, useState } from 'react'


export default function Product() {

    const [products, setProducts] = useState("")

    useEffect(() => {
        const fetchProduct = async () => {
            const productResponse = await fetch('https://fakestoreapi.com/products')
            const productsData = await productResponse.json()
            setProducts(productsData)
        }

        fetchProduct()
    }, [])

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl pb-9 font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products && products?.map((productList, i) => (
                        <div key={i} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={productList?.image}
                                    alt={productList?.category}
                                    className="h-full w-full lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4">
                                <div>
                                    <h3 className="text-md font-bold text-gray-700 text-start">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {productList?.category}
                                        </a>
                                    </h3>
                                    <p className="text-sm font-medium text-gray-900 text-start"><span className='text-md font-bold '>Price:</span> {productList?.price}</p>
                                    <div className='text-start'>
                                        <p className="mt-1 text-sm text-gray-500 ">{productList?.description.slice(0, 200) + "..."} </p>
                                        <a href="#" className='text-sm text-blue-400 underline'>Read More</a>
                                    </div>
                                    <button class="flex-start mt-10 bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Add To Card
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
