const request = require('supertest');

const server = require('./server.js');

describe('server', () => {
    it('db environment set to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('POST /', () => {
        it('should return 201 OK', () => {
            return request(server)
                .post('/register')
                .send({ username: 'Ty', password: 'password' })
                .then(res => {
                    expect(res.status).toBe(201);
                });
        });
    });
    
    describe('POST /', () => {
        it('should return 200 OK', () => {
            return request(server)
                .post('/login')
                .send({ username: 'Test1', password: 'password' })
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });
    });
});
