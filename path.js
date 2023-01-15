// import built in module using require function
// here path is the built-in module and we perfix it with node to indicate it is built in module
const path = require("node:path");

// filename return the full path of the file
console.log(__filename);
// dirname return the full path of the folder
console.log(__dirname);

// return the basename of the file
console.log(path.basename(__filename));
// return the basename of the folder
console.log(path.basename(__dirname));

// return the extension of the file
console.log(path.extname(__filename));
// return the extension of the folder (since folder doesnot have any extension it will return empty string)
console.log(path.extname(__dirname));

// return the object of the file
const parseFilename = path.parse(__filename);
console.log(parseFilename);
// we can access all the name inside object using .name
console.log(parseFilename.ext);
console.log(parseFilename.base);
// to get parse file in format
console.log(path.format(path.parse(__filename)));
// to get full file format
console.log(__filename);

// to check if the file is absolute path or not
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./path.js "));

// to concatinate multile filename
console.log(path.join("FolderOne", "FolderTwo", "index.js"));
console.log(path.join("/FolderOne", "FolderTwo", "index.js"));
console.log(path.join("/FolderOne", "//FolderTwo"));
console.log(path.join("/FolderOne", "//FolderTwo", "index.js"));
console.log(path.join("/FolderOne", "//FolderTwo", "../index.js"));
console.log(path.join(__dirname, "../index.js"));

// to concatinate multile filename with absolute path
console.log(path.resolve("FolderOne", "FolderTwo", "index.js"));
console.log(path.resolve("/FolderOne", "FolderTwo", "index.js"));
// if double slash occur in the define path then it will consider that folder as a root folder
// in example below //folderTwo is the root folder
console.log(path.resolve("/FolderOne", "//FolderTwo"));
// here folderThree is the root folder
console.log(
  path.resolve("/FolderOne", "//FolderTwo", "//folderThree", "index.js")
);
console.log(path.resolve("/FolderOne", "//FolderTwo", "../index.js"));
console.log(path.resolve(__dirname, "../index.js"));
