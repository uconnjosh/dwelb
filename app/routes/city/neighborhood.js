import Ember from 'ember'

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('neighborhood', params.neighborhood_id, { include: 'interests' })
  }
})
