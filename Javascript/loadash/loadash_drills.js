var _ = require('lodash');

// 1) How many people
// var data = [{name: 'John'}, {name: 'Mary'}, {name: 'Joe'}, {name: 'Ben'}];
// console.log('Number of people: ', data.length);

// 2) What are the names?
// var data = [{name: 'John'}, {name: 'Mary'}, {name: 'Joe'}, {name: 'Ben'}];
// console.log(_.map(data,'name'));

// 3) What names begin with the letter J?
// var data = [{name: 'John'}, {name: 'Mary'}, {name: 'Joe'}, {name: 'Ben'}];
// console.log(_.filter(_.map(data,'name'),function(elem){
//     return elem[0] == 'J';
// }));

// 4) How many Johns?
// var data = [{name: 'John'}, {name: 'John'}, {name: 'John'}, {name: 'Ben'}];
// var count = _.filter(data,{name:'John'}).length;
// var count2 = _.filter(data,function(elem){
//     return elem.name == 'John';
// }).length;
// console.log('No. of Johns',count + " " +count2);

// 5) What are all the first names?
// var data = [{name: 'John Smith'}, {name: 'Mary Kay'}, {name: 'Peter Pan'}, {name: 'Ben Franklin'}];
// var firstNames = _.map(data,function(elem){
//     return elem.name.split(' ')[0];
// });
// console.log(firstNames,"========= firstNames");

// 6) What are the first names of Smith?
// var data = [{name: 'John Smith'}, {name: 'Mary Smith'}, {name: 'Peter Pan'}, {name: 'Ben Smith'}];
// var smithFirstNames = _.compact(_.map(data,function(elem){
//     if(elem.name.split(' ')[1] == 'Smith') {
//         return elem.name.split(' ')[0];
//     }
// }));
// console.log(smithFirstNames);

// 7) Change the format to lastname, firstname
// var data = [{name: 'John Smith'}, {name: 'Mary Kay'}, {name: 'Peter Pan'}];
// var parts = [];
// var lastFirst = _.map(data,function(elem){
//     parts = elem.name.split(' ');
//     return parts[1] + ', '+parts[0];
// });
// console.log(lastFirst);

// 8) How many women?
// var data = [{name: 'John Smith', gender: 'm'}, {name: 'Mary Smith', gender: 'f'}, {name: 'Peter Pan', gender: 'm'}, {name: 'Ben Smith', gender: 'm'}];
// var wCount =  _.filter(data,function(elem){
//     return elem.gender == 'f';
// }).length;
// console.log(wCount);

// 9) How many men whose last name is Smith?
// var data = [{name: 'John Smith', gender: 'm'}, {name: 'Mary Smith', gender: 'f'}, {name: 'Peter Pan', gender: 'm'}, {name: 'Ben Smith', gender: 'm'}]
// var mSmithCount = _.filter(data,function(elem){
//     return elem.gender == 'm' && elem.name.split(' ')[1] == 'Smith';
// }).length;
// console.log(mSmithCount);

// 10) Are there more men than women?
// var data = [{name: 'John Smith', gender: 'm'}, {name: 'Mary Smith', gender: 'f'}, {name: 'Peter Pan', gender: 'm'}, {name: 'Ben Smith', gender: 'm'}];
// var genderPartition = _.partition(data,function(elem){
// return elem.gender == 'm';
// });
// var males = genderPartition[0];
// var females = genderPartition[1];
// if(males.length > females.length) {
//     console.log('Yes');
// } else {
//     console.log('No');
// }

// 11) What is Peter Pan's gender?
// var data = [{name: 'John Smith', gender: 'm'}, {name: 'Mary Smith', gender: 'f'}, {name: 'Peter Pan', gender: 'm'}, {name: 'Ben Smith', gender: 'm'}];
// var peterGen = (_.filter(data,function(elem){
//     return elem.name = 'Peter Pan';
// }))[0].gender;
// console.log('Peter Pan\'s gender: ',peterGen);

// 12) What is the oldest age? 
// var data = [{name: 'John Smith', age: 54}, {name: 'Mary Smith', age: 42}, {name: 'Peter Pan', age: 15}, {name: 'Ben Smith', age: 35}];
// var maxAge = _.max(data,'age').age;
// console.log('Max Age: ',maxAge);

