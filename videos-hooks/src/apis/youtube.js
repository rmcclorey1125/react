import axios from 'axios';

const KEY = 'AIzaSyCnARMP0UEn0HwfT3aq79QpZiBBJeXbSBk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
