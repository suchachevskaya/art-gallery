export function generateListOfPages(totalPages: number) {
    const pageNumbers = []

    // Генерация списка страниц
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    
    return pageNumbers;
}
