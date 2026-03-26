const fs = require('fs');

// We evaluate app.js in the global scope to access its functions
const appCode = fs.readFileSync('./app.js', 'utf8');

// Mock browser globals before evaluation
global.document = {
    addEventListener: () => {},
    getElementById: () => ({ addEventListener: () => {}, innerHTML: '' })
};
global.localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {}
};
global.fetch = () => Promise.resolve({ json: () => Promise.resolve({}) });
global.window = {};

eval(appCode);

describe('getRandomItem', () => {
    test('returns null for empty array', () => {
        expect(getRandomItem([])).toBeNull();
    });

    test('returns null for null or undefined input', () => {
        expect(getRandomItem(null)).toBeNull();
        expect(getRandomItem(undefined)).toBeNull();
    });

    test('returns the single item from an array with length 1', () => {
        expect(getRandomItem(['single'])).toBe('single');
    });

    test('returns an item that is in the array', () => {
        const arr = ['a', 'b', 'c'];
        const result = getRandomItem(arr);
        expect(arr).toContain(result);
    });

    test('distributes selections somewhat uniformly', () => {
        const arr = ['a', 'b', 'c', 'd'];
        const counts = { a: 0, b: 0, c: 0, d: 0 };
        const iterations = 10000;

        for (let i = 0; i < iterations; i++) {
            const item = getRandomItem(arr);
            counts[item]++;
        }

        // With 10000 iterations and 4 items, expected average is 2500 each.
        // It's highly unlikely any count will fall outside 2000 - 3000.
        expect(counts.a).toBeGreaterThan(2000);
        expect(counts.b).toBeGreaterThan(2000);
        expect(counts.c).toBeGreaterThan(2000);
        expect(counts.d).toBeGreaterThan(2000);

        expect(counts.a).toBeLessThan(3000);
        expect(counts.b).toBeLessThan(3000);
        expect(counts.c).toBeLessThan(3000);
        expect(counts.d).toBeLessThan(3000);
    });
});
