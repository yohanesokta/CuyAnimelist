'use client'
import { useRouter } from "next/navigation"
import {ArrowSquareLeft} from "@phosphor-icons/react"


const Header = ({title}) =>{
    const router = useRouter()

    const HandleBack = (event) =>{
        event.preventDefault()
        router.back()
    }
return ( <div className="flex justify-between items-center mb-4 mx-4">
    <button onClick={HandleBack} className="text-main-primary text-2xl"><ArrowSquareLeft/></button>
    <h3 className="text-2xl text-main-primary  font-bold">{title}</h3>
</div>)
}
export default Header