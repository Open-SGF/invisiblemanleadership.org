import '../scss/main.scss'

import { moduleFactories } from './modules'
import { ModuleBuilder } from './core/module'

const moduleBuilder = new ModuleBuilder(moduleFactories)

moduleBuilder.build()
