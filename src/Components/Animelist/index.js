import Image from "next/image"
import Link from "next/link"
const Animelist = ({ title, images, id }) => {
    return (<>
        <Link href={`/${id}`} className="cursor-pinter">
            <Image src={images} alt="..." width={350} height={350} className="w-full max-h-64 object-cover" />
            <h3 className="font-bold md:text-xl text-md p-4 text-center">{title}</h3>
        </Link>
    </>
    )
}

export default Animelist