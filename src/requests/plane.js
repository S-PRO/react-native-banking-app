// @flow

import requests from './requests';
import API from "../config/api";
import type { _t_permission } from '../../config/types';

type _t_member = {
  pk: number,
  role: string,
  dashboard_permission: _t_permission,
  journey_log_permission: _t_permission,
  permanent_permission: _t_permission,
  maintenance_log_permission: _t_permission,
  calendar_permission: _t_permission,
  aw_documents_permission: _t_permission,
  aw_validation_permission: _t_permission,
  email: string,
  phone_number: string,
  first_name: string,
  last_name: string,
  address: string
}


type _t_props = {
  members: Array<_t_member>,
}

type _t_consumption = {
  pk: number,
  altitude: number,
  power: number,
  consumption: string
}

type _t_plane_data = {
  currentPlane: {
    consumptions: Array<_t_consumption>,
    distanceFullLoad: string,
    engine: string,
    loadMaxDistance: string,
    maxDistance: string,
    maxFuel: string,
    maxLoad: string,
    mtow: string,
    name: string,
    pax: string,
    props: string,
    registerId: string,
    editMode: boolean
  }
}

export function getPlaneInfo(pk: number) {

  const path = API.GET_PLANE.concat(`${pk}/`);

  return requests(path, 'get', {});
}

export function getPlaneDashboard(selectedPlaneId: number) {

  const path = API.GET_PLANE_DASHBOARD;

  return requests(path, 'get', {}, { planeid: selectedPlaneId });
}

export function updateMemberProfile(members: _t_props, pk: number) {

  const path = API.GET_PLANE.concat(`${pk}/`);

  return requests(path, 'PATCH', { members });
}

export function updatePlane(data: _t_plane_data, pk: number) {

  const path = API.GET_PLANE.concat(`${pk}/`);

  return requests(path, 'PATCH', data);
}

export function updateMember(data: _t_plane_data, method: string, pk: number, memberId: number) {

  const path = `${API.MEMBERS}${memberId > 0 ? `${memberId}/` : ""}`;

  return requests(path, method, data, { planeid: pk });
}
