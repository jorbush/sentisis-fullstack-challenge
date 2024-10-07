# Decisions

This document contains all the decisions made during the development of the project.

## Tech Stack

The challenge requires the use of React as the only mandatory library and use NodeJS for the backend.

- [NextJS](https://nextjs.org/): I have chosen to use NextJS as a fullstack framework because it facilitates the integration of React with NodeJS, facilitating the communication between the frontend and the backend at infraestructure level and providing a better developer experience. I think the worst thing about the backend not being decoupled from the frontend is that it can worsen the scalability and maintenance of the project, but since it is a fast project (prioritizing time and quality of the project), I think it is a good choice.

- [TailwindCSS](https://tailwindcss.com/): I have chosen to use TailwindCSS as a utility-first CSS framework because it allows me to create a responsive design quickly and easily, without having to write custom CSS.

- [MongoDB](https://www.mongodb.com/): I have chosen to use MongoDB as a database because it is a NoSQL database that is very useful for projects where models are not defined in advance and can change over time (adding or removing fields). In addition, I have chosen it for its free level (for production) and the ability to run it locally (and the CI pipeline), perfect for defining a development and testing environment.
