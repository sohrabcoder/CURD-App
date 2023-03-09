import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import { Link , useHistory} from 'react-router-dom';

const Home = () => {
  let history = useHistory();

const [user , setUsers] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3002/users`)
        .then((res) => {
            console.log(res,"rty")
            setUsers(res.data.reverse())
        })
        .catch((err) => {
            console.log(err,"err")
        })
    },[])
    console.log(user,"user")


    useEffect(() => {
      loadUsers();
    }, []);

    const loadUsers = async () => {
      const result = await axios.get("http://localhost:3002/users");
      setUsers(result.data.reverse());
    };


    const deleteUser = async id => {
      await axios.delete(`http://localhost:3002/users/${id}`);
      loadUsers();
    };


  return (
    <div>
      <div 
      className="container"
      style={{display:"flex",justifyContent:"center",alignItems:"center", margin:"100px"}}
      >
        <table className="table border shadow">
          <thead  style={{backgroundColor:"black" , color:"white"}}>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email Id</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {user && user.map((user, index) => (
              
                <tr>
                  {/* { console.log(user, "dasa") } */}
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link className='btn btn-primary' to={`/ViewUser/${user.id}`}>View</Link>
                    <Link className='btn btn-outline-primary mx-2' to={`/EditUser/${user.id}`}>Edit</Link>
                    <Link className='btn btn-danger'  onClick={() => deleteUser(user.id)}>Delete</Link>
                  </td>
                </tr>
               ))} 
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home;