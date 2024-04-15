const app = require('./app.js');

test('Server starts up correctly', () => {
    expect(app).toBeDefined();
});

afterAll(() =>{
    app.close();
});