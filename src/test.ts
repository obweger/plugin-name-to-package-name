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
    test('does not transform plugin names with prefix', () => {
        expect(transform('some-plugin-foo', 'some-plugin')).toBe('some-plugin-foo');
    });
    test('does not transform plugin names with prefix but missing dash', () => {
        expect(transform('some-pluginfoo', 'some-plugin')).toBe('some-plugin-some-pluginfoo');
    });
    test('does not transform plugin names with prefix and scope', () => {
        expect(transform('@foo/some-plugin-bar', 'some-plugin')).toBe('@foo/some-plugin-bar');
    });
    test('does not transform plugin names with prefix and scope but missing dash', () => {
        expect(transform('@foo/some-pluginbar', 'some-plugin')).toBe('@foo/some-plugin-some-pluginbar');
    });
});
