import React from 'react'
import { Container } from 'react-bootstrap'
import { BasicForm, CustomButton, Headings } from '../components'
import { ImArrowRight2 } from "react-icons/im"
import { Link } from 'react-router-dom'

var otpFormfields = [
   {
      // 'label': "OTP",
      'type': "otp",
      'fieldname': "otp",
      'numinput': 5,
      "justify": "center"
   },
]


export default class OTPPage extends React.Component {
   render() {
      return (
         <Container fluid className="d-flex flex-column">
            <Headings title={<span>OTP<br />form</span>} className="my-auto"></Headings>
            <BasicForm className="mt-auto" formlist={otpFormfields}>
               <div className="text-center text-muted my-5">
                  <a><strong><p className="text-uppercase" style={{fontSize:"12px"}}>Resend OTP<br/>{"00:00"}</p></strong></a>
               </div>
               <CustomButton className="d-flex align-items-center w-100 mb-3 mt-5" type="submit" text="Submit">
                  <ImArrowRight2 style={{ marginLeft: "auto" }} />
               </CustomButton>
            </BasicForm>
         </Container>
      );
   }
}