import axios from 'axios';

export default axios.create({
    baseURL: 'gabajago.backend',
    headers: { Accept: 'application/json' },
});