// 13) Is it true everyone is younger than 60?
// var data = [{name: 'John Smith', age: 54}, {name: 'Mary Smith', age: 55}, {name: 'Peter Pan', age: 15}, {name: 'Ben Smith', age: 35}];
// console.log(_.every(data,function(elem){
//     return elem.age < 60;
// }));

// 14) Is it true someone is not an adult (younger than 18)?
// var data = [{name: 'John Smith', age: 54}, {name: 'Mary Smith', age: 42}, {name: 'Peter Pan', age: 25}, {name: 'Ben Smith', age: 35}];
// console.log(_.some(data,function(elem){
//     return elem.age < 18;
// }));

// 15) How many people whose favorites include food?
// var data = [{ name: 'John Smith', age: 54, favorites: ['food', 'movies'] },
// { name: 'Mary Smith', age: 42, favorites: ['food', 'travel'] },
// { name: 'Peter Pan', age: 15, favorites: ['minecraft', 'food'] },
// { name: 'Ben Smith', age: 35, favorites: ['craft', 'food'] }];

// var count = _.filter(data,function(elem){
//     return elem.favorites.indexOf('food') != -1;
// }).length;

// console.log(count);

// 16) Who are over 40 and love travel?
// var data = [{ name: 'John Smith', age: 54, favorites: ['food', 'movies'] },
// { name: 'Mary Smith', age: 42, favorites: ['food', 'travel'] },
// { name: 'Peter Pan', age: 15, favorites: ['minecraft', 'pokemo'] },
// { name: 'Joe Johnson', age: 46, favorites: ['travel', 'movies'] },
// { name: 'Ben Smith', age: 35, favorites: ['craft', 'food'] }];

// console.log(_.filter(data,function(elem){
//     return elem.age > 40 && elem.favorites.indexOf('travel') != -1;
// }));

// 17) Who is the oldest person loving food?
// var data = [{ name: 'John Smith', age: 54, favorites: ['food', 'movies'] },
// { name: 'Mary Smith', age: 42, favorites: ['food', 'travel'] },
// { name: 'Peter Pan', age: 15, favorites: ['minecraft', 'pokemo'] },
// { name: 'Joe Johnson', age: 46, favorites: ['travel', 'movies'] },
// { name: 'Ben Smith', age: 35, favorites: ['craft', 'food'] }];

// var result = _.max(_.filter(data,function(elem){
//     return elem.favorites.indexOf('food') != -1;
// }),'age').name;

// console.log(result);

// 18) What are all the unique favorites?
// var data = [{name: 'John Smith', age: 54, favorites: ['food', 'movies']},
// {name: 'Mary Smith', age: 42, favorites: ['food', 'travel']},
// {name: 'Peter Pan', age: 15, favorites: ['minecraft', 'pokemo']},
// {name: 'Joe Johnson', age: 46, favorites: ['travel', 'movies']},
// {name: 'Ben Smith', age: 35, favorites: ['craft', 'food']}];

// var allFavorites = _.reduce(data,function(allFavorites,elem){
//     return _.union(allFavorites,elem.favorites)
// });

// console.log(allFavorites);

// 19) What are all the unique last names?
// var data = [{name: 'John Smith', age: 54, favorites: ['food', 'movies']},
// {name: 'Mary Smith', age: 42, favorites: ['food', 'travel']},
// {name: 'Peter Pan', age: 15, favorites: ['minecraft', 'pokemo']},
// {name: 'Joe Johnson', age: 46, favorites: ['travel', 'movies']},
// {name: 'Ben Smith', age: 35, favorites: ['craft', 'food']}];

// var allLastNames = _.reduce(data,function(allLNames,elem){
//     return _.union(allLNames,[elem.name.split(' ')[1]]);
// });

// console.log('all Last Names ',allLastNames);

// 20) Group people by age (teens, 20s, 30s, 40s, 50s)
// var data = [{name: 'John Smith', age: 54},
// {name: 'Mary Smith', age: 42},
// {name: 'Peter Pan', age: 15},
// {name: 'Kelly Fan', age: 35},
// {name: 'Adam Potts', age: 42},
// {name: 'Joe Johnson', age: 46},
// {name: 'Ben Smith', age: 35}];

// var groupedData = _.groupBy(data,function(elem){
//     return Math.floor(elem.age / 10);
// });

