import { IThemeManager } from '@jupyterlab/apputils';
/**
 * A plugin for the Gruvbox
 */
const plugin = {
    id: 'Gruvbox:plugin',
    requires: [IThemeManager],
    activate: (app, manager) => {
        manager.register({
            name: 'Gruvbox',
            isLight: true,
            load: () => manager.loadCSS('Gruvbox/index.css'),
            unload: () => Promise.resolve(undefined)
        });
    },
    autoStart: true
};
export default plugin;
