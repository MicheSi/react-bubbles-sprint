import React, {useState} from "react";
import axios from 'axios';

const Login = (props) => {
  const initialState = {
    credentials: {
      username: '',
      password: ''
    },
    isLoading: false
  }

  const [user, setUser] = useState(initialState)

  const handleChange = e => {
    setUser({
      credentials: {
        ...user.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  const login = e => {
    e.preventDefault();
    setUser({
      ...user.credentials,
      isLoading: true
    })
    axios
    .post('http://localhost:5000/api/login', user.credentials)
    .then(res => {
      console.log('Response from axios', res)
      localStorage.setItem('token', res.data.payload);
      props.history.push('/bubbles')
      setUser(initialState)
    })
    .catch(err => console.log('Error occurred', err))
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div className='loginForm'>
        <form onSubmit={login}>
          <label htmlFor='username'>Username: </label>
          <input
            required
            id='username'
            type='text'
            name='username'
            value={user.username}
            onChange={handleChange}
          />
          <label htmlFor='password'>Password: </label>
          <input
            required
            id='password'
            type='password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />
          <button type='submit'>Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
