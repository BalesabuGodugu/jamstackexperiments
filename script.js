var quotes = [
  'to develop web applications quickly',
  'to  server side rendering',
  'to request rendering',
  'to build time rendering',
]

var quote = quotes[Math.floor(Math.random() * Math.floor(quotes.length))]
console.log(quote)
document.querySelector('h1').append(quote)
