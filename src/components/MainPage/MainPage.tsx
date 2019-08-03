import * as React from 'react';
import { projects } from '../../prjs';
import { Link } from 'react-router-dom';

export function MainPage () {
  return (
    <nav>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {projects.map(project => (
            <li key={project.path} >
              <Link to={project.path}>{project.title}</Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}
