import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefsPath = path.join(__dirname, "/**/*.typeDefs.js");
const resolversPath = path.join(__dirname, "/**/*.resolvers.js");

const loadedTypeDefs = loadFilesSync(typeDefsPath);
const loadedResolvers = loadFilesSync(resolversPath);

const mergedTypeDefs = mergeTypeDefs(loadedTypeDefs);
const mergedResolvers = mergeResolvers(loadedResolvers);

const schema = makeExecutableSchema({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
});

export default schema;
