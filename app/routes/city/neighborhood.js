import Ember from 'ember'

export default Ember.Route.extend({
  model(params) {
    this.store.findRecord('neighborhood', params.neighborhood_id)
  }
})
