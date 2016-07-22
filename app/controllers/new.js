import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addRun(){
      const newRun = {
        time: this.time || '',
        date: this.date || '',
        notes: this.notes || '',
      }
      fetch('http://tiny-tn.herokuapp.com/collections/runs-al', {
        method: 'post',
        body: JSON.stringify(newRun),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json())
        .then((run) => {
          this.setProperties({
              'time': '',
              'date': '',
              'notes': '',
            });
          this.transitionToRoute('index');

        });
    }
  }
});
