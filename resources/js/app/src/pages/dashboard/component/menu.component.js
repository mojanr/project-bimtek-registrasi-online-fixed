import React from 'react'
import { Menu, Icon } from 'antd';
import { useHistory } from 'react-router-dom'

const { SubMenu } = Menu;

const MenuComponent = () => {


    console.log('rerender menu')

    const history = useHistory();

    const changeMenu = (path) => {
        history.push(path)
    }

    return (
        <React.Fragment>
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            {/* <Icon type="user" /> */}
                            <span> Registrasi </span>
                        </span>
                    }
                >
                    <Menu.Item key="1" onClick={() => changeMenu('/dashboard/registrasi/instansi')}> Instansi/Satker/Unit Kerja</Menu.Item>
                    <Menu.Item key="2" onClick={() => changeMenu('/dashboard/registrasi/penyedia')}> Penyedia </Menu.Item>
                </SubMenu>
                {/* <Menu.Item key="3" onClick={() => changeMenu('/dashboard/pengumuman')}>
                    <span className="nav-text">Pengumuman</span>
                </Menu.Item> */}

                {/* BLOCKS MENU */}
                <SubMenu
                    key="sub2"
                    title={
                        <span>
                            {/* <Icon type="user" /> */}
                            <span> Block </span>
                        </span>
                    }
                >
                    <Menu.Item key="sub21" onClick={() => changeMenu('/dashboard/block/home-image-slider')}> Home Image Slider </Menu.Item>
                </SubMenu>

                <Menu.Item key="4" onClick={() => changeMenu('/dashboard/user')}>
                    <span className="nav-text">User</span>
                </Menu.Item>
                {/* <Menu.Item key="5" onClick={() => changeMenu('/dashboard/role')}>
                    <span className="nav-text">Role</span>
                </Menu.Item>
                <Menu.Item key="6" onClick={() => changeMenu('/dashboard/permission')}>
                    <span className="nav-text">Permission</span>
                </Menu.Item> */}
                <Menu.Item key="7" onClick={() => changeMenu('/auth/login')}>
                    <span className="nav-text">Logout</span>
                </Menu.Item>
            </Menu>
        </React.Fragment>
    )
}

export default React.memo(MenuComponent)
