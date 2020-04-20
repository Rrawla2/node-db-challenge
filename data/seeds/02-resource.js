
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resource").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resource").insert([
        {project_id: 1, resource_name: "Windex", resource_descr: "window cleaner"},
        {project_id: 1, resource_name: "Bucket", resource_descr: "mop bucket"},
        {project_id: 1, resource_name: "Cleaning Rags", resource_descr: "Rags to clean dirt"},
        {project_id: 2, resource_name: "Brake Pads", resource_descr: "Brake pads that fit the car"},
        {project_id: 2, resource_name: "Car Jack", resource_descr: "Car jack to lift the car"},
        {project_id: 2, resource_name: "Tire iron", resource_descr: "Tire iron to remove the car tires"},
        {project_id: 1, resource_name: "Computer", resource_descr: "Needed to write the code"},
        {project_id: 1, resource_name: "VS Code", resource_descr: "Needed to write the code EASIER"},
      ]);
    });
};
