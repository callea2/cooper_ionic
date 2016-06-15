angular.module('starter.services', [])

.factory('performanceData', function ($resource, API_URL) {
  return $resource(API_URL + '/data', {}, {
    query: {method: 'GET', isArray: false}
  });
});
