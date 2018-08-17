module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('poeples', [
      {
        name: "Bill Gates",
        age: 61,
        company: "Microsoft"
      },
      {
        name: "Steve Jobs",
        age: 56,
        company: "Apple"
      },
      {
        name: "Gabe Newell",
        age: 53,
        company: "Valve"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('poeples', null, {});
  }
};

