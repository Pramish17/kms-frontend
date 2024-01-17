import React, { useState } from 'react';

const NewsStaffPage = () => {
  const initialNews = [
    { id: 1, title: 'Hill & Knowlton Appoints Craig Buchholz US CEO', content: 'A huge change in Hill & Knowlton...' },
    { id: 2, title: 'Hill & Knowlton Makes Senior Promotions', content: 'Hill and Knowlton makes changes in senior members...' },
  ];

  const initialAnnouncements = [
    { id: 1, author: 'Craig Buchholz', date: '20-Dec-2023', content: 'Hi Everyone, I hope this message finds you well...' },
    { id: 2, author: 'Pramish Thapa', date: '25-Nov-2023', content: 'Hi Everyone, I hope this message finds you well. A new set of Training is available...' },
  ];

  const [news, setNews] = useState(initialNews);
  const [announcements, setAnnouncements] = useState(initialAnnouncements);

  const [newNews, setNewNews] = useState({ title: '', content: '', date: '' });
  const [newAnnouncement, setNewAnnouncement] = useState({ author: '', date: '', content: '' });

  const handleAddNews = () => {
    // Validate if required fields are not empty
    if (!newNews.title || !newNews.content || !newNews.date) {
      alert('Please fill in all required fields for News.');
      return;
    }

    // logic to add a new news item
    const addedNews = {
      id: news.length + 1,
      title: newNews.title,
      content: newNews.content,
      date: newNews.date,
    };

    setNews([...news, addedNews]);
    setNewNews({ title: '', content: '', date: '' });
  };

  const handleAddAnnouncement = () => {
    // Validate if required fields are not empty
    if (!newAnnouncement.author || !newAnnouncement.date || !newAnnouncement.content) {
      alert('Please fill in all required fields for Announcement.');
      return;
    }

    // logic to add a new announcement
    const addedAnnouncement = {
      id: announcements.length + 1,
      author: newAnnouncement.author,
      date: newAnnouncement.date,
      content: newAnnouncement.content,
    };

    setAnnouncements([...announcements, addedAnnouncement]);
    setNewAnnouncement({ author: '', date: '', content: '' });
  };

  return (
    <div className='container-fluid mt-5 mb-5'>
      <div>
        <h1><b>News</b></h1>
        <h3><b>New insights and analysis, from where we stand.</b></h3>

        {/* Add News Form */}
        <form>
          <div className="mb-3">
            <label className="form-label">News Title:</label>
            <input
              type="text"
              className="form-control"
              value={newNews.title}
              onChange={(e) => setNewNews({ ...newNews, title: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">News Body:</label>
            <textarea
              className="form-control"
              rows="3"
              value={newNews.content}
              onChange={(e) => setNewNews({ ...newNews, content: e.target.value })}
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">News Date:</label>
            <input
              type="date"
              className="form-control"
              value={newNews.date}
              onChange={(e) => setNewNews({ ...newNews, date: e.target.value })}
            />
          </div>

          {/* Add News Button */}
          <button type="button" className="btn btn-primary" onClick={handleAddNews}>
            Add News
          </button>
        </form>

        <div className='container d-flex h-100'>
          {/* Existing News Items */}
          {news.map((item) => (
            <div key={item.id} className="card text-white bg-secondary mb-3 m-5" style={{ width: "50%" }}>
              <div className="card-header">Latest</div>
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.content}</p>
                <p><a className='text-light' href='#'>Show more...</a></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Announcements Section */}
      <div>
        <hr />
        <h1><b>Internal Announcements</b></h1>

        {/* Add Announcement Form */}
        <form>
          <div className="mb-3">
            <label className="form-label">Author Name:</label>
            <input
              type="text"
              className="form-control"
              value={newAnnouncement.author}
              onChange={(e) => setNewAnnouncement({ ...newAnnouncement, author: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Announcement Date:</label>
            <input
              type="date"
              className="form-control"
              value={newAnnouncement.date}
              onChange={(e) => setNewAnnouncement({ ...newAnnouncement, date: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Announcement Message:</label>
            <textarea
              className="form-control"
              rows="3"
              value={newAnnouncement.content}
              onChange={(e) => setNewAnnouncement({ ...newAnnouncement, content: e.target.value })}
            ></textarea>
          </div>

          {/* Add Announcement Button */}
          <button type="button" className="btn btn-primary" onClick={handleAddAnnouncement}>
            Add Announcement
          </button>
        </form>

        {announcements.map((item) => (
          <div key={item.id} className="card d-flex justify-content-center text-dark bg-light m-5">
            <div className="card-header"><b>{item.author} [{item.date}]</b></div>
            <div className="card-body">
              <p className="card-text">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsStaffPage;
