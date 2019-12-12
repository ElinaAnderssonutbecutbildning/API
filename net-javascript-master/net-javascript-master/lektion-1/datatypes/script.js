// Javascript datatypes: 
// String, Number, Boolean, null, undefined, Object, Symbol

/*
    Javascript       C#                              MSSQL
    String           string, char                    char, nchar, varchar, nvarchar
    Number           int, double, decimal, float     int, smallint, bigint, money
    Boolean          bool                            bit
    null             null                            null
    undefined        -----                           -----  
    Object           object, en klass                -----
    Symbol           -----                           -----
*/

// Deklarera variabler
/*
    Javascript              C#
    var                     var
    let                     int, string, bool, double, decimal, float, klass/object/dynamic
    const                   const/readonly
                            static

*/

// Javascript: variabler skrivs med formateringen camelCase (companyName)
// C#: variabler skrivs med formateringen Pascal (CompanyName)


// var deklarerar något globalt kan skrivas över om man inte passar sig
var companyName = 'EC Utbildning';
console.log(companyName);

// let deklarerar något localt och håller sig bara inom funktionen etc.
let companyAddress = 'Skomaskinsgatan 2';
console.log(companyAddress);

// const är konstant och kan inte omdeklareras (det kan let och var göra)
const pi = 3.14;
console.log(pi);

// testar och omdeklarera pi och vi får ett felmeddelande i konsolen
// pi = 3.16;

let firstName = 'Hans'
console.log(firstName);

let nullvalue = null;
console.log(nullvalue);

let undefinedvalue = undefined;
console.log(undefinedvalue);

let ud;
console.log('ud = ' + ud);

// const måste ha ett värde annars ger det felmeddelande
// const cud;
// console.log('cud = ' + cud);

let userName = 'user';
console.log('userName is: ' + typeof userName);

// nullvärde blir object (detta är en bugg)
console.log('nullvalue is: ' + typeof nullvalue);


// strings

// Javascript           C# 
// ""  ''  ``           ""   @""   $""

// i C#
// string url = "c:\\user\\hans\\desktop\\index.html";
// string url = @"c:\user\hans\desktop\index.html";
// string url = $"mitt namn är {FirstName} och är {age} år gammal.";
// string url = "mitt namn är " + FirstName + " och är " + Age + " år gammal.";
// string url = string.Format("mitt namn är {0} och är {1} år gammal", FirstName, Age);

// i Javascript
firstName = "Hans Mattin-Lassei";
let age = 35;

console.log("Mitt namn \"är\" " + firstName + " och 'är' " + age + " år gammal.")

// Best Practise
console.log('Mitt namn "är" ' + firstName + ' och \'är\' ' + age + ' år gammal.');

// Ett ännu bättre sätt (som inte godkänns av ESLint)
console.log(`Mitt namn "är" ${firstName} och 'är' ${age} år gammal.`);

// hitta antal tecken i en text
console.log(firstName.length);

// konvertera till stora bokstäver
console.log(firstName.toUpperCase());

// konvertera till små bokstäver
console.log(firstName.toLowerCase());

// dela upp varje namn till en array med varje namn i ett eget fack
console.log(firstName.split(' '));

//exempel:
let names = firstName.split(' ');
console.log(`Förnamn: ${names[0]}`)
console.log(`Efternamn: ${names[1]}`)


// Arrays

// Javascript               C#
// let users = []           string[] users 

const users = ['Hans', 'Tommy'];
console.log(`Arrayen har ${users.length} värden`);
console.log('Första värdet är: ' + users[0]);

// en array som är const kan du ändra innehållet i, tillskillnad
// från hur det är vanligtvis 
users[0] = 'Hasse';
console.log(`Arrayen har ${users.length} värden`);
console.log('Första värdet är ändrat till: ' + users[0]);

// lägg till nått i slutet av arrayen
users.push('Björn');
console.log(`Arrayen har ${users.length} värden`);
console.log('Första värdet är: ' + users[0]);
console.log('Sista värdet är: ' + users[2]);

// lägg till nått i början av arrayen
users.unshift('Anna');
console.log(`Arrayen har ${users.length} värden`);
console.log('Första värdet är: ' + users[0]);
console.log('Sista värdet är: ' + users[3]);

// ta bort nått i slutet av arrayen
users.pop();
console.log(`Arrayen har ${users.length} värden`);
console.log('Första värdet är: ' + users[0]);
console.log('Sista värdet blev nu: ' + users[2]);

// ta bort nått i början av arrayen
users.shift();
console.log(`Arrayen har ${users.length} värden`);
console.log('Första värdet är: ' + users[0]);
console.log('Sista värdet blev nu: ' + users[1]);


// Objects (json = JavaScript Object Notation)
let u = {}

// även kallat Json
let user = {
    firstName: 'Hans',
    lastName: 'Mattin-Lassei',
    age: 35,
    hobbies: ['music', 'computers', 'cars'],
    address: {
        street: 'Havsörnsgränd 2',
        city: 'Farsta',
        country: 'Sweden'
    },
    contactPersons: [
        { firstName: 'Tommy', lastName: 'Mattin-Lassei'},
        { firstName: 'Anki', lastName: 'Mattin-Lassei'}
    ]
};

// C# Getter, Setter - Detta finns inte i Javascript alls
// public string FirstName {get; set;}
// public string LastName {get; set;}
// public string FullName {get;} = FirstName + " " + LastName;

console.log(user.firstName);
console.log(user.contactPersons[0].firstName)

let text = `Användaren heter ${user.firstName} ${user.lastName} och den primära kontaktpersonen heter ${user.contactPersons[0].firstName} ${user.contactPersons[0].lastName}. ${user.firstName} är ${user.age} år gammal.`;
console.log(text);

//lägga till nya saker i ett objekt
user.email = 'hans@epndata.com';
console.log('Användaren: ' + user.firstName + ', E-postadress: ' + user.email);