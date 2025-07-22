import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

export const Item = mongoose.model("Item", ItemSchema);