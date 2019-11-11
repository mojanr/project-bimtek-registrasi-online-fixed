import React from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import NestedMenuComponent from './nested-menu.component';

const { SubMenu } = Menu;
const { Header } = Layout;


const MenuList = [
    {
        path: '/',
        name: 'HOME',
        icon: null,
        subMenu: [],
    },
    {
        path: null,
        name: 'REGISTRASI',
        icon: null,
        subMenu: [
            
        ],
    },
    {
        path: '/pengumuman',
        name: 'PENGUMUMAN',
        icon: null,
        subMenu: [],
    },
    {
        path: '/kontak',
        name: 'KONTAK',
        icon: null,
        subMenu: [],
    },
]

const LandingNavbarComponent = ({ defaultKey = '1' }) => {

    const history = useHistory();

    const changeUrl = (path) => {
        history.push(path)
        console.log(history)
    }

    return (
        <Header className="landing-header">
            <div className="landing-logo" />
            <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={[defaultKey]}
                style={{ lineHeight: '62px' }}
                className="landing-menu"
            >
                {/* <NestedMenuComponent menu={MenuList} /> */}
                {/* {MenuList.map((item, index) => (
                    <React.Fragment>
                        {item.subMenu.length = 0 ? (
                            <Menu.Item key={index} onClick={() => changeUrl(item.path)}> {item.name} </Menu.Item>
                        ): (
                            {item.}
                        )}
                    </React.Fragment>
                ))} */}
                <Menu.Item key="1" onClick={() => changeUrl('/')}> HOME </Menu.Item>
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            REGISTRASI
                        </span>
                    }
                >
                    <Menu.Item key="2" onClick={() => changeUrl('/registrasi/instansi')}>INSTANSI/SATKER/UNIT KERJA</Menu.Item>
                    <Menu.Item key="3" onClick={() => changeUrl('/registrasi/penyedia')}>PENYEDIA</Menu.Item>
                </SubMenu>
                {/* <Menu.Item key="4"> REGISTRASI </Menu.Item> */}
                {/* <Menu.Item key="4" onClick={() => changeUrl('/pengumuman')}> PENGUMUMAN </Menu.Item> */}
                <Menu.Item key="5" onClick={() => changeUrl('/kontak')}> KONTAK </Menu.Item>
            </Menu>
        </Header>
    )
}

export default React.memo(LandingNavbarComponent)
