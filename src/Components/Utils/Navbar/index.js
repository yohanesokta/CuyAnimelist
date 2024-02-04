import Link from "next/link"
import InputSearch from "./InputSearch"
const Navbar = () => {
    return (
        <div className="bg-indigo-500">
            <div className="flex md:flex-row flex-col gap-2 justify-between p-4">
                <Link href={'/'} className="font-bold text-white text-2xl">CuyAnimelist</Link>
                <InputSearch />
            </div>
        </div>
    )
}
export default Navbar