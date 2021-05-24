<p align="center" class="d-flex flex-justify-between flex-items-center" style="display: flex; align-items:center; justify-content: center;">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
  <span style="font-size: 5rem; padding: 0 20px">+</span>
  <a href="https://rabbitmq.com/" target="blank"><img src="https://www.rabbitmq.com/img/logo-rabbitmq.svg" width="320" alt="RabbitMQ Logo" /></a>
</p>

  <p align="center">A sample project with NestJs and RabbitMQ for self-learning purpose.</p>
  <p align="center"></p>
  

## Installation
```bash
$ npm install
```

## Running the app
```bash
# development
$ npm run start:app              # for Express server (Publisher)
$ npm run start:subscriber       # for Worker (Subscriber)

# development with watch mode
$ npm run start:dev:app          # for Express server (Publisher)
$ npm run start:dev:subscriber   # for Worker (Subscriber)

# production mode (you need to build code first. See 'Code Building' section)
$ npm run start:prod:app         # for Express server (Publisher)
$ npm run start:prod:subscriber  # for Worker (Subscriber)
```

## Code Building
```bash
$ npm run build                  # For both Express and Worker
$ npm run build:app              # for Express server (Publisher)
$ npm run build:subscriber       # for Worker (Subscriber)

# It will generate output in directory "dist/"
# Refer package.json for all commands.
```

## Compilation
- GitHub Actions is configured with this repository on events **push** and **pull_request**. See <a href="https://github.com/mukeshkmr776/rabbitmq-nestjs-sample/actions">GitHub Actions here</a>

## Support
This is a self-learning project. So please don't use it directly in production.
