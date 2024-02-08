import Image from "next/image"
import Link from "next/link"
import Header from "@/Components/dashboard/Header"
const Page = () => {
    return (<section className="mt-4 w-full">
        <Header title="Halaman Koleksi Saya"/>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" >
            <Link href="" className="relative border-2 border-main-primary">
                <Image src="" width={350} height={350}/>
                <div className=" absolute bottom-0 w-full bg-main-primary text-main-white h-16 flex items-center justify-center">
                    <h5 className="text-xl text-center">Judul Anime : Judul Anime</h5>
                </div>
            </Link>
            <Link href="" className="relative border-2 border-main-primary">
                <Image src="" width={350} height={350}/>
                <div className=" absolute bottom-0 w-full bg-main-primary text-main-white h-16 flex items-center justify-center">
                    <h5 className="text-xl text-center">Judul Anime : Judul Anime</h5>
                </div>
            </Link>
            <Link href="" className="relative border-2 border-main-primary">
                <Image src="" width={350} height={350}/>
                <div className=" absolute bottom-0 w-full bg-main-primary text-main-white h-16 flex items-center justify-center">
                    <h5 className="text-xl text-center">Judul Anime : Judul Anime</h5>
                </div>
            </Link>
            <Link href="" className="relative border-2 border-main-primary">
                <Image src="" width={350} height={350}/>
                <div className=" absolute bottom-0 w-full bg-main-primary text-main-white h-16 flex items-center justify-center">
                    <h5 className="text-xl text-center">Judul Anime : Judul Anime</h5>
                </div>
            </Link>
           
        </div>
    </section>)
}

export default Page