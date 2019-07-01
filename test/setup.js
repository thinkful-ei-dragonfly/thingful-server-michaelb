process.env.TZ = 'UTC'
process.env.NODE_ENV = 'test'
process.env.JWT_SECRET = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6IjJmZjgxY2Y3LWJiMzYtNDFmYi05OGJjLTA1NjZkZjczMTQ1ZCIsImlhdCI6MTU2MTc1OTY0NCwiZXhwIjoxNTYxNzYzMjQ0fQzTdvx1OwdIcXLaTBDX2PVWT0sO7dduFbAWKK3AdIqXQ'

require('dotenv').config()

process.env.TEST_DB_URL = process.env.TEST_DB_URL
  || "postgresql://dunder-mifflin@localhost/thingful-auth-test"

const { expect } = require('chai')
const supertest = require('supertest')

global.expect = expect
global.supertest = supertest
