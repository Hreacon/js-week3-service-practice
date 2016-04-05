import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.ajax({
      url:"http://congress.api.sunlightfoundation.com/committees?subcommittee=false&apikey=f515312259404d5ab10c5f91bad7429d"
    });
  },
  actions: {
    getSubCommittees(committee) {
      this.transitionTo('subcommittee', committee.committee_id);
    }
  }

});
