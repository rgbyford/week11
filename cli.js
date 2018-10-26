require ('tv.js');

const sShowActor = process.argv[2];
args = process.argv.length - 3; // node, prog name, show/actor

let sItemName = "";
for (let i = 0; i < args; i++) {
    sItemName += process.argv[3 + i];
    if (i < args -1) {
        sItemName += ' ';
    }
}
if (sShowActor === "show") {
    findShow (sItemName);
    console.log (`Show: ${sItemName}`)
}
else if (sShowActor === 'actor') {
    findPerson (sItemName);
    console.log (`Actor: ${sItemName}`)
}
else {
    console.log ("Need to specify show or actor");
}