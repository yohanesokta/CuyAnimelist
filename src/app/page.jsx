import Animelist from "@/Components/Animelist"
import Header from "@/Components/Animelist/Header"
import { getAnimeResponse, getNestedAnimeResponse, reproduse } from "@/libs/api-libs"
const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recAnim = await getNestedAnimeResponse("recommendations/anime", 'entry')
  return (<>
    <section>
      <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
      <Animelist api={topAnime} />
    </section>
    <section>
      <Header title="Rekomendasi" />
      <Animelist api={reproduse(recAnim, 8)} />
    </section>
  </>
  );
}
export default Page