import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { BasicForm, CustomButton } from '../components'
import { ImArrowRight2 } from "react-icons/im"
import { BsPeople } from "react-icons/bs"

var profileFormfields = [
   {
      'label': "Phone number",
      'type': "phonenumber",
      'fieldname': "phone_number",
      "initialvalue": "+91645484",
      "readonly": "readonly",
   },
   {
      'label': "First Name",
      'type': "text",
      "readonly": true,
      'fieldname': "first_name"
   },
   {
      'label': "Last Name",
      'type': "text",
      'fieldname': "last_name",
      "readonly": true,
      "initialvalue": "leo"
   },
   // {
   //    'label': "OTP",
   //    'type': "otp",
   //    'fieldname': "otp",
   //    'numinput': 6,
   //    "justify":"center"
   // },
]


export default class ProfilePage extends React.Component {
   render() {
      return (
         <Container fluid className="d-flex flex-column h90vh pb-6">
            <Image height="250px" width="250px" className="m-auto box-shadow" style={{ objectFit: 'cover', border:"7px solid white" }} src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" roundedCircle />
            <BasicForm className="mt-auto" formlist={profileFormfields}>
               <CustomButton className="my-3 mt-5 d-flex align-items-center" type="submit" text="Okay" href="/">
                  <ImArrowRight2 style={{ marginLeft: "auto" }} />
               </CustomButton>
            </BasicForm>
            {/* <CustomButton className="my-3 d-flex align-items-center" variant="outline-dark" text="See Family Details" href="#">
               <BsPeople style={{ marginLeft: "auto" }} />
            </CustomButton> */}
         </Container>
      );
   }
}