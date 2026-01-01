import { Request, Response } from "express";
import * as UserService from "./user.service";

export const create = async (req: Request, res: Response) => {
  const user = await UserService.createUser(req.body);
  res.status(201).json(user);
};

export const findAll = async (_req: Request, res: Response) => {
  const users = await UserService.getUsers();
  res.json(users);
};

export const findOne = async (req: Request, res: Response) => {
  const user = await UserService.getUserById(req.params.id);
  res.json(user);
};

export const update = async (req: Request, res: Response) => {
  const user = await UserService.updateUser(req.params.id, req.body);
  res.json(user);
};

export const remove = async (req: Request, res: Response) => {
  await UserService.deleteUser(req.params.id);
  res.json({ message: "User deleted successfully" });
};
