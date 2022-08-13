import axios from 'axios';
import querystring from 'qs';
import config from '../../env';

const {API_STAGING} = config;
const api = axios.create({
  baseURL: API_STAGING,
  timeout: 20000,
  headers: {
    Accept: 'application/json',
  },
  paramsSerializer: params => querystring.stringify(params),
});

export const Api = {
  get: async ({url, params = {}, showLog, shouldReturnAllData}) => {
    if (showLog) {
      console.log('API URL', url);
      console.log('API PARAMS', params);
    }

    try {
      const res = await api.get(url, {
        params,
      });

      if (showLog) {
        console.log('API RES', res.data);
      }

      if (shouldReturnAllData) {
        return res.data;
      }

      return res.data;
    } catch (error) {
      if (showLog) {
        console.log('API ERROR', {error});
      }

      throw error;
    }
  },
};
