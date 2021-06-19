import React from 'react'
import { Container } from 'react-bootstrap'
import { BasicForm, CustomButton, Headings } from '../components'
import { ImArrowRight2 } from "react-icons/im"
import { connect } from 'react-redux'
import { authActions } from '../actions'
import { Redirect } from 'react-router'
import { localAuthObject } from '../utils'
import * as Yup from 'yup'

var registerFormfields = [
   {
      'label': "Phone number",
      'type': "phonenumber",
      'fieldname': "phone_number",
      'validation': Yup.string().required("Phone Number is Required"),
   },
   {
      'label': "First Name",
      'type': "text",
      'fieldname': "first_name",
      'validation': Yup.string().required("First Name is Required").min(2, 'Too short!').max(50, 'Too Long!'),
   },
   {
      'label': "Last Name",
      'type': "text",
      'fieldname': "last_name",
      'validation': Yup.string().required("Last Name is Required").min(2, 'Too short!').max(50, 'Too Long!'),
   },
   {
      'label': "Enter Password",
      'type': "password",
      'fieldname': "password",
      'validation': Yup.string().required("Required").min(8, 'Minimum 8 characters').max(50, 'Too Long!')
      // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
   },
   {
      'label': "Re-enter Password",
      'type': "password",
      'fieldname': "password2",
      'validation': Yup.string().required("Required")
         .oneOf([Yup.ref('password'), null], 'Passwords do not match'),
   },
   // {
   //    'label': "OTP",
   //    'type': "otp",
   //    'fieldname': "otp",
   //    'numinput': 6,
   //    "justify":"center"
   // },
]

// const customValidator = value => {
//    let errors = {}
//    if (value.password1 !== value.password2) {
//       errors.password2 = "Passwords do not match"
//    }
//    return errors
// }

class RegisterPage extends React.Component {
   render() {
      return (
         <Container fluid>
            {
               !localAuthObject.token ?
                  <Container fluid className="d-flex flex-column h100vh">
                     <Headings title="Register" subtitle="or Login" href="/login" className="my-auto"></Headings>
                     <BasicForm className="mt-auto" formlist={registerFormfields} {...this.props} onSubmit={this.props.onSubmit}>
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

const mapDispatchToProps = dispatch => ({
   onSubmit: (payload) => dispatch(authActions.registerUser(payload)),
})
export default connect(null, mapDispatchToProps)(RegisterPage)