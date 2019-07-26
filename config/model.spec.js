const db = require('../database/dbConfig');

const Users = require('./model');

describe('user model', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('insert()', () => {
        it('should insert the user into the db', async () => {
            await Users.add({ username: 'User1', password: 'password'}); 

            const users = await db('users');

            expect(users).toHaveLength(1);
        });

        it('should insert the user into the db', async () => {
            await Users.add({ username: 'User2', password: 'password'}); 
            await Users.add({ username: 'User3', password: 'password'}); 

            const users = await db('users'); 

            expect(users).toHaveLength(2);
        });
    });
});
