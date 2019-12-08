import React from 'react'
import { Drawer } from 'antd'
import { observer } from 'mobx-react-lite'
// import DescriptionRegistrasiInstansiComponent from './description-registrasi-instansi.component'
import { useJenisPelatihanComponent } from '../service/jenis-pelatihan-component.service'
import FormJenisPelatihanComponent from './form-jenis-pelatihan.component'

const DrawerFormJenisPelatihanComponent = (props) => {

    const jenisPelatihanComponent = useJenisPelatihanComponent();

    const onClose = () => {
        jenisPelatihanComponent.drawerFormJenisPelatihanService.closeDrawer()
    }

    return (
        <Drawer
          width={600}
          title="Jenis Pelatihan"
          placement="right"
          closable={true}
          onClose={onClose}
          visible={jenisPelatihanComponent.drawerFormJenisPelatihanService.isOpen}
        >
          {/* <DescriptionRegistrasiInstansiComponent data={jenisPelatihanComponent.drawerFormJenisPelatihanService.data} /> */}
          <FormJenisPelatihanComponent 
            isUpdate={jenisPelatihanComponent.drawerFormJenisPelatihanService.getData.isUpdate}
            data={jenisPelatihanComponent.drawerFormJenisPelatihanService.getData.data} 
          />
        </Drawer>
    )
}

export default React.memo(observer(DrawerFormJenisPelatihanComponent))
