import { Module } from '../core/module'

export class TabBlock extends Module {
  static selector = '.js-tab-block'
  activeTabClass = 'active-tab'
  activeContentClass = 'active-content'
  /** @type {Element[]} */
  tabs = []
  /** @type {Element[]} */
  tabContents = []

  mounted () {
    this.tabs = [...this.element.querySelectorAll('.js-tab-block-tab')]
    this.tabContents = [...this.element.querySelectorAll('.js-tab-block-content')]

    for (let index = 0; index < this.tabs.length; index++) {
      this.tabs[index].addEventListener('click', () => {
        this.removeActive()
        this.addActive(index)
      })
    }
  }

  removeActive () {
    for (const tab of this.tabs) {
      tab.classList.remove(this.activeTabClass)
    }

    for (const content of this.tabContents) {
      content.classList.remove(this.activeContentClass)
    }
  }

  addActive (index) {
    const tab = this.tabs[index]
    const content = this.tabContents[index]

    if (tab) {
      tab.classList.add(this.activeTabClass)
    }

    if (content) {
      content.classList.add(this.activeContentClass)
    }
  }
}
