
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://user:pass@test.se3ih3c.mongodb.net/?retryWrites=true&w=majority&appName=Test";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("Sønderjysk_database");

    const collection = database.collection("Recipes");

    // Send a ping to confirm a successful connection
    const query = { CookingTime: { $lte: 30 } };
        
    // Execute the query
    const result = await collection.find(query).toArray();

            console.log("Cakes with cooking time 30 or less:");
    console.log(result);
} catch (error) {
    console.error("Error:", error);
} finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


/* result: 

C:\Users\andr515i\Desktop\skole\H3\ORM\MongoDB>node getCakes.js
Cakes with cooking time 30 or less:
[
  {
    _id: new ObjectId('65d7029424efc521059d3c05'),
    name: 'Hindbærsnitter',
    ingredients: [
      '200 g koldt smør',
      '350 g hvedemel',
      '150 g flormelis',
      '1 spsk vaniljesukker',
      '1 æg'
    ],
    CookingTime: 20,
    TraditionalDescription: 'To lag mørdej med hindbærsyltetøj i midten og glasur ovenpå.'
  },
  {
    _id: new ObjectId('65d7052924efc521059d3c07'),
    name: 'Gåsebryst',
    ingredients: [
      '2 dl mælk',
      '1 æg',
      '2 spsk sukker',
      '1 spsk majsstivelse eller hvedemel',
      '1 vaniljestang (kornene heraf) eller 1 tsk vaniljepasta'
    ],
    CookingTime: 12,
    TraditionalDescription: 'En flødeskumskage med mørk chokoladeovertræk.'
  },
  {
    _id: new ObjectId('65d7056924efc521059d3c08'),
    name: 'Gåsebryst',
    ingredients: [
      '200 g hvedemel (ca. 3¼ dl)',
      '35 g kokosmel (ca. 1 dl)',
      '¼ tsk bagepulver',
      '125 g sukker (ca. 1½ dl)',
      '125 g koldt smør',
      '1 spsk sammenpisket æggehvide',
      '200 g mandler'
    ],
    CookingTime: 8,
    TraditionalDescription: ' En småkage med sukker og mandler ovenpå.'
  },
  {
    _id: new ObjectId('65d707c724efc521059d3c0b'),
    name: 'Napoleonskager',
    ingredients: [
      '2 spsk flormelis',
      '4 plader frossen butterdej (ca. 300 g)',
      '1 vaniljestang - kornene heraf',
      '3 spsk flormelis',
      '3½ dl piskefløde',
      '100 g halverede hindbær',
      'Glasur',
      '1 dl hindbærmarmelade',
      'Spiselige blomster, fx hornvioler',
      'Finthakkede, grønne usaltede pistacienødder'
    ],
    CookingTime: 12,
    TraditionalDescription: 'En mørk, krydret kage ofte med rosiner eller nødder.'
  }
]

*/