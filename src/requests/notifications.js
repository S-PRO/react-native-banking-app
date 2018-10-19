// @flow

import requests from './requests';
import API from "../config/api";
import CONSTANTS from "../config/constants";


export function getNotifications() {

  const path = API.NOTIFICATIONS;

  return requests(path, 'get');
}

export function deactivateNotification(id: string) {

  const path = API.NOTIFICATIONS.concat(`${id}/deactivate/`);
  return requests(path, 'POST');
}
