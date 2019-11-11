import { decorate, observable, action, computed, toJS } from 'mobx'
import { notification } from 'antd';

export default class RegistrasiPenyediaStore {

    constructor(storeModule) {
        this.store = storeModule
        this.api = this.store.api
        this.data = []
        this.tableLoading = false
        this.registerLoading = false
    }

    async fetchData() {
        // SET LOADING TRUE
        this.tableLoading = true

        // FETCH DATA FROM SERVER
        const result = await this.api.get('/registrasi/penyedia')
        if (result.data.status == 'Success') {
            this.data = result.data.data
        } else {
            notification.error({
                message: result.data.message,
                description: result.data.data
            })
        }

        // SET LOADING FALSE
        this.tableLoading = false
    }

    // SEND DATA TO SERVER
    async register(data) {
        // SET LOADING BUTTON TRUE
        // this.registerLoading = true

        // SEND DATA TO SERVER
        const result = await this.api.post('/registrasi/penyedia', data)
        if (result.data.status == 'Success') {
            notification.success({
                message: result.data.message,
                description: result.data.data
            })
            return true
        } else {
            notification.error({
                message: result.data.message,
                description: result.data.data
            })
        }

        // SET LOADING BUTTON FALSE
        // this.registerLoading = false
    }

    setData(data) {
        this.data = data
    }

    get getData() {
        return toJS(this.data)
    }

    setTableLoading(loading) {
        this.tableLoading = loading
    }

    get isTableLoading() {
        return this.tableLoading
    }

    get isRegisterLoading() {
        return this.registerLoading
    }
}

decorate(RegistrasiPenyediaStore, {
    data: observable,
    tableLoading: observable,
    registerLoading: observable,
    fetchData: action,
    register: action,
    setData: action,
    getData: computed,
    setTableLoading: action,
    isTableLoading: computed,
    isRegisterLoading: computed
})