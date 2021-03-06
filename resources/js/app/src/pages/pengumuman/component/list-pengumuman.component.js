import React from 'react'
import { List, Avatar, Icon } from 'antd';
import { Link } from 'react-router-dom'

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

const ListPengumumanComponent = () => {

    const listData = [];
    for (let i = 0; i < 23; i++) {
        listData.push({
            href: `/pengumuman/${i}`,
            title: `Pengumuman Part ${i}`,
            description:
                `${i} november 2019`,
            content:
                'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        });
    }

    const IconText = ({ type, text }) => (
        <span>
            <Icon type={type} style={{ marginRight: 8 }} />
            {text}
        </span>
    );

    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 5,
            }}
            dataSource={listData}
            // footer={
            //     <div>
            //         <b>ant design</b> footer part
            //     </div>
            // }
            renderItem={item => (
                <List.Item
                    key={item.title}
                    // actions={[
                    //     <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                    //     <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                    //     <IconText type="message" text="2" key="list-vertical-message" />,
                    // ]}
                    extra={
                        <img
                            width={272}
                            alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                    }
                >
                    <List.Item.Meta
                        // avatar={<Avatar src={item.avatar} />}
                        title={<Link to={item.href}>{item.title}</Link>}
                        description={item.description}
                    />
                    {item.content}
                </List.Item>
            )}
        />
    )
}

export default React.memo(ListPengumumanComponent)
