import { useState } from "react";
import {HiChevronLeft, HiChevronRight} from "react-icons/hi"

const Pagination = ({page, setPage, totalPages}) => {
        const [currentPage, setCurrentPage] = useState(page);


        const handle = (e) => {
                if (e.key == "Enter" ) 
                        setPage(currentPage)
        }

        const previousPage = () => {
                if (currentPage > 1) {
                        setPage(page - 1);
                        setCurrentPage(currentPage - 1);
                }
        }

        const nextPage = () => {
                if (currentPage < totalPages) {
                        setPage(parseInt(page) + 1);
                        setCurrentPage(parseInt(currentPage) + 1);
                }
        }

        return (
                <section className=" flex justify-center items-center  space-x-2">
                        <div onClick={previousPage} className=" text-main-accent font-bold text-lg left-arrow w-10 h-10 bg-main-secondary rounded-md grid place-items-center shadow-gray shadow-lg cursor-pointer">
                                <HiChevronLeft />
                        </div>
                        <div className=" cursor-pointer pagination w-12 h-12 bg-main-secondary rounded-md overflow-hidden grid place-items-center shadow-gray shadow-lg">
                                <input className=" font-medium text-sm text-center border-none outline-none w-full h-full bg-main-secondary text-white" type="text" value={currentPage} onKeyDown={(e) => handle(e)} onChange={(e) => setCurrentPage(e.target.value)} />
                        </div>
                        <div onClick={nextPage} className=" text-main-accent font-bold text-lg cursor-pointer right-arrow  w-10 h-10 bg-main-secondary rounded-md grid place-items-center shadow-gray shadow-lg">
                                <HiChevronRight />
                        </div>
                </section>
        );
}

export default Pagination