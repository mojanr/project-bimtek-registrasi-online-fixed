import React from 'react'
import Styled from 'styled-components'
import FormLoginComponent from '../component/form-login.component'
import LandingFooterComponent from '../../../commons/component/landing-footer/landing-footer.component'

const LoginHeader = Styled.div`
    text-align: center;
    padding: 25px 0;
`

const LoginForm = Styled.div`
    width: 325px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 8px 16px -4px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
    background-color: white;
    min-width: 240px;
    border-radius: 3px;
    padding: 20px 30px;
    margin-bottom: 20px;
`

const LoginFooter = Styled.div`
    text-align: center;
    width: 450px;
    min-width: 240px;
    margin-left: auto;
    margin-right: auto;
    font-weight: bold;
`

const PageLogin = () => {
    return (
        <React.Fragment>
            <LoginHeader>
                <h1> LOGIN </h1>
            </LoginHeader>
            <LoginForm>
                <div style={{ textAlign: 'center', padding: '15px 0' }}>
                    <h5> Login To Continue To Use App </h5>
                </div>
                <FormLoginComponent />
            </LoginForm>
            {/* <LoginFooter>
                BIRO PENGADAAN BARANG/JASA
                <br />
                SEKRETARIAT DAERAH PROVINSI JAWABARAT 
                <br /> 
                2019
            </LoginFooter> */}
            <LandingFooterComponent />
        </React.Fragment>
    )
}

export default React.memo(PageLogin)
