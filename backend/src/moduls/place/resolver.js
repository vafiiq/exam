const PlaceModel = require("./model");
const { sign } = require("../../utils/jwt");
require("dotenv").config();
const useradmin="Alex"
const userpassword=7777

module.exports = {
  Query: {
    places: async (g) =>
      await PlaceModel.find().populate({ path: "categoryId" }),
    placesByCategory: async (_, { id }) =>
      await PlaceModel.find({ categoryId: id }).populate({
        path: "categoryId",
      }),
  },
  Place: {
    id: (g) => g.id,
    name: (g) => g.name,
    img: (g) => g.img,
    categoryId: (g) => g.categoryId,
  },
  Mutation: {
    addPlace: async (_, { name, img, categoryId }) => {
      await PlaceModel.create({ name, img, categoryId });
      return await PlaceModel.find().populate({ path: "categoryId" });
    },
    updatePlace: async (_, { name, img, categoryId, id }) => {
      await PlaceModel.findByIdAndUpdate(id, { name, img, categoryId });
      return await PlaceModel.find().populate({ path: "categoryId" });
    },
    deletePlace: async (_, { id }) => {
      await PlaceModel.deleteOne({ _id: id });
      return await PlaceModel.find().populate({ path: "categoryId" });
    },
    token: (_, { name, password }) => {
      console.log(name);
      console.log(password);
      console.log(userpassword);
      console.log(useradmin);
      if (useradmin == name && password == userpassword) {
        return sign({ name, password });
      } else {
        return "";
      }
    },
  },
};
