import Ember from 'ember'

const {
  // inject: { service },
  Logger,
  Route
} = Ember

export default Route.extend({
  // intl: service(),

  /**
  * Hooks
  **/
  beforeModel(/*transition*/) {
    this.transitionTo('cities')
  },

  /**
  * Actions
  **/
  actions: {
  },

})
