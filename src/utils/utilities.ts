export function isValidNumber(input: string): boolean {
    const regex = /^\d+(\.\d{1,2})?$/;
    return regex.test(input);
}

export function hasTrailingDecimal(input: string): boolean {
    const regex = /^\d+(\.)?$/;
    return regex.test(input);
}

export function isWholeNumber(input: string): boolean {
    const regex = /^\d+$/;
    return regex.test(input);
}