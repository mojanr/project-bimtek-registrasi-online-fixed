import React from 'react'
import { Menu } from 'antd';

const { SubMenu } = Menu;

const NestedMenuComponent = ({ menu }) => {

    return (
        menu.map((item, index) => (
            item.subMenu.length > 0 ? (
                null
            ) : (
                <Menu.Item key={index} onClick={() => changeUrl(item.path)}> {item.name} </Menu.Item>
            )
        ))
    )
}

export default React.memo(NestedMenuComponent)
