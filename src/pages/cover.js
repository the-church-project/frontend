import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap';
import { CustomButton } from '../components';
import indeximg from '../static/images/indexbg.png'


class CoverPage extends React.Component {
   render() {
      return (
         <Container fluid className="position-relative">
            <Row className="justify-content-center p-0">
               <Image className="px-0" style={{ height: "100vh", width: "100%", overflow: "hidden", paddingBottom: "90px", objectFit: 'cover' }} src={indeximg} rounded />
               <Container fluid>
                  <Row className="justify-content-between position-absolute w-100" style={{ bottom: "20px" }}>
                     <Col>
                        <CustomButton text="login" variant="outline-dark" href="/login" />
                     </Col>
                     <Col>
                        <CustomButton text="Register" variant="dark" href="/register" />
                     </Col>
                  </Row>
               </Container>
            </Row>
         </Container>
      );
   }
}

export default CoverPage
