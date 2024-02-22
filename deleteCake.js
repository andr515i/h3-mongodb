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

// ANSI escape codes for text color
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m'
};


async function run(cakeId) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("Sønderjysk_database");

    const collection = database.collection("Recipes");

    // Fetch the document before deletion
    const beforeDeletion = await collection.findOne({
      _id: new ObjectId(cakeId),
    });
    console.log(`${colors.yellow}Document Before Deletion:${colors.reset}`);
    console.log(beforeDeletion);

    const filter = { _id: new ObjectId(cakeId) };

    // Send a ping to confirm a successful connection
    const result = collection.deleteOne(filter);
    console.log(`${colors.green}${result.deletedCount} document(s) deleted.${colors.reset}`);

    // Fetch and log the remaining documents
    const remainingDocuments = await collection.find({}).toArray();
    console.log(`${colors.cyan}Remaining Documents:${colors.reset}`);
    console.log(remainingDocuments);

    console.log(`before Deletion document attempt: \n \n ${beforeDeletion}`);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run("65d72b84f62f9bd7775db259").catch(console.dir);








// result : 
// C:\Users\andr515i\Desktop\skole\H3\ORM\MongoDB>node deleteCake.js
// Document Before Deletion:
// {
//   _id: new ObjectId('65d72a98f62f9bd7775db257'),
//   name: 'Slet mig!',
//   ingredients: [
//     '2 dl mælk',
//     '1 æg',
//     '2 spsk sukker',
//     '1 spsk majsstivelse eller hvedemel',
//     '1 vaniljestang (kornene heraf) eller 1 tsk vaniljepasta'
//   ],
//   CookingTime: 12,
//   TraditionalDescription: 'En flødeskumskage med mørk chokoladeovertræk.'
// }
// undefined document(s) deleted.
// Remaining Documents:
// [
//   {
//     _id: new ObjectId('65d7029424efc521059d3c05'),
//     name: 'Hindbærsnitter',
//     ingredients: [
//       '200 g koldt smør',
//       '350 g hvedemel',
//       '150 g flormelis',
//       '1 spsk vaniljesukker',
//       '1 æg'
//     ],
//     CookingTime: 20,
//     TraditionalDescription: 'To lag mørdej med hindbærsyltetøj i midten og glasur ovenpå.'
//   },
//   {
//     _id: new ObjectId('65d7048d24efc521059d3c06'),
//     name: 'Kiksekage',
//     ingredients: [
//       '150 g smør',
//       '300 g mørk chokolade',
//       '50 g flormelis',
//       '2 æggeblommer',
//       '20 firkantede vaniljekiks'
//     ],
//     CookingTime: 780,
//     TraditionalDescription: 'To En kold kage lavet af smør, chokolade og knuste kiks'
//   },
//   {
//     _id: new ObjectId('65d7052924efc521059d3c07'),
//     name: 'Gåsebryst',
//     ingredients: [
//       '2 dl mælk',
//       '1 æg',
//       '2 spsk sukker',
//       '1 spsk majsstivelse eller hvedemel',
//       '1 vaniljestang (kornene heraf) eller 1 tsk vaniljepasta'
//     ],
//     CookingTime: 12,
//     TraditionalDescription: 'En flødeskumskage med mørk chokoladeovertræk.'
//   },
//   {
//     _id: new ObjectId('65d7056924efc521059d3c08'),
//     name: 'Gåsebryst',
//     ingredients: [
//       '200 g hvedemel (ca. 3¼ dl)',
//       '35 g kokosmel (ca. 1 dl)',
//       '¼ tsk bagepulver',
//       '125 g sukker (ca. 1½ dl)',
//       '125 g koldt smør',
//       '1 spsk sammenpisket æggehvide',
//       '200 g mandler'
//     ],
//     CookingTime: 8,
//     TraditionalDescription: ' En småkage med sukker og mandler ovenpå.'
//   },
//   {
//     _id: new ObjectId('65d7060824efc521059d3c09'),
//     name: 'Krydderkage',
//     ingredients: [
//       '1 spsk stødt ingefær',
//       '200 g rørsukker (ca. 2¼ dl)',
//       '½ tsk groft salt',
//       '',
//       '1 spsk stødt kanel',
//       '300 g hvedemel (ca. 5½ dl)',
//       '2 æg',
//       '1 spsk stødt kardemomme',
//       '2½ dl kærnemælk',
//       '1 tsk natron',
//       '1 tsk stødt nellike',
//       '\n200 g blødt smør til chreme',
//       '200 g flormelis (ca. 8 dl) til chreme',
//       '1 spsk fintreven appelsinskal (usprøjtet) til chreme',
//       '1 spsk friskpresset appelsinsaft til chreme'
//     ],
//     CookingTime: 60,
//     TraditionalDescription: 'En mørk, krydret kage ofte med rosiner eller nødder.'
//   },
//   {
//     _id: new ObjectId('65d707c724efc521059d3c0b'),
//     name: 'Napoleonskager',
//     ingredients: [
//       '2 spsk flormelis',
//       '4 plader frossen butterdej (ca. 300 g)',
//       '1 vaniljestang - kornene heraf',
//       '3 spsk flormelis',
//       '3½ dl piskefløde',
//       '100 g halverede hindbær',
//       'Glasur',
//       '1 dl hindbærmarmelade',
//       'Spiselige blomster, fx hornvioler',
//       'Finthakkede, grønne usaltede pistacienødder'
//     ],
//     CookingTime: 12,
//     TraditionalDescription: 'En mørk, krydret kage ofte med rosiner eller nødder.'
//   },
//   {
//     _id: new ObjectId('65d708a524efc521059d3c0d'),
//     name: 'Kanelstang',
//     ingredients: [
//       '100 g Vand',
//       '125 g Mælk',
//       '30 g Gær',
//       '1 Æg',
//       '40 g Sukker',
//       '1 tsk. Kardemomme',
//       '475 g Hvedemel',
//       '120 g Smør – blødt',
//       '1 tsk. salt',
//       '1 vaniljestang eller 2 tsk. vaniljesukker',
//       '15 g sukker til chreme',
//       '1 stort æg til chreme',
//       '2 spsk. maizena til chreme',
//       '2,5 dl sødmælk til chreme',
//       '200 g Smør – blødt til fyld',
//       '200 g Sukker til fyld',
//       '15 g Kanel til fyld',
//       '1 Æg til pensling',
//       '1 spsk. vand til pensling',
//       '1 nip Salt til pensling'
//     ],
//     CookingTime: 95,
//     TraditionalDescription: 'Gærdej fyldt med remonce og kanelsukker, toppet med glasur'
//   },
//   {
//     _id: new ObjectId('65d70a0424efc521059d3c0e'),
//     name: 'Sandkage',
//     ingredients: [
//       '250 g blødt smør',
//       '250 g sukker (ca. 3 dl)',
//       '4 æg',
//       '250 g hvedemel (ca. 4¼ dl)',
//       '3 tsk vaniljesukker',
//       '1 tsk bagepulver',
//       'Smør til formene'
//     ],
//     CookingTime: 50,
//     TraditionalDescription: 'sand i en kage.'
//   },
//   {
//     _id: new ObjectId('65d70a5824efc521059d3c0f'),
//     name: 'Mazarinkage',
//     ingredients: [
//       '150 g blødt smør',
//       '150 g sukker',
//       '3 æg',
//       '150 g groftrevet marcipan',
//       '5 spsk hvedemel',
//       '150 g mørk chokolade',
//       '25 g hakkede, ristede, smuttede mandler'
//     ],
//     CookingTime: 45,
//     TraditionalDescription: 'En tæt kage lavet med mandelessens og ofte overtrukket med\nchokolade.'
//   },
//   {
//     _id: new ObjectId('65d72947f62f9bd7775db256'),
//     name: 'Brunsviger',
//     ingredients: [ 'sugar', 'butter', 'banana', 'flour', 'egg' ],
//     CookingTime: 120,
//     TraditionalDescription: 'This fabolous cake was first introduced in (insert date) and was serveed to the king of xxx blah blah'
//   }
// ]
// before Deletion document attempt:

//  [object Object]