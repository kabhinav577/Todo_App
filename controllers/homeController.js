const TodoLists = require("../models/todo_list");

module.exports.home = (req, res) => {
    return res.end('<h1>Hello World!</h1>');
//   TodoLists.find()
//     .then((todo) => {
//       return res.render("home", {
//         title: "ToDo App",
//         todolist: todo,
//       });
//     })
//     .catch((err) => {
//       console.log("Error in Fetching Data");
//       return;
//     });
};

module.exports.createTodo = (req, res)=> {

}


module.exports.deleteTodo = (req, res)=> {

}


module.exports.editPage = (req, res)=> {

}


module.exports.editDetails = (req, res)=> {
    
}