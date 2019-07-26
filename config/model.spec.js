const db = require('../data/dbConfig');

const Users = require('./model');

describe('user model', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('insert()', () => {
        it('should insert the user into the db', async () => {
            await Users.insert({ name: 'User1' }); 

            const users = await db('users');

            expect(users).toHaveLength(1);
        });

        it('should insert the user into the db', async () => {
            await Users.insert({ name: 'User2' }); 
            await Users.insert({ name: 'User3' }); 

            const users = await db('users'); 

            expect(users).toHaveLength(2);
        });
    });
});
