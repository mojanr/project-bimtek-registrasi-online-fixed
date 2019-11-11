import React from 'react'
import { Layout, PageHeader, Button, Upload, message, Icon } from 'antd'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../commons/store/_store.module'
import CardListImageSliderComponent from '../component/card-list-image-slider.component';
import FieldUploadComponent from '../../../commons/component/field/field-upload.component'

const { Content } = Layout;

const routes = [
    {
        path: '/dashboard/block/home-image-slider',
        breadcrumbName: 'Block Home Image Slider',
    },
];

const props = {
    name: 'file',
    action: `${document.querySelector('meta[name="base-url"]').getAttribute('content')}/api/block/slider`,
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};


const PageBlockListHomeImageSlider = () => {

    const store = useStore()
    
    const uploadImage = async (name, file) => {
        console.log(name, file)
        const formData = new FormData()
        formData.append(name, file)
        const result = store.blockImageSliderStore.uploadImage(formData)
    }

    return (
        <React.Fragment>
            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                }}
                title="Block Home Image Slider"
                breadcrumb={{ routes }}
            />
            <Content style={{ margin: '24px 25px 0', overflow: 'initial' }}>
                <div style={{ padding: '24px', background: '#fff' }}>

                    <div style={{ padding: "0 0 24px 0" }}>
                        {/* <Upload {...props}>
                            <Button type="primary">
                                <Icon type="upload" /> Click to Upload
                            </Button>
                        </Upload> */}
                        <FieldUploadComponent
                            label="Upload Image"
                            name="image"
                            onChange={uploadImage}
                            fileType=".jpg"
                        />
                    </div>

                    <CardListImageSliderComponent />
                </div>
            </Content>
        </React.Fragment>
    )
}

export default React.memo(observer(PageBlockListHomeImageSlider))
