import React from 'react';

export default function ProjectCard({project, index}) {
  return (
    <div className='project' key={index}>
      <h2 className='project-title'>{project.projectName}</h2>
      <div className='project-tags-container'>
        {project.tags.map((tag, index) => (
          <div className='project-tag' key={index}>
            {tag}
          </div>
        ))}
      </div>
      <div className='project-description'>
        <ul>
          {project.descriptions.map((descrip, index) => (
            <li key={index}>{descrip}</li>
          ))}
        </ul>
      </div>
      <div className='project-links-container'>
        {project.links.map((link, index) => (
          <div key={index}>
            <a href={link.url} target='_blank' rel="noreferrer">{link.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
