import isAbsolute from 'is-absolute'

export const transform = (pluginName: string, pluginPrefix: string) => {
    if (isAbsolute(pluginName)) {
        return pluginName
    }
    const parts = pluginName.split('/');
    if (parts.length === 1) {
        if (parts[0].startsWith('@')) {
            return `${parts[0]}/${pluginPrefix}`;
        } else {
            return `${pluginPrefix}-${parts[0]}`;
        }
    } else {
        const last = parts.splice(parts.length - 1, 1);
        return `${parts.join('/')}/${pluginPrefix}-${last}`;
    }
}
