import React from 'react'
import { Card, Icon, Tag, Tooltip } from 'antd';
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../commons/store/_store.module'

const { Meta } = Card;

const CardImageSliderComponent = (props) => {

    const store = useStore()

    const addToSlider = (id) => {
        store.blockImageSliderStore.addToSlider(id)
    }

    const removeFromSlider = (id) => {
        store.blockImageSliderStore.removeFromSlider(id)
    }

    const deleteImage = (id) => {
        store.blockImageSliderStore.deleteImage(id)
    }

    return (
        <div style={{ paddingBottom: '20px' }}>
            <Card
                // style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src={props.data.url}
                    />
                }
                actions={[
                    <Tooltip placement="top" title="Add To Slider">
                        <Icon type="plus" key="add" onClick={() => addToSlider(props.data.id)} />
                    </Tooltip>,
                    <Tooltip placement="top" title="Remove From Slider">
                        <Icon type="minus" key="remove" onClick={() => removeFromSlider(props.data.id)} />
                    </Tooltip>,
                    <Tooltip placement="top" title="Delete Image">
                        <Icon type="delete" key="delete" onClick={() => deleteImage(props.data.id)} />
                    </Tooltip>,
                ]}
            >
                <Meta
                    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    // title="Card title"
                    description={
                        <React.Fragment>
                            <div style={{ textAlign: 'center' }}>
                                {props.data.status == 101 ? 
                                    (<Tag color="green"> Added To Slider </Tag>)
                                    : 
                                    (<Tag> Draft Image </Tag>)
                                }
                            </div>
                        </React.Fragment>
                    }
                />
            </Card>
        </div>
    )
}

export default React.memo(observer(CardImageSliderComponent))
