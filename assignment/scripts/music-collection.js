console.log('***** Music Collection *****')

const collection = [];

function addToCollection(title, artist, yearPublished) {
  let record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(record);
  return record;
}

function showCollection(array) {
  console.log(array.length);
  for (let i=0; i<array.length; i++) {
    console.log(`${array[i].title} by ${array[i].artist},
      published in ${array[i].yearPublished}`)
  }
}

function findByArtist(artist){
  const foundArtist = [];
  for (let i=0; i<collection.length; i++) {
    if (collection[i].artist === artist){
      foundArtist.push(collection[i]);
    }
  }
  return foundArtist
}
console.log(findByArtist('talking heads'));

addToCollection('speaking in tongues', 'talking heads','1983');
addToCollection('the rise and fall of ziggy stardust','david bowie','1972');
addToCollection('kid a','radiohead','2000');
addToCollection(`you're living all over me` ,'dinosaur jr','1987');
addToCollection('aja', 'steely dan','1977');
addToCollection('the velvet underground','the velvet underground','1969');

showCollection(collection);

console.log(findByArtist('talking heads'));
