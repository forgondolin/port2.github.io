import React, {useEffect, useState} from 'react';
import axios from 'axios';


const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/forgondolin/repos');
                setProjects(response.data);
            } catch (error){
                console.log(error);
            }
        };

        fetchProjects();
    }, []);

    return(
        <section id="projects">
            <h2>Projetos do github</h2>
            <div className="project-list">
                {projects.map((project) => (
                    <div key={project.id} className="project-item">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;