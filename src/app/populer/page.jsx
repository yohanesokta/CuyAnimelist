'use client'

import Animelist from '@/Components/Animelist/index'
import Pagination from '@/Components/Utils/Pagination'
import HeaderMenu from '@/Components/Utils/HeaderMenu'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [Page, setPage] = useState(1);
    const [Data, setData] = useState([])


    const FetchData = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${Page}`)
        setData(await response.json())
    }

    useEffect(() => {
        FetchData()
    }, [Page])
    return (<>
        <HeaderMenu title={`Anime Terpopuler [${Page}]`} />
        <Animelist api={Data} />
        <Pagination page={Page} lastPage={Data.pagination?.last_visible_page} setPage={setPage} />
    </>
    )
}

export default Page