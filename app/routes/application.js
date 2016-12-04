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
  },

  /**
  * Actions
  **/
  actions: {
    error(error/*, transition*/) {
      const status = this._errorStatus(error)
      Logger.error(error)
      if (status === '401' || status === '403') {
        console.log('unauthorized')
        // return this.transitionTo('unauthorized')
      } else if (status === '404') {
        console.log('missing')
        // return this.transitionTo('missing')
      } else {
        console.log('error')
        // return this.transitionTo('error')
      }
    }
  },

  /**
  * Private
  **/

  // Error Handling
  _errorStatus(error) {
    return this._hasStatusCode(error) ? error.errors[0].status : null
  },

  _hasStatusCode(error) {
    return error.hasOwnProperty('errors') &&
      error.errors.length &&
      error.errors[0].status
  }
})