// console.log(groupedData,'groupedData ========');

// 21) What are the age groups?
// var data = [{ name: 'John Smith', age: 54 },
// { name: 'Mary Smith', age: 42 },
// { name: 'Peter Pan', age: 15 },
// { name: 'Kelly Fan', age: 35 },
// { name: 'Adam Potts', age: 42 },
// { name: 'Joe Johnson', age: 46 },
// { name: 'Sri ram', age: 6 },
// { name: 'Ben Smith', age: 35 }];

// var ageGroups = _.keys(_.groupBy(data,function(elem){
//     return  Math.floor(elem.age / 10);
// }));
// console.log(ageGroups);

// 22) How many people are in each age group?
// var data = [{name: 'John Smith', age: 54},
// {name: 'Mary Smith', age: 42},
// {name: 'Peter Pan', age: 15},
// {name: 'Kelly Fan', age: 35},
// {name: 'Adam Potts', age: 42},
// {name: 'Joe Johnson', age: 46},
// {name: 'Ben Smith', age: 35}];
// var groups = _.groupBy(data,function(elem){
//     return Math.floor(elem.age / 10)
// });

// var result = _.mapValues(groups,function(v,k,obj){
//     return v.length;
// });

// console.log(result);

// 23) Who is the first person in each age group?
// var data = [{ name: 'John Smith', age: 54 },
// { name: 'Mary Smith', age: 42 },
// { name: 'Peter Pan', age: 15 },
// { name: 'Kelly Fan', age: 35 },
// { name: 'Adam Potts', age: 42 },
// { name: 'Joe Johnson', age: 46 },
// { name: 'Ben Smith', age: 35 }]

// var result = _.mapValues(_.groupBy(data, function (elem) {
//     return Math.floor(elem.age / 10);
// }), function (v, k, obj) {
//     return v[0].name;
// });

// console.log(result);

// 24) Group people by their last name
// var data = [{ name: 'John Smith', age: 54 },
// { name: 'Mary Smith', age: 42 },
// { name: 'Peter Pan', age: 15 },
// { name: 'Kelly Fan', age: 35 },
// { name: 'Adam Potts', age: 42 },
// { name: 'Joe Johnson', age: 46 },
// { name: 'Ben Smith', age: 35 }];

// var result = _.groupBy(data,function(elem){
//     return elem.name.split(' ')[1];
// });

// console.log(result);

// 25) How many people are in each last-name group?
// var data = [{ name: 'John Smith', age: 54 },
// { name: 'Mary Smith', age: 42 },
// { name: 'Peter Pan', age: 15 },
// { name: 'Kelly Fan', age: 35 },
// { name: 'Adam Potts', age: 42 },
// { name: 'Joe Johnson', age: 46 },
// { name: 'Ben Smith', age: 35 }];

// var result = _.mapValues(_.groupBy(data,function(elem){
//     return elem.name.split(' ')[1];
// }),function(v,k,obj){
//     return v.length; 
// }); 

// console.log(result);

// 26) Who is the first person in each last-name group?
// var data = [{ name: 'John Smith', age: 54 },
// { name: 'Mary Smith', age: 42 },
// { name: 'Peter Pan', age: 15 },
// { name: 'Kelly Fan', age: 35 },
// { name: 'Adam Potts', age: 42 },
// { name: 'Joe Johnson', age: 46 },
// { name: 'Ben Smith', age: 35 }];

// var result = _.mapValues(_.groupBy(data,function(elem){
//     return elem.name.split(' ')[1];
// }),function(v,k,obj){
//     return v[0].name; 
// }); 

// console.log(result);

// 27) What are all person-favorite pairs?
// var data = [{ name: 'John Smith', age: 54, favorites: ['food', 'travel'] },
// { name: 'Mary Smith', age: 42, favorites: ['sports', 'travel'] },
// { name: 'Peter Pan', age: 15, favorites: ['movies', 'tv', 'gardening'] },
// { name: 'Kelly Fan', age: 35, favorites: ['movies', 'travel', 'programming'] },
// { name: 'Adam Potts', age: 42, favorites: ['sports', 'food'] },
// { name: 'Joe Johnson', age: 46, favorites: ['tv', 'sports', 'music'] },
// { name: 'Ben Smith', age: 35, favorites: ['movies', 'tv', 'programming'] }];

