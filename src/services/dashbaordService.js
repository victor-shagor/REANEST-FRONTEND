import http from './httpServices';

export const baseApiUrl = 'https://601d848abe5f340017a19c29.mockapi.io/';

export const getMenu = () =>{
    return http.get(`${baseApiUrl}menu`)
}

export const getDashbaord = () =>{
    return http.get(`${baseApiUrl}dashboard`)
}