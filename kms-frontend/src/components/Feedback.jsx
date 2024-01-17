import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Feedback = () => {
  const navigator = useNavigate();

  const [feedbackData, setFeedbackData] = useState({
    projectName: '',
    projectDate: '',
    feedback: '',
  });

  const [submittedFeedback, setSubmittedFeedback] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setSubmittedFeedback(feedbackData);
  };

  const cancelClientFeedback = () => {
    navigator('/news-page');
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Client Feedback</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Project Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Project Name"
            name="projectName"
            value={feedbackData.projectName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Project Date:</label>
          <input
            type="date"
            className="form-control"
            name="projectDate"
            value={feedbackData.projectDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Feedback:</label>
          <textarea
            className="form-control"
            rows="5"
            placeholder="Enter Feedback"
            name="feedback"
            value={feedbackData.feedback}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="button" className="btn btn-success me-2" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" className="btn btn-danger" onClick={cancelClientFeedback}>
          Cancel
        </button>
      </form>

      {submittedFeedback && (
        <div className="mt-4">
          <h3>Submitted Feedback:</h3>
          <p>Project Name: {submittedFeedback.projectName}</p>
          <p>Project Date: {submittedFeedback.projectDate}</p>
          <p>Feedback: {submittedFeedback.feedback}</p>
        </div>
      )}
    </div>
  );
};

export default Feedback;
