const { expect } = require('chai');

const { 
    bulkInsertUser, dropUsers, setUserCreator, showUserParents 
} = require('../../db/user_repository');

const makeUserData = (UserName, Parent) => ({ UserName, Parent });

const demo_users = [
    makeUserData('Ali', 'Budi'), makeUserData('Budi'), makeUserData('Cecep', 'Ali')
];

describe('check get user creator', checkGetUserCreator);

function checkGetUserCreator() {
    before('add user sample', addUserSample)

    it('check find user creator query', checkFindCreator)

    after('remove user sample', removeUserSample)
}

async function addUserSample() {
    const new_users = demo_users.map(({ UserName }) => ({ UserName }));

    await bulkInsertUser(new_users);

    const user_parents = demo_users.filter(({ Parent }) => Parent).map((data) => setUserCreator(data));

    await Promise.all(user_parents);
}

async function checkFindCreator() {
    const result = await showUserParents();

    expect(result, 'The result should have records equals total of sample data').to.have.lengthOf(demo_users.length);
}

async function removeUserSample() {
    await dropUsers();
}