
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("task").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("task").insert([
        {project_id: 1, task_descr: "Clean the house including the windows and mopping the floors", task_notes: "Make sure to use the new mop bucket for the floor and the new rags for the windows."},
        {project_id: 2, task_descr: "Change the brakes on the car", task_notes: "Make sure to test the brakes, they have been making a strange noise"},
        {project_id: 3, task_descr: "Code the solution to the DB Challenge", task_notes: ""}
      ]);
    });
};
