import Ember from 'ember'

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('city', 1, { include: 'neighborhoods'})
  }
})
