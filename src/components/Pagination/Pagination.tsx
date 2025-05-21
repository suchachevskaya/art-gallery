// import { useState } from "react";
import { generateListOfPages } from "@/utils/generateListOfPages";
import "./Pagination.scss";
import { range } from "./constants";
import React from "react";

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
    const handlePageChange = (event: React.MouseEvent<HTMLButtonElement>) => {
        const newPage = Number(event.currentTarget.dataset.newPage);

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

                data-new-page={currentPage - 1}
                onClick={handlePageChange}
            >
                Prev
            </button>

            {/* Пагинация с динамическим рендером кнопок */}
            {startPage > 1 && (
                <>
                    <button
                        className="pagination-btn"

                        data-new-page={1}
                        onClick={handlePageChange}
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

                    data-new-page={pageNumber}
                    onClick={handlePageChange}
                >
                    {pageNumber}
                </button>
            ))}

            {endPage < totalPages && (
                <>
                    {endPage < totalPages - 1 && <span className="pagination-ellipsis">...</span>}
                    <button
                        className="pagination-btn"

                        data-new-page={totalPages}
                        onClick={handlePageChange}
                    >
                        {totalPages}
                    </button>
                </>
            )}

            <button
                className="pagination-btn"
                disabled={currentPage === totalPages}

                data-new-page={currentPage+1}
                onClick={handlePageChange}
            >
                Next
            </button>
        </div>
    );
}
