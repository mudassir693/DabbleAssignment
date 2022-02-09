const graphql = require("graphql");
const Record = require('../models/Schema')

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

const RecordType = require("./TypeDefs/RecordType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllRecords: {
      type: new GraphQLList(RecordType),
      async resolve(parent, args) {
        const resp = await Record.find()
        return resp;
      },
    },
    getRecordById: {
      type: RecordType,
      args: {
         _id: { type: GraphQLString },
    },
     async resolve(parent, args) {
        return  await Record.findById(args._id);
      },
    },
    UpdateRecord: {
      type: RecordType,
      args: {
         id: { type: GraphQLString },
        Country:{type:GraphQLString },
        Area:{type:GraphQLString },
        Year:{type:GraphQLString },
        TotalPopulation:{type:GraphQLInt }
    },
     async resolve(parent, args) {
      const body = {
        Country:args.Country,
        Area:args.Area,
        Year:args.Year,
        TotalPopulation:args.TotalPopulation
      }
        return  await Record.findByIdAndUpdate(args.id,{$set:body},{new:true});
      },
    },
    DeleteRecord:{
      type:RecordType,
      args:{
        id:{type:GraphQLString}
      },
      async resolve(parent,args){
        return Record.findByIdAndDelete(args.id)
      }
    }
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createRecord: {
      type: RecordType,
      args: {
        _id:{type: GraphQLString},
        Country: { type: GraphQLString },
        Year: { type: GraphQLString },
        Area: { type: GraphQLInt },
        TotalPopulation: { type: GraphQLInt },
      },
     async resolve(parent, args) {
       console.log(parent)

        const newUser = new Record({
            Country: args.Country,
            Year: args.Year,
            Area: args.Area,
            TotalPopulation:args.TotalPopulation
        })
        return await newUser.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
