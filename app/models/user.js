import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  gender: DS.attr('string'),
  age: DS.attr('number'),
  interests: DS.hasMany('interest')
})
