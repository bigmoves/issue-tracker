var get = Ember.get;

var incrementPage = function(amt) {
  return Ember.computed('page', 'numPages', function() {
    var newPage = this.get('page') + amt;
    if (newPage <= this.get('numPages') &&
        newPage >= 1) {
      return newPage;
    }
  });
};

export default Ember.ArrayController.extend({
  needs: ['application'],
  currentUser: Em.computed.alias('controllers.application.model'),

  queryParams: ['filter', 'state', 'labels', 'sort', 'direction', 'page'],
  filter: 'all',
  state: 'open',
  labels: null,
  sort: 'createdAt',
  direction: 'desc',
  page: 1,
  pageSize: 30,

  hasPagination: Em.computed.notEmpty('pages.[]'),

  pages: function() {
    var pageSize = this.get('pageSize'),
        l = this.get('sortedIssues.length'),
        pages = Math.ceil(l / pageSize),
        pagesArray = [];

    for(var i = 0; i < pages; i ++) {
      pagesArray.push(i + 1);
    }

    return pagesArray;
  }.property('pageSize', 'sortedIssues.length'),

  numPages: function() {
    var pageSize = this.get('pageSize'),
        l = this.get('filteredByState');
    return Math.ceil(l / pageSize);
  }.property('pageSize'),

  paged: function() {
    var page = this.get('page') - 1,
        pageSize = this.get('pageSize'),
        start = page * pageSize,
        end = start + pageSize;
    return this.get('sortedIssues').slice(start, end);
  }.property('page', 'sortedIssues', 'pageSize'),

  previousPage: incrementPage(-1),
  nextPage:     incrementPage(1),

  issuesSorting: function() {
    return this.get('sort') + ':' + this.get('direction');
  }.property('sort', 'direction'),

  filterByUser: function() {
    var user = this.get('currentUser');
    return this.get('model').filterBy('user', user);
  }.property('model.@each', 'user'),

  filterByAssignee: function() {
    var user = this.get('currentUser');
    return this.get('model').filterBy('assignee', user);
  }.property('model.@each', 'user'),

  filterByMentions: function() {
    //TODO
  }.property(),

  filteredContent: function() {
    var filter = this.get('filter');

    if (filter === 'assigned') {
      return this.get('filterByAssignee');
    } else if (filter === 'created') {
      return this.get('filterByUser');
    } else if (filter === 'mentioned') {
      return this.get('filterByMentions');
    } else {
      return this.get('content');
    }

  }.property('filter'),

  filteredByState: function() {
    var state = this.get('state');
    return this.get('filteredContent').filterProperty('state', state);
  }.property('model.@each', 'state', 'filter'),

  sortedIssues: function() {
    var sortby = this.get('sort');
    var direction = this.get('direction');
    var filtered = this.get('filteredByState');

    if(sortby === 'comments') {
      return filtered.toArray().sort(function(a,b) {
        if (direction === 'asc') {
          return Ember.compare(a.get('comments.length'), b.get('comments.length'));
        }else{
          return Ember.compare(b.get('comments.length'), a.get('comments.length'));
        }
      });
    } else {
      return filtered.toArray().sort(function(a,b) {
        if (direction === 'asc') {
          return Ember.compare(get(a, sortby), get(b, sortby));
        }else{
          return Ember.compare(get(b, sortby), get(a, sortby));
        }
      });
    }

  }.property('direction', 'sort', 'filteredByState.@each'),

  openIssuesCount: function() {
    return this.get('model').filterProperty('state', 'open').length;
  }.property('model.@each'),

  closedIssuesCount: function() {
    return this.get('model').filterProperty('state', 'closed').length;
  }.property('model.@each'),

});
