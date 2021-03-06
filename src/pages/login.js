import React from 'react'
import { Container } from 'react-bootstrap'
import { BasicForm, CustomButton, Headings } from '../components'
import { ImArrowRight2 } from "react-icons/im"
import { connect } from 'react-redux'
import { authActions } from '../actions'
import { Redirect } from 'react-router'
import { localAuthObject } from '../utils'
import * as Yup from 'yup'



var loginFormfields = [
   {
      'label': "Phone number",
      'type': "phonenumber",
      'fieldname': "username",
      'validation': Yup.string().required("Phone Number is Required"),
   },
   {
      'label': "Password",
      'type': "password",
      'fieldname': "password",
      'validation': Yup.string().required("Required"),
   },
   // {
   //    'label': "OTP",
   //    'type': "otp",
   //    'fieldname': "otp",
   //    'numinput': 6,
   //    "justify":"center"
   // },
]


class LoginPage extends React.Component {
   render() {
      return (
         <Container fluid>
            {
               !localAuthObject.token ? <Container fluid className="d-flex flex-column h100vh">
                  <Headings title="login" subtitle="or Register" href="/register" className="my-auto"></Headings>
                  <BasicForm className="mt-auto" formlist={loginFormfields} {...this.props} onSubmit={this.props.onSuccess}>
                     <CustomButton className="my-3 mt-5 d-flex align-items-center" type="submit" text="Submit">
                        <ImArrowRight2 style={{ marginLeft: "auto" }} />
                     </CustomButton>
                  </BasicForm>
               </Container> : <Redirect to={{
                  pathname: "/",
                  state: { from: this.props.location }
               }} />
            }
         </Container>
      );
   }
}

// const mapStateToProps = state => ({
//    auth: state.auth
// })

const mapDispatchToProps = dispatch => ({
   onSuccess: (payload) => dispatch(authActions.loginUser(payload)),
})
export default connect(null, mapDispatchToProps)(LoginPage)