import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
//import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const SignUpForm = ({
  onSubmit,
  onChange,
  // onChangeDate,
  errors,
  user
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Sign Up</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="First Name"
          name="first_name"
          errorText={errors.first_name}
          onChange={onChange}
          value={user.first_name}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Last Name"
          name="last_name"
          errorText={errors.last_name}
          onChange={onChange}
          value={user.last_name}
        />
      </div>

      {/* <DatePicker
        hintText="Date of Birth"
        name="dob"
        mode="landscape"
        onChange={onChangeDate}
        defaultValue={user.dob}
       /> */}

      <div className="field-line">
        <TextField
          floatingLabelText="Username"
          name="username"
          errorText={errors.username}
          onChange={onChange}
          value={user.username}
        />
      </div>


      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Create New Account" primary />
      </div>

      <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>

    </form>
  </Card>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  // onChangeDate: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
