import { Prisma, PrismaClient } from "@prisma/client";
import FilmCreateInput = Prisma.FilmCreateInput;

const prisma = new PrismaClient();

const filmData: FilmCreateInput[] = [
  {
    title: "Barry Lyndon",
    description: "An Irish rogue uses his cunning and wit to work his way up the social classes of 18th century England, transforming himself from the humble Redmond Barry into the noble Barry Lyndon.",
    age: 12,
  },{
    title: "Dave",
    description: "A sweet-natured Temp Agency operator and amateur Presidential look-alike is recruited by the Secret Service to become a temporary stand-in for the President of the United States.",
    age: 12,
  },{
    title: "Genius",
    description: "New York in the 1920s. Max Perkins, a literary editor is the first to sign such subsequent literary greats as Ernest Hemingway and F. Scott Fitzgerald. When a sprawling, chaotic 1,000-page manuscript by an unknown writer falls into his hands, Perkins is convinced he has discovered a literary genius.",
    age: 16,
  },{
    title: "Harry Potter and the Order of the Phoenix",
    description: "Returning for his fifth year of study at Hogwarts, Harry is stunned to find that his warnings about the return of Lord Voldemort have been ignored. Left with no choice, Harry takes matters into his own hands, training a small group of students to defend themselves against the dark arts.",
    age: 16,
  },{
    title: "Fargo",
    description: "Jerry, a small-town Minnesota car salesman is bursting at the seams with debt... but he's got a plan. He's going to hire two thugs to kidnap his wife in a scheme to collect a hefty ransom from his wealthy father-in-law. It's going to be a snap and nobody's going to get hurt... until people start dying. Enter Police Chief Marge, a coffee-drinking, parka-wearing - and extremely pregnant - investigator who'll stop at nothing to get her man. And if you think her small-time investigative skills will give the crooks a run for their ransom... you betcha!",
    age: 6,
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of filmData) {
    const film = await prisma.film.create({
      data: u,
    });
    console.log(`Created film with id: ${film.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
