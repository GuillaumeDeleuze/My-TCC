import { Schema, model } from 'mongoose';

const FavoriteSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    exercise: { type: Schema.Types.ObjectId, ref: 'Exercise', required: true },
  },
  {
    timestamps: true,
  },
);

export default model('Favorite', FavoriteSchema);
