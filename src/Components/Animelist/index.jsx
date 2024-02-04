import Image from "next/image"
import Link from "next/link"

const Animelist = ({ api }) => {
    return (<>
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
            {api.data?.map((anime, i) => {
                return (
                    <Link href={`/${anime.mal_id}`} className="cursor-pinter text-main-dark hover:text-main-accent transition-all" key={i}>
                        <Image src={anime.images.webp.image_url} alt="..." width={350} height={350} className="w-full md:max-h-96 max-h-64 object-cover" />
                        <h3 className="font-bold md:text-xl  text-md p-4 text-center">{anime.title}</h3>
                    </Link>
                )
            })}
        </div>
    </>
    )
}

export default Animelist