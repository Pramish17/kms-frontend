import React from 'react'

const StaffHeader = () => {
   return (
      <header>
      <nav class="navbar navbar-expand-lg bg-dark">
         <div class="container-fluid">
            <a class="navbar-brand text-white" href="http://localhost:5000/newsstaff-page">Hill & Knowlton</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item ">
                     <a class="nav-link text-light" href="http://localhost:5000/newsstaff-page">News/Internal Announcements</a>
                  </li>
                  <li class="nav-item ">
                     <a class="nav-link text-light" href="http://localhost:5000/stafftraining-page">Training Modules</a>
                  </li>
                  <li class="nav-item ">
                     <a class="nav-link text-light" href="http://localhost:5000/beenzpoint-page#">Beenz-Points/ Docs</a>
                  </li>
                  <li class="nav-item ">
                     <a class="nav-link text-light" href="http://localhost:5000/staffproject-page">Project</a>
                  </li>
                  <li class="nav-item ">
                     <a class="nav-link text-light" href="http://localhost:5000/feedbackstaff-page">Client Feedback</a>
                  </li>
                  <li class="nav-item ">
                     <a class="nav-link text-light" href="http://localhost:5000/staffprofile-page">Profile</a>
                  </li>
                  <li class="nav-item ">
                     <a class="nav-link text-light" href="http://localhost:5000/staffbiographystaff-page">Staff Biography</a>
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

export default StaffHeader