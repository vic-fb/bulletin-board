import React from 'react';
// import { Link } from 'react-router-dom';
import AddProjectForm from '../components/AddProjectForm';

function StudentAdminView(props) {
   
    
  
    return (
      <div className="StudentAdminView">
        <h2>Fill out all the fields the form below to post your latest project.</h2>
        
        <AddProjectForm 
            toggleViewCb={props.toggleViewCb} 
            studentProjects={props.studentProjects}
            addNewProjectCb={props.addNewProjectCb}
            />
        
  
      </div>
    );
  }
  
  export default StudentAdminView;
  