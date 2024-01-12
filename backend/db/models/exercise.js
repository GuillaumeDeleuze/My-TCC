import { Schema, model } from 'mongoose';

const ExerciseSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    shortDescription: { type: String, required: true },
    backgroundImage: { type: String, required: true },
    theme: { type: Schema.Types.ObjectId, ref: 'Theme', required: true },
  },
  {
    timestamps: true,
  },
);

export default model('Exercise', ExerciseSchema);
