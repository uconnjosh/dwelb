import {
  belongsTo,
  Model
} from 'ember-cli-mirage'

export default Model.extend({
  user: belongsTo('user'),
  neighborhood: belongsTo('neighborhood')
})
