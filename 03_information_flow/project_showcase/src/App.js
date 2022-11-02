import { useState } from 'react'

import Header from './components/Header'
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'

const App = () => {
  const [projects, setProjects] = useState([])

  const [isDarkMode, setIsDarkMode] = useState(true)

  const [searchQuery, setSearchQuery] = useState("");

  const onToggleDarkmode = () => {
    setIsDarkMode(!isDarkMode)
    console.log(isDarkMode)
  }

  const searchResults = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleClick = () => {
    fetch('http://localhost:4000/projects')
      .then((res) => res.json())
      .then((projects) => setProjects(projects))
  }

  const handleOnChange = (e) => setSearchQuery(e.target.value)

  return (
    <div className={isDarkMode ? 'App' : 'App light'}>
      <Header currentState={isDarkMode} darkmodeHandler={onToggleDarkmode} />
      <ProjectForm />
      <button onClick={handleClick}>Load Projects</button>
      <ProjectList searchResults={searchResults} onSearchChange={handleOnChange}/>
    </div>
  )
}

export default App
