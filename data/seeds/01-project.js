
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("project").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("project").insert([
        {project_title: "Spring Cleaning", project_descr: "Clean the entire house, even the windows!"},
        {project_title: "Change car brakes", project_descr: "Replace brake pads and rotors."},
        {project_title: "Code DB-CHALLENGE", project_descr: "Write and entire DB project from scratch."}
      ]);
    });
};
