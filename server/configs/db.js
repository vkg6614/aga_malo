import mongoose from "mongoose";
mongoose.set("strictQuery", false);
const connectDB = async (DB_URL) => {
  try {
    await mongoose.connect(DB_URL, {
      dbName: process.env.DB_NAME,
    });
  } catch (error) {
    console.log(error, "error");
  }
};

export default connectDB;

// const connectDB = (DB_URL, DB_NAME) =>
//   mongoose
//     .connect(`${DB_URL}${DB_NAME}`)
//     .then(() => {
//       app.listen(PORT, () => {
//         console.log(
//           "Database connection is Ready " + "and Server is Listening on Port ",
//           PORT
//         );
//       });
//     })
//     .catch((err) => {
//       console.log(
//         "A error has been occurred while" + " connecting to database."
//       );
//     });
// export default connectDB;
