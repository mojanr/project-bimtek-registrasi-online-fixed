import React from 'react'
import { Form, DatePicker } from 'antd'
import locale from 'antd/es/date-picker/locale/id_ID';
import Styled from 'styled-components'
import moment from 'moment'

const Label = Styled.span`
  font-size: 14px;
  font-weight: 500;
`

const FieldDatepickerComponent = (props) => {

    const disabledDate = (current) => {
        return current.day() !== 3 || (current && current < moment().endOf('day'));
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
            <DatePicker
                locale={locale}
                style={{ width: '100%' }}
                name={props.name}
                value={props.value ? (moment(props.value, "YYYY-MM-DD")) : null}
                onChange={(date, dateString) => {
                    props.onChange(props.name, dateString)
                }}
                disabledDate={disabledDate}
                required
            />
            {props.error && (<span style={{color: "red"}}> {props.error} </span>)}
        </Form.Item>
    )
}

export default React.memo(FieldDatepickerComponent)
