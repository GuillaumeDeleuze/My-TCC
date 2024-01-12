import { Schema, model } from 'mongoose';

const ThemeSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    shortDescription: { type: String, required: true },
    backgroundImage: { type: String, required: true },
    exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }],
  },
  {
    timestamps: true,
  },
);

export default model('Theme', ThemeSchema);
