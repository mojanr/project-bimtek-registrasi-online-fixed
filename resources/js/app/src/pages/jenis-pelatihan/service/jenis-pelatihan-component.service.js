import { createContext, useContext } from 'react'
import DrawerFormJenisPelatihanService from './drawer-form-jenis-pelatihan.service'

class ComponentService {

    constructor() {
        this.drawerFormJenisPelatihanService = new DrawerFormJenisPelatihanService
    }

}

const context = createContext(new ComponentService())

export const useJenisPelatihanComponent = () => {
    return useContext(context)
}