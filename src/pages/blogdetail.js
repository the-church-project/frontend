import { Container, Image } from "react-bootstrap"
import coolimg from '../static/images/cool-background.png'
import { connect } from 'react-redux'
import { getBlog, logout } from '../actions'

const BlogDetailed = props => {
   return (
      <Container className="h90vh">
         {/* {console.log(props.computedMatch.params.id)} */}
         <Image className="m-auto box-shadow" fluid style={{ objectFit: 'cover', borderRadius:"45px"}} src={coolimg} />
      </Container>
   )
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
export default connect(mapStateToProps, mapDispatchToProps)(BlogDetailed)