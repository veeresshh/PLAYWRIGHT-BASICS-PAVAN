//Approach 1: 

/*

import {AppName} from "./MB_Module"
import {InterfaceAddition} from "./MB_Module"
import {Formatter} from "./MB_Module"

*/

/*

import {AppName,InterfaceAddition,Formatter} from "./MB_Module";  

console.log(AppName);
console.log(InterfaceAddition(10,20));
console.log(Formatter.ToUpper("welcome"));

*/

//Approach 2: 

//Import Everything (Namespace Import)
//This is useful when you want to group everything from a module or avoid listing individual exports.

import * as utils from "./MB_Module";

console.log(utils.AppName);
console.log(utils.InterfaceAddition(10, 20));
console.log(utils.Formatter.ToUpper("welcome"));