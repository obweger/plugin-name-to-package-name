import { transform } from './index';

describe('plugin-name-to-package-name', () => {
    test('transforms scope-only plugin names', () => {
        expect(transform('@foo', 'some-plugin')).toBe('@foo/some-plugin');
    });
    test('transforms no-scope plugin names', () => {
        expect(transform('bar', 'some-plugin')).toBe('some-plugin-bar');
    });
    test('transforms scoped plugin names', () => {
        expect(transform('@foo/bar', 'some-plugin')).toBe('@foo/some-plugin-bar');
    });
    test('transforms deeply nested plugin names [theoretical]', () => {
        expect(transform('@foo/bar/baz', 'some-plugin')).toBe('@foo/bar/some-plugin-baz');
    });
    test('keeps absolute directories', () => {
        expect(transform('/foo/bar/baz', 'some-plugin')).toBe('/foo/bar/baz');
    });
});
