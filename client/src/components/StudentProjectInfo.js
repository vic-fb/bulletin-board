import React from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';


function StudentProjectInfo(props) {
    let { id } = useParams();
    let project = props.studentProjects.find(p => p.id === Number(id));
    let user = props.users.find(u => u.id === project.user_id);

    if (props.users.length === 0 || project.length === 0) {
        return (
            <h2>Loading</h2>
        )
    }

    return (
        //upon log-in, user_id will be automatically collected
        <div className="StudentProjectInfo">
            <nav className="NavBar">
                <NavLink to='add-project' onClick={props.toggleViewCb}>Display a New Project</NavLink>
            </nav>

            

            <h2>Welcome to {user.first_name}'s project page!</h2>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
           
            <img alt={project.title} src={project.image_url}/>
            <a href={`${project.project_url}`} target='_blank'>Check out my project</a>
           
            <Link to={`/classrooms/${project.classroom_id}`}>Back to Classroom</Link>
            
        </div>
    );
}

export default StudentProjectInfo;



