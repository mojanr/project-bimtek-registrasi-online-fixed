import React from 'react'
import { Layout } from 'antd';
import LandingFooterComponent from '../../../commons/component/landing-footer/landing-footer.component';
import LandingNavbarComponent from '../../../commons/component/landing-navbar/landing-navbar.component';
import CarouselImageSliderComponent from '../component/carousel-image-slider.component';

const { Content } = Layout;


const PageHome = () => {
    return (
        <Layout>
            <LandingNavbarComponent />
            <Content className="landing-content">
                <CarouselImageSliderComponent />
            </Content>
            <LandingFooterComponent />
        </Layout>
    )
}

export default React.memo(PageHome)
