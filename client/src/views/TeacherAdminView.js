import React, { useState, useEffect } from "react";
// import { Route, Routes, useNavigate } from 'react-router-dom';
import AddClassroomForm from "../components/AddClassroomForm";
import AddUserForm from "../components/AddUserForm";
import UpdateAssignmentForm from "../components/UpdateAssignmentForm";
import "./TeacherAdminView.css";

function TeacherAdminView(props) {
  return (
    <div className="TeacherAdminView">
      <h1>Teacher Admin Hub</h1>
      <div className="TeacherAdminGrid">
        <div className="col1">
          <h2>Add a Classroom</h2>
          <AddClassroomForm addClassroomCb={props.addClassroomCb} />
        </div>

        <div className="col2">
          <h2>Add a User</h2>
          <AddUserForm
            addUserCb={props.addUserCb}
            classrooms={props.classrooms}
            getListItemsCb={props.getListItemsCb}
            users={props.users}
            addInitialProjectCb={props.addInitialProjectCb}
          />
        </div>

        <div className="col3">
          <h2>Update an Assignment</h2>
          <UpdateAssignmentForm
            updateAssignmentCb={props.updateAssignmentCb}
            getListItemsCb={props.getListItemsCb}
            classrooms={props.classrooms}
          />
        </div>
      </div>
    </div>
  );
}

export default TeacherAdminView;

// Think of new page name to reflect that teachers, classrooms, and students are being added/created
