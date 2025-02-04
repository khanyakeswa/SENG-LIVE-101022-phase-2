import ProjectListItem from './ProjectListItem'
import { useState } from 'react'

const ProjectList = ({ searchResults, onSearchChange }) => {
  const projectListItems = searchResults.map((project) => (
    <ProjectListItem key={project.id} {...project} />
  ))

  return (
    <section>
      <h2>Projects</h2>

      <div className='filter'>
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input type='text' placeholder='Search...' onChange={onSearchChange} />

      <ul className='cards'>{projectListItems}</ul>
    </section>
  )
}

export default ProjectList
