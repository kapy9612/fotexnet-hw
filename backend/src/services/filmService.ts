import prisma from "../config/dbConfig";
import { Prisma } from "@prisma/client";
import FilmCreateInput = Prisma.FilmCreateInput;

export const createFilm = async (contactData: FilmCreateInput) => {
  return prisma.film.create({
    data: contactData,
  });
};

export const getFilms = async (age?: number) => {
  if (age) {
    return prisma.film.findMany({
      where: { age: { equals: age } },
    });
  } else {
    return prisma.film.findMany();
  }
};

export const getAges = async () => {
  const ages = await prisma.film.findMany({
    distinct: ["age"],
    select: { age: true },
  });
  return ages.flatMap((item) => item.age);
};

export const getFilmById = async (id: number) => {
  return prisma.film.findUnique({
    where: { id },
  });
};

export const updateFilm = async (
  id: number,
  updatedData: Partial<FilmCreateInput>,
) => {
  return prisma.film.update({
    where: { id },
    data: updatedData,
  });
};

export const deleteFilm = async (id: number) => {
  return prisma.film.delete({
    where: { id },
  });
};
