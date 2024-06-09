
import { Axios } from '@/app/config/axios'



/// ->>> create projects 



export const createProject = async (title ) => {
    try {
        const response = await Axios.post('/project',{title})
        return response
    } catch (error) {
        return error
    }
}

/// ->>> get all projects
export const gerAllProjects = async () => {
    try {
        const response = await Axios.get('/project')
        return response
    } catch (error) {
        return error
    }
}

// ->>> get project by id

export const getProjectById = async (id) => {
    try {
        const response = await Axios.get(`/project/${id}`)
        return response
    } catch (error) {
        return error
    }
}