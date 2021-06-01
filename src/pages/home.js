import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap';
import { CustomButton } from '../components';


class HomePage extends React.Component {
   render() {
      return (
         <Container fluid className="position-relative">
            <Row className="justify-content-center p-0">
               <Image className="px-0" style={{ height: "100vh", width: "auto", overflow:"hidden", paddingBottom:"90px", objectFit:'cover' }} src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" rounded />
               <Container fluid>
                  <Row className="justify-content-between position-absolute w-100" style={{bottom:"5px"}}>
                     <Col>
                        <CustomButton text="login" type="black" />
                     </Col>
                     <Col>
                        <CustomButton text="login" type="white" />
                     </Col>
                  </Row>
               </Container>
            </Row>
         </Container>
      );
   }
}

export default HomePage    
