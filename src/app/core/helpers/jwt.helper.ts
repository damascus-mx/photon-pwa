export function convertToObject(token: string): any {
    return JSON.parse(atob(token.split('.')[1]));
}
