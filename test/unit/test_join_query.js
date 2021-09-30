const { expect } = require('chai');

const { 
    bulkInsertUser, dropUsers, setUserCreator, showUserParents 
} = require('../../db/user_repository');

const makeUserData = (UserName, Parent) => ({ UserName, Parent });

const demo_users = [
    makeUserData('Ali', 'Budi'), makeUserData('Budi'), makeUserData('Cecep', 'Ali')
];

/**
 * Test query user creator by
 * 1. Add sample data
 * 2. Run query then inspect the result 
 * 3. Remove sample data 
 */
describe('check get user creator', checkGetUserCreator);

function checkGetUserCreator() {
    before('add user sample', addUserSample);

    it('check find user creator query', checkFindCreator);

    after('remove user sample', removeUserSample);
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

    let index = 0;

    while(index < result.length) {
        const { UserName, Parent } = demo_users[index];

        expect(result[index], `${UserName} record should have id`).to.have.property('id').to.greaterThan(0)

        expect(result[index], `${UserName} should have same username`).to.have.property('UserName').to.equal(UserName);

        if(Parent) {
            expect(result[index], `${UserName} should have parent ${Parent}`).to.have.property('Parent').to.equal(Parent);
        }
        
        index++;
    }
}

async function removeUserSample() {
    await dropUsers();
}