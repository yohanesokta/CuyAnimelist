import Animelist from "@/Components/Animelist"
import Link from "next/link"
import Header from "@/Components/Animelist/Header"
const Page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()


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