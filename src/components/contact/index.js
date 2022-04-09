import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

export default () => (
  <div>
    <div className='row'>
      <Col sm={6}>
        <Form>
          <h1>Send us a message.</h1>
          <Form.Group as={Col} controlId='formGridName'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='password' placeholder='Enter Your Name' />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Enter Your Email' />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridMessage'>
            <Form.Label>Message</Form.Label>
            <Form.Control as='textarea' rows='3' />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Col>
      <Col sm={6}>
        <div class='contact_address'>
          <h2>Contact Information</h2>
          <div class='head_office'>
            <h4>Head Office</h4>
            <p>
              Mobile:
              <span>+65 66666666</span>{' '}
            </p>
            <p>
              Email:
              <span>
                <a href='mailto:demomail@onestop.com'> demomail@onestop.com</a>
              </span>
            </p>
            <p>
              Address: 
              <span>220, Smith Str, Singapore</span>{' '}
            </p>
          </div>
          <div class='head_office'>
            <h4>Corporate Office</h4>
            <p>
              Mobile:
              <span>+65 66665555</span>{' '}
            </p>
            <p>
              Email:
              <span>
                <a href='mailto:demomail@onestop.com'> demomail@onestop.com</a>
              </span>
            </p>
            <p>
              Address:
              <span>120, Cantoment Close, Singapore</span>{' '}
            </p>
          </div>
        </div>
      </Col>
    </div>
  </div>
);
