const express = require('express');
const router = express.Router();



const spawn = require("child_process").spawn;


router.get('/write', async(req, res) => {
    

    const pythonProcess = spawn('python3',["write.py"]);
    pythonProcess.stdout.on('data', (data) => {
    mystr = data.toString();
    console.log(`JSON IS : ${mystr}`);
    
    res.json(mystr);

})
});
router.get('/read', async(req, res) => {
    

    const pythonProcess = spawn('python3',["read.py"]);
    pythonProcess.stdout.on('data', (data) => {
    mystr = data.toString();
    console.log(`JSON IS : ${mystr}`);
    var g = mystr.split(",", 1).toString();
    var p = g.substring(1, g.length);

    res.json(p);

})

});


module.exports = router;