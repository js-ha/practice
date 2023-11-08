import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: 'string',
      require: true,
      // unique: true,
    },
    desc: {
      type: 'string',
      require: true,
    },
    img: {
      type: 'string',
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('POST', postSchema);
