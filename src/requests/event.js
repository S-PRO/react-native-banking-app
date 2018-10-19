// @flow

import requests from './requests';
import API from "../config/api";

type _maintenance = {
  date: "string",
  description_what: "string",
  time_start: "string",
  duration: 0
}

export function addEventMaintenance(event: _maintenance, selectedPlaneId: num) {

  const path = API.EVENT_MAINTENANCE;

  return requests(path, 'POST', event, { planeid: selectedPlaneId });
}


type _flight = {
  place_of_departure: "string",
  duration: 0,
  nature_of_fligth: "string",
  members: [{
    name: string,
    duty: string
  }],
  place_of_arrival: "string",
  date: "string",
  time_start: "string"
}

export function addEventFlight(event: _flight, selectedPlaneId: num) {

  const path = API.EVENT_FLIGHT;

  return requests(path, 'POST', event, { planeid: selectedPlaneId });
}
