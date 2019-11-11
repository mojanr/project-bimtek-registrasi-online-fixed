import { decorate, observable, action, computed, toJS } from 'mobx'
import { notification } from 'antd';

export default class BlockImageSliderStore {

    constructor(storeModule) {
        this.store = storeModule
        this.api = this.store.api
        this.data = []
        this.imageSliderData = []
        this.tableLoading = false;
    }

    async fetchData() {
        // SET LOADING TRUE
        this.tableLoading = true

        // FETCH DATA FROM SERVER
        const result = await this.api.get('/block/slider')
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

    async fetchSliderData() {
        // SET LOADING TRUE
        this.tableLoading = true

        // FETCH DATA FROM SERVER
        const result = await this.api.get('/block/slider/active')
        if (result.data.status == 'Success') {
            this.imageSliderData = result.data.data
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
    async uploadImage(data) {
        // SET LOADING BUTTON TRUE
        // this.registerLoading = true

        // SEND DATA TO SERVER
        const result = await this.api.post('/block/slider', data)
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


    // ADD TO SLIDER
    async addToSlider(id) {
        const result = await this.api.put(`/block/slider/add/${id}`)
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
    }

    // REMOVE TO SLIDER
    async removeFromSlider(id) {
        const result = await this.api.put(`/block/slider/remove/${id}`)
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
    }

    // DELETE IMAGE
    async deleteImage(id) {
        const result = await this.api.delete(`/block/slider/${id}`)
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
    }


    setData(data) {
        this.data = data
    }

    get getData() {
        return toJS(this.data)
    }

    get getImageSliderData() {
        return toJS(this.imageSliderData)
    }

    setTableLoading(loading) {
        this.tableLoading = loading
    }

    get isTableLoading() {
        return this.tableLoading
    }

}

decorate(BlockImageSliderStore, {
    data: observable,
    imageSliderData: observable,
    tableLoading: observable,
    fetchData: action,
    fetchSliderData: action,
    register: action,
    setData: action,
    getData: computed,
    getImageSliderData: computed,
    setTableLoading: action,
    isTableLoading: computed
})