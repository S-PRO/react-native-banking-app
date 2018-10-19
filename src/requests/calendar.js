// @flow

import requests from './requests';
import API from "../config/api";

export function getCalendar(selectedPlaneId: num, year: string, month: string) {

  const path = API.CALENDAR.concat(`?year=${year}&month=${month}`);

  return requests(path, 'GET', null, { planeid: selectedPlaneId });
}
