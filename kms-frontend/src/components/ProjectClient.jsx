import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';

const ProjectClient = () => {
  const [projects, setProjects] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const [projectDetails, setProjectDetails] = useState({
    projectName: '',
    projectVenue: '',
    projectDescription: '',
    startDate: '',
    endDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectDetails({
      ...projectDetails,
      [name]: value,
    });
  };

  const addProject = () => {
    setProjects([...projects, projectDetails]);
    setProjectDetails({
      projectName: '',
      projectVenue: '',
      projectDescription: '',
      startDate: '',
      endDate: '',
    });
  };

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Project Management</h1>

      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Label>Project Name:</Form.Label>
            <Form.Control type="text" name="projectName" value={projectDetails.projectName} onChange={handleInputChange} />
          </Col>
          <Col>
            <Form.Label>Project Venue:</Form.Label>
            <Form.Control type="text" name="projectVenue" value={projectDetails.projectVenue} onChange={handleInputChange} />
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Project Description:</Form.Label>
          <Form.Control as="textarea" rows={3} name="projectDescription" value={projectDetails.projectDescription} onChange={handleInputChange} />
        </Form.Group>

        <Row className="mb-3">
          <Col>
            <Form.Label>Project Start Date:</Form.Label>
            <Form.Control type="date" name="startDate" value={projectDetails.startDate} onChange={handleInputChange} />
          </Col>
          <Col>
            <Form.Label>Project End Date:</Form.Label>
            <Form.Control type="date" name="endDate" value={projectDetails.endDate} onChange={handleInputChange} />
          </Col>
        </Row>

        <Button variant="primary" onClick={addProject} className="me-2">
          Add Project
        </Button>
        <Button variant="info" onClick={toggleTable}>
          View Projects
        </Button>
      </Form>

      {showTable && (
        <Table className="mt-4">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Project Venue</th>
              <th>Project Description</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td>{project.projectName}</td>
                <td>{project.projectVenue}</td>
                <td>{project.projectDescription}</td>
                <td>{project.startDate}</td>
                <td>{project.endDate}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default ProjectClient;
