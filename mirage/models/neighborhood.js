import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  city: belongsTo('city'),
  interests: hasMany('interest')
});
