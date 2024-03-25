const express = require('express')



exports.getMyReq = (req, res) => {
    res.send('GET request received');
    console.log("running from maroua");
    
}



exports.postMyReq = (req, res) => {
    console.log('POST body:', req.body);
    res.send('POST request received');
}