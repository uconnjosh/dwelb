import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('cities', { path: '/cities' })
  this.route('city', { path: '/:city_id'}, function() {
    this.route('neighborhood', { path: '/:neighborhood_id'})
  })
});

export default Router;
