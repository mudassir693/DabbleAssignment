const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const RecordType = new GraphQLObjectType({
  name: "Record",
  fields: () => ({
    
    Country: { type: GraphQLString },
    Year: { type: GraphQLString },
    Area: { type: GraphQLInt },
    TotalPopulation: { type: GraphQLInt },
    _id:{type:GraphQLString}
    
  }),
});

module.exports = RecordType;
