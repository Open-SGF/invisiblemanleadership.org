import { Module } from '../core/module';

export class TabBlock extends Module {
    selector = '.js-tab-block';
    activeTabClass = 'active-tab';
    activeContentClass = 'active-content';

    mounted() {
        for (const tabBlock of this.elements) {
            const tabs = tabBlock.querySelectorAll('.js-tab-block-tab');
            const tabContents = tabBlock.querySelectorAll('.js-tab-block-content');

            for (let index = 0; index < tabs.length; index++) {
                tabs[index].addEventListener('click', () => {
                   this.removeActive(tabs, tabContents);
                   this.addActive(tabs[index], tabContents[index]);
                });
            }
        }
    }

    removeActive(tabs, tabContents) {
        for (const tab of tabs) {
            tab.classList.remove(this.activeTabClass);
        }

        for (const content of tabContents) {
            content.classList.remove(this.activeContentClass);
        }
    }

    addActive(tab, content) {
        if(tab) {
            tab.classList.add(this.activeTabClass);
        }

        if(content) {
            content.classList.add(this.activeContentClass);
        }
    }
}



