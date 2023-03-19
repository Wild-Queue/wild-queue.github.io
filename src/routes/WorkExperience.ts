export interface WorkExperience {
    position: string;
    place: string;
    description: string;
    href: string;
}

export let Experiences: WorkExperience[] = [
    {
      position: "Website Front-End developer",
      place: "Innopolis University 2022",
      description: `
          Developed a web application which teaches people scrum frameworks.
          Developed the front page of the application and the first module page.
          Learnd the SAFE and agile frameworks.`,
      href: "https://github.com/Wild-Queue/SAFeSimulator",
    },
    {
      position: "Back-End developer",
      place: "Innopolis University 2022",
      description: `
          Developed a web application which is a chat room for communication.
          Developed an ORM to communicate with the database and a controller to
          receive and handle requests from the frontend. Developed it using
          agile methodology.`,
      href: "https://gitlab.com/vlad.spigin/snaprojectback",
    },
    {
      position: "Students representative",
      place: "Innopolis University 2022-2023",
      description: `
          Student representative at Innopolis University. I deal with issues
          between the students and the university. I notify students of various
          changes and solve organizational issues.`,
      href: "",
    },
    {
      position: "Developer",
      place: "Innopolis University 2022",
      description: `
          Developed a telegram bot for storing and sending reminders. Developed
          a reminder bot whose main functions are: to help group/company leaders
          send out reminders and tasks to be done. Personally involved in the
          architecture, implementation and interaction with the database.`,
      href: "",
    },
    {
      position: "Compiler constructor",
      place: "Innopolis University 2021",
      description: `
          Developed a syntactic parser for the Golang language compiler.
          Implemented a syntactic parser that handles all possible language
          constructions. Provided an interface for further work with the parser.`,
      href: "https://github.com/Wild-Queue/Go_Bison_Project",
    },
  ];