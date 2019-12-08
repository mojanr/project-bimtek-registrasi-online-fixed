import React, { useEffect } from 'react'
import { Form, Select } from 'antd'
import Styled from 'styled-components'

const { Option } = Select

const Label = Styled.span`
  font-size: 14px;
  font-weight: 500;
`

const FieldSelectComponent = (props) => {
    // console.log(props.options)

    // useEffect(() => {
    //     return () => {};
    // }, [props.options])

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
            <Select 
                mode="multiple" 
                style={{ display: 'block' }} 
                placeholder={props.placeholder} 
                name={props.name} 
                value={props.value} 
                // onChange={props.onChange}
                onChange={(value, options) => {
                    props.onChange(props.name, value)
                    console.log(value)
                }}
            >
                {console.log(props.options)}
                {props.options.map((item, index) => (
                    <Option key={item.id} value={item.jenis_pelatihan}>
                        {item.jenis_pelatihan}
                    </Option >
                ))}
            </Select>
            {props.error && (<span style={{ color: "red" }}> {props.error} </span>)}
        </Form.Item>
    )
}

export default React.memo(FieldSelectComponent)
