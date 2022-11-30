import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.wonto.site',
    headers: { Accept: 'application/json' },
});
