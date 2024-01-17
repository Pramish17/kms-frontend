import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ClientDocument = () => {
  const [folders, setFolders] = useState([]);
  const [newFolderName, setNewFolderName] = useState('');
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [newFileName, setNewFileName] = useState('');

  const addFolder = () => {
    if (newFolderName.trim() !== '') {
      setFolders([...folders, { name: newFolderName, files: [] }]);
      setNewFolderName('');
    }
  };

  const addFile = () => {
    if (newFileName.trim() !== '' && selectedFolder !== null) {
      const newFolders = [...folders];
      newFolders[selectedFolder].files.push(newFileName);
      setFolders(newFolders);
      setNewFileName('');
    }
  };

  const deleteFolder = (index) => {
    const newFolders = [...folders];
    newFolders.splice(index, 1);
    setFolders(newFolders);
    // Reset selected folder when it's deleted
    setSelectedFolder(null);
  };

  const deleteFile = (folderIndex, fileIndex) => {
    const newFolders = [...folders];
    newFolders[folderIndex].files.splice(fileIndex, 1);
    setFolders(newFolders);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Document Manager</h1>

      <div className="mb-4">
        <h2>Folders</h2>
        <ul className="list-group">
          {folders.map((folder, index) => (
            <li
              key={index}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                selectedFolder === index ? 'active' : ''
              }`}
              onClick={() => setSelectedFolder(index)}
            >
              {folder.name}
              <button className="btn btn-danger" onClick={() => deleteFolder(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div className="input-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter folder name"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
          />
          <button className="btn btn-primary ml-2" onClick={addFolder}>
            Add Folder
          </button>
        </div>
      </div>

      {selectedFolder !== null && (
        <div>
          <h2>Files in {folders[selectedFolder].name}</h2>
          <ul className="list-group">
            {folders[selectedFolder].files.map((file, fileIndex) => (
              <li
                key={fileIndex}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {file}
                <button
                  className="btn btn-danger"
                  onClick={() => deleteFile(selectedFolder, fileIndex)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <div className="input-group mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter file name"
              value={newFileName}
              onChange={(e) => setNewFileName(e.target.value)}
            />
            <button className="btn btn-primary ml-2" onClick={addFile}>
              Add File
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientDocument;
