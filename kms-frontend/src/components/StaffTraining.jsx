import React, { useState } from 'react';

const StaffTraining = () => {
  const [trainingData, setTrainingData] = useState([
    {
      course: 'Team Building Activities',
      description: 'Learn essential team building activities.',
      dueDate: '2024-03-01',
      videoUrl: 'https://www.youtube.com/watch?v=qwBP2FQv5Pk&ab_channel=AdrianaGirdler',
    },
    {
      course: 'Project Management Skills',
      description: 'Improve your skills and learn how to manage your projects.',
      dueDate: '2024-02-15',
      videoUrl: 'https://www.youtube.com/watch?v=KH-qoTqtMXE&ab_channel=GoogleCareerCertificates',
    },
    {
      course: 'Mental Health Awareness',
      description: 'Understand the mental health.',
      dueDate: '2024-04-10',
      videoUrl: 'https://www.youtube.com/watch?v=80lCleU99zk&ab_channel=HealthinMind',
    },
  ]);

  const handleStartTraining = (videoUrl) => {
    window.location.href = videoUrl;
  };

  return (
    <div className="container mt-4">
      <h2>Staff Training</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Training Course</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {trainingData.map((training, index) => (
            <tr key={index}>
              <td>{training.course}</td>
              <td>{training.description}</td>
              <td>{training.dueDate}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => handleStartTraining(training.videoUrl)}
                >
                  Start Training
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffTraining;
