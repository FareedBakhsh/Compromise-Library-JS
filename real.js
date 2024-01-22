const nlp = require('compromise');

// Example text containing product names and prices
const text = "The new iPhone 13 is priced at $999.99. Meanwhile, the Samsung Galaxy S21 costs $799.99.";

// Create a document using Compromise
const doc = nlp(text);

// Define a pattern to match product names and prices
const productPattern = '{noun} priced at {money}';

// Match the pattern in the document
const productMatches = doc.match(productPattern);

// Extract and output product names and prices
productMatches.forEach(match => {
  const productName = match.groups('noun').out('text');
  const productPrice = match.groups('money').out('value');
  
  console.log(`Product: ${productName}, Price: $${productPrice}`);
});
