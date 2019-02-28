const Koa = require('koa');
const graphqlHTTP = require('koa-graphql');
const schema = require('./grpahql/schema');
const mount = require('koa-mount');
const initDB = require('./database');
const cors = require('@koa/cors');

const app = new Koa();

app.listen(9000);

app.on('error', err => {
    console.error('server error', err)
});

app.use(cors());

app.use(mount('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
})));

initDB();