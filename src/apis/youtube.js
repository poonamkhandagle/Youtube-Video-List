import axios from 'axios'
const KEY_value = process.env.REACT_APP_KEY
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY_value
  }
});
