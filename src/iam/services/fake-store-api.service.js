import axios from "axios";

const http = axios.create( {baseURL: 'https://fakestoreapi.com'})

export class FakeStoreApiService {
    getUsers(){
        return http.get('/users')
    }
}