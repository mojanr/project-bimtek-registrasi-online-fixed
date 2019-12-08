import React from 'react'
import { Form, Icon, Input, Button, notification } from 'antd';
import { useStore } from '../../../commons/store/_store.module'
import { useHistory } from 'react-router-dom'

const MyForm = (props) => {

    const store = useStore()
    const history = useHistory()
    const { getFieldDecorator } = props.form;


    const login = async (data) => {
        const result = await store.authStore.login(data)
        // console.log(result)
        if (result.data.status == 'Success') {
            
            store.authStore.setToken(result.data.data.token)
            // console.log('islogn',store.authStore.islogin())
            history.push('/dashboard/registrasi/instansi')
        } else {
            notification.error({
                message: 'Failed',
                description: 'Login Failed'
            })
        }
        // history.push('/dashboard')
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                login(values)
            }
        });
    };



    return (
        <Form onSubmit={handleSubmit} className="login-form">
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
                <Button block type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
            </Form.Item>
        </Form>
    )
}

const FormLoginComponent = Form.create({ name: 'login_form' })(MyForm);

export default React.memo(FormLoginComponent)
