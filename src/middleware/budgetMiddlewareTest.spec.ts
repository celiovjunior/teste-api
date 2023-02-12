import request from "supertest"
import app from "../index"

describe('Test Middlewares', () => {
  it('should check list of users', async () => {
    const res = await request(app).get('/users')

    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveLength(100)
  })

  it('should check list of products', async () => {
    const res = await request(app).get('/products')
    
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveLength(100)
  })

  it('should calculate budget', async () => {
    const userId = 5
    const productsIds = [4, 12, 18, 21]

    const res = await request(app).get(`/budget/${userId}/${productsIds}`)
    
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('budget')
    expect(res.body["budget"]).toEqual(7032.47)
  })
})