/**
 * @property {string} selector
 * @property {NodeList} elements
 */
export class Module {
    constructor() {
        if (this.constructor === Module) {
            throw new Error('Module is abstract. It cannot be instantiated directly');
        }
    }

    initialize() {
        this.elements = document.querySelectorAll(this.selector);

        if (this.elements.length > 0) {
            this.mounted();
        }
    }

    /**
     * Called when there are elements on the page with the given {@link Module.selector}
     * @abstract
     */
    mounted() {

    }
}