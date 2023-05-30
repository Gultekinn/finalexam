import { BASE_URL } from "./base_url"
import axios from "axios"


//GET ALL ROBOTS
export const getAllRobots = async () => {
    let globalData
    await axios.get(`${BASE_URL}/robots`).then((res) => {
        globalData = res.data
    })
    return globalData
}

// GET ROBOTS BY ID
export const getRobotsById = async (id) => {
    let globalData
    await axios.get(`${BASE_URL}/robots/${id}`).then((res) => {
        globalData = res.data
    })
    return globalData
}

// DELETE ROBOT BY ID
export const deleteRobot = async (id) => {
    let deletedData
    await axios.delete(`${BASE_URL}/robots/${id}`).then((res) => {
        deletedData = res.data
    })
    return deletedData
}

// POST ROBOTS BY ID
export const postRobots = (newRobots) => {
    axios.post(`${BASE_URL}/robots`, newRobots)
}

// EDIT ROBOT BY ID
export const putRobots = async (id, newRobots) => {
    await axios.put(`${BASE_URL}/robots/${id}`, newRobots)
}