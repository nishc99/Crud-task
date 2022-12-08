import React, {useState , useEffect} from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { GrView } from 'react-icons/gr';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';

const Home = () => {
  const [users, setUser] = useState([]);
  
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">Sr. No</th>
              <th scope="col">Name</th>
              <th scope="col">Website</th>
              <th scope="col">Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.website}</td>
                <td>{user.phone}</td>
                <td>
                  <Link className="btn btn-primary me-2" to={`/users/${user.id}`}>
                    <GrView/> View
                  </Link>
                  <Link
                    className="btn btn-outline-primary me-2"
                    to={`/users/edit/${user.id}`}
                  >
                    <AiFillEdit/> Edit
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    <AiFillDelete/> Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Home;