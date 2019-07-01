module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DB_URL || 'postgresql://thingful@localhost/thingful',
  TEST_DB_URL: process.env.TEST_DB_URL || 'postgresql://dunder-mifflin@localhost/thingful-test',
  JWT_SECRET: process.env.JWT_SECRET || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6IjJmZjgxY2Y3LWJiMzYtNDFmYi05OGJjLTA1NjZkZjczMTQ1ZCIsImlhdCI6MTU2MTc1OTY0NCwiZXhwIjoxNTYxNzYzMjQ0fQzTdvx1OwdIcXLaTBDX2PVWT0sO7dduFbAWKK3AdIqXQ'
}
