export class Module {
  /** @type {string} */
  static selector
  /** @type {Element} */
  element

  constructor () {
    if (this.constructor === Module) {
      throw new Error('Module is abstract. It cannot be instantiated directly')
    }
  }

  /**
   * Called when there are elements on the page with the given {@link Module.selector}
   * @abstract
   */
  mounted () {

  }
}

export class ModuleBuilder {
  /** @type {Module[]} */
  modules = []

  /**
   * @param moduleFactories {(typeof Module)[]}
   */
  constructor (moduleFactories) {
    this.moduleFactories = moduleFactories
  }

  build () {
    for (const Factory of this.moduleFactories) {
      const elements = document.querySelectorAll(Factory.selector)

      for (const element of elements) {
        const mod = new Factory()
        mod.element = element
        this.modules.push(mod)
      }
    }

    for (const mod of this.modules) {
      mod.mounted()
    }
  }
}
