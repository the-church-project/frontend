import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CustomCard, CustomCarousel, Headings } from '../components'
import { connect } from 'react-redux'
import { blogActions } from '../actions'
import { Link, withRouter } from 'react-router-dom';
// import InfiniteScroll from 'react-infinite-scroll-component';

class HomePage extends React.Component {

   componentDidMount() {
      this.props.getBlog()
      // this.props.clearSelected()
   }

   render() {
      // const sample = [...Array(2).keys()];
      return (
         <Container className="mb-6">
            {/* <Button variant="link" onClick={() => this.props.logout(this.props.history)}>Logout</Button> */}
            <Headings className="mt-5" title="welcome" subtitle="Upcoming events" icon={false}></Headings>
            <Row>
               <Col>
                  <CustomCarousel />
               </Col>
            </Row><hr />
            <Headings className="mt-2" title="text and notifications" icon={false}></Headings>
            <Row>
               {this.props.bloglist.results ? this.props.bloglist.results.map((item, key) => (
                  <Col md={6} key={key} className="my-2">
                     <Link to={`/blog/${item.id}`} onClick={() => this.props.setSelected({ item: item })}><CustomCard {...item} id={key} /></Link>
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
      getBlog: () => dispatch(blogActions.getBlog()),
      setSelected: (payload) => dispatch(blogActions.setSingleBlog(payload)),
      clearSelected: () => dispatch(blogActions.clearSelected())
   }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage))