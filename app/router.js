import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new', {path: 'new' });
  this.route('details', { path: '/:details' });
  this.route('edit', {path:'/:edit/edit'});
});

export default Router;
