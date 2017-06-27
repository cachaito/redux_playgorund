import axios from 'axios';
import { push } from 'react-router-dom';
import { LOGIN_WITH_FB, LOGIN_WITH_GOOGLE } from '../constants';

export default function loginUser(loginType) {
    return {
        type: 'FETCH_USER',
        payload: axios.get(`http://localhost:3004/${loginType}`)
        //new Promise(resolve => {setTimeout(() => resolve({data: 'Bartek'}), 1000)})
    };
}
