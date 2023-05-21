import mongoose from "mongoose";
import configs from "../configs";

const connect = async () => {
  const dbUri: string = configs.dbUri;
  try {
    await mongoose.connect(dbUri);
    console.log("Connected to DB");
  } catch (error) {
    console.error("could not connect to DB");
    console.log(error);
    process.exit(1);
  }
};
export default connect;