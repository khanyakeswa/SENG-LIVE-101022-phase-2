// - Return the `Header`, `ProjectForm` and `ProjectList` components

// - Provide the array of `projects` to `ProjectList` as props
import Header from './components/Header'
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'

import projects from './projects'

const App = () => {
  return (
    <>
      <div className='App'>Project Showcase</div>;
      <Header firstName='Khanya' lastName='Keswa'/>
      <ProjectForm />
      <ProjectList myProjects={projects}/>
    </>
  )
}

export default App
