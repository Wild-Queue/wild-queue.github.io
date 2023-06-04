export interface WorkExperience {
  position: string;
  place: string;
  description: string;
  linkID? : string;
  href?: string;
  linkClass?: string;
}

export let Experiences: WorkExperience[] = [
  {
    position: "Full-stack developer",
    place: "Innopolis University 2023",
    description: `
          Developed a soccial network "SocioCluv" inspired by Twitter. Provides the ability
          to create an account, write posts, "like" them and write comments. Developed 
          back-end server on C# with database on Firestore and front-end server
          on TypeScript SvelteKit. `,
    linkID : "gh-link",
    linkClass: 'fa fa-github',
    href: "https://github.com/Wild-Queue/sociocluv",
  },
  {
    position: "C++ developer",
    place: "Innopolis University 2023",
    description: `
          Developed a static alanyser for the functional programming language.
          Implemented a type checker that checks if constructions used in the program
          is correctly typed. Used tools: cmake, clang, BNFC, flex, bison`,
    linkID : "gh-link",
    linkClass: 'fa fa-github',
    href: "https://github.com/Wild-Queue/stella",
  },
  {
    position: "C++ developer",
    place: "Innopolis University 2023",
    description: `
        Development of a compiler for an imperative programming language.
        Using Bison/Yacc, Lex/Flex tools and the C++ programming language.
        Target platform: .Net`,
    linkID : "gh-link",
    linkClass: 'fa fa-github',
    href: "https://github.com/Wild-Queue/imperative_language_compiler",
  },
  {
    position: "Website Front-End developer",
    place: "Innopolis University 2022",
    description: `
          Developed a web application which teaches people scrum frameworks.
          Developed the front page of the application and the first module page.
          Learnd the SAFE and agile frameworks.`,
    linkID : "gh-link",
    linkClass: 'fa fa-github',
    href: "https://github.com/Wild-Queue/SAFeSimulator",
  },
  {
    position: ".Net developer",
    place: "Innopolis University 2022",
    description: `
          Developed a web application which is a chat room for communication.
          Developed an ORM to communicate with the database and a controller to
          receive and handle requests from the frontend. Developed it using
          agile methodology.`,
  },
  {
    position: "Students representative",
    place: "Innopolis University 2022-2024",
    description: `
          Student representative at Innopolis University. I deal with issues
          between the students and the university. I notify students of various
          changes and solve organizational issues.`,
  },
];