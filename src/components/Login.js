import React, { Component } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Login = () => (
  <div>
    <Link to="/signup">
      <Button type="button" id="sign-up-btn">
        Sign up
      </Button>
    </Link>
    <Form>
      <Form.Field>
        <label>Email</label>
        <input placeholder="Email" />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder="Password" />
      </Form.Field>
      <Button type="submit">Log in</Button>
    </Form>
  </div>
);

export default Login;
