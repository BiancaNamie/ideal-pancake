import axios from 'axios'

export const get = async () => {
    const result = await axios.get('http://localhost:3001/todos');
    return result.data;
}

export const add = async (item) => {
    return await axios.post('http://localhost:3001/todos', item)
}

export const destroy = async (id) => {
    return await  axios.delete(`http://localhost:3001/todos/${id}`)
}