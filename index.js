
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const postModel = require('./models/post');
const userModel = require('./models/user');

const models = {
    post: { ...postModel },
    user: {...userModel }
};

console.log(' resolvers ', resolvers, ' models ', models);

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
        return { ...models };
    },
});

server.listen(4000).then(() => console.log('GraphQL server started at 4000'));
