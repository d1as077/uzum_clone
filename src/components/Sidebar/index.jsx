import React, {useRef, useState} from "react"

const Sidebar = ({valueRange, handleChange}) => {
    return (
        <div className="flex-[1.4] flex flex-col gap-[15px] pr-[20px] sticky top-0 left-0 h-[100vh]">
            <h1 className="font-medium text-[18px] opacity-80">Категории</h1>
            <ul className="flex flex-col">
                <li className="text-[15px] cursor-pointer font-normal opacity-60 p-[5px_10px] hover:bg-[#d0d3d9] w-fit rounded-md">
                    Автотовары
                </li>
                <li className="text-[15px] cursor-pointer font-normal opacity-60 p-[5px_10px] hover:bg-[#d0d3d9] w-fit rounded-md">
                    Аксессуары
                </li>
                <li className="text-[15px] cursor-pointer font-normal opacity-60 p-[5px_10px] hover:bg-[#d0d3d9] w-fit rounded-md">
                    Бытовая техника
                </li>
                <li className="text-[15px] cursor-pointer font-normal opacity-60 p-[5px_10px] hover:bg-[#d0d3d9] w-fit rounded-md">
                    Дача, сад и огород
                </li>
                <li className="text-[15px] cursor-pointer font-normal opacity-60 p-[5px_10px] hover:bg-[#d0d3d9] w-fit rounded-md">
                    Детские товары
                </li>
                <li className="text-[15px] cursor-pointer font-normal opacity-60 p-[5px_10px] hover:bg-[#d0d3d9] w-fit rounded-md">
                    Здоровье
                </li>
                <li className="text-[15px] cursor-pointer font-normal opacity-60 p-[5px_10px] hover:bg-[#d0d3d9] w-fit rounded-md">
                    Канцтовары
                </li>
                <li className="text-[15px] cursor-pointer font-normal opacity-60 p-[5px_10px] hover:bg-[#d0d3d9] w-fit rounded-md">
                    Книги
                </li>
                <li className="text-[15px] cursor-pointer font-normal opacity-60 p-[5px_10px] hover:bg-[#d0d3d9] w-fit rounded-md">
                    Красота и уход
                </li>
            </ul>

            <h1 className="font-medium text-[18px] opacity-80">Цена, сум</h1>

            <div className="grid grid-cols-2 gap-[10px]">
                <div className="border border-[rgba(54,54,64,0.2)] p-[5px_10px] rounded-md">
                    <p className="opacity-60">от 0</p>
                </div>

                <div className="border border-[rgba(54,54,64,0.2)] p-[5px_10px] rounded-md">
                    <p className="opacity-60">до {valueRange}</p>
                </div>
            </div>

            <input
                onChange={(e) => handleChange(e)}
                id="price-range"
                type="range"
                value={valueRange}
                min={100000}
                max={7000000}
                className="w-full h-[3px] bg-[#7000ff] rounded-lg appearance-none cursor-pointer"
                aria-label="Price range slider"
            />

            <h1 className="font-medium text-[18px] opacity-80">Цвет</h1>
            <div className="flex flex-col gap-[10px]">
                <div className="flex justify-start items-center gap-[10px] cursor-pointer">
                    <div className="h-[25px] w-[25px] rounded-full bg-[#7a5953]"></div>
                    <p className="text-[15px] font-medium opacity-80">
                        Коричневый
                    </p>
                </div>

                <div className="flex justify-start items-center gap-[10px] cursor-pointer">
                    <div className="h-[25px] w-[25px] rounded-full bg-[red]"></div>
                    <p className="text-[15px] font-medium opacity-80">
                        Красный
                    </p>
                </div>

                <div className="flex justify-start items-center gap-[10px] cursor-pointer">
                    <div className="h-[25px] w-[25px] rounded-full bg-violet-900"></div>
                    <p className="text-[15px] font-medium opacity-80">
                        Фиолетовый
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
