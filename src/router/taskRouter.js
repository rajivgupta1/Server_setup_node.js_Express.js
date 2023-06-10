import express from "express";

const router = express.Router();

// router.all("/", (req, res) =>{
//     //this router task all methods
//     console.log("first");
// });

let fakeDb = [
    {
        "task": " gg TV",
        "hr": 33,
        "_id": "jhgk",
        "type": "entry"
      },
      {
        "task": " gg TV",
        "hr": 33,
        "_id": "ss",
        "type": "entry"
      },
      {
        "task": " gg TV",
        "hr": 33,
        "_id": "ssfdds",
        "type": "entry"
      }
];

router.get("/", (req, res) =>{
    //this router task all methods
    console.log("first");
    res.json({
        status: 'sucess',
        message: ' from get method',
        fakeDb,
    });
});

router.post("/", (req, res) =>{
    //this router task all methods
    fakeDb.push(req.body);
    console.log(req.body);
    res.json({
        status: 'sucess',
        message: ' from post method'
    });
});

router.patch("/", (req, res) =>{
    //this router task all methods
    
    console.log("req.body");
    const { _id, type} = req.body

    //update data in array
    // loop through the array and find matching _id and update the type

    fakeDb = fakeDb.map((item)=>{
        if(item._id === _id){
            return {...item, type}
        }
        return item
    });
    res.json({
        status: 'sucess',
        message: ' the task has been switched',
    });
});

router.delete("/", (req, res) =>{
    //this router task all methods
    console.log("first");
    const { _id} = req.body

    fakeDb = fakeDb.filter((item)=>
       item._id !==_id);
    res.json({
        status: 'sucess',
        message: ' from delete method sucess'
    });
});

// router.delete("/", (req, res) =>{
//     //this router task all methods
//     console.log("sdgsdfsdf");
// });


export default router;