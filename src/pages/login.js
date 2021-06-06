import React from 'react'
import { Container } from 'react-bootstrap'
import { BasicForm, CustomButton, Headings } from '../components'
import { ImArrowRight2 } from "react-icons/im"
import { connect } from 'react-redux'
import { loginUser } from '../actions'


var loginFormfields = [
   {
      'label': "Phone number",
      'type': "phonenumber",
      'fieldname': "username"
   },
   {
      'label': "Password",
      'type': "password",
      'fieldname': "password"
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
         <Container fluid className="d-flex flex-column ">
            <Headings title="login" subtitle="or Register" href="/register" className="my-auto"></Headings>
            <BasicForm className="mt-auto" formlist={loginFormfields} {...this.props} onSubmit={this.props.onSuccess}>
               <CustomButton className="my-3 mt-5 d-flex align-items-center" type="submit" text="Submit">
                  <ImArrowRight2 style={{ marginLeft: "auto" }} />
               </CustomButton>
            </BasicForm>
         </Container>
      );
   }
}

const mapStateToProps = state => ({
   auth: state.auth
})

const mapDispatchToProps = dispatch => ({
   onSuccess: (payload) => dispatch(loginUser(payload)),
   // logout: () => dispatch(logout())
})
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)