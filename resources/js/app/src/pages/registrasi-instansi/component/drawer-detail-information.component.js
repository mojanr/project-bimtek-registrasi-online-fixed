import React from 'react'
import { Drawer } from 'antd'
import { observer } from 'mobx-react-lite'
import DescriptionRegistrasiInstansiComponent from './description-registrasi-instansi.component'
import { useRegistrasiInstansiComponent } from '../service/registrasi-instansi-component.service'

const DrawerDetailInformationComponent = () => {

    const registrasiInstansiComponent = useRegistrasiInstansiComponent();

    const onClose = () => {
      registrasiInstansiComponent.drawerDetailInformationService.closeDrawer()
    }

    return (
        <Drawer
          width={600}
          title="Detail Info"
          placement="right"
          closable={true}
          onClose={onClose}
          visible={registrasiInstansiComponent.drawerDetailInformationService.isOpen}
        >
          <DescriptionRegistrasiInstansiComponent data={registrasiInstansiComponent.drawerDetailInformationService.data} />
        </Drawer>
    )
}

export default React.memo(observer(DrawerDetailInformationComponent))
