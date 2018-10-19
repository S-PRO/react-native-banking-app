// @flow

import requests from './requests';
import API from "../config/api";

export function getAwDocs(pk: number) {
  const path = API.GET_AW_DOCS;
  return requests(path, 'get', {}, { planeid: pk });
}
