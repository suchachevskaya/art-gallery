// import { useState } from "react";
import { generateListOfPages } from "@/utils/generateListOfPages";
import "./Pagination.scss";
import { range } from "./constants";

type PaginationProps = {
    onPageChange: (page: number) => void;
    currentPage: number;
    totalPages?: number;
}

export function Pagination({ currentPage = 1, totalPages, onPageChange }: PaginationProps) {

    if (!totalPages) {
        totalPages = 0
    }

    const pageNumbers = generateListOfPages(totalPages);

    // Обработка изменения страницы
    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            onPageChange(newPage);
        }
    };

    // Логика вывода только нескольких страниц
    const startPage = Math.max(1, currentPage - range);
    const endPage = Math.min(totalPages, currentPage + range);

    return (
        <div className="pagination">
            <button
                className="pagination-btn"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
            >
                Prev
            </button>

            {/* Пагинация с динамическим рендером кнопок */}
            {startPage > 1 && (
                <>
                    <button
                        className="pagination-btn"
                        onClick={() => handlePageChange(1)}
                    >
                        1
                    </button>
                    {startPage > 2 && <span className="pagination-ellipsis">...</span>}
                </>
            )}

            {pageNumbers.slice(startPage - 1, endPage).map((pageNumber) => (
                <button
                    key={pageNumber}
                    className={`pagination-btn ${currentPage === pageNumber ? 'active' : ''}`}
                    onClick={() => handlePageChange(pageNumber)}
                >
                    {pageNumber}
                </button>
            ))}

            {endPage < totalPages && (
                <>
                    {endPage < totalPages - 1 && <span className="pagination-ellipsis">...</span>}
                    <button
                        className="pagination-btn"
                        onClick={() => handlePageChange(totalPages)}
                    >
                        {totalPages}
                    </button>
                </>
            )}

            <button
                className="pagination-btn"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
}
