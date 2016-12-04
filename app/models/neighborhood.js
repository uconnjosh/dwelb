import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('text'),
  city: DS.belongsTo('city')
});
