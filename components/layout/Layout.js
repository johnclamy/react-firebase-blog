import { Container, Row, Col } from 'react-bootstrap'
import UpperNavbar from './UpperNavbar'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <UpperNavbar />
          <Header />
        </Col>
      </Row>
      {children}
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <Footer />
        </Col>
      </Row>
    </Container>
  )
}