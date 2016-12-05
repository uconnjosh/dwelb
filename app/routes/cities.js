import Ember from 'ember'

export default Ember.Route.extend({
  model() {
  	return this.store.findAll('city')

  	// this.set('cities', this.store.findAll('city'))
    // this.store.findAll('cities')
  }
})
