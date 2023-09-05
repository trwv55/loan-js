export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        this.oldItems = this.oldOfficer.querySelectorAll(items);
        this.newItems = this.newOfficer.querySelectorAll(items);
        this.oldCounter = 0;
        this.newCounter = 0;
    }

    bindTriggers(container, items, counter) {
        container.querySelector('.plus').addEventListener('click', () => {
            if (counter !== items.length - 2) {
                items[counter].style.display = 'flex';
                counter++;
            } else {
                items[counter].style.display = 'flex';
                items[items.length - 1].remove();
            }
        });
    }

    hideItems() {
        for (let i = 0; i < this.oldItems.length; i++) {
            const item = this.oldItems[i];
            if (i !== this.oldItems.length - 1) {
                item.style.display = 'none';
            }
        }

        for (let i = 0; i < this.newItems.length; i++) {
            const item = this.newItems[i];
            if (i !== this.newItems.length - 1) {
                item.style.display = 'none';
            }
        }
    }

    init() {
        this.hideItems();

        this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
        this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
    }
}
