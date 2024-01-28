export const addRandomChars = (input: string): string => {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = input + '-';

    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * randomChars.length);
        result += randomChars.charAt(randomIndex);
    }

    return result;
}