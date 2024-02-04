"use client"

import { Lightbulb } from "@phosphor-icons/react"

const Page = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-4">
                <Lightbulb size={38} className="text-main-primary" />
                <h1 className="text-main-primary font-bold text-2xl">Tidak Tersedia</h1>
            </div>
        </div>
    )
}
export default Page