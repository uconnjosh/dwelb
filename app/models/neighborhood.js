import DS from 'ember-data';

export default DS.Model.extend({
  city: DS.belongsTo('city'),
  interests: DS.hasMany('interest'),
  name: DS.attr('string'),
  description: DS.attr('string')
});
