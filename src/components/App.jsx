import React from 'react';
import Header from './Header';
import { Grid, Row, Col } from 'react-bootstrap';


function App() {
  return(
    <div class="container">
      <Grid fluid={true}>
        <Row>
          <Col md={12}>
            <Header/>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
