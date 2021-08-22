import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization:
          'Client-ID EKDawT9GWxKVyJaAfE6uvuSsB-Ag1Juz0YdTU-mD6a8',
    }
})