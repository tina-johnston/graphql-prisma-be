import { ApolloServer } from "apollo-server";
import { schema } from "./schema";

const port = Number(process.env.PORT) || 4000;

const server = new ApolloServer({
    schema,
 });

server.listen( { port }, () => console.log(`Server is running on port ${port}`));
