import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({
  studentName: String,
  classNo: String,
  score: Number,
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');

const postUser = mongoose.model('user', userSchema);

export default postUser;
