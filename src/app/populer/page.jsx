'use client'

import Animelist from '@/Components/Animelist/index'
import Pagination from '@/Components/Utils/Pagination'
import HeaderMenu from '@/Components/Utils/HeaderMenu'
import { getAnimeResponse } from '@/libs/api-libs'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [Page, setPage] = useState(1);
    const [Data, setData] = useState([])


    const FetchData = async () => {
        setData(await getAnimeResponse("top/anime", `page=${Page}`))
    }

    useEffect(() => {
        FetchData()
    }, [Page])
    return (<>
        <HeaderMenu title={`Anime Terpopuler [${Page}]`} />
        <Pagination page={Page} lastPage={Data.pagination?.last_visible_page} setPage={setPage} />
        <Animelist api={Data} />
        <Pagination page={Page} lastPage={Data.pagination?.last_visible_page} setPage={setPage} />
    </>
    )
}

export default Page