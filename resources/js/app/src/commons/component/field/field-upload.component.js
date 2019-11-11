import React from 'react'
import { Form, Upload, Button, Icon, } from 'antd'
import Styled from 'styled-components'

const Label = Styled.span`
  font-size: 14px;
  font-weight: 500;
`

const FieldUploadComponent = (props) => {

    const uploadProps = {
        multiple: false,
        beforeUpload: file => {
            props.onChange(props.name, file)
            // props.formData.append(props.name, file)
            // console.log('file', file)
            return false
        },
        accept: props.fileType,
    }

    return (
        <Form.Item label={(
            <React.Fragment>
                <Label>
                    {props.label}
                </Label>
                {props.required ? (<span style={{ color: "red" }}> * </span>) : null}
            </React.Fragment>
        )}>
            <Upload {...uploadProps}>
                <Button>
                    <Icon type="upload" /> {props.label}
                </Button>
            </Upload>
            {props.error && (<span style={{ color: "red" }}> {props.error} </span>)}
        </Form.Item>
    )
}

export default React.memo(FieldUploadComponent)
