import express from "express";
const app = express();

app.use(express.json()); // express 使用 JSON

let todos = [];

// request, response
app.get("/", (req, res) => {
  res.send("Hello World"); // 只能純文字
});

app.get("/todos", (req, res) => {
  res.json({
    todos,
  });
});

app.post("/todos", (req, res) => {
  const { task } = req.body;

  if (!task) {
    return res.status(400).json({
      error: "資料不正確",
    });
  }

  const newTodo = {
    id: Date.now(),
    task,
    completed: false,
    createdAt: new Date(),
  };

  todos.push(newTodo);
  res.status(201).json(newTodo); // 成功之後的回傳內容
});

app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;

  const todo = todos.find((t) => t.id === Number(id));
  console.log(todo);
  todo.task = task;

  if (completed.toString() != todo.completed.toString()) {
    todo.completed = completed;
  }
  res.json(todo);
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.filter((t) => t.id !== Number(id));
  console.log(todos);

  res.json({
    status: "success",
    todos,
  });
});

const port = 3000;

// port
app.listen(port, () => {
  console.log(`伺服器運作在 http://localhost:${port}`);
});