import React, { Component } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Signup = () => (
  <div>
    <Link to="/login">
      <Button type="button" id="login-btn">
        Login
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
      <Form.Field>
        <label>Re-enter Password</label>
        <input placeholder="Re-enter Password" />
      </Form.Field>
      <Button type="submit">Sign Up</Button>
    </Form>
  </div>
);

export default Signup;
