/**
 * Created by med on 26/11/15.
 */

angular.module('ContactsApp')
.factory('Contact', function ($resource) {
    return $resource('/api/contact/:id', {id: '@id'}, {
        'update': { method: 'PUT'}
    });
});