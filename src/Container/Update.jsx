
import './Dashboard.css';
import logo from '../assets/dealsdray_logo.jpeg';
import profilePic from '../assets/Custom_profile_picture.webp';

const Update = () => {
  return (
    <>
    <div>

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
      <div class="cardclass">
    <form>
    <h2>Create Employee</h2>
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter name"/>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter email"/>
        </div>
        <div class="form-group">
            <label for="mobile">Mobile Number:</label>
            <input type="tel" id="mobile" name="mobile" placeholder="Enter mobile number"/>
        </div>
        <div class="form-group">
            <label for="department">Designation:</label>
            <select id="department" name="department" style={{color:'black'}}>
                <option value="hr">HR</option>
                <option value="manager">Manager</option>
                <option value="sales">Sales</option>
            </select>
        </div>
        <fieldset class="form-group">
            <legend>Gender:</legend>
            <label for="male">Male</label>
            <input type="radio" id="male" name="gender" value="male"/>
            <label for="female">Female</label>
            <input type="radio" id="female" name="gender" value="female"/>
        </fieldset>
        <div class="form-group">
    <label for="course">Course:</label>
    <div>
        <input type="checkbox" id="mca" name="course" value="MCA"/>
        <label for="mca">MCA</label>
    </div>
    <div>
        <input type="checkbox" id="bca" name="course" value="BCA"/>
        <label for="bca">BCA</label>
    </div>
    <div>
        <input type="checkbox" id="bsc" name="course" value="BSC"/>
        <label for="bsc">BSC</label>
    </div>
</div>

<div class="form-group">
    <label for="imgUpload">Upload Image:</label>
    <input type="file" id="imgUpload" name="imgUpload" accept="image/*"/>
</div>

        <button type="submit">Update</button>
    </form>
</div>
     
    </div>
    </>
  );
};

export default Update;
