jest.mock('../src/request');

import * as user from '../src/User';

it('works with promises', () => {
    return user.getUserName(5)
        .then(name => expect(name).toEqual('Paul'));
});