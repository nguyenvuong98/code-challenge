import { Item } from "../models/Item";

export const createItem = (data: { name: string, description?: string }) => {
  const item = new Item(data);
  return item.save();
};

export const getItems = (name?: string) => {
  const filter = name ? { name: { $regex: name, $options: "i" } } : {};
  return Item.find(filter);
};

export const getItemById = (id: string) => {
  return Item.findById(id);
};

export const updateItem = (id: string, data: { name?: string, description?: string }) => {
  return Item.findByIdAndUpdate(id, data, { new: true });
};

export const deleteItem = (id: string) => {
  return Item.findByIdAndDelete(id);
};