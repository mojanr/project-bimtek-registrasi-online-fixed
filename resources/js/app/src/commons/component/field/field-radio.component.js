import React from 'react'
import { Form, Radio } from 'antd'
import Styled from 'styled-components'

const Label = Styled.span`
  font-size: 14px;
  font-weight: 500;
`

const FieldRadioComponent = (props) => {
    return (
        <Form.Item label={(
            <React.Fragment>
                <Label>
                    {props.label}
                </Label>
                {props.required ? (<span style={{ color: "red" }}> * </span>) : null}
            </React.Fragment>
        )}>
            {/* <Input.TextArea {...props} /> */}
            <Radio.Group style={{ display: 'block' }} name={props.name} value={props.value} onChange={props.onChange}>
                {props.options.map((item, index) => (
                    <Radio key={`${index}-${item.value}`} style={{ height: '30px', lineHeight: '30px' }} value={item.value}>
                        {item.text}
                    </Radio>
                ))}
            </Radio.Group>
            {props.error && (<span style={{ color: "red" }}> {props.error} </span>)}
        </Form.Item>
    )
}

export default React.memo(FieldRadioComponent)
