const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
const { User } = require("./models/user");
require("dotenv").config();

mongoose
  .connect(process.env.DB, {
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
    ArrayTypes: {
      type: [String],
    },
    Arrays: {
      type: [[mongoose.Schema.Types.Mixed]],
    },
    StackTypes: {
      type: [String],
    },
    Stacks: {
      type: [[mongoose.Schema.Types.Mixed]],
    },
    Queues: {
      type: [[mongoose.Schema.Types.Mixed]],
    },
    LinkedLists: {
      type: [[mongoose.Schema.Types.Mixed]],
    },
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

app.post("/Workspace/:field", (req, res) => {
  var Id = req.params.field;
  // const Obj = {name: id}
  WorkSpace.find({ name: Id }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/updateArray/:id", (req, res) => {
  console.log(req.body);
  var Id = req.params.id;
  WorkSpace.findOneAndUpdate(
    { name: Id },
    { $set: req.body },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.post("/updateIndex/:field/:id", (req, res) => {
  //                       👇 Index of value to update
  //Here field => Arrays.1.0
  //                     👆ArrayIndex
  var string = req.params.field;

  var newField = {};
  newField[string] = req.body;

  var Id = req.params.id;
  WorkSpace.findOneAndUpdate(
    { name: Id },
    { $set: newField },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/updateAddNewArray/:id", (req, res) => {
  console.log(req.body);
  var Id = req.params.id;
  WorkSpace.findOneAndUpdate(
    { name: Id },
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
// app.post("/updateAddNewArrayType/:field/:id", (req, res) => {
//   var dataType = req.params.field;
//   var id = req.params.id;
//   WorkSpace.findOneAndUpdate(
//     { name: id },
//     { $push: { ArrayTypes: dataType } },
//     (err, result) => {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });

app.post("/updateAddNewArrayType/:field/:id", (req, res) => {
  var dataType = req.params.field;
  var Id = req.params.id;
  WorkSpace.findOneAndUpdate(
    { name: Id },
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
    { $push: { Stacks: [] } },
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
  console.log(req.body);

  WorkSpace.findOneAndUpdate(
    { name: "Workspace1" },
    { $set: req.body },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/updateStack/:index", (req, res) => {
  //                       👇 Index of value to update
  //Here field => Arrays.1.0
  //                     👆ArrayIndex
  var indexValue = req.params.index;

  var newField = {};
  newField[indexValue] = req.body;

  WorkSpace.findOneAndUpdate(
    { name: "Workspace1" },
    { $set: newField },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/updateAddNewQueue", (req, res) => {
  WorkSpace.findOneAndUpdate(
    { name: "Workspace1" },
    { $push: { Queues: [] } },
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
  newField[indexValue] = req.body;

  WorkSpace.findOneAndUpdate(
    { name: "Workspace1" },
    { $set: newField },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/updateQueueAfterDelete", (req, res) => {
  console.log(req.body);

  WorkSpace.findOneAndUpdate(
    { name: "Workspace1" },
    { $set: req.body },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/updateAddNewLinkedList", (req, res) => {
  WorkSpace.findOneAndUpdate(
    { name: "Workspace1" },
    { $push: { LinkedLists: [] } },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/updateAddNewNode/:path", (req, res) => {
  // console.log(req.body);
  var Obj = {};
  Obj[req.params.path] = null;
  console.log(req.params.path);
  WorkSpace.findOneAndUpdate(
    { name: "Workspace1" },
    { $push: Obj },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

// const express  = require('express');
// const app = express();
// const cors = require("cors");
// const connection  = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

app.get("/getOtp/:email", (req, res) => {
  // const user = await User.findOne({ email: req.params.email });
  User.findOne({ email: req.params.email }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.post("/userVerified/:email", (req, res) => {
  User.findOneAndUpdate(
    { email: req.params.email },
    { $set: { verified: true } },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});
//database connection
// connection()

//middleware
// app.use(express.json())
// app.use(cors());

//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// const port = process.env.PORT || 8080;
// app.listen(port, () => console.log(`Listen on port ${port}...`))

app.listen(8800, () => {
  console.log("Port 8800");
});
