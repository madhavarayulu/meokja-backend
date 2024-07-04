import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://madhav:lSrfilMR3JLyCJRP@cluster0.20vrxjm.mongodb.net/meokja'
    )
    .then(() => console.log('DB Connected'));
};
