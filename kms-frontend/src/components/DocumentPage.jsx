import React, { useState } from 'react';
import '../components/css/DocumentPage.css';

const DocumentPage = ({ onDocumentUpload }) => {
  const [documentInfo, setDocumentInfo] = useState({
    documentName: '',
    comment: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDocumentInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleUpload = () => {
    if (selectedFile && documentInfo.documentName) {
      alert('Document uploaded successfully! Hurray !! You earned 1 Beenz-Point. ');
      onDocumentUpload(1);
      const newFile = {
        documentName: documentInfo.documentName,
        comment: documentInfo.comment,
        file: selectedFile.name, // Displaying file name
      };
      setUploadedFiles((prevFiles) => [...prevFiles, newFile]);
      setSelectedFile(null);
      setDocumentInfo({
        documentName: '',
        comment: '',
      });
    } else {
      alert('Please provide both Document Name and select a document to upload.');
    }
  };

  const renderUploadedFilesTable = () => {
    if (uploadedFiles.length === 0) {
      return null;
    }

    return (
      <div>
        <h3>Uploaded Files</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Document Name</th>
              <th>Comment</th>
              <th>File</th>
            </tr>
          </thead>
          <tbody>
            {uploadedFiles.map((file, index) => (
              <tr key={index}>
                <td>{file.documentName}</td>
                <td>{file.comment}</td>
                <td>{file.file}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="document-page mt-4 mb-5 ">
      <h2>Upload Documents</h2>
      <b className='text-danger'>Upload your training certificates here.</b><br></br>
       <p className="subheading ">Use the form at the bottom of the page to upload your documents to us. If the document is large,
         please be patient while the file uploads to our servers.
       </p>
      <form className='col-md-8'>
      <div className="mb-3">
                       <label htmlFor="documentName" className="form-label">
                           Document Name
                      </label>
                       <input
                        type="text"
                        className="form-control"
                        id="documentName"
                        name="documentName"
                        value={documentInfo.documentName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="comment" className="form-label">
                        Comment
                    </label>
                    <textarea
                        className="form-control"
                        id="comment"
                        name="comment"
                        value={documentInfo.comment}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="file" className="form-label">
                        Choose File
                    </label>
                    <input
                        type="file"
                        className="form-control"
                        id="file"
                        onChange={handleFileChange}
                        required
                    />
                </div>
        <button type="button" className="btn btn-primary" onClick={handleUpload}>
          Upload
        </button>
      </form>

      <p className="message text-success">
        Every time you upload a file, you earn a beenz-point.
      </p>

      {renderUploadedFilesTable()}
    </div>
  );
};

export default DocumentPage;

