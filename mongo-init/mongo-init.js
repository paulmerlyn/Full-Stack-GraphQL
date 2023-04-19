db.createUser({
  user: 'user',
  pwd: 'pass',
  roles: [
    {
      role: 'dbOwner',
      db: 'products-db',
    },
    {
      role: 'dbOwner',
      db: 'products-db'
    }
  ],
})