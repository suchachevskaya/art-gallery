export function toggleItemInList<T>(list: T[], item: T): T[] {
    return list.includes(item)
        ? list.filter(i => i !== item)
        : [item, ...list];
}
