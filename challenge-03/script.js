
    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];
    
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's

    const list = inventors.filter(inventor => inventor.year> 1500 && inventor.year < 1600)
    console.table(list)
    
    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names

    const names = inventors.map( inventor => `${inventor.first} ${inventor.last}` )
    console.table(names)

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest

    const yearAsc = inventors.sort(function(a, b){
      return a.year-b.year
    })
    console.table(yearAsc)

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
    const age = inventors.map(inventor=> (inventor.passed-inventor.year))
    console.log(age)
    const totalAge=age.reduce((total, inventor) => total + inventor)
    console.table(totalAge)

    // 5. Sort the inventors by years lived
    
    const oldest = inventors.sort(function(a,b){
      const older= a.passed-a.year;
      const younger = b.passed-b.year;
      return older > younger? 1:-1
    })
    console.table(oldest)
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    const bypassCorsUrl = 'https://cors.bridged.cc/'
    
const headersOption = {
  headers: {
      'Access-Control-Allow-Origin': '*',
  }
}
const uri = 'https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris'
const url = `${bypassCorsUrl}${uri}`

fetch(url).then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {
	// This is the HTML from our response as a text string
  var parser = new DOMParser();
	var doc = parser.parseFromString(html, 'text/html');
  const category = doc.querySelector('.mw-category')
  const links = category.querySelectorAll('a')
  linksArray = Array.from(links)
  const deWords = linksArray.filter(link=>link.innerHTML.includes('de'))
  console.log(deWords)
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

    // 7. sort Exercise
    // Sort the people alphabetically by last name

    const sortedPeople = people.sort(function(a,b){
      if(a>b){
        return 1;
      }
      if(a<b){
        return -1;
      }
      return 0;
    })
    console.log(sortedPeople)

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const transprot = data.reduce(function(obj, item){
      if(!obj[item]){
        obj[item]=0;
      }
      obj[item]++;
      return obj
    },{})
    console.table(transprot)
