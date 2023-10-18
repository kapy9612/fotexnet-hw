import { NextFunction, Request, Response } from "express";
import * as filmService from "../services/filmService";

export default {
  create: async (req: Request, res: Response, next: NextFunction) => {
    const { title, description, age } = req.body;

    if (!title || !description || !age) {
      res.status(400).json({ message: `Missing properties.` });
      return;
    }

    try {
      await filmService.createFilm({
        title,
        description,
        age,
      });
      res.status(201).json({ message: "Successfully created." });
    } catch (e) {
      res.json(e);
      next(e);
    }
  },

  getAll: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const films = await filmService.getFilms();
      res.status(200).json(films);
    } catch (e) {
      res.json(e);
      next(e);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    const { id }: { id?: number } = req.params;

    try {
      const film = await filmService.getFilmById(Number(id!));

      if (!film) {
        res.status(404).json({ message: `There is no film with id: ${id}` });
        return;
      }

      res.json(film);
    } catch (e) {
      res.json(e);
      next(e);
    }
  },

  update: async (req: Request, res: Response, next: NextFunction) => {
    const { id }: { id?: number } = req.params;
    const { title, description, age } = req.body;

    try {
      const contact = await filmService.updateFilm(Number(id!), {
        title,
        description,
        age,
      });

      res.json(contact);
    } catch (e) {
      res.json({ error: `Film with ID ${id} does not exist in the database` });
      next(e);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    const { id }: { id?: number } = req.params;
    try {
      await filmService.deleteFilm(Number(id!));

      res.status(201).send({ message: "Successfully deleted." });
    } catch (e) {
      res.json(e);
      next(e);
    }
  },
};
