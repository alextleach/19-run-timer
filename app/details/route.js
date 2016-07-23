import Ember from 'ember';

export default Ember.Route.extend({

  model(_id) {
    return fetch (`http://tiny-tn.herokuapp.com/collections/runs-al/${_id.details}`)
       .then((res) => res.json());
   }
 });
