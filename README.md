# Node JS Course

Node JS is a JS runtime

## Using Common JS as module systme

- Each file is treated as a module
- variable,function,classes etc are not accessiable by default
- we have to tell module system which part of your code should we export using module.export or export.
- to import code into a file, use the require() function.

## ES Module

- At the time Node.js was introduced there was no build in module system in js so by default common js was used as module system(module.exports).
- As of ES2015 js does have a standardized module system as part of language itself. That module system is called ES module where we use export keyword to export module/funcanality
- we use import keyword for importing exported module ( import "" from "")
- if it is default export (export default(a,b)=>{return a+b}) then we can use any name to import but if it is name export (export const add= (a,b)=>{return a+b}) then we have to use same name "add" to import
- file extension for ES module is .mjs not js.
