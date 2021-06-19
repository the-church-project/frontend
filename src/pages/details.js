import { Container, ListGroup } from "react-bootstrap";
import { Headings } from "../components";
import { authActions } from '../actions'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'


const UserDetailsPage = (props) => {
   return (
      <Container className="d-flex flex-column h90vh pb-6" >
         <Headings className="mt-5" title="Details" subtitle="About me"></Headings>
         <ListGroup variant="flush" className="mt-5">
            <ListGroup.Item action href="#/myprofile">
               My Profile
            </ListGroup.Item>
            <ListGroup.Item action href="#/myfamily">
               My Family
            </ListGroup.Item>
         </ListGroup>
         <ListGroup variant="flush" className="mt-auto mb-5">
            <ListGroup.Item action onClick={() => props.logout({ history: props.history })}>
               Logout
            </ListGroup.Item>
         </ListGroup>
      </Container>
   )
}

const mapDispatchToProps = dispatch => {
   return {
      logout: (payload) => dispatch(authActions.logout(payload))
   }
}
export default withRouter(connect(null, mapDispatchToProps)(UserDetailsPage))