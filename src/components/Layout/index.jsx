import React, {useState} from "react"

import Center from "../Center"
import Header from "../Header"
import Sidebar from "../Sidebar"

const MainLayout = () => {
    const [valueRange, setValueRange] = useState(0)
    

    const handleChange = (e) => {
        setValueRange(e.target.value)
    }
    return (
        <>
            <Header />
            <main className="container2 flex gap-[20px] py-[20px] ">
                <Sidebar valueRange={valueRange} handleChange={handleChange} />
                <Center valueRange={valueRange}/>
            </main>
        </>
    )
}

export default MainLayout
