const productsData = [
  {
    name: 'Educative',
    description: 'Interactive Courses for Software Developers',
    //url: 'https://educative.io/',
    url: null,
    numberOfVotes: "10",
    publishedAt: '2021-04-05',
    authorId: 1,
    categories: ["1"],
  },
  {
    name: 'Apollo',
    description: 'The Apollo Data Graph Platform',
    url: 'https://www.apollographql.com/',
    numberOfVotes: 5,
    publishedAt: '2021-01-08',
    authorId: 2,
    categories: ["2", "3"],
  },
  {
    name: 'OneGraph',
    description: 'Build Integrations 100x Faster',
    url: 'https://www.onegraph.com',
    numberOfVotes: 5,
    publishedAt: '2020-08-22',
    authorId: 1,
    categories: ["2"],
  },
]

const usersData = [
  {
    id: 1,
    userName: 'ellen',
    fullName: 'Ellen James',
    orgId: 7,
  },
  {
    id: 2,
    userName: 'peter',
    fullName: 'Peter Miles',
    orgId: 8,
  }

]

const categoriesData = [
  {
    id: '1',
    slug: 'education',
    name: 'Education',
  },
  {
    id: '2',
    slug: 'frameworks',
    name: 'Frameworks',
  },
  {
    id: '3',
    slug: 'api',
    name: 'API',
  }
]

module.exports = {productsData, usersData, categoriesData}
