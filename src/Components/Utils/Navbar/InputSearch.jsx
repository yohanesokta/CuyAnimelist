"use client"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRef } from "react"
import { useRouter } from "next/navigation"
const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()
    const handleSearch = (event) => {
        event.preventDefault()
        if (searchRef.current.value.length > 0) {
            router.push(`/search/${searchRef.current.value}`)
        }
    }
    const Submit = (e) => {
        e.preventDefault()
    }
    return (<>
        <div className="relative">
            <form action="">
                <input type="text" placeholder="cari anime.." className=" w-full p-2 rounded" ref={searchRef} />
                <button type="submit" onSubmit={Submit} className="absolute top-2 end-2 " onClick={handleSearch}>
                    <MagnifyingGlass size={24} />
                </button>
            </form>
        </div>
    </>)
}
export default InputSearch