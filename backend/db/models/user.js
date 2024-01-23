import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    userExercises: [{ type: Schema.Types.ObjectId, ref: 'UserExercise' }],
  },
  {
    timestamps: true,
  },
);

export default model('User', UserSchema);
