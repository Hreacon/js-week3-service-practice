import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var committee_id = params.committee_id;
    return Ember.$.ajax({
      url: "http://congress.api.sunlightfoundation.com/committees?subcommittee=true&parent_committee_id="+committee_id+"&apikey=f515312259404d5ab10c5f91bad7429d"
    });
  }
});
