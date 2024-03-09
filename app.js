const yargs = require("yargs"); //yargs module
const notes = require("./notes"); //require for nodejs file in variable notes
yargs.command({                    //the block of code defines a new commmand method provided by yargs modules
  command: "add",
  description: "adding new Note",

  builder: {     //defines option for Add command and it has two option Title and body
    title: {
      description: "title of a notes",
      demandOption: true,
      type: "string",
    },
    body: {
      description: "details of given title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (args) => {    //it specifies the function executed when add command is called.
    console.log("in add command--" + args.title);
    notes.fileWrite(args.title, args.body); //call the filewrite function in "notes" module
  },
});
yargs.parse(); //this line parcing of command line arguments using yargs
