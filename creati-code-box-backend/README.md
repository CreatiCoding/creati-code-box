# creati-code-box-backend

## welcome to creati-code-box-backend

### Project Architecture

- /src
  - /models
    - /vo.ts: value object
    - /repository.ts: connect with database
  - /modules
    - /controller.ts: connect with router
    - /service.ts: service made by repository
    - Router.ts: connect with express Server
  - /utils
    - database.ts: connect with external databsae
  - index.ts: start point
  - Server.ts: server point

### Naming Convetion

- file

  - class file : ClassFile.ts
  - non class file: non_class_file.ts

- variables

  - snake_convetion

- methods

  - lowerCamelCase

- class
  - UpperCamelCase
