import React, { useState } from 'react';

const StaffBiographyStaffPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchDate, setSearchDate] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDateSearch = (event) => {
    setSearchDate(event.target.value);
  };

  const staffData = [
    {
      title: 'Craig Buchholz [CEO]',
      description: 'Passionate web developer with expertise in front-end technologies and a strong background in UI/UX design.',
      image: '..\\src\\assets\\img\\profile.jpg',
      joinedDate: '2002-01-02',  
    },
    {
        title: 'Pramish Thapa [HR]',
        description: 'Dynamic human resources professional with expertise in talent acquisition, employee relations, and HR policy development.',
        image: '..\\src\\assets\\img\\profile.jpg',
        joinedDate: '2002-09-01',  
      },
      {
        title: 'Prakash Thapa [Project Manager]',
        description: 'Dedicated project manager with a proven track record of successfully leading cross-functional teams to deliver high-quality projects on time.',
        image: '..\\src\\assets\\img\\profile.jpg',
        joinedDate: '2002-10-06',  
      },
      {
        title: 'Sneha Sharma [Staff]',
        description: 'Innovative data scientist with a deep understanding of machine learning algorithms and a knack for deriving valuable insights from complex datasets.',
        image: '..\\src\\assets\\img\\profile.jpg',
        joinedDate: '2010-05-01',  
      },
      {
        title: 'Binod Chaudhary [Staff]',
        description: 'Versatile marketing specialist with experience in digital marketing, content creation, and social media management.',
        image: '..\\src\\assets\\img\\profile.jpg',
        joinedDate: '2011-01-04',  
      },
      {
        title: 'Roshan Rana [Staff]',
        description: 'Motivated sales executive with a strong background in B2B sales and a proven ability to exceed revenue targets.',
        image: '..\\src\\assets\\img\\profile.jpg',
        joinedDate: '2021-04-12', 
      },
   
  ];

  const filteredStaff = staffData.filter((staff) =>
    staff.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    staff.joinedDate.includes(searchDate)
  );

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-end mb-3">
        <div className="input-group mr-2">
          <input
            type="text"
            id="searchInput"
            className="form-control"
            placeholder="Search by Name"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="btn btn-outline-secondary" onClick={() => setSearchTerm('')}>Clear</button>
        </div>
        <div className="input-group">
          <input
            type="text"
            id="dateInput"
            className="form-control"
            placeholder="Search by Date"
            value={searchDate}
            onChange={handleDateSearch}
          />
          <button className="btn btn-outline-secondary" onClick={() => setSearchDate('')}>Clear</button>
        </div>
      </div>
      <h1 className="mb-4">Staff Biography</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {filteredStaff.map((staff, index) => (
          <div className="col mb-4" key={index}>
            <div className="card">
              <img src={staff.image} className="card-img-top" alt={staff.title} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{staff.title}</h5>
                <p className="card-text">{staff.description}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Joined Date: {staff.joinedDate}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffBiographyStaffPage;


