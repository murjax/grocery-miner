import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import config from '../../config/environment';

export default Route.extend({
  ajax: inject('ajax'),
  queryParams: {
    month: { refreshModel: true },
    year: { refreshModel: true }
  },

  model(params) {
    return this.get('ajax').request(`${config.host}/items/monthly`, {
      data: { month: params.month, year: params.year }
    }).then((response) => {
      return response;
    }).catch(() => {
      return [];
    });
  }
});