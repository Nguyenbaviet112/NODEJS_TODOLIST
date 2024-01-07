//import yargs from "yargs"; // es6
const yargs = require("yargs"); // es5 (common js)
console.log('nodemon test'); 

// node app/index.js test
yargs.command ({
    command : "test",
    handler: () => { 
        console.log("test command");
    }
});

// create
yargs.command({
    command : "create",
    handler : () => {
        console.log("create todo list");
    }
})

// read-all
yargs.command({
    command : "read-all",
    handler : () => {
        console.log("read all todo list")
    }
})


// read-detail
yargs.command({
    command : "read-detail",
    handler : () => {
        console.log("read detail todo list")
    }
})

// update
yargs.command({
    command : "update",
    handler : () => {
        console.log("update todo list")
    }
})

// delete
yargs.command({
    command : "delete",
    handler : () => {
        console.log("delete todo list")
    }
})

// Luu lai cac command da tao.
yargs.parse();