import "./Pagination.scss";

interface PaginationProps {
    currentPage?: number;
    totalPages?: number;
    onPageChange: (page: number) => void;
}

export function Pagination({ currentPage = 1, totalPages, onPageChange }: PaginationProps) {
    // Проверяем, что totalPages корректно передан (не null и не undefined)
    if (totalPages == undefined || totalPages <= 0) {
        return null;
    }

    const pageNumbers = [];

    // Генерация списка страниц
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    // Обработка изменения страницы
    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            onPageChange(newPage);
        }
    };

    // Логика вывода только нескольких страниц
    const range = 2; // Количество соседних страниц
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
