import DS from 'ember-data'

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  neighborhood: DS.belongsTo('neighborhood'),
  desiredMoveIn: DS.attr('date'),
  desiredMonths: DS.attr('number'),
  minimumRoommateAge: DS.attr('number'),
  maximumRoommateAge: DS.attr('number'),
  genderPreference: DS.attr('string')
})
