import Ember from 'ember'

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord(params.city_id, 1, { include: 'neighborhoods'})
  }
})
