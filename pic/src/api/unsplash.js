import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 48HwuKymr9kJGt6ikw-QYAaLkW7pXGxQj5PBfU_Nby0'
    }
});