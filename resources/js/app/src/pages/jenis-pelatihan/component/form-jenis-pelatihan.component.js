import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import {
    Row,
    Col,
    Button,
} from 'antd';
import * as yup from 'yup'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../commons/store/_store.module'
import FieldTextComponent from '../../../commons/component/field/field-text.component';

const FormJenisPelatihanComponent = (props) => {

    const store = useStore()

    let initalValues = {
        jenis_pelatihan: props.data.jenis_pelatihan || '',
    }

    // useEffect(() => {
    //     initalValues = {
    //         jenis_pelatihan: props.data.jenis_pelatihan || '',
    //     }
    // }, [props.data])
    
    // console.log(props.data.jenis_pelatihan)

    const formik = useFormik({
        initialValues: initalValues,
        validationSchema: yup.object().shape({
            jenis_pelatihan: yup.string().required(),
        }),
        enableReinitialize: true,
        onSubmit: async (values, actions) => {
            // SEND DATA TO SERVER
            let result = false;
            if (props.isUpdate) {
                console.log('update data')
                result = await store.jenisPelatihanStore.update(props.data.id, values)
            } else {
                console.log('insert data')
                result = await store.jenisPelatihanStore.save(values)
            }
            
            if (result) { 
                // actions.resetForm() 
                // actions.setFieldValue('jenis_pelatihan', '')
                // actions.setValues({ jenis_pelatihan: '' })
            }
            // console.log(values)
        },
    });

    return (
        <React.Fragment>
            <form onSubmit={formik.handleSubmit}>
                <Row gutter={16}>
                    {/* <Col xs={24} sm={24} md={24} lg={12} xl={12}> */}
                        <FieldTextComponent
                            label="Jenis Pelatithan"
                            name="jenis_pelatihan"
                            value={formik.values.jenis_pelatihan}
                            onChange={formik.handleChange}
                            error={formik.errors.jenis_pelatihan}
                            required
                        />
                    {/* </Col> */}
                    <Button htmlType="submit" type="primary"> Save </Button>
                </Row>
            </form>
        </React.Fragment>
    )
}

export default React.memo(observer(FormJenisPelatihanComponent))
