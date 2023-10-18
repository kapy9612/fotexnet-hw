import prisma from "../config/dbConfig";
import { Prisma } from "@prisma/client";

import FilmCreateInput = Prisma.FilmCreateInput;

export const createFilm = async (contactData: FilmCreateInput) => {
  return prisma.film.create({
    data: contactData,
  });
};

export const getFilms = async () => {
  return prisma.film.findMany();
};

export const getFilmById = async (id: number) => {
  return prisma.film.findUnique({
    where: {id},
  });
};

export const updateFilm = async (id: number, updatedData: Partial<FilmCreateInput>) => {
  return prisma.film.update({
    where: {id},
    data: updatedData,
  });
};

export const deleteFilm = async (id: number) => {
  return prisma.film.delete({
    where: {id},
  });
};
