import mongoose from 'mongoose';

const { Schema } = mongoose;

const blogSchema = new Schema(
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

export default mongoose.models.BLOG || mongoose.model('BLOG', blogSchema);
