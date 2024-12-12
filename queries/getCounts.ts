import axios from 'axios';
import { getBaseURL } from './baseURL';
import { getRewardsActivityModelCreator } from 'queries/models';

export const getMetrics = (userId: string, activityId: string) =>
  axios({
    method: 'GET',
    url: `${getBaseURL()}/users/${userId}/activity/${activityId}`,
  }).then((response) => getRewardsActivityModelCreator(response.data));
