// datatypes: string, number, boolean, null, underfined, object, symbol

/*
    Javascript          c#                                    MSSQL
    String              string, char                          char, nchar, varchar, nvarchar
    Number              int, double, decimal, float           int, smallint, bigint, money
    Boolean             bool                                  bit
    null                null                                  null
    underfined          ------                                --------
    Object              object, en klass                      --------
    Symbol              -------                               --------
*/


// Deklarera variabler
/*

Javascript         C#
var                var
let                int, string, bool, double, decimal, float, klass/object/dynamic
const              const/readonly
------             static

*/

// Javascript: variabler skrivs med formateringen camelCase (companyName)
// C#: variabler skrivs med formateringen Pascal (CompanyName)

// var deklarerar något globalt kan skrivas över om man inte passar sig
var companyName = 'EC Utbildning';
console.log(companyName);

// let deklarerar något localt och håller sig bara inom funktionen etc.
let companyAddress = 'Skomaskinsgatan 2';
console.log(companyAddress);

// const är konstant och kan inte omdeklareras (det kan let och vara göra)
const pi = 3.14;
console.log(pi);

// testar och deklarerar pi och vi får ett felmeddelande i konsolen
// pi = 3.16;

let firstName = 'Hans'
console.log(firstName);

let nullvalue = null;
console.log(nullvalue);

let undefinedvalue =undefined ;
console.log(undefinedvalue);

let ud;
console.log('ud = '+ ud);

//const måste ha ett värde annars ger det felmeddelande
//const Cud;
//console.log('cud = '+ ud);

var userName ='user';
console.log('userName is:'+ typeof userName);

// nullvärde blir object (detta är en bugg)
console.log ('nullvalue is:' + typeof nullvalue);


// strings 

// Javascript           C#
// "" '' ``             ""  @""  $""

// i C#
// string url = "c:\\user\\hans\\desktop\\index.html";
// string url = @"c:\user\hans\desktop\index.html";    (Rätt att använda)
// string url = $"mitt namn är {FirstName} och är {age} år gammal";    (Rätt att använda)
//string ur = "mitt namn är " + FirstName + "och är " + Age + "år gammal."
// string url = string.format("mitt namn är {0} och är {1} år gammal", FirstName, Age);


// i Javascript
firstName ="Hans Mattin-Losset";
let age = 35;

console.log( "Mitt namn är" + firstName + "och är " + age + "år gammal"); // unvik gärna!

// Best Practise 
console.log('Mitt namn är ' + firstName + 'och är' + age + 'år gammal');

//Ett ännu bättre sätt (som inte godkänns av ESLint)
console.log('Mitt namn "är" ${firstName} och är ${age} år gammal.');

// hittar antal tecken i en text
console.log(firstName.length);

// konventerara till stora bokstäver
console.log(firstName.toUpperCase());

// konventerara till små bokstäver
console.log(firstName.toLocaleLowerCase());

// dela upp varje namn till en array med varje namn i ett eget fack
console.log(firstName.split(''));

// Exempel: 
let names = firstName.split('');
console.log('Förnamn: ${names[0]}')
console.log('Efternamn: ${names[0]}')




