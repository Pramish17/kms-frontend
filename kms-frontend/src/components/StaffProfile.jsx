import React from 'react';

const Profile = () => {
  const staffProfile = {
    name: 'John Shrestha',
    position: 'Software Engineer',
    department: 'Engineering',
    email: 'john.shrestha@example.com',
    age: 30,
    gender: 'Male',
    birthDate: '1992-05-15',
    address: 'St. Mary Road, Ealing',
    phoneNumber: '+44 15485478',
    nationality: 'British',
    postCode: 'W5 5RF',
    bio: 'I am a passionate software engineer with expertise in web development...',
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1 className="text-center">{staffProfile.name}</h1>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p><strong>Position:</strong> {staffProfile.position}</p>
              <p><strong>Department:</strong> {staffProfile.department}</p>
              <p><strong>Email:</strong> {staffProfile.email}</p>
              <p><strong>Age:</strong> {staffProfile.age}</p>
              <p><strong>Gender:</strong> {staffProfile.gender}</p>
              <p><strong>Birth Date:</strong> {staffProfile.birthDate}</p>
              <p><strong>Phone Number:</strong> {staffProfile.phoneNumber}</p>
            </div>
            <div className="col-md-6">
              <p><strong>Address:</strong> {staffProfile.address}</p>
              <p><strong>Nationality:</strong> {staffProfile.nationality}</p>
              <p><strong>Post Code:</strong> {staffProfile.postCode}</p>
            </div>
          </div>
          <hr />
          <div>
            <h3>Bio</h3>
            <p>{staffProfile.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
