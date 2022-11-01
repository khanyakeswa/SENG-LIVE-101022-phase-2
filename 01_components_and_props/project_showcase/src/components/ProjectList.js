// - Accept the props provided to the component

// - Destructure `projects` from the props object

// - Map over the `projects` array to render the `ProjectListItem` component for each element:

//   - Provide a key prop set to the `project id` value

//   - Provide each `project` object as a prop named `project`

import ProjectListItem from "./ProjectListItem"

const ProjectList = ({ myProjects }) => {
    const ProjectListItems = myProjects.map((project) => {
        const id = project.id
        return <ProjectListItem id={id} project={project} />
    })

    return (
        <ul>{ProjectListItems}</ul>
    )
}

export default ProjectList