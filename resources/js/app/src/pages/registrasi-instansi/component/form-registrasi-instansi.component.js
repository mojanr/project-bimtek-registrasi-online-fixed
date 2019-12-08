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
import FieldTextAreaComponent from '../../../commons/component/field/field-text-area.component';
// import FieldRadioComponent from '../../../commons/component/field/field-radio.component';
import FieldUploadComponent from '../../../commons/component/field/field-upload.component';
import FieldSelectComponent from '../../../commons/component/field/field-select.component';

const FormRegistrasiInstansiComponent = () => {

  const store = useStore()

  useEffect(() => {
    store.jenisPelatihanStore.fetchActiveData()
    return () => { };
  }, [])

  const initalValues = {
    nama_instansi: '',
    satuan_kerja: '',
    unit_kerja: '',
    alamat_instansi: '',
    provinsi: '',
    kab_kota: '',
    kode_pos: '',
    email: '',
    no_telepon: '',
    no_handphone: '',
    jenis_pelatihan: [],
    tempat_pelatihan: '',
    alamat_tempat_pelatihan: '',
    surat_permohonan: '',
  }

  const formik = useFormik({
    initialValues: initalValues,
    validationSchema: yup.object().shape({
      nama_instansi: yup.string().required(),
      satuan_kerja: yup.string().required(),
      unit_kerja: yup.string().required(),
      alamat_instansi: yup.string().required(),
      provinsi: yup.string().required(),
      kab_kota: yup.string().required(),
      kode_pos: yup.string().required(),
      email: yup.string().required().email(),
      no_telepon: yup.number().required(),
      no_handphone: yup.number().required(),
      jenis_pelatihan: yup.array().required(),
      tempat_pelatihan: yup.string().required(),
      alamat_tempat_pelatihan: yup.string().required(),
      surat_permohonan: yup.object().required(),
    }),
    onSubmit: async (values, actions) => {
      const data = {
        ...values,
        no_telepon: `(022) - ${values.no_telepon}`,
        no_handphone: `(+62)${values.no_handphone}`,
      }
      console.log(data)

      // CONVERT FORM VALUE OBJECT INTO FORM DATA
      const formData = new FormData();
      for (var key in data) {
        formData.append(key, data[key]);
      }

      console.log(formData)

      // // SEND DATA TO SERVER
      const result = await store.registrasiInstansiStore.register(formData)
      if (result) { actions.resetForm() }
    },
  });

  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <FieldTextComponent
              label="Nama Instansi"
              name="nama_instansi"
              value={formik.values.nama_instansi}
              onChange={formik.handleChange}
              error={formik.errors.nama_instansi}
              required
            />
            <Row gutter={16}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <FieldTextComponent
                  label="Satuan Kerja"
                  name="satuan_kerja"
                  value={formik.values.satuan_kerja}
                  onChange={formik.handleChange}
                  error={formik.errors.satuan_kerja}
                  required
                />
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <FieldTextComponent
                  label="Unit Kerja"
                  name="unit_kerja"
                  value={formik.values.unit_kerja}
                  onChange={formik.handleChange}
                  error={formik.errors.unit_kerja}
                  required
                />
              </Col>
            </Row>
            <FieldTextComponent
              label="Alamat Instansi"
              name="alamat_instansi"
              value={formik.values.alamat_instansi}
              onChange={formik.handleChange}
              error={formik.errors.alamat_instansi}
              required
            />
            <Row gutter={16}>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <FieldTextComponent
                  label="Provinsi"
                  name="provinsi"
                  value={formik.values.provinsi}
                  onChange={formik.handleChange}
                  error={formik.errors.provinsi}
                  required
                />
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <FieldTextComponent
                  label="Kota/Kabupaten"
                  name="kab_kota"
                  value={formik.values.kab_kota}
                  onChange={formik.handleChange}
                  error={formik.errors.kab_kota}
                  required
                />
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <FieldTextComponent
                  label="Kode Pos"
                  name="kode_pos"
                  value={formik.values.kode_pos}
                  onChange={formik.handleChange}
                  error={formik.errors.kode_pos}
                  required
                />
              </Col>
            </Row>



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
              addonBefore="(022)"
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
            {/* <FieldRadioComponent
              label="Jenis Pelatihan"
              name="jenis_pelatihan"
              value={formik.values.jenis_pelatihan}
              onChange={formik.handleChange}
              error={formik.errors.jenis_pelatihan}
              options={[
                { value: 'SIRUP', text: 'SIRUP' },
                { value: 'SPSE 4.3', text: 'SPSE 4.3' },
                { value: 'e-Purchasing', text: 'e-Purchasing' },
                { value: 'TEPRA', text: 'TEPRA' },
              ]}
              required
            /> */}

            <FieldSelectComponent
              label="Jenis Pelatihan"
              name="jenis_pelatihan"
              value={formik.values.jenis_pelatihan}
              onChange={formik.setFieldValue}
              error={formik.errors.jenis_pelatihan}
              options={store.jenisPelatihanStore.getData}
              // options={[
              //   { id: 1 ,value: 'SIRUP', text: 'SIRUP' },
              //   { id: 2, value: 'SPSE 4.3', text: 'SPSE 4.3' },
              //   { id: 3, value: 'e-Purchasing', text: 'e-Purchasing' },
              //   { id: 4, value: 'TEPRA', text: 'TEPRA' },
              // ]}
              required
            />

            <FieldTextComponent
              label="Nama Tempat Pelatihan"
              name="tempat_pelatihan"
              value={formik.values.tempat_pelatihan}
              onChange={formik.handleChange}
              error={formik.errors.tempat_pelatihan}
              required
            />
            <FieldTextAreaComponent
              label="Alamat Tempat Pelatihan"
              name="alamat_tempat_pelatihan"
              value={formik.values.alamat_tempat_pelatihan}
              onChange={formik.handleChange}
              error={formik.errors.alamat_tempat_pelatihan}
              required
            />
            <FieldUploadComponent
              label="Upload Surat Permohonan"
              name="surat_permohonan"
              value={formik.values.surat_permohonan}
              onChange={formik.setFieldValue}
              error={formik.errors.surat_permohonan}
              fileType=".pdf"
              required
            />

          </Col>
        </Row>
        {/* <Upload name= 'file'
              action= 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
              headers= {{
                authorization: 'authorization-text'
              }}
            >
              <Button type="primary">
                <Icon type="upload" /> Upload Surat Permohonan 
              </Button>
            </Upload> */}
        {/* <FormRegistrasiInstansiTableUserComponent 
              label="Anggota Pelatihan" 
            /> */}

        <Button htmlType="submit" type="primary"> Register </Button>
      </form>
    </React.Fragment>
  )
}

export default React.memo(observer(FormRegistrasiInstansiComponent))
