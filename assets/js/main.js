import '../scss/main.scss'

import { moduleFactories } from './modules'

const modules = moduleFactories.map((ModuleFactory) => new ModuleFactory())

for (const mod of modules) {
  mod.initialize()
}
