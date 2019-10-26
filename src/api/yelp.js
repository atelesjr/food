import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer e8_eyzGu3WPAfhA9jMijqXEEBqk5M3BPvVqKmhQTPp8Ye9dP2xBjJdHe3KsWJWz3whv6IeMp2Rny0JJ0r6nFlt6Y6DonBN-macEHsv2LfBA3coElegXJ_x093QqIXXYx'
    }
});

