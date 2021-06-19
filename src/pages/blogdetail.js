import { Container, Image } from "react-bootstrap"
import coolimg from '../static/images/cool-background.png'
import { connect } from 'react-redux'
import { blogActions } from '../actions'
import React from "react"
import { Headings } from "../components"
import { Link } from 'react-router-dom';


class BlogDetailed extends React.Component {
   // constructor(props) {
   //    super(props);
   //    this.state = {
   //       selected: this.props.blog.entities.results ? this.props.blog.entities.results
   //          .find(obj => obj.id === Number(this.props.computedMatch.params.slug)) : null
   //    }
   // }

   componentDidMount() {
      // this.props.getBlog(this.props.computedMatch.params.slug, this.props.history)
   }

   render() {
      const { selected } = this.props.blog
      return (
         <Container className="h90vh">
            {selected ? <Container className="h90vh">
               <Link to="/">Home</Link>
               <Image className="m-auto box-shadow" fluid style={{ objectFit: 'cover', borderRadius: "45px" }} src={coolimg} />
               <Headings title={selected.title} subtitle={selected.description}></Headings><hr />
               <p>{selected.content}</p>
               <p>Author: {selected.author.first_name}</p>
            </Container> : null}
         </Container>
      )
   }
}

const mapStateToProps = state => {
   return {
      blog: state.blog,
   }
}
const mapDispatchToProps = dispatch => {
   return {
      // getBlog: payload => dispatch(blogActions.getDetailedBlog(payload)),
      setBlog: payload => dispatch(blogActions.setSingleBlog(payload)),
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(BlogDetailed)