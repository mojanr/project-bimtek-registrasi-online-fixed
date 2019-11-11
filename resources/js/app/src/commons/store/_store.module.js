import { createContext, useContext } from 'react'
import axios from 'axios'
import AuthStore from './auth.store';
import RegistrasiPenyediaStore from './registrasi-penyedia.store';
import RegistrasiInstansiStore from './registrasi-instansi.store';
import BlockImageSliderStore from './block-image-slider.store';

class StoreModule {

    constructor() {
        // Api module
        this.api = axios.create({
            baseURL: `${document.querySelector('meta[name="base-url"]').getAttribute('content')}/api`,
            timeout: 1000,
        });

        // Add a request interceptor
        this.api.interceptors.request.use(function (config) {
            // Do something before request is sent
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });

        // Add a response interceptor
        this.api.interceptors.response.use(function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
        }, function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            return Promise.reject(error);
        });


        // store
        this.authStore = new AuthStore(this)
        this.registrasiPenyediaStore = new RegistrasiPenyediaStore(this)
        this.registrasiInstansiStore = new RegistrasiInstansiStore(this)
        this.blockImageSliderStore = new BlockImageSliderStore(this)
    }

}

const context = createContext(new StoreModule)

export const useStore = () => {
    return useContext(context)
}