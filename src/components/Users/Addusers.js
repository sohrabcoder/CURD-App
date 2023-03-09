import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Adduser = () => {
  let history = useHistory();

  const [user, setUsers] = useState({
    name: "",
    username: "",
    email: "",
    phone:"",
    website:""
  })
  const { name, username, email ,phone ,website} = user;

  const onInputChange = e => {
    setUsers({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:3002/users', user);
    history.push('/');
  };

  return (
    <div>
      <div className='container mt-5'>
        <div className='w-75 mx-auto shadow p-5'>
          <h2 className='text-center mb-4'>Add User</h2>

          <form onSubmit={e => onSubmit(e)}>
            <div className='form-group mb-3'>
              <input
                type="text"
                className='form-control form-control-lg'
                placeholder='Enter Name'
                name='name'
                value={name}
                onChange={e => onInputChange(e)}
              />

            </div>
            <div className='form-group mb-3'>
              <input
                type="text"
                className='form-control form-control-lg'
                placeholder='Enter username'
                name='username'
                value={username}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className='form-group mb-3'>
              <input
                type="text"
                className='form-control form-control-lg'
                placeholder='Enter email'
                name='email'
                value={email}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className='form-group mb-3'>
              <input
                type="text"
                className='form-control form-control-lg'
                placeholder='Enter phone'
                name='phone'
                value={phone}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className='form-group mb-3'>
              <input
                type="text"
                className='form-control form-control-lg'
                placeholder='Enter website'
                name='website'
                value={website}
                onChange={e => onInputChange(e)}
              />
            </div>
            <button className='btn btn-primary btn-block'>Add User</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Adduser;
