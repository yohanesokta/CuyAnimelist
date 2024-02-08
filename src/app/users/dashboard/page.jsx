
import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import { redirect } from 'next/navigation'
const REHOMEPAGE = () =>{
    redirect('/')
}

const Page = async () => {
    const user = await authUserSession()
    return user ?
    (<>
        <Image src={user?.image} width="250" height="250" className="rounded-full" />
        <h1>{`Github :  ${user?.name}`}</h1>
    </>) : REHOMEPAGE()
}
export default Page