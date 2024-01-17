import React from 'react';

const FeedbackStaffPage = () => {
  const feedbackData = [
    { clientName: 'Pujan Bhandari', feedback: 'Great service!', projectName:'Harrow FC', date:'1/10/2024' },
    { clientName: 'Lalit Shrestha', feedback: 'Very helpful staff.', projectName:'UWL', date:'1/11/2024' },
  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Feedback from Clients</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Client Name</th>
            <th scope="col">Feedback</th>
            <th scope="col">Project Name</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map((feedbackItem, index) => (
            <tr key={index}>
              <td>{feedbackItem.clientName}</td>
              <td>{feedbackItem.feedback}</td>
              <td>{feedbackItem.projectName}</td>
              <td>{feedbackItem.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FeedbackStaffPage;
