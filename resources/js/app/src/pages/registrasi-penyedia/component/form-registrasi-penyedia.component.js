import React from 'react'
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
import FieldTextAreaComponent from '../../../commons/component/field/field-text-area.component';
import FieldDatepickerComponent from '../../../commons/component/field/field-datepicker.component';
// import FieldTextComponent from '../../../commons/component/field/field-text.component';
// import FieldDatepickerComponent from '../../../commons/component/field/field-datepicker.component';
// import FieldTextAreaComponent from '../../../commons/component/field/field-text-area.component';

// const FormRegistrasiPenyediaComponent = (props) => {
//   return (
//     <React.Fragment>
//       <Formik
//         initialValues={{
//           nama_perusahaan: '',
//           alamat_perusahaan: '',
//           email: '',
//           no_telepon: '',
//           no_handphone: '',
//           tanggal_pelatihan: ''
//         }}
//         onSubmit={(values, actions) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             actions.setSubmitting(false);
//           }, 1000);
//         }}
//         render={props => (
//           <form onSubmit={props.handleSubmit}>
//             {console.log('form render props', props)}
//             <Row gutter={16}>
//               <Col xs={24} sm={24} md={24} lg={12} xl={12}>
//                 <FieldTextComponent
//                   label="Nama Perusahaan"
//                   name="nama_perusahaan"
//                   value={props.values.nama_perusahaan}
//                   onChange={props.handleChange}
//                   required
//                 />
//                 <FieldTextAreaComponent
//                   label="Alamat Perusahaan"
//                   name="alamat_perusahaan"
//                   value={props.values.alamat_perusahaan}
//                   onChange={props.handleChange}
//                   required
//                 />
//                 <FieldTextComponent
//                   label="Email"
//                   name="email"
//                   value={props.values.email}
//                   onChange={props.handleChange}
//                   required
//                 />
//                 <FieldTextComponent
//                   label="No Telepon"
//                   addonBefore="(022)"
//                   name="no_telepon"
//                   value={props.values.no_telepon}
//                   onChange={props.handleChange}
//                   required
//                 />
//                 <FieldTextComponent
//                   label="No Handphone"
//                   addonBefore="+62"
//                   name="no_handphone"
//                   value={props.values.no_handphone}
//                   onChange={props.handleChange}
//                   required
//                 />
//                 <FieldDatepickerComponent 
//                   label="Tanggal Pelatihan"
//                   name="tanggal_pelatihan"
//                   value={props.values.tanggal_pelatihan}
//                   onChange={props.setFieldValue}
//                   required
//                 />
//               </Col>
//             </Row>

//             <Button htmlType="submit" type="primary"> Register </Button>
//           </form>
//         )}
//       />
//     </React.Fragment>
//   )
// }

// export default React.memo(FormRegistrasiPenyediaComponent)

const FormRegistrasiPenyediaComponent = () => {

  const store = useStore()

  const initalValues = {
    nama_perusahaan: '',
    alamat_perusahaan: '',
    email: '',
    no_telepon: '',
    no_handphone: '',
    tanggal_pelatihan: ''
  }

  const formik = useFormik({
    initialValues: initalValues,
    validationSchema: yup.object().shape({
      nama_perusahaan: yup.string().required(),
      alamat_perusahaan: yup.string().required(),
      email: yup.string().required().email(),
      no_telepon: yup.number().required(),
      no_handphone: yup.number().required(),
      tanggal_pelatihan: yup.string().required(),
    }),
    onSubmit: async (values, actions) => {
      const data = {
        ...values,
        no_telepon: values.no_telepon,
        no_handphone: `(+62)${values.no_handphone}`,
      }
      const result = await store.registrasiPenyediaStore.register(data)
      if (result) {actions.resetForm()}
    },
  });


  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <FieldTextComponent
              label="Nama Perusahaan"
              name="nama_perusahaan"
              value={formik.values.nama_perusahaan}
              onChange={formik.handleChange}
              error={formik.errors.nama_perusahaan}
              required
            />
            <FieldTextAreaComponent
              label="Alamat Perusahaan"
              name="alamat_perusahaan"
              value={formik.values.alamat_perusahaan}
              onChange={formik.handleChange}
              error={formik.errors.alamat_perusahaan}
              required
            />
            <FieldTextComponent
              label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.errors.email}
              required
            />
            <FieldTextComponent
              label="No Telepon"
              // addonBefore="(022)"
              name="no_telepon"
              value={formik.values.no_telepon}
              onChange={formik.handleChange}
              error={formik.errors.no_telepon}
              required
            />
            <FieldTextComponent
              label="No Handphone"
              addonBefore="+62"
              name="no_handphone"
              value={formik.values.no_handphone}
              onChange={formik.handleChange}
              error={formik.errors.no_handphone}
              required
            />
            <FieldDatepickerComponent
              label="Tanggal Pelatihan"
              name="tanggal_pelatihan"
              value={formik.values.tanggal_pelatihan}
              onChange={formik.setFieldValue}
              error={formik.errors.tanggal_pelatihan}
              required
            />

          </Col>
        </Row>

        <Button 
          htmlType="submit" 
          type="primary" 
          loading={store.registrasiPenyediaStore.isRegisterLoading}
        > 
          Register 
        </Button>
      </form>
    </React.Fragment>
  )

}

export default React.memo(observer(FormRegistrasiPenyediaComponent))
