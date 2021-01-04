import axios from 'axios';



export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer GEWKU_-efmZ6VPkV35SnMsi5yleGwqLeFravvMexz225IwvtGYmqwVSIRtWG2izu5juY2TUMAt1iFBuGHONnKjLdDb4xsXx3RVOMbkgMRh6Lp8o9zxywmQfHik7yX3Yx'
    }
});