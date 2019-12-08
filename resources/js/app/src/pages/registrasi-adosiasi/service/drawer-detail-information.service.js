import { observable, computed, action, decorate } from "mobx"

export default class DrawerDetailInformationService {

    constructor() {
        this.open = false
        this.data = {}
    }

    get isOpen() {
        return this.open
    }

    openDrawer(data) {
        this.data = data
        this.open = true
    }

    closeDrawer() {
        this.data = {}
        this.open = false
    }
    
}

decorate(DrawerDetailInformationService, {
    data: observable,
    open: observable,
    isOpen: computed,
    openDrawer: action,
    closeDrawer: action
})