import React from "react"
import Card from "../Card"

const Center = ({valueRange}) => {
    return (
        <div className="flex-[5] ">
            <h1 className="text-[20px] font-bold">Успейте купить!</h1>
            <p className="text-[15px] opacity-50">
                В подборке 345 товаров из категорий{" "}
            </p>
            <div className="flex justify-between items-center gap-[2px] py-[15px]">
                <p className="p-[5px_10px] bg-gray-200 rounded-[8px] text-[14px] opacity-80 cursor-pointer">
                    Макияж
                </p>
                <p className="p-[5px_10px] bg-gray-200 rounded-[8px] text-[14px] opacity-80 cursor-pointer">
                    Женские аксессуары
                </p>
                <p className="p-[5px_10px] bg-gray-200 rounded-[8px] text-[14px] opacity-80 cursor-pointer">
                    Женская одежда
                </p>
                <p className="p-[5px_10px] bg-gray-200 rounded-[8px] text-[14px] opacity-80 cursor-pointer">
                    Смартфоны и телефоны
                </p>
                <p className="p-[5px_10px] bg-gray-200 rounded-[8px] text-[14px] opacity-80 cursor-pointer">
                    Макияж глаз
                </p>
                <p className="p-[5px_10px] bg-gray-200 rounded-[8px] text-[14px] opacity-80 cursor-pointer">
                    Парфюмерия
                </p>
                <p className="p-[5px_10px] bg-gray-200 rounded-[8px] text-[14px] opacity-80 cursor-pointer">
                    Аксессуары и запчасти
                </p>
            </div>

            <Card valueRange={valueRange} />
        </div>
    )
}

export default Center
