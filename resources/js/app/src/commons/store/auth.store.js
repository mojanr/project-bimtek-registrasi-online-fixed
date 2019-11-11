
export default class AuthStore {

    constructor(storeModule) {
        this.store = storeModule
        this.api = this.store.api
    }

    // LOGIN WITH USERNAME AND PASSWORD
    async login(data) {
        return await this.api.post('/auth/login', data)
    }

    // LOGOUT WITH USERNAME
    async logout(data) {
        return await this.api.post('/auth/logout', data)
    }

    // VALIDATE TOKEN
    async validate(data) {
        return await this.api.post('/auth/validate', data)
    }

    // GET TOKEN FROM LOCALSTORAGE
    getToken() {
        return window.localStorage.getItem('token')
    }

    // SET TOKEN TO LOCALSTORAGE
    setToken(token) {
        window.localStorage.setItem('token', token)
    }

    // REMOVE TOKEN FROM LOCALSTORAGE
    removeToken() {
        window.localStorage.removeItem('token')
    }
    
}