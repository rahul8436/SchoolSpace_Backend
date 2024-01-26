import mongoose from 'mongoose';

const Connection = async (username, password) => {
  try {
    await mongoose.connect(process.env.DB_CONNECT, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Database Connected Succesfully');
  } catch (error) {
    console.log('Error: ', error.message);
  }
};

export default Connection;
