const Pagination = ({ page, lastPage, setPage }) => {
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }
    const handleNextPage = () => {
        if (page < lastPage) {
            setPage((prev) => prev + 1)
            scrollTop()
        }
    }
    const handlePrevPage = () => {
        if (page > 1) {
            setPage((prev) => prev - 1)
            scrollTop()
        }
    }

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-10 text-xl text-main-primary">
            <button className={`transition-all hover:text-main-scondary ${(page == 1) ? "opacity-20" : ""}`} onClick={handlePrevPage}>Prev</button>
            <p>{`${page} of ${lastPage}`}</p>
            <button className={`transition-all hover:text-main-scondary ${(page == lastPage) ? "opacity-20" : ""}`} onClick={handleNextPage}>Next</button>
        </div>
    )
}
export default Pagination
