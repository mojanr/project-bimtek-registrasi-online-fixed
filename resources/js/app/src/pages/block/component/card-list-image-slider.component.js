import React, { useEffect } from 'react'
import { Col, Row } from 'antd';
import CardImageSliderComponent from './card-image-slider.component'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../commons/store/_store.module'


const CardListImageSliderComponent = () => {

    const store = useStore()

    useEffect(() => {
        store.blockImageSliderStore.fetchData()
    }, [])

    return (
        <React.Fragment>
            <Row gutter={16} type="flex">
                {store.blockImageSliderStore.getData.map(item => (
                    <Col span={8} key={item.id}>
                        <CardImageSliderComponent data={item} />
                    </Col>
                ))}
                {/* <Col span={8}>
                    <CardImageSliderComponent />
                </Col>
                <Col span={8}>
                    <CardImageSliderComponent />
                </Col>
                <Col span={8}>
                    <CardImageSliderComponent />
                </Col>
                <Col span={8}>
                    <CardImageSliderComponent />
                </Col>
                <Col span={8}>
                    <CardImageSliderComponent />
                </Col>
                <Col span={8}>
                    <CardImageSliderComponent />
                </Col> */}
            </Row>
        </React.Fragment>
    )
}

export default React.memo(observer(CardListImageSliderComponent))
