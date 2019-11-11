import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../commons/store/_store.module'
import Styled from 'styled-components'

const SlideWrapper = Styled.div`

`

const Slide = Styled.div`
    position: absolute;
    width: 100%;
    height: inherit;
    overflow: hidden;
    background-position: center;
    background-size: cover;
    align-items: center;
`

const CarouselImageSliderComponent = () => {

    const store = useStore()
    useEffect(() => {
        store.blockImageSliderStore.fetchSliderData()
    }, [])

    const fetch = async () => {
        await store.blockImageSliderStore.fetchSliderData()
    }

    return (
        <Carousel autoplay effect="fade" speed={1000} autoplaySpeed={5000}>
            {store.blockImageSliderStore.getImageSliderData.map(item => (
                <div key={item.id}>
                    <img src={item.url} />
                    {/* {console.log(item.url)} */}
                    {/* <Slide key={item.id} style={{ backgroundImage: `url('${item.url}')` }} /> */}
                </div>
                // <Slide key={item.id} style={{ backgroundImage: `url('${item.url}')` }} />
                // <Slide key={item.id} image={item.url} />
            ))}
            {/* <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div> */}
        </Carousel>
    )
}

export default React.memo(observer(CarouselImageSliderComponent))
