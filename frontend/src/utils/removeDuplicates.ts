export function removeDuplicates<T>(arr: T[]): T[] {
    // Use Set and the spread operator to remove duplicates
    return [...new Set(arr)];
}
