
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resource").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resource").insert([
        {resource_name: "Windex", resource_descr: "window cleaner"},
        {resource_name: "Bucket", resource_descr: "mop bucket"},
        {resource_name: "Cleaning Rags", resource_descr: "Rags to clean dirt"},
        {resource_name: "Brake Pads", resource_descr: "Brake pads that fit the car"},
        {resource_name: "Car Jack", resource_descr: "Car jack to lift the car"},
        {resource_name: "Tire iron", resource_descr: "Tire iron to remove the car tires"},
        {resource_name: "Computer", resource_descr: "Needed to write the code"},
        {resource_name: "VS Code", resource_descr: "Needed to write the code EASIER"},
      ]);
    });
};
