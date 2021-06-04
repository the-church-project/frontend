import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CustomCard, CustomCarousel, Headings } from '../components'
import { connect } from 'react-redux'
import { getBlog } from '../actions'
// import InfiniteScroll from 'react-infinite-scroll-component';

class HomePage extends React.Component {

   componentDidMount() {
      const init = "jell"
      this.props.getBlog(init)
   }

   handleLoading = () => {
      const needdata = this.state.offset + this.state.perPage;
      this.setState({
         data: this.props.bloglist.slice(0, needdata)
      })
   }

   render() {
      const sample = [...Array(2).keys()];
      return (
         <Container>
            <Headings className="mt-5" title="welcome" subtitle="Upcoming events" icon={false}></Headings>
            <Row>
               <Col>
                  <CustomCarousel />
               </Col>
            </Row><hr />
            <Headings className="mt-2" title="text and notifications" icon={false}></Headings>
            <Row>
               {this.props.bloglist ? this.props.bloglist.map((item, key) => (
                  <Col md={6} lg={4} key={key} className="my-2">
                     <CustomCard {...item} id={key} />
                  </Col>
               )) :
                  <Col md={6} lg={4} className="my-2">
                     {/* <CustomCard title="No text Notifications" /> */}
                     <h1 className="text-muted text-center w-100">No text Notifications</h1>
                  </Col>}
            </Row>
         </Container>
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
      getBlog: (cred) => dispatch(getBlog(cred)),
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)