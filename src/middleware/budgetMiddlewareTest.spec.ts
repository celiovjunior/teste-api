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
    const userId = 1
    const productsIds = [1, 2, 3]

    const res = await request(app).get(`/budget/${userId}/${productsIds}`)
    
    // console.log(res.body)

    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('budget')
    expect(res.body["budget"]).toEqual(11348.35)
  })
})