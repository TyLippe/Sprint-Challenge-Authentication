const request = require('supertest');

const server = require('./server.js');

describe('server', () => {
    it('db environment set to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('GET /', () => {
        it('should return 200 OK', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });

        it('should return data in JSON', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.type).toMatch(/json/);
                    expect(res.type).toBe('application/json');
                });
        });

        it('should return { api: "up" } as the body', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.body).toEqual({ api: 'up' });
                    expect(res.body.api).toBe('up');
                });
        });
    });
});
