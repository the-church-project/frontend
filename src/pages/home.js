import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { CustomCard, CustomCarousel, Headings } from '../components'
import { connect } from 'react-redux'
import { getBlog, logout } from '../actions'
import { withRouter } from 'react-router-dom';
// import InfiniteScroll from 'react-infinite-scroll-component';

class HomePage extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         submitErrors: []
      }
   }

   componentDidMount() {
      this.props.getBlog()
   }

   render() {
      // const sample = [...Array(2).keys()];
      return (
         <Container>
            {/* <a onClick={this.props.logout(this.props.history)}>Logout</a> */}
            <Button variant="link" onClick={() => this.props.logout(this.props.history)}>Logout</Button>
            { console.log(this.props)}
            <Headings className="mt-5" title="welcome" subtitle="Upcoming events" icon={false}></Headings>
            <Row>
               <Col>
                  <CustomCarousel />
               </Col>
            </Row><hr />
            <Headings className="mt-2" title="text and notifications" icon={false}></Headings>
            <Row>
               {this.props.bloglist.results ? this.props.bloglist.results.map((item, key) => (
                  <Col md={6} lg={4} key={key} className="my-2">
                     <CustomCard {...item} id={key} />
                  </Col>
               )) :
                  <Col className="my-2">
                     {/* <CustomCard title="No text Notifications" /> */}
                     <h1 className="text-muted text-center w-100">No text Notifications</h1>
                  </Col>}
            </Row>
         </Container >
      )
   }
}

const mapStateToProps = state => {
   return {
      bloglist: state.blog.entities,
   }
}
const mapDispatchToProps = dispatch => {
   return {
      getBlog: () => dispatch(getBlog()),
      logout: (history) => dispatch(logout(history))
   }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage))