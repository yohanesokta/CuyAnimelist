import Link from "next/link"
import InputSearch from "./InputSearch"
import AuthButton from "./AuthButton"
const Navbar = () => {
    return (
        <div className="bg-main-primary">
            <div className="flex md:flex-row flex-col gap-2 justify-between md:items-center p-4 ">
                <Link href={'/'} className="font-bold text-main-white text-2xl"><span className="text-red-500">Cuy</span>Animelist</Link>
                <InputSearch />
                <AuthButton />
            </div>
        </div>
    )
}

export default Navbar