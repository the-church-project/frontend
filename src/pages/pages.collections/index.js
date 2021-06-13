import { Container } from 'react-bootstrap';
import { Navigation } from '../../components'
import CompleteRouter, { homeRoutes } from '../../routers'

export const Scaffold = props => {
   return (
      <Container fluid className="100vh">
         <CompleteRouter routesList={homeRoutes} />
         <Navigation />
      </Container>
   )
}
