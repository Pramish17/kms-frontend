import React from 'react'

const ClientHeader = () => {
   return (
      <header>
      <nav class="navbar navbar-expand-lg bg-dark">
         <div class="container-fluid">
            <a class="navbar-brand text-white" href="http://localhost:5000/news-page">Hill & Knowlton</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item ">
                     <a class="nav-link text-light" href="http://localhost:5000/news-page">News/Internal Announcements</a>
                  </li>
                  <li class="nav-item ">
                     <a class="nav-link text-light" href="http://localhost:5000/feedback-page">Feedback</a>
                  </li>
                  <li class="nav-item ">
                     <a class="nav-link text-light" href="http://localhost:5000/clientprofile-page">Profile</a>
                  </li>
                  <li class="nav-item ">
                     <a class="nav-link text-light" href="http://localhost:5000/projectclient-page">Project</a>
                  </li>
                  <li class="nav-item ">
                     <a class="nav-link text-light" href="http://localhost:5000/clientdocument-page">Document</a>
                  </li>
                  <li class="nav-item ">
                     <a class="nav-link text-light" href="http://localhost:5000/staffbiography-page">Staff Biography</a>
                  </li>
                  <li class="nav-item ">
                     <a class="nav-link text-light" href="http://localhost:5000/login">Logout</a>
                  </li>
               </ul>
               <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-success" type="submit">Search</button>
               </form>
            </div>
         </div>
      </nav>
   </header>

   )
}

export default ClientHeader