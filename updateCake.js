const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = "mongodb+srv://user:pass@test.se3ih3c.mongodb.net/?retryWrites=true&w=majority&appName=Test";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(cakeId, additionalInfo) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("Sønderjysk_database");

    const collection = database.collection("Recipes");

    // Fetch the document before the update
    const beforeUpdate = await collection.findOne({
      _id: new ObjectId(cakeId),
    });
    console.log("Document Before Update:");
    console.log(beforeUpdate);

    const filter = { _id: new ObjectId(cakeId) };

    const cakeUpdateInfo = {
      $set: {
        TraditionalDescription: additionalInfo,
      },
    };

    const result = await collection.updateOne(filter, cakeUpdateInfo);

    console.log(`${result.modifiedCount} document(s) updated`);
    // Fetch the document after the update
    const afterUpdate = await collection.findOne({ _id: new ObjectId(cakeId) });
    console.log("Document After Update:");
    console.log(afterUpdate);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run(
  "65d70a0424efc521059d3c0e",
  " || updated 22-2-2024 || this cake is now deprecated! look at our docs to find out what to use. effective 22-2-2024"
).catch(console.dir);





/* result: 


C:\Users\andr515i\Desktop\skole\H3\ORM\MongoDB>node updateCake.js
Document Before Update:
{
  _id: new ObjectId('65d70a0424efc521059d3c0e'),
  name: 'Sandkage',
  ingredients: [
    '250 g blødt smør',
    '250 g sukker (ca. 3 dl)',
    '4 æg',
    '250 g hvedemel (ca. 4¼ dl)',
    '3 tsk vaniljesukker',
    '1 tsk bagepulver',
    'Smør til formene'
  ],
  CookingTime: 50,
  TraditionalDescription: 'sand i en kage.'
}
1 document(s) updated
Document After Update:
{
  _id: new ObjectId('65d70a0424efc521059d3c0e'),
  name: 'Sandkage',
  ingredients: [
    '250 g blødt smør',
    '250 g sukker (ca. 3 dl)',
    '4 æg',
    '250 g hvedemel (ca. 4¼ dl)',
    '3 tsk vaniljesukker',
    '1 tsk bagepulver',
    'Smør til formene'
  ],
  CookingTime: 50,
  TraditionalDescription: ' || updated 22-2-2024 || this cake is now deprecated! look at our docs to find out what to use. effective 22-2-2024'
}


*/ 