import React from 'react';
import Header from './Header';
import Create from './Create';
import { Grid, Row, Col } from 'react-bootstrap';

function App() {
  return(
    <div className="container">
      <Grid fluid={true}>
        <Row>
          <Col md={12}>
            <Header/>
            <Create/>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
