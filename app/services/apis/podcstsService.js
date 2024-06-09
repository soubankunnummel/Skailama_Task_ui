

/// ->> delele Podcasts

import { Axios } from "@/app/config/axios"

export const deletePodcats = async (id) => {
    try {
        const response = await Axios.delete(`/podcast/${id}`)
        return response
    } catch (error) {
        return error
    }
}



/// ->> Create podcast 

export const CreatePodcast = async (id,title, description) => {
    try {
        const response = await Axios.post(`/podcast/${id}`,{title, description})
        return response
    } catch (error) {
        return error
    }
}


// ->> get podcast by id

export const getPodcastById = async (id) => {
    try {
        const response = await Axios.get(`/podcast/${id}`)
        return response
    } catch (error) {
        return error
    }
}

// ->> edit podcast

export const EditPodcast = async (id,description) => {
    try {
        const response = await Axios.patch(`/podcast/${id}`,{description})
        return response
    } catch (error) {
        return error
    }
}