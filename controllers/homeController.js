const TodoLists = require("../models/todo_list");

module.exports.home = (req, res) => {
  // return res.render('home', {title: "ToDo App"});
  TodoLists.find()
    .then((todo) => {
      return res.render("home", {
        title: "ToDo App",
        todolist: todo,
      });
    })
    .catch((err) => {
      console.log("Error in Fetching Data");
      return;
    });
};

function Datevalue(dueDate) {
  let months = [
    "jan",
    "feb",
    "mar",
    "Apr",
    "May",
    "june",
    "july",
    "aug",
    "sept",
    "oct",
    "nov",
    "dec",
  ]; // static value for implementing monthe value

  var newDate = "";
  let monApp = "";
  //Checking Months
  if (dueDate[1] == "01") {
    monApp = months[0];
  } else if (dueDate[1] == "02") {
    monApp = months[1];
  } else if (dueDate[1] == "03") {
    monApp = months[2];
  } else if (dueDate[1] == "04") {
    monApp = months[3];
  } else if (dueDate[1] == "05") {
    monApp = months[4];
  } else if (dueDate[1] == "06") {
    monApp = months[5];
  } else if (dueDate[1] == "07") {
    monApp = months[6];
  } else if (dueDate[1] == "08") {
    monApp = months[7];
  } else if (dueDate[1] == "09") {
    monApp = months[8];
  } else if (dueDate[1] == "10") {
    monApp = months[9];
  } else if (dueDate[1] == "11") {
    monApp = months[10];
  } else if (dueDate[1] == "12") {
    monApp = months[11];
  }

  newDate = dueDate[2] + "-" + monApp + "-" + dueDate[0]; // Displaying date format dd-mm-yyyy

  return newDate;
}





module.exports.createTodo = (req, res) => {
  dueDate = req.body.dateValue.split("-"); // splitting date and taking months value

  let newDate = "";
  newDate = Datevalue(dueDate);
  TodoLists.create({
    desc: req.body.desc,
    category: req.body.category,
    dueDate: newDate,
  })
    .then((newArr) => {
      return res.redirect("/");
    })
    .catch((err) => {
      console.log("error in occured in Creating TODO", err);
    });
};




module.exports.deleteTodo = (req, res) => {
  sp = req.query.id; // getting the id from ui

  newSp = sp.split(",");

  for (let i = 0; i < newSp.length; i++) {
    // looping over newsp  to delete all the checked value
    TodoLists.findByIdAndDelete(newSp[i])
      .then(() => {})
      .catch((err) => {
        console.log("error in Deleting");
      });
  }
  return res.redirect("/");
};



module.exports.editPage = (req, res) => {
  TodoLists.findById(req.query.id)
    .then((todoLists) => {
      return res.render("editPage", {
        title: "Edit Page",
        todolist: todoLists,
      });
    })
    .catch((err) => {
      console.log("Error in Editing page ", err);
    });
};



module.exports.editDetails = (req, res) => {
  dueDate = req.body.dueDate.split("-"); // splitting date and taking montha value

  let newDate = "";
  newDate = Datevalue(dueDate);

  TodoLists.updateOne(
    {
      _id: req.query.id,
    },
    {
      $set: {
        desc: req.body.desc,
        category: req.body.category,
        dueDate: newDate,
      },
    }
  ).then((todoData)=> {
    return res.redirect('/');
  }).catch((err)=> {
    console.log("error While Updating");
  })
};
