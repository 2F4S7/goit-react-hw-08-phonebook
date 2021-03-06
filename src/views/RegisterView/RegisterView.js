import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { TextField, Button } from '@material-ui/core';
import styles from './RegisterView.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={styles.formBox}>
        <h1 className={styles.title}>Sign Up</h1>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <TextField
            label="Name"
            variant="outlined"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            margin="dense"
            color="secondary"
            fullWidth
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            margin="dense"
            color="secondary"
            fullWidth
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            margin="dense"
            color="secondary"
            fullWidth
          />

          <Button
            className={styles.button}
            variant="contained"
            color="primary"
            type="submit"
            size="large"
          >
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
