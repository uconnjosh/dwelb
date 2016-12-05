import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('cities', { path: '/cities' })
  this.route('portland', { path: '/portland'})
  this.route('nyc', { path: '/nyc'})
});

export default Router;
