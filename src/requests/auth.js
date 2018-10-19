// @flow

import requests from './requests';
import API from "../config/api";


type _t_data_signup = {
  emailValue: string,
  passValue: string,
  confirmPassValue: string,
  userName: string,
  firstName: string,
  lastName: string,
  validationError: string
};

type _t_data_login = {
  loginValue: string,
  passValue: string
};

export function signUp(data: _t_data_signup, success: func = () => {}, reject: func = () => {}) {
  const path = API.REGISTRATION;
  const params = {
    password2: data.confirmPassValue,
    first_name: data.firstName,
    last_name: data.lastName,
    username: data.userName,
    password1: data.passValue,
    email: data.emailValue,
  };
  requests(path, 'post', params).then((res) => {
    success.setToken(res.user.key);

    success.setAddress(res.user.address);
    success.setAvatar(res.user.avatar);
    success.setEmail(res.user.email);
    success.setExpiredAvatar(res.user.expired_avatar);
    success.setFirstName(res.user.first_name);
    success.setLastName(res.user.last_name);
    success.setMember(res.user.member);
    success.setPk(res.user.pk);
    success.setUnwatchNonifications(res.user.unwatch_notifications);


  }).catch((err) => {
    // console.log("ERR", err);
    reject(err);
  });
}

export function getPlains(success: func = () => {}, reject: func = () => {}) {
  const path = API.GET_PLAINS_ARR;

  return requests(path, 'get', {});
}

export function login(data: _t_data_login, success: func = () => {}, reject: func = () => {}) {
  const path = API.LOGIN;
  const params = {
    password: data.passValue,
    email: data.loginValue
  };
  return requests(path, 'post', params);
}

export function logout() {
  const path = API.LOGOUT;

  return requests(path, 'post', {});
}

export function restAuthUser(selectedPlaneId: number) {
  const path = API.REST_AUTH_USER;

  return requests(path, 'get', {}, { planeid: selectedPlaneId });
}
