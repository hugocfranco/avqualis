import axios from 'axios'

export const https = axios.create({
    baseURL: 'https://pesquisa-de-produto.herokuapp.com/'
})