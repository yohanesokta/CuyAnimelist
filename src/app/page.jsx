import Animelist from "@/Components/Animelist"
import Link from "next/link"
import Header from "@/Components/Animelist/Header"
import { getAnimeResponse } from "@/app/libs/api-libs"
const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=8")

  return (<>
    <section>
      <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
      <Animelist api={topAnime} />
    </section>
    <section>
      <Header title="Paling Baru" linkTitle="Ikuti Sekarang" linkHref="/new" />
      <Animelist api={topAnime} />
    </section>
  </>
  );
}
export default Page