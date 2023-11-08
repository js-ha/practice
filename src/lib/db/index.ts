import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect(String(process.env.MONGO));
  } catch (err) {
    throw new Error('connect Error!');
  }
};

export default connect;
