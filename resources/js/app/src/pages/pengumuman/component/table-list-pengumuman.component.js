import React from 'react'
import { Table, Tooltip, Button } from 'antd';
import { useHistory } from 'react-router-dom'

const TableListPengumumanComponent = () => {

    const history = useHistory()

    const changeUrl = (path) => {
        history.push(path)
    }

    const columns = [
        {
            title: 'Judul Pengumuman',
            key: 'title',
            width: 600,
            render: (item) => (
                <a onClick={() => changeUrl(`/pengumuman/${item.key}`)}> {item.title} </a>
            )
        },
        // {
        //     title: 'Status',
        //     dataIndex: 'status',
        //     key: 'status',
        //     width: 200,
        // },
        {
            title: 'Action',
            key: 'operation',
            width: 100,
            render: (item) => (
                <React.Fragment>
                    <Tooltip placement="bottom" title="Edit">
                        <Button type="primary" shape="circle" icon="edit" 
                            onClick={() => changeUrl(`/dashboard/pengumuman/edit/${item.key}`)} />
                    </Tooltip>
                    <span> &nbsp; </span>
                    <Tooltip placement="bottom" title="delete">
                        <Button type="danger" shape="circle" icon="delete" />
                    </Tooltip>
                </React.Fragment>
            ),
        },
    ];
    
    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            title: `Edrward ${i}`,
            status: 32,
        });
    }

    return (
        <Table columns={columns} dataSource={data} />
    )
}

export default React.memo(TableListPengumumanComponent)
