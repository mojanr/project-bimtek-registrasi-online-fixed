import { decorate, observable, action, computed, toJS } from 'mobx'
import { notification } from 'antd';

export default class JenisPelatihanStore {

    constructor(storeModule) {
        this.store = storeModule
        this.api = this.store.api
        this.data = []
        this.tableLoading = false;
    }

    // FETCH ALL DATA
    async fetchData() {
        // SET LOADING TRUE
        this.tableLoading = true

        // FETCH DATA FROM SERVER
        const result = await this.api.get('/jenis-pelatihan')
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

    // FETCH ACTIVE DATA
    async fetchActiveData() {
        // SET LOADING TRUE
        this.tableLoading = true

        // FETCH DATA FROM SERVER
        const result = await this.api.get('/jenis-pelatihan/status/active')
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
    async save(data) {
        // SET LOADING BUTTON TRUE
        // this.registerLoading = true

        // SEND DATA TO SERVER
        const result = await this.api.post('/jenis-pelatihan', data
            // { headers: { 'Content-Type': 'multipart/form-data' } }
        )
        if (result.data.status == 'Success') {
            notification.success({
                message: result.data.message,
                description: result.data.data
            })
            this.fetchData()
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

    // SEND UPDATE DATA TO SERVER
    async update(id, data) {
        // SET LOADING BUTTON TRUE
        // this.registerLoading = true

        // SEND DATA TO SERVER
        const result = await this.api.put(`/jenis-pelatihan/${id}`, data
            // { headers: { 'Content-Type': 'multipart/form-data' } }
        )
        if (result.data.status == 'Success') {
            notification.success({
                message: result.data.message,
                description: result.data.data
            })
            this.fetchData()
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

    // SEND UPDATE ACTIVATE DATA
    async activate(id) {
        // SET LOADING BUTTON TRUE
        // this.registerLoading = true

        // SEND DATA TO SERVER
        const result = await this.api.put(`/jenis-pelatihan/${id}/activate`
            // { headers: { 'Content-Type': 'multipart/form-data' } }
        )
        if (result.data.status == 'Success') {
            notification.success({
                message: result.data.message,
                description: result.data.data
            })
            this.fetchData()
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


    // SEND UPDATE INACTIVATE DATA
    async inactivate(id) {
        // SET LOADING BUTTON TRUE
        // this.registerLoading = true

        // SEND DATA TO SERVER
        const result = await this.api.put(`/jenis-pelatihan/${id}/inactivate`
            // { headers: { 'Content-Type': 'multipart/form-data' } }
        )
        if (result.data.status == 'Success') {
            notification.success({
                message: result.data.message,
                description: result.data.data
            })
            this.fetchData()
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

decorate(JenisPelatihanStore, {
    data: observable,
    tableLoading: observable,
    fetchData: action,
    fetchActiveData: action,
    update: action,
    activate: action,
    inactivate: action,
    save: action,
    setData: action,
    getData: computed,
    setTableLoading: action,
    isTableLoading: computed
})