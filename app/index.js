//import yargs from "yargs"; // es6
const yargs = require("yargs"); // es5 (common js)


// create : node app/index.js create --title="hoc nodejs" --description="khoa hoc lap trinh node js"
yargs.command({
    command : "create",
    builder : {
    title : {
        type : "string"
    },
    description : {
        type : "string"
    }
    },
    handler : (args) => {
        const {title, description} = args;
        console.log("create todo list");
        console.log("title: ", title);
        console.log("description: ", description);
    }
})

// read-all
yargs.command({
    command : "read-all",
    handler : () => {
        console.log("read all todo list")
    }
})



// read-detail : node app/index.js read-detail --id="nodejs" --title="hoc nodejs" --description="khoa hoc lap trinh node js"
yargs.command({
    command : "read-detail",
    builder : {
        id : {
            type : "string"
        },
        title : {
            type : "string"
        },
        description : {
            type : "string"
        }
    },
    handler : (args) => {
        const {id, title, description} = args;
        console.log("read detail todo list")
        console.log("id: ", id);
        console.log("title: ", title);
        console.log("description: ", description);
    }
})

// update node app/index.js update --id="update" --title="hoc nodejs" --description="khoa hoc lap trinh node js"
yargs.command({
    command : "update",
    builder : {
        id : {
            type : "string"
        },
        title : {
            type : "string"
        },
        description : {
            type : "string"
        }
    },
    handler : (args) => {

        const {id, title, description} = args;
        console.log("update todo list")
        console.log("id: ", id);
        console.log("title: ", title);
        console.log("description: ", description);
    }
})

// delete : app/index.js delete --id="123"
yargs.command({
    command : "delete",
    builder : {
        id : {
            type : "string"
        }
    },
    handler : (args) => {
        const id = args.id;
        console.log("delete todo list")
        console.log("id: ", id)
    }
})

// Luu lai cac command da tao.
yargs.parse();