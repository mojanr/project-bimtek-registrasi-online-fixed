import { decorate, observable, action, computed, toJS } from 'mobx'
import { notification } from 'antd';

export default class RegistrasiAdosiasiStore {

    constructor(storeModule) {
        this.store = storeModule
        this.api = this.store.api
        this.data = []
        this.tableLoading = false;
    }

    async fetchData() {
        // SET LOADING TRUE
        this.tableLoading = true

        // FETCH DATA FROM SERVER
        const result = await this.api.get('/registrasi/adosiasi')
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
        const result = await this.api.post('/registrasi/adosiasi', data
            // { headers: { 'Content-Type': 'multipart/form-data' } }
        )
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

}

decorate(RegistrasiAdosiasiStore, {
    data: observable,
    tableLoading: observable,
    fetchData: action,
    register: action,
    setData: action,
    getData: computed,
    setTableLoading: action,
    isTableLoading: computed
})