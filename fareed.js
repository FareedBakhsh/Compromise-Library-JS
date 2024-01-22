// For the installation of the  compromise library following the comand should be used;
// npm install compromise;



/* const nlp = require('compromise');

// Example text containing product names
const text1 = "abbas is a good boy";
const people =  nlp(text1);
const x = people.nouns().out("array");
//console.log(x);


// Import the Compromise library
//const nlp = require('compromise');

// Example text to be analyzed
const text = "The election in the pakistan are near, we should the ready for voting with. the electronic machine for the voing.";

// Create a document using Compromise
const doc = nlp(text);
// Below we are discusing of the function methods of compromise libraray;

// Output the original text
//console.log('Original Text:');
console.log(doc.out('text'));
//console.log('--------------------------');

//Extract  and output the nuoun from the text//
const nouns = doc.nouns().out('array');
console.log("Noun :", nouns);

//Extract  and output the adjective from the text;

const adjectives = doc.adjectives().out('array');
console.log("Adjectives:" , adjectives);
//console.log(adjectives);
//console.log('--------------------------');

// Relpacing the 'electroinc machine" into the. "Computurized machine". ion text by using the relpace method of compromize library;
//Creating the doc by using compromise libraray;

 const modifideTExt = doc.replace('the electronic machine' , 'the Computurized machine').out('text');
 console.log("Adjectives:" , adjectives);
 console.log(modifideTExt);
//console.log('--------------------------');


// These are tolalt method that are used in the compromise libraray;
const sentences = doc.sentences().out('array');
console.log('Sentences:', doc.sentences().out('array'));

const Terms = doc.terms().out('array')
console.log('Terms:', doc.terms().out('array'));

const Verbs = doc.verbs().out('array')
console.log('Verbs:', doc.verbs().out('array'));


const Match = doc.match('Pakistan').out('array');
console.log('Match:', doc.match('Pakistan').out('array'));

//const Negated Sentiment = doc.negate().sentiment()
//console.log('Negated Sentiment:', doc.negate().sentiment());

//const Negated = doc.sentiment();
//console.log('Negated:', doc.negated());

//const sentiment = doc.sentiment();
//console.log('sentiment:', doc.sentiment());

 //const PlainText =  doc.toPlaintext();
// console.log(PlainText);
///console.log('Plain Text:', doc.toPlaintext());


//const  Adding-POS-Tag = doc.add('a', 'Determiner').out('text')
//console.log('Adding POS Tag:', doc.add('a', 'Determiner').out('text'));

const People =  doc.people().out('array');
console.log('People:', doc.people().out('array'));

const Places = doc.places().out('array')
console.log('Places:', doc.places().out('array'));

const Organizations = doc.organizations().out('array')
console.log('Organizations:', doc.organizations().out('array'));

const  Topics =  doc.topics().out('array');
console.log('Topics:', doc.topics().out('array'));

//const  Dates = doc.dates().out('array')
//console.log('Dates:', doc.dates().out('array'));

const Numbers = doc.numbers().out('array')
console.log('Numbers:', doc.numbers().out('array'));
console.log(Numbers)
*/



// Compromize library code in which we are getting the  product name and their price and thier code are following ;

const nlp = require('compromise')//Note ,Compromize libraray is already imported ,therefore we do comment it ;

// Example text containing product names and prices
const text = "The new iPhone 13 is priced at $999.99 . Meanwhile, the Samsung Galaxy S21 costs $799.99.";

// Create a document using Compromise

const doc1 = nlp(text);

// Define a pattern to match product names and prices
const productPattern = '{noun} priced at {money}';

// Match the pattern in the document
const productMatches = doc1.match(productPattern);

// Extract and output product names and prices
productMatches.forEach(match => {
  const productName = match.groups('noun').out('text');
  const productPrice = match.groups('money').out('value');
  
  console.log(`Product: ${productName}, Price: $${productPrice}`);

});
//console.log(productName);
//console.log(productPrice);
try {
    // Your existing code here
  } catch (error) {
    console.error('Error:', error);
  }
































