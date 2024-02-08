
import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import { redirect } from 'next/navigation'
import Link from "next/link"

const Page = async () => {
    const user = await authUserSession()
    return (<div className="mt-8 flex flex-col justify-center items-center">
        <Image src={user?.image} width="150" height="150" className="rounded-full" />
        <h1 className="text-xl font-bold my-5">{`Hay 👋 ${user?.name}`}</h1>
        <div className="py-8">
            <Link href="/users/dashboard/collection" className="bg-main-primary py-4 px-3 text-main-white transition-all hover:opacity-80" > My Collection</Link>
        </div>
        <div className="py-8">
            <Link href="/users/dashboard/comments" className="bg-main-primary py-4 px-3 text-main-white transition-all hover:opacity-80" > My Comment</Link>
        </div>
    </div>) 
}
export default Page