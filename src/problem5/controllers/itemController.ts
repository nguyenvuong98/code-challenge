import { Request, Response } from "express";
import * as itemService from "../services/itemService";

export const create = async (req: Request, res: Response) => {
  const item = await itemService.createItem(req.body);
  res.json(item);
};

export const list = async (req: Request, res: Response) => {
  const items = await itemService.getItems(req.query.name as string);
  res.json(items);
};

export const get = async (req: Request, res: Response) => {
  const item = await itemService.getItemById(req.params.id);
  if (!item) return res.status(404).json({ error: "Item not found" });
  res.json(item);
};

export const update = async (req: Request, res: Response) => {
  const item = await itemService.updateItem(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: "Item not found" });
  res.json(item);
};

export const remove = async (req: Request, res: Response) => {
  const item = await itemService.deleteItem(req.params.id);
  if (!item) return res.status(404).json({ error: "Item not found" });
  res.json({ message: "Item deleted" });
};
