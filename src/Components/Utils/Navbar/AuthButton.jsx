import { authUserSession } from "@/libs/auth-libs"
import Link from "next/link"

const AuthButton = async () => {
    const user = await authUserSession()

    const ActionLabel = user ? "Keluar" : "Masuk"
    const ActionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (<div className="text-main-white flex gap-2 justify-between">
        {user ? <Link href="/users/dashboard" className="py-1">Dashboard</Link> : null}
        <Link href={ActionURL} className="bg-main-white text-main-primary py-1 px-12 inline-block">{ActionLabel}</Link>
    </div>)
}

export default AuthButton