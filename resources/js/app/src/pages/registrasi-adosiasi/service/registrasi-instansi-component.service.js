import { createContext, useContext } from 'react'
import DrawerDetailInformationService from './drawer-detail-information.service'

class ComponentService {

    constructor() {
        this.drawerDetailInformationService = new DrawerDetailInformationService
    }

}

const context = createContext(new ComponentService())

export const useRegistrasiInstansiComponent = () => {
    return useContext(context)
}