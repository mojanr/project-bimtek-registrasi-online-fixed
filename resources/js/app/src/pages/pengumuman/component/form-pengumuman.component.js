import React from 'react'
import { Button } from 'antd'
import Styled from 'styled-components'
import { Formik } from 'formik';
import FieldTextComponent from '../../../commons/component/field/field-text.component';
import FieldTextEditorComponent from '../../../commons/component/field/field-text-editor.component';

const Field = Styled.div`
  margin-bottom: 15px;
`

const Label = Styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
`

const FormPengumumanComponent = () => {
    return (
        <React.Fragment>
            <Formik
                initialValues={{
                    title: '',
                    content: '',
                }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }, 1000);
                }}
                render={props => (
                    <form onSubmit={props.handleSubmit}>
                        {console.log('form render props', props)}

                        <FieldTextComponent
                            label="Judul Pengumuman"
                            name="title"
                            value={props.values.title}
                            onChange={props.handleChange}
                            required
                        />
                        
                        <FieldTextEditorComponent 
                            label="Konten"
                            name="content"
                            value={props.values.content}
                            onChange={props.setFieldValue}
                            required
                        />

                        <Field>
                            <Button type="primary" htmlType="submit"> Simpan dan Publish </Button>
                        </Field>
                    </form>
                )}
            />
        </React.Fragment >
    )
}

export default React.memo(FormPengumumanComponent)
