# MongoDB

## Andreas' Self-Reflect Notes

**Cloud or Local?**
We have chosen MongoDB cloud-based.

I personally opted for the cloud solution because I haven't tried it before, so it would be a good learning opportunity. Just as I haven't tried MongoDB before and chose it to try it out and learn.

**Step 2: Data Insertion**
I - Andreas - inserted data via the MongoDB UI on their website.

I did this because I didn't immediately see any other ways to set it up so that you could write commands to perform CRUD operations on it. However, I would like to try and make them work via a console or something similar to make it easier to perform CRUD operations.

**Step 3: Data Retrieval**
I started this step by trying to get everything to run via Node.js.

When I got it to work, it was relatively easy to understand. However, there are some MongoDB query operators that one needs to learn, but otherwise, most of it looks simple. I managed to get it to work by running `node getCakes.js`.

**Step 4: Data Update**
Since I moved on to using Node.js, it became more of a race to figure out which methods and methodologies to use, but once found, it was super easy. Since IDs are not just 1, 2, 127, or 12312412, but rather a mix of numbers and letters, it is a bit more important to keep track of them through these. However, it probably doesn't matter much, as you could always find a way around if there were any problems. There was a time when I misspelled in my field for my documents, so instead of updating what exists, the script created a whole new field. It was very interesting to see. I'm used to it just throwing a lot of errors and grumpy messages in that case, but not to the extent here. I think it makes sense in these kinds of databases, as a lot of random data comes in quickly, so there just needs to be room for everything that comes in, no matter what.

**Step 5: Data Deletion**
This step was definitely the fastest for me. I even took extra time to add colors to the console to make it easier to see the different objects being output. In general, it is super easy to work with both MongoDB and Node.js.

**Reflection:**
In addition to the obvious, it has been interesting. I went through a case where in my code I misspelled the field in my documents, resulting in me creating a whole new field instead of getting an error, or it just stopped or something like that. It certainly makes sense when you think about document databases being made for large amounts of random data. I probably prefer a relational database as I have worked mostly with that. But I can see the beauty in the mess called document databases. It is quick to set up and debug.

It was definitely an advantage to be able to create an array of any length for each individual document. Each different cake has a completely different number of ingredients. The smallest in my table has 5, while the largest has 20 different ingredient data. Besides that, if a new field were to come in, something like "OriginOfCreation": "string", it would be super easy to add. If you wanted, you could start adding recipes for barbecue dishes. There would be no problems (other than in the logic of the code etc... good luck!)

I have gained a broader understanding of what "databases" entail. Initially, I only had knowledge of relational databases, but now I have a basic understanding of what document DBs are supposed to be, and I expect to learn more about the other types of DBs that are widely known.
