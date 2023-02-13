//************Regular Expression********/
//used (text search)|| (text replace) 
//Syntax: /pattern/modifiers;       modifiers===>i,g,m

let word='khaaR11 22dhhh33nZ Rvnjr445 33d4 zeerhhnsn'
let word2='ze2de4sz 2 az4ghh5dfr3oo0876'
let somword=word.match(/[res]/gi)
let somword1=word.match(/[3-9]/gi)
let somword2=word.match(/(d|z)/gi)

let somwordt=word.replace(334,323)

let serch=/2/ig
serch.test(word2)
let ob=/z/ig.exec("The e e e  eee eee best things in life are free!")
console.log(ob)