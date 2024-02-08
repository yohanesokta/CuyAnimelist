import VideoPlayer from "@/Components/Utils/VideoPlayer"
import { getAnimeResponse } from "@/libs/api-libs"
import Image from "next/image"

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)

    return (<>
        <div className="pt-4 px-4">
            <h1 className="text-2xl font-bold  text-main-primary ">{anime.data.title} - {anime.data.year} </h1>
        </div>
        <div className="pt-4 px-4 flex gap-2 text-main-primary overflow-x-auto">
            <div className="w-36 flex flex-col justify-center items-center rounded border border-main-primary p-2">
                <h3>PERINGKAT</h3>
                <p>{anime.data.rank}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-main-primary p-2">
                <h3>SCORE</h3>
                <p>{anime.data.score}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-main-primary p-2">
                <h3>ANGGOTA</h3>
                <p>{anime.data.members}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-main-primary p-2">
                <h3>EPISODE</h3>
                <p>{anime.data.episodes}</p>
            </div>
        </div>
        <div className="pt-4 flex gap-2 sm:flex-nowrap flex-wrap text-main-primary">
            <Image src={anime.data.images.webp.image_url}
                alt={anime.data.images.jpg.image_url}
                width={250}
                height={250}
                className="w-full md:p-0 p-4 rounded-lg object-cover"
            >
            </Image>
            <p className="text-justify text-xl md:p-0 p-4">{anime.data.synopsis}</p>
        </div>
        <div className="">
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
        </div>
    </>)
}



export default Page