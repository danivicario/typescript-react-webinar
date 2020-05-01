const express = require("express");
const router = express.Router();
const TodoItem = require("../models/TodoItem");

// C (create) of CRUD start
router.post("/", (req, res, next) => {
  // we force done to be false; thanks Jota!
  req.body.done = false;

  TodoItem.create(req.body).then(createdTask => res.json(createdTask));
});
// C (create) of CRUD end

// R (read) of CRUD start
router.get("/all", (req, res, next) => {
  TodoItem.find()
    .select({ updatedAt: 0, __v: 0 })
    .sort({createdAt: -1})
    .then(allTasks => res.json(allTasks));
});

router.get("/:id", (req, res, next) => {
  TodoItem.findById(req.params.id)
    .select({ updatedAt: 0, __v: 0 })
    .then(allTasks => res.json(allTasks));
});
// R (read) of CRUD end

// U (update) of CRUD start
router.put("/:id", (req, res, next) => {
  TodoItem.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(updatedTask =>
    res.json(updatedTask)
  );
});
// U (update) of CRUD end

// D (delete) of CRUD start
router.delete("/:id", (req, res, next) => {
  TodoItem.findByIdAndDelete(req.params.id).then(deletedTask =>
    res.json({ deleted: true, deletedTask })
  );
});
// D (delete) of CRUD end

module.exports = router;
