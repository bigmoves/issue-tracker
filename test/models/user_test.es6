import User from 'client/app/models/user';

module('Unit - User');

test('exists', function(){
  ok( User, 'Expected User to exist.');
});
