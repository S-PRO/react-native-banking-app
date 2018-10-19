// @flow

import requests from './requests';
import API from "../config/api";
import CONSTANTS from "../config/constants";

type _t_post_journey_log = {
  date: string,
  landings: number,
  members: _t_member,
  nature_of_fligth: string,
  observations: string,
  place_of_arrival: string,
  place_of_departure: string,
  plane_register_id: string,
  registration: string,
  signature: string,
  tacho_end_of_flight: number,
  tacho_time: number,
  time_of_arrival: string,
  time_of_arrival_timezone: string,
  time_of_departure: string,
  time_of_departure_timezone: string,
}

export function getJourneyLog(pageNum: number, selectedPlaneId: num) {

  const path = API.JOURNEY_LOG.concat(`?page=${pageNum}&page_size=${CONSTANTS.JOURNEY_LOG_LIST_PAGE_SIZE}`);

  return requests(path, 'get', {}, { planeid: selectedPlaneId });
}

export function getMaintenanceLog(pageNum: number, selectedPlaneId: num) {

  const path = API.MAINTENANCE.concat(`?page=${pageNum}&page_size=${CONSTANTS.MAINTENANCE_LOG_LIST_PAGE_SIZE}`);

  return requests(path, 'get', {}, { planeid: selectedPlaneId });
}

export function postJourneyLog(data: _t_post_journey_log, signatureBase64: string, selectedPlaneId: num) {
  const path = API.JOURNEY_LOG;

  const dataToSend = { ...data, signature: signatureBase64 };

  return requests(path, 'POST', dataToSend, { planeid: selectedPlaneId });
}
