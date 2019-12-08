import React from 'react'
import { Form, Icon, Input, Button, notification } from 'antd';
import { useStore } from '../../../commons/store/_store.module'
import { useHistory } from 'react-router-dom'

const MyForm = (props) => {

    const store = useStore()
    const history = useHistory()
    const { getFieldDecorator } = props.form;


    const register = async (data) => {
        const result = await store.authStore.register(data)
        console.log(result)
        if (result) {
            history.push('/auth/login')
        } else {
            notification.error({
                message: 'Failed',
                description: 'Registration Failed'
            })
        }
        // history.push('/dashboard')
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                register(values)
            }
        });
    };



    return (
        <Form onSubmit={handleSubmit} className="register-form">
            <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('email', {
                    rules: [
                        { required: true, message: 'Please input your email!' },
                        { type: 'email', message: 'Input email properly!' }
                    ],
                })(
                    <Input
                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Email"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                <Button block type="primary" htmlType="submit" className="register-form-button">
                    Register
                </Button>
            </Form.Item>
        </Form>
    )
}

const FormRegisterComponent = Form.create({ name: 'register_form' })(MyForm);

export default React.memo(FormRegisterComponent)
