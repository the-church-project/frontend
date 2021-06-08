import React from 'react'
import { Container } from 'react-bootstrap'
import { BasicForm, CustomButton, Headings } from '../components'
import { ImArrowRight2 } from "react-icons/im"

var famRegisterFormfields = [
   {
      // 'label': "OTP",
      'type': "otp",
      'fieldname': "uid",
      'numinput': 5,
      "justify": "center"
   },
]


export default class FamRegisterPage extends React.Component {
   render() {
      return (
         <Container fluid className="d-flex flex-column">
            <Headings title={<span>Family<br />Card</span>} className="my-auto"></Headings>
            {/* <CustomButton className="d-flex align-items-center justify-content-center py-4 w-100 mb-5" variant="outline-dark" muted text="Open QR scanner">
            </CustomButton>
            <div className="text-center text-muted my-auto">
               <p className="text-uppercase" style={{ fontSize: "12px", fontWeight: "bold" }}>Or<br />Enter the unique code</p>
            </div> */}
            <BasicForm className="" formlist={famRegisterFormfields}>
               <div className="text-center text-muted my-5">
                  <a className="text-uppercase spl" href="#/" style={{ fontSize: "12px", fontWeight: "bold" }}>Skip for now</a>
               </div>
               <CustomButton className="d-flex align-items-center w-100 mb-3 mt-5" variant="outline-dark" text="Create new" href="/myfamily">
                  <ImArrowRight2 style={{ marginLeft: "auto" }} />
               </CustomButton>
               <CustomButton className="d-flex align-items-center w-100 mb-3" type="submit" variant="dark" text="Submit">
                  <ImArrowRight2 style={{ marginLeft: "auto" }} />
               </CustomButton>
            </BasicForm>
         </Container>
      );
   }
}