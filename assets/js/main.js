import '../scss/main.scss';

import { moduleFactories } from './modules';

const modules = moduleFactories.map((moduleFactory) => new moduleFactory());

for (const mod of modules) {
    mod.initialize();
}
