
import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';


/**
 * A plugin for the Gruvbox
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'Gruvbox:plugin',
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
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
