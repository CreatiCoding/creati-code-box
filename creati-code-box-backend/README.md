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
    - DB.ts: connect with external databsae
    - Storage.ts: local File System Storage
  - index.ts: start point
  - Server.ts: server point
- /storage: for public repository

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
