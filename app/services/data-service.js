import Ember from 'ember';

export default Ember.Service.extend({
  results: [],
  committees: [],
  getCommittees() {
    var self = this;
    Ember.$.ajax({
      url:"http://congress.api.sunlightfoundation.com/committees?subcommittee=false&apikey=f515312259404d5ab10c5f91bad7429d"
    }).then(function(resolve){
      console.log("committee", resolve);
      self.set('committees', resolve.results);
    });
  },
  getRepsByZip(zip) {
    var self = this;
    var field = 'results';
    Ember.$.ajax({url:"http://congress.api.sunlightfoundation.com/legislators/locate?zip="+zip+"&apikey=f515312259404d5ab10c5f91bad7429d"}).then(function(resolve) {
      console.log(resolve);
      self.set(field, resolve.results);
    });
  },
  getSubCommittees(committee_id) {
    var self = this;
    Ember.$.ajax({
      url: "http://congress.api.sunlightfoundation.com/committees?subcommittee=true&parent_committee_id="+committee_id+"&apikey=f515312259404d5ab10c5f91bad7429d"
    }).then(function(resolve) {
      console.log("subCommittee", resolve);
      self.set('committees', resolve.results);
    });
  },
});
