import request from 'supertest'
import app from '../app'

describe('app', () => {
  describe('"/" route', () => {
    it('should respond to a basic GET request', done => {
      request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /application\/json/, done)
    })
  })
})
