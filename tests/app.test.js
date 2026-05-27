const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('should return status ok', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

describe('POST /add', () => {
  it('should add two numbers correctly', async () => {
    const res = await request(app)
      .post('/add')
      .send({ a: 5, b: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(8);
  });

  it('should return 400 for invalid input', async () => {
    const res = await request(app)
      .post('/add')
      .send({ a: 'hello', b: 3 });
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBeDefined();
  });
});

describe('POST /reverse', () => {
  it('should reverse a string correctly', async () => {
    const res = await request(app)
      .post('/reverse')
      .send({ text: 'hello' });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe('olleh');
  });

  it('should return 400 if text is missing', async () => {
    const res = await request(app)
      .post('/reverse')
      .send({});
    expect(res.statusCode).toBe(400);
  });
});
