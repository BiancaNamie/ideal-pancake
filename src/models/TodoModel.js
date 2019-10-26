import * as TodoRepository from "../repository/TodoRepository"

export const getTodos = async () => {
    const result = await TodoRepository.get();
    return result;
} 

export const add = async (name) => {
    console.log(name)
    const newItem = {
        title: name
    }
    return await TodoRepository.add(newItem)
}

export const destroy = async (id) => {
    return await TodoRepository.destroy(id)
}