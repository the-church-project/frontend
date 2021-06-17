import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { BasicForm, CustomButton } from '../components'
import coolimg from '../static/images/cool-background.png'


var famCreateFormfields = [
   {
      'label': "Family Name",
      'type': "text",
      'fieldname': "family_name",
      "initialvalue": "",
      "readonly": true,
   },
   {
      'label': "Family Card Number",
      'type': "number",
      "readonly": true,
      'fieldname': "card_number",
      "initialvalue": "",
      "readonly": true,
   },
   // {
   //    'label': "Family card Verified",
   //    'type': "checkbox",
   //    'fieldname': "verified",
   //    "initialvalue": ""
   // },
   {
      'label': "Shareable Hash",
      'type': "otp",
      'fieldname': "hash_number",
      "initialvalue": "123456",
      "readonly": true,
      "justify":"center",
      'numinput': 6,
   },
]


export default class FamilyPage extends React.Component {
   render() {
      return (
         <Container fluid className="d-flex flex-column h90vh pb-6">
            {/* <Headings title={<span>Family<br />Card</span>} className="my-auto"></Headings> */}
            <Image className="m-auto box-shadow" fluid style={{ objectFit: 'cover', border: "7px solid white"}} src={coolimg} rounded />
            {/* <CustomButton className="d-flex align-items-center justify-content-center py-4 w-100 mb-5" variant="outline-dark" muted text="Show QR"/> */}
            <BasicForm className="" formlist={famCreateFormfields}>
               <CustomButton className="d-flex align-items-center justify-content-center mb-3 mt-5" type="submit" variant="dark" text="Okay" href="/">
                  {/* <ImArrowRight2 style={{ marginLeft: "auto" }} /> */}
               </CustomButton>
            </BasicForm>
         </Container>
      );
   }
}