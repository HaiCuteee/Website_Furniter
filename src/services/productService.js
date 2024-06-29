import * as http from "../HTTP/http";

const urlApi = 'http://localhost:3000/products';



export const getAll = async (page = 1) => {
    try { 
        const res = await http.get(`${urlApi}?&_page=${page}&_limit=6`)
        return res
    }catch (error) {
        console.log(error)
    }
}

export const getAllproducts = async () => {
    try { 
        const res = await http.get(`${urlApi}`)
        return res
    }catch (error) {
        console.log(error)
    }
}
export const find = async (id) => {
    try { 
        const res = await http.get(`${urlApi}/${id}`)
        return res
    }catch (error) {
        console.log(error)
    }
}

export const findByCategory_id = async (id) => {
    try { 
        const res = await http.get(`${urlApi}?category_id=${id}`)
        return res
    }catch (error) {
        console.log(error)
    }
}

export const create = async (data) => {
    try { 
        const res = await http.get(`${urlApi}`, data)
        return res
    }catch (error) {
        console.log(error)
    }
}

export const filterByKeyName = async (keyWord) => {
    try { 
        const res = await http.get(`${urlApi}?name_like=${keyWord}`)
        return res
    }catch (error) {
        console.log(error)
    }
}