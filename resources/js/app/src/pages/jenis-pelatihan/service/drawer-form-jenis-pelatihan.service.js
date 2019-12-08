import { observable, computed, action, decorate, toJS } from "mobx"

export default class DrawerFormJenisPelatihanService {

    constructor() {
        this.open = false
        this.data = {}
    }

    get isOpen() {
        return this.open
    }

    get getData() {
        return toJS(this.data)
    }

    openDrawer(data) {
        this.data = data
        this.open = true
    }

    closeDrawer() {
        this.data = { isUpdate: false, data: { jenis_pelatihan: '' }}
        this.open = false
    }
    

}

decorate(DrawerFormJenisPelatihanService, {
    data: observable,
    open: observable,
    isOpen: computed,
    getData: computed,
    openDrawer: action,
    closeDrawer: action
})