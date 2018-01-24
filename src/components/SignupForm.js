import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const LoginForm = () => (
  <div className='signup-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.signup-form {
        height: 100%;
      }
      div.signup-form {
        border: none;
      }
    `}</style>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='purple' textAlign='center'>
          {' '}Sign up for an account
        </Header>
        <Form size='large'>
          <Segment stacked>
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='Name'
          />
          <Form.Input
            fluid
            icon='home'
            iconPosition='left'
            placeholder='City'
          />
          <Form.Input
            fluid
            icon='home'
            iconPosition='left'
            placeholder='State'
          />
          <Form.Input
            fluid
            icon='home'
            iconPosition='left'
            placeholder='Zip'
          />
            <Form.Input
              fluid
              icon='mail outline'
              iconPosition='left'
              placeholder='E-mail address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Confirm Password'
              type='password'
            />

            <Button color='purple' fluid size='large'>Signup</Button>
          </Segment>
        </Form>
        <Message>
          Already have an account? <Link to="/login">Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginForm
