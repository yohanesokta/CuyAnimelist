import Link from "next/link"
const Navbar = () => {
    return (
        <div className="bg-indigo-500">
            <div className="flex md:flex-row flex-col gap-2 justify-between p-4">
                <Link href={'/'} className="font-bold text-white text-2xl">CuyAnimelist</Link>
                <input type="text" placeholder="cari anime.." className="p-2" />
            </div>
        </div>
    )
}
export default Navbar