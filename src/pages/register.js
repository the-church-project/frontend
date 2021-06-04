import React from 'react'
import { Container } from 'react-bootstrap'
import { BasicForm, CustomButton, Headings } from '../components'
import { ImArrowRight2 } from "react-icons/im"

var registerFormfields = [
   {
      'label': "Phone number",
      'type': "phonenumber",
      'fieldname': "phonenumber"
   },
   {
      'label': "First Name",
      'type': "text",
      'fieldname': "firstname"
   },
   {
      'label': "Last Name",
      'type': "text",
      'fieldname': "lastname"
   },
   {
      'label': "Enter Password",
      'type': "password",
      'fieldname': "password1"
   },
   {
      'label': "Re-enter Password",
      'type': "password",
      'fieldname': "password2"
   },
   // {
   //    'label': "OTP",
   //    'type': "otp",
   //    'fieldname': "otp",
   //    'numinput': 6,
   //    "justify":"center"
   // },
]


export default class RegisterPage extends React.Component {
   render() {
      return (
         <Container fluid className="d-flex flex-column ">
            <Headings title="Register" subtitle="or Login" href="/login" className="my-auto"></Headings>
            <BasicForm className="mt-auto" formlist={registerFormfields}>
               <CustomButton className="my-3 mt-5 d-flex align-items-center" type="submit" text="Submit" href="/otp">
                  <ImArrowRight2 style={{marginLeft:"auto"}} />
               </CustomButton>
            </BasicForm>
         </Container>
      );
   }
}