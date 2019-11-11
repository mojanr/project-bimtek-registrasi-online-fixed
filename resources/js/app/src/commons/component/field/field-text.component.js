import React from 'react'
import { Form ,Input } from 'antd'
import Styled from 'styled-components'

const Label = Styled.span`
  font-size: 14px;
  font-weight: 500;
`

const FieldTextComponent = (props) => {
    return (
        <Form.Item label={(
            <React.Fragment>
                <Label>
                    {props.label}
                </Label>    
                {props.required ? (<span style={{color: "red"}}> * </span>) : null}
            </React.Fragment>
        )}>
            <Input {...props} />
            {props.error && (<span style={{color: "red"}}> {props.error} </span>)}
        </Form.Item>
    )
}

export default React.memo(FieldTextComponent)
