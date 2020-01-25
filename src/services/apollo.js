import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost'

const httpLink = new HttpLink({
    uri: 'http://localhost:3030/graphql'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

export default client;