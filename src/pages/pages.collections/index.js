import { Container } from 'react-bootstrap';
import { Navigation, TopBar } from '../../components'
import CompleteRouter, { homeRoutes } from '../../routers'

export const Scaffold = props => {
   return (
      <Container fluid className="100vh position-relative">
         <TopBar />
         <CompleteRouter routesList={homeRoutes} />
         <Navigation />
      </Container>
   )
}

export const UserDetails = props => {
   return (
      <Container fluid className="100vh position-relative">
         <TopBar />
         <CompleteRouter routesList={homeRoutes} />
         <Navigation />
      </Container>
   )
}
