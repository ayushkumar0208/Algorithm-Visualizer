const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
const DB =
  "mongodb+srv://aryaayush0208:ELDSacJlwS8sOKdv@cluster0.uql45ho.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connection Successful`);
  })
  .catch(() => {
    console.log(`no connection`);
  });

const WorkSpaceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ArrayTypes:{
      type: [String]
    },
    Arrays: {
      type: [[mongoose.Schema.Types.Mixed]],
    },
    Stacks:{
      type: [[mongoose.Schema.Types.Mixed]]
    }, 
    Queues:{
      type: [[mongoose.Schema.Types.Mixed]]
    }
  },
  { timestamps: true } 
);

const WorkSpace = mongoose.model("WorkSpace", WorkSpaceSchema);

app.post("/Workspace/Structures", (req, res) => {
  const { name } = req.body;
  const DataStructure = new WorkSpace({ name });
  DataStructure.save()
    .then(() => {
      res.status(201).json({ message: "Record Entered" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to Entered Record" });
    });
});

app.get("/Workspace/Structures", (err, res) => {
  WorkSpace.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});


app.post("/updateArray",(req, res) => {
  console.log(req.body)

  WorkSpace.findOneAndUpdate({name:"Workspace1"},{$set:req.body},(err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })

})
app.post("/updateArrayIndex/:field/:value", (req, res) => {
  //                       👇 Index of value to update
  //Here field => Arrays.1.0
  //                     👆ArrayIndex 
  var string = req.params.field;
  var num = req.params.value;

  var newField = {};
  newField[string]=num;

  WorkSpace.findOneAndUpdate(
    { name: "Workspace1" },
    {$set:newField},
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );}
);

app.post("/updateAddNewArray", (req, res) => {
  console.log(req.body);
  WorkSpace.findOneAndUpdate(
    { name: "Workspace1" },
    { $push: { Arrays: req.body } },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.post("/updateAddNewArrayType/:field", (req, res) => {
  var dataType = req.params.field;
  WorkSpace.findOneAndUpdate(
    { name: "Workspace1" },
    { $push: { ArrayTypes: dataType } },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/updateAddNewArrayType/:field", (req, res) => {
  var dataType = req.params.field;
  WorkSpace.findOneAndUpdate(
    { name: "Workspace1" },
    { $push: { ArrayTypes: dataType } },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});


app.post("/updateAddNewStack", (req, res) => {
  WorkSpace.findOneAndUpdate(
    { name: "Workspace1" },
    { $push: { Stacks: []} },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/updateStackAfterDelete", (req, res) => {
  console.log(req.body)

  WorkSpace.findOneAndUpdate({name:"Workspace1"},{$set:req.body},(err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
});

app.post("/updateStack/:index", (req, res) => {
  //                       👇 Index of value to update
  //Here field => Arrays.1.0
  //                     👆ArrayIndex 
  var indexValue = req.params.index;

  var newField = {};
  newField[indexValue]=req.body;

  WorkSpace.findOneAndUpdate(
    { name: "Workspace1" },
    {$set:newField},
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );}
);


app.post("/updateAddNewQueue", (req, res) => {
  WorkSpace.findOneAndUpdate(
    { name: "Workspace1" },
    { $push: { Queues: []} },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/updateQueue/:index", (req, res) => {
  //                       👇 Index of value to update
  //Here field => Arrays.1.0
  //                     👆ArrayIndex 
  var indexValue = req.params.index;

  var newField = {};
  newField[indexValue]=req.body;

  WorkSpace.findOneAndUpdate(
    { name: "Workspace1" },
    {$set:newField},
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );}
);

app.post("/updateQueueAfterDelete", (req, res) => {
  console.log(req.body)

  WorkSpace.findOneAndUpdate({name:"Workspace1"},{$set:req.body},(err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
});

app.listen(8800, () => {
  console.log("Port 8800");
});