// var result = _.flatten(_.map(data,function(person){
//     return _.map(person.favorites,function(fav){
//         return {name: person.name, favorite: fav};
//     })
// }));

// console.log(result);

// 28) What are all age-favorite pairs (in ascending order)?
// var data = [{ name: 'John Smith', age: 54, favorites: ['food', 'travel'] },
// { name: 'Mary Smith', age: 42, favorites: ['sports', 'travel'] },
// { name: 'Peter Pan', age: 15, favorites: ['movies', 'tv', 'gardening'] },
// { name: 'Kelly Fan', age: 35, favorites: ['movies', 'travel', 'programming'] },
// { name: 'Adam Potts', age: 42, favorites: ['sports', 'food'] },
// { name: 'Joe Johnson', age: 46, favorites: ['tv', 'sports', 'music'] },
// { name: 'Ben Smith', age: 35, favorites: ['movies', 'tv', 'programming'] }]

// var result = _.sortBy(_.flatten(_.map(data,function(person){
//     return _.map(person.favorites,function(fav){
//         return {age: person.age, favorite: fav}
//     })
// })),function(elem){
//     return elem.age;
// });

// console.log(result);

// 29) Group people by their favorites.
// var data = [{ name: 'John Smith', age: 54, favorites: ['food', 'travel'] },
// { name: 'Mary Smith', age: 42, favorites: ['sports', 'travel'] },
// { name: 'Peter Pan', age: 15, favorites: ['movies', 'tv', 'gardening'] },
// { name: 'Kelly Fan', age: 35, favorites: ['movies', 'travel', 'programming'] },
// { name: 'Adam Potts', age: 42, favorites: ['sports', 'food'] },
// { name: 'Joe Johnson', age: 46, favorites: ['tv', 'sports', 'music'] },
// { name: 'Ben Smith', age: 35, favorites: ['movies', 'tv', 'programming'] }];

// var personFavGroup = _.groupBy(_.flatten(_.map(data,function(person){
//     return _.map(person.favorites,function(fav){
//         return {name:person.name,favorite:fav};
//     })
// })),function(rec){
//     return rec.favorite;
// });

// console.log(personFavGroup);

// 30) What are the names of the people in these 'favorite' groups?

// var data = [{ name: 'John Smith', age: 54, favorites: ['food', 'travel'] },
// { name: 'Mary Smith', age: 42, favorites: ['sports', 'travel'] },
// { name: 'Peter Pan', age: 15, favorites: ['movies', 'tv', 'gardening'] },
// { name: 'Kelly Fan', age: 35, favorites: ['movies', 'travel', 'programming'] },
// { name: 'Adam Potts', age: 42, favorites: ['sports', 'food'] },
// { name: 'Joe Johnson', age: 46, favorites: ['tv', 'sports', 'music'] },
// { name: 'Ben Smith', age: 35, favorites: ['movies', 'tv', 'programming'] }];

// var personFavGroup = _.mapValues(_.groupBy(_.flatten(_.map(data,function(person){
//     return _.map(person.favorites,function(fav){
//         return {name:person.name,favorite:fav};
//     })
// })),function(rec){
//     return rec.favorite;
// }),function(v,k,obj){
//     return _.map(v,function(rec){
//         return rec.name;
//     });
// })

// console.log(personFavGroup);

// 31) What are the sizes of these 'favorite' groups?
// var data = [{ name: 'John Smith', age: 54, favorites: ['food', 'travel'] },
// { name: 'Mary Smith', age: 42, favorites: ['sports', 'travel'] },
// { name: 'Peter Pan', age: 15, favorites: ['movies', 'tv', 'gardening'] },
// { name: 'Kelly Fan', age: 35, favorites: ['movies', 'travel', 'programming'] },
// { name: 'Adam Potts', age: 42, favorites: ['sports', 'food'] },
// { name: 'Joe Johnson', age: 46, favorites: ['tv', 'sports', 'music'] },
// { name: 'Ben Smith', age: 35, favorites: ['movies', 'tv', 'programming'] }];

// var personFavGroup = _.mapValues(_.groupBy(_.flatten(_.map(data,function(person){
//     return _.map(person.favorites,function(fav){
//         return {name:person.name,favorite:fav};
//     })
// })),function(rec){
//     return rec.favorite;
// }),function(v,k,obj){
//     return v.length;
// })

// console.log(personFavGroup);

// 32) Group people by city
// var data = [{ name: 'John Smith', age: 54, favorites: ['food', 'travel'], city: 'Denver' },
// { name: 'Mary Smith', age: 42, favorites: ['sports', 'travel'], city: 'Boulder' },
// { name: 'Peter Pan', age: 15, favorites: ['movies', 'tv', 'gardening'], city: 'Denver' },
// { name: 'Kelly Fan', age: 35, favorites: ['movies', 'travel', 'programming'], city: 'Boulder' },
// { name: 'Adam Potts', age: 42, favorites: ['sports', 'food'], city: 'Denver' },
// { name: 'Joe Johnson', age: 46, favorites: ['tv', 'sports', 'music'], city: 'Denver' },
// { name: 'Ben Smith', age: 35, favorites: ['movies', 'tv', 'programming'], city: 'Boulder' }];

// // var groupByCity = _.groupBy(data,function(person){
// //     return person.city;
// // });

// var groupByCity = _.groupBy(data,'city');
// console.log(groupByCity);

// 33) Group people by city and count how many people in each city
// var data = [{ name: 'John Smith', age: 54, favorites: ['food', 'travel'], city: 'Denver' },
// { name: 'Mary Smith', age: 42, favorites: ['sports', 'travel'], city: 'Boulder' },
// { name: 'Peter Pan', age: 15, favorites: ['movies', 'tv', 'gardening'], city: 'Denver' },
// { name: 'Kelly Fan', age: 35, favorites: ['movies', 'travel', 'programming'], city: 'Boulder' },
// { name: 'Adam Potts', age: 42, favorites: ['sports', 'food'], city: 'Denver' },
// { name: 'Joe Johnson', age: 46, favorites: ['tv', 'sports', 'music'], city: 'Denver' },
// { name: 'Ben Smith', age: 35, favorites: ['movies', 'tv', 'programming'], city: 'Boulder' }];
// var groupByCity = _.mapValues(_.groupBy(data,'city'),function(v,k,obj){
//     return v.length;
// });
// console.log(groupByCity);

// 34) What is the oldest age in each city?
// var data = [{name: 'John Smith', age: 54, favorites: ['food', 'travel'], city: 'Denver'},
// {name: 'Mary Smith', age: 42, favorites: ['sports', 'travel'], city: 'Boulder'},
// {name: 'Peter Pan', age: 15, favorites: ['movies', 'tv', 'gardening'], city: 'Denver'},
// {name: 'Kelly Fan', age: 35, favorites: ['movies', 'travel', 'programming'], city: 'Boulder'},
// {name: 'Adam Potts', age: 42, favorites: ['sports', 'food'], city: 'Denver'},
// {name: 'Joe Johnson', age: 46, favorites: ['tv', 'sports','music'], city: 'Denver'},
// {name: 'Ben Smith', age: 35, favorites: ['movies', 'tv', 'programming'], city: 'Boulder'}];
// var groupByCity = _.groupBy(data,"city");
// var result = _.mapValues(groupByCity,function(v,k,obj){
//     return _.max(v,'age').age;
// });
// console.log(result);

// 35) How many Smith's are in each city?
var data = [{ name: 'John Smith', age: 54, favorites: ['food', 'travel'], city: 'Denver' },
{ name: 'Mary Smith', age: 42, favorites: ['sports', 'travel'], city: 'Boulder' },
{ name: 'Peter Pan', age: 15, favorites: ['movies', 'tv', 'gardening'], city: 'Denver' },
{ name: 'Kelly Fan', age: 35, favorites: ['movies', 'travel', 'programming'], city: 'Boulder' },
{ name: 'Adam Potts', age: 42, favorites: ['sports', 'food'], city: 'Denver' },
{ name: 'Joe Johnson', age: 46, favorites: ['tv', 'sports', 'music'], city: 'Denver' },
{ name: 'Ben Smith', age: 35, favorites: ['movies', 'tv', 'programming'], city: 'Boulder' }];
var groupByCity = _.mapValues(_.groupBy(data,'city'),function(v,k,obj){
    return _.filter(v,function(elem){
        return _.includes(elem.name,'Smith');
    }).length;
});
console.log(groupByCity);