import React from "react"
import logo from "../../assets/logo.png"
import icn from "../../assets/icn.png"
import category1 from "../../assets/category1.png"
import category2 from "../../assets/category2.png"
import category3 from "../../assets/category3.png"
import category4 from "../../assets/category4.png"
import category5 from "../../assets/category5.png"
import {CiLocationOn} from "react-icons/ci"
import {IoSearchSharp} from "react-icons/io5"
import {FaRegUser} from "react-icons/fa6"
import {IoMdHeartEmpty} from "react-icons/io"
import {MdOutlineShoppingBag} from "react-icons/md"

const Header = () => {
    return (
        <header>
            {/* top */}
            <nav className="bg-[#f2f4f7] py-[4px] text-[14px]">
                <nav className="container2 flex justify-between items-center">
                    <nav className="flex justify-start items-center gap-[20px]">
                        <nav className="flex  justify-start items-center gap-[3px]">
                            <CiLocationOn />
                            <p className="underline cursor-pointer">Ташкент</p>
                        </nav>

                        <p> Пункты выдачи </p>
                    </nav>

                    <ul className="flex justify-center items-center gap-[15px]">
                        <li className="cursor-pointer text-[#7f4dff]">
                            Стать продавцом
                        </li>
                        <li className="cursor-pointer text-[#7f4dff]">
                            Открыть пункт выдачи
                        </li>
                        <li className="cursor-pointer"> Вопрос-ответ </li>
                        <li className="cursor-pointer"> Мои заказы </li>
                        <li className="cursor-pointer flex justify-center items-center gap-[2px]">
                            <img
                                src="https://vectorflags.s3.amazonaws.com/flags/ru-circle-01.png"
                                className="h-[15px] w-[15px]"
                            />
                            Русский
                        </li>
                    </ul>
                </nav>
            </nav>

            {/* middle */}
            <nav className="py-[10px]">
                <nav className="container2 flex justify-between items-center">
                    <img src={logo} alt="" />

                    <nav className="bg-[#e5e5ff] cursor-pointer text-[#7f4dff] flex justify-center items-center gap-[5px] h-[40px] p-[0px_10px] rounded-[4px]">
                        <img src={icn} alt="" />
                        <p className="font-medium">Каталог</p>
                    </nav>

                    <div className="border border-[#36364033] h-[40px] flex justify-between items-center overflow-hidden w-[500px] gap-[10px] rounded-[4px]">
                        <input
                            type="text"
                            placeholder="Искать в подборке"
                            className="px-[10px] h-full w-full outline-none"
                        />

                        <button className="bg-[#f2f4f7] h-full px-[30px] cursor-pointer">
                            <IoSearchSharp className="text-[#595b66]" />
                        </button>
                    </div>

                    <nav className="flex justify-center items-center gap-[20px]">
                        <nav className="flex font-medium justify-center items-center gap-[10px] cursor-pointer hover:text-[#7f4dff] transition duration-[.2s]">
                            <FaRegUser className="text-[18px]" />
                            <p className="">Войти</p>
                        </nav>

                        <nav className="flex font-medium justify-center items-center gap-[10px] cursor-pointer hover:text-[#7f4dff] transition duration-[.2s]">
                            <IoMdHeartEmpty className="text-[20px]" />
                            <p className="">Избранное</p>
                        </nav>

                        <nav className="flex font-medium justify-center items-center gap-[10px] cursor-pointer hover:text-[#7f4dff] transition duration-[.2s]">
                            <MdOutlineShoppingBag className="text-[20px]" />
                            <p className="">Корзина</p>
                        </nav>
                    </nav>
                </nav>
            </nav>

            {/* bottom */}
            <nav className="py-[10px]">
                <nav className="container2">
                    <ul className="flex justify-between items-center">
                        <li className="flex justify-center items-center gap-[3px] cursor-pointer text-[14px] font-medium">
                            <img
                                src={category1}
                                className="h-[25px] w-[25px]"
                            />
                            <p>Техника дешевле</p>
                        </li>
                        <li className="flex justify-center items-center gap-[3px] cursor-pointer text-[14px] font-medium">
                            <img
                                src={category2}
                                className="h-[25px] w-[25px]"
                            />
                            <p>Зимние образы</p>
                        </li>
                        <li className="flex justify-center items-center gap-[3px] cursor-pointer text-[14px] font-medium">
                            <img
                                src={category3}
                                className="h-[25px] w-[25px]"
                            />
                            <p>Товары недели</p>
                        </li>
                        <li className="flex justify-center items-center gap-[3px] cursor-pointer text-[14px] font-medium">
                            <img
                                src={category4}
                                className="h-[25px] w-[25px]"
                            />
                            <p>Ликвидация</p>
                        </li>
                        <li className="flex justify-center items-center gap-[3px] cursor-pointer text-[14px] font-medium">
                            <img
                                src={category5}
                                className="h-[25px] w-[25px]"
                            />
                            <p>Выгода каждый день</p>
                        </li>
                        <li className=" opacity-50 cursor-pointer"> Электроника </li>
                        <li className=" opacity-50 cursor-pointer"> Бытовая техника </li>
                        <li className=" opacity-50 cursor-pointer"> Одежда </li>
                        <li className=" opacity-50 cursor-pointer"> Обувь </li>
                        <li className=" opacity-50 cursor-pointer"> Ещё </li>
                    </ul>
                </nav>
            </nav>
        </header>
    )
}

export default Header
