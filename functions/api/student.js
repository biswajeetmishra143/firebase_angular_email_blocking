const express = require("express");
const router = express.Router();
const firebase = require("firebase-admin")
const firestore = firebase.firestore();



router.post("/",async (req,res)=>{
    console.log("done");
    await firestore.collection("school").add(req.body);
    res.send({status:200,data:req.body})
})

// Getting student data
router.get("/", async (req, res) => {
    let arr = [];
    const data = await firestore.collection("school").get();
    data.docs.forEach(ele => {
        let obj = ele.data();
        obj.key = ele.id;
        arr.push(obj)
    })
    await Promise.all(arr)
    res.send({ status: 200, data: arr })
})


// Updating Studetn data

router.put("/:id", async(req, res) => {
    
    await firestore.collection("school").doc(req.params.id).update(req.body);
    res.send({ status: 200, data: req.body })
})

// delettog student data

router.delete("/:id", (req, res) => {
    firestore.collection("school").doc(req.params.id).delete();
    res.send({ status: 200, msg: "Deleted" })
})


module.exports = router;