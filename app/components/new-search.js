import Ember from 'ember';

export default Ember.Component.extend({
  dataService: Ember.inject.service(),
  reps: [],
  showCommitteeButton: true,
  actions: {
    findReps() {
      this.get('dataService').getRepsByZip(this.get('zip'));
    },
    showCommittees() {
      this.get('dataService').getCommittees();
      this.set('showCommitteeButton', false);
    },
    getSubCommittees(committee) {
      if(!committee.subcommittee) {
        this.set('showCommitteeButton', true);
        this.get('dataService').getSubCommittees(committee.committee_id);
      }
    }
  }
});
