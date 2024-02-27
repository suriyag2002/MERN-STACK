import './EmployeeList.css'
import logo from '../assets/dealsdray_logo.jpeg';
import profilePic from '../assets/Custom_profile_picture.webp';

const EmployeeList = () => {
  return (
    <>
    <nav className="glassmorphic-navbar">
        <div className="nav-left">
          <img src={logo} alt="Logo" className="logo" />
          <a href="#home">Home</a>
          <a href="#employee-list">Employee List</a>
        </div>
        <div className="nav-right">
          <span className="username">Hukum Gupta</span>
          <img src={profilePic} alt="Profile Pic" className="profile-pic" />
          <button className="logout-btn">Logout</button>
        </div>
      </nav>
      <div className="employee-list">
        <h2>Employee List</h2>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Designation</th>
              <th>Gender</th>
              <th>Course</th>
              <th>Create Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row - duplicate as needed */}
            <tr>
            <td><img src={profilePic} alt="Employee" style={{ width: '50px', height: '50px', borderRadius: '50%' }} /></td>
              <td>John Doe</td>
              <td>johndoe@example.com</td>
              <td>1234567890</td>
              <td>Manager</td>
              <td>Male</td>
              <td>MCA, BCA</td>
              <td>2024-02-25</td>
              <td>
                {/* Add action buttons or links here */}
                <button>Edit</button>
                <button>Delete</button>
              </td>
              
            </tr>
            <tr>
              <td><img src={profilePic} alt="Employee" style={{ width: '50px', height: '50px', borderRadius: '50%' }} /></td>
              <td>Alex Johnson</td>
              <td>alexjohnson@example.com</td>
              <td>1122334455</td>
              <td>Sales</td>
              <td>Male</td>
              <td>MCA, BSC</td>
              <td>2024-03-15</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td><img src={profilePic} alt="Employee" style={{ width: '50px', height: '50px', borderRadius: '50%' }} /></td>
              <td>Alex Johnson</td>
              <td>alexjohnson@example.com</td>
              <td>1122334455</td>
              <td>Sales</td>
              <td>Male</td>
              <td>MCA, BSC</td>
              <td>2024-03-15</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default EmployeeList
