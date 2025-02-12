import axios from "axios"
import React, {useEffect, useState} from "react"
import {CiHeart} from "react-icons/ci"
import {IoStar} from "react-icons/io5"
import {TbShoppingBagPlus} from "react-icons/tb"

const Card = ({valueRange}) => {
    const [products, setProducts] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        let filteredData = products.filter((value) => {
            return parseInt(value.price) >= +valueRange
        })
        setData(filteredData)
    }, [valueRange, products])

    useEffect(() => {
        axios
					.get('https://67879230c4a42c91610764c8.mockapi.io/user/users')
					.then(data => setProducts(data.data))
    }, [])

    return (
        <div className="grid grid-cols-3 gap-[25px]">
            {(valueRange ? data : products).map((product) => (
                <div
                    key={product.id}
                    className="rounded-lg relative border border-[#7e818c1e]  flex flex-col justify-between overflow-hidden p-[5px]">
                    <CiHeart className="fa-solid fa-heart absolute top-4 right-4 text-2xl cursor-pointer hover:text-red-500" />
                    <div className="flex justify-center items-center ">
                        <img
                            src={product.img}
                            alt={product.title}
                            className="h-full w-full rounded-xl mb-2 cursor-pointer self-center object-contain"
                        />
                    </div>

                    <div className="mt-4 px-[15px]">
                        <div className="mb-6 leading-6">
                            <p className="font-medium text-[14px]">
                                {product.title}
                            </p>
                            <div className="flex items-center">
                                <IoStar className="fa-solid fa-star text-yellow-400 text-sm" />
                                <small className="ml-1 text-[#7e818c]">
                                    {product.rate} ({product.reviews} sharhlar)
                                </small>
                            </div>
                            <small className="bg-[rgb(255,255,0)] p-[3px] rounded-md text-[12px] font-medium self-start w-fit">
                                {product.monthlyPayment
                                    .toLocaleString("")
                                    .replace(/,/g, " ")}{" "}
                                so'm/oyiga
                            </small>
                        </div>

                        <div className="flex justify-between items-end">
                            <div className="flex flex-col items-start">
                                <small className="line-through text-[#7e818c]">
                                    {product.prevPrice
                                        .toLocaleString("")
                                        .replace(/,/g, " ")}
                                </small>
                                <p className="text-lg font-medium">
                                    {product.price
                                        .toLocaleString("")
                                        .replace(/,/g, " ")}{" "}
                                    UZS
                                </p>
                            </div>
                            <div className="p-2 border border-[#7e818c] rounded-full cursor-pointer hover:bg-gray-300">
                                <TbShoppingBagPlus className="fa-solid fa-cart-plus opacity-80" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card
