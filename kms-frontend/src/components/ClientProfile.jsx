import React from 'react';

const ClientProfile = () => {
  const clientProfile = {
    name: 'Alisha Rana',
    position: 'Client',
    email: 'alisha.rana@example.com',
    age: 25,
    gender: 'Female',
    birthDate: '1999-05-15',
    address: 'Westminster, London',
    phoneNumber: '+44 15564854',
    nationality: 'British',
    postCode: 'R1 5TT',
    bio: 'Hi, I am Alisha Rana.',
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1 className="text-center">{clientProfile.name}</h1>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p><strong>Position:</strong> {clientProfile.position}</p>
              <p><strong>Email:</strong> {clientProfile.email}</p>
              <p><strong>Age:</strong> {clientProfile.age}</p>
              <p><strong>Gender:</strong> {clientProfile.gender}</p>
              <p><strong>Birth Date:</strong> {clientProfile.birthDate}</p>
              <p><strong>Phone Number:</strong> {clientProfile.phoneNumber}</p>
            </div>
            <div className="col-md-6">
              <p><strong>Address:</strong> {clientProfile.address}</p>
              <p><strong>Nationality:</strong> {clientProfile.nationality}</p>
              <p><strong>Post Code:</strong> {clientProfile.postCode}</p>
            </div>
          </div>
          <hr />
          <div>
            <h3>Bio</h3>
            <p>{clientProfile.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
