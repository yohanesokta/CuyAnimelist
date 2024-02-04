import Animelist from "@/Components/Animelist"
import Link from "next/link"
import Header from "@/Components/Animelist/Header"
const Page = async ({ params }) => {
    const { keyword } = params
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
    const searchAnime = await response.json()


    return (<>
        <section>
            <Header title={`Pencarian Untuk ${decodeURI(keyword)}...`} />
            <Animelist api={searchAnime} />
        </section>
    </>
    );
}
export default Page