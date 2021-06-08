import React from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import './styles.css';

const Home = (props) => {
  console.log(props);
  return <Redirect to="/login">Login</Redirect>;
};

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    errorMsg: '',
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleLogin = (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    if (email === 'admin@example.com' && password === 'password') {
      this.setState({
        errorMsg: '',
      });
      this.props.history.push('/dashboard');
    } else {
      this.setState({
        errorMsg: 'Invalid login credentials.',
      });
    }
  };

  render() {
    const { email, password, errorMsg } = this.state;
    return (
      <div>
        <Link to="/">Go back to Home</Link>
        <h1>Login</h1>
        {errorMsg && <p className="error-msg">{errorMsg}</p>}
        <form onSubmit={this.handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const dashboard = () => {
  return <p>You're logged in. Welcome back!</p>;
};

const NotFound = () => {
  return <p>Page Not found.</p>;
};

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={dashboard} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
