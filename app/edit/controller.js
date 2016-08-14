import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
      edit(_id) {
        const data = this.model;
        fetch(`http://tiny-tn.herokuapp.com/collections/runs-al/${_id}`, {
            headers: {
              'Content-type': 'application/json',
              'Accept': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(data)
          }).then(() => {

            this.transitionToRoute('details', _id); // Needs ID??
          });
      }
    }

});
