// @flow
import { Actions } from 'react-native-router-flux';
import API from "../config/api";
import CONSTANTS from '../config/constants';

let userToken = '';
let clearStore = '';

export function setToken(token: string, clear: () => void) {
  userToken = token;
  clearStore = clear;
}

const logout = () => {
  Actions.reset('Login');
  setTimeout(() => {
    if (clearStore) { clearStore(); }
  }, 500);
};

export default async function (path, method, args, headers): Promise {
  try {
    if (CONSTANTS.IS_DEV) {
      console.log('path', path);
      console.log('method', method);
      console.log('args', args);
    }

    let resHeaders = {};

    if (userToken) {
      resHeaders = {
        Authorization: `Token ${userToken}`,
        ...headers
      };
    }
    if (CONSTANTS.IS_DEV) {
      console.log('resHeaders', resHeaders);
    }
    const response = await fetch(`${API.API_URL}${path}`, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...resHeaders,
      },
      body: (args && method !== 'delete' && method !== 'get') ? JSON.stringify(args) : undefined,
    });
    if (CONSTANTS.IS_DEV) {
      console.log('server response', response);
    }

    return response.text().then((text) => {
      let parsed = null;
      console.log('server text', JSON.parse(text));

      if (text.includes("Invalid token")) {
        logout();
        return parsed;
      }

      if (response.status >= 400 || !response.ok) {

        throw ({
          ...JSON.parse(text),
          code: response.status,
        });
      }
      try {
        parsed = JSON.parse(text);
      } catch (e) {
        parsed = {};
      }
      return parsed;
    });
  } catch (error) {
    console.warn('SERVER_ERROR: ', error);
    return {
      type: 'SERVER_ERROR',
      ...error,
    };
  }
}
