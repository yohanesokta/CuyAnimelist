import Animelist from "@/Components/Animelist"
import Link from "next/link"
import Header from "@/Components/Animelist/Header"
import { getAnimeResponse } from "@/libs/api-libs"
const Page = async ({ params }) => {
    const { keyword } = params
    const searchAnime = await getAnimeResponse("anime", `q=${keyword}`)

    return (<>
        <section>
            <Header title={`Pencarian Untuk ${decodeURI(keyword)}...`} />
            <Animelist api={searchAnime} />
        </section>
    </>
    );
}
export default Page