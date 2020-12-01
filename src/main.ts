import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
/**
 * Below imported for Fastify use
 */
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { join } from 'path';

//Below is for file upload.
import fmp from 'fastify-multipart'

import { AppModule } from './app.module';
import { API_VERSION, APP_DESCRIPTION, APP_NAME, USE_API_VERSION_IN_URL } from './global/app.settings';

//For Swagger
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

//temporary workaround for the problem: FastifyError: Unsupported Media Type: application/x-www-form-urlencoded
//see https://github.com/nestjs/swagger/issues/891#issuecomment-686283228
import * as FastifyFormBody from 'fastify-formbody';

/** attempt to use fastifySecureSession. Not yet supported by NestJS fastify */
/*
import fs from 'fs';
import path from 'path';
import fastifySecureSession from 'fastify-secure-session';
*/


import fcookie from 'fastify-cookie'; // a dependency of fastify-session below
import fastifySession from 'fastify-session';
import passport from 'passport';


/*
import session from 'express-session';
import passport from 'passport';
*/


async function bootstrap() {

  //The factory below uses Express by default. Commented out to use Fastify instead
  //const app = await NestFactory.create(AppModule);
  //Use Fastify
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    /*Below, I have deliberately added the options object here setting the values to the default. 
    There are many other fastify options, see https://www.fastify.io/docs/latest/Server/*/
    new FastifyAdapter({
      logger: false,
      ignoreTrailingSlash: false,
      bodyLimit: 1048576, caseSensitive: true,
      maxParamLength: 512,
      
    }),
    //enable cors. Instead of simply setting to true which will use default config values, I am setting to object where I can set config values
    //see configuration options at the URL https://github.com/expressjs/cors#configuration-options
    {
      cors: {
        "origin": "*",//from which domains can request be made? For now, it is set to everywhere. Security may demand restrictions. See configuration options at https://github.com/expressjs/cors#configuration-options
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //which HTTP request verbs are allowed
        "preflightContinue": false,
        "optionsSuccessStatus": 204
      },
      bodyParser: false //Part of temporary workaround for the problem: FastifyError: Unsupported Media Type: application/x-www-form-urlencoded
    }
  );

  app.register(fcookie); //a dependency for fastifySession below
  app.register(fastifySession, {
    cookieName: 'sessionId',
    secret: 'a secret with minimum length of 32 characters',
    cookie: {
      secure: false, //if using https, set this to true
      httpOnly: true,
      //expires: 1800000,
      maxAge: 30 * 60 * 1000,
    },

  });

  /*app.use(passport.initialize());
  app.use(passport.session());*/

  //Part of temporary workaround for the problem: FastifyError: Unsupported Media Type: application/x-www-form-urlencoded

  app.register(FastifyFormBody as any);

  //Enable validation pipe. Requires npm install class-validator class-transformer
  app.useGlobalPipes(new ValidationPipe());
  //In production environment, better to disable detailed error message as shown below:
  /*
  app.useGlobalPipes(new ValidationPipe(
    {disableErrorMessages: true,}
  ));
  */

  /**
   * Pius note: You can set global prefix for routes e.g. for versioning purpose
   */

  if (USE_API_VERSION_IN_URL) app.setGlobalPrefix(API_VERSION);

  /**
   * Let's create static folders for public
   */
  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/',
  });

  /**
   * Let's create folders for views template
   */
  app.setViewEngine({
    engine: {
      nunjucks: require('nunjucks'),
    },
    templates: join(__dirname, '..', 'views'),
  });

  //register fastify-multipart
  app.register(fmp);

  //General limits may be passed or per request basis. E.g.
  /*
  app.register(fmp, {
    limits: {
      fieldNameSize: 100, // Max field name size in bytes
      fieldSize: 1000000, // Max field value size in bytes
      fields: 10,         // Max number of non-file fields
      fileSize: 100,      // For multipart forms, the max file size
      files: 1,           // Max number of file fields
      headerPairs: 2000   // Max number of header key=>value pairs
    }
  });
  */

  /**Setup Swagger for API documentation */

  const options = new DocumentBuilder()
    .setTitle(APP_NAME)
    .setDescription(APP_DESCRIPTION)
    .setVersion(API_VERSION)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  //app.register(fastifySecureSession, {key: fs.readFileSync(path.join(__dirname, 'secret-key'))});



  /* Below also has not worked for NestJS Fastify
  app.use(session({
    //store: new MongoStore({ url: process.env.MONGODB_URL}), // where session will be stored
    secret: 'process.env.SESSION_SECRETsfddfdfdsffd', // to sign session id
    resave: false, // will default to false in near future: https://github.com/expressjs/session#resave
    saveUninitialized: false, // will default to false in near future: https://github.com/expressjs/session#saveuninitialized
    rolling: true, // keep session alive
    cookie: {
      maxAge: 30 * 60 * 1000, // session expires in 1hr, refreshed by `rolling: true` option.
      httpOnly: true, // so that cookie can't be accessed via client-side script
    }
  }));

  app.use(passport.initialize());
  app.use(passport.session());
  */

  //await app.listen(3000);
  //For fastify, include 0.0.0.0 to listen on all IPs on the system. Otherwise, fastify will only listen on localhost.
  await app.listen(3003, '0.0.0.0');

  //More NOTES about fastify use: See https://docs.nestjs.com/techniques/performance for redirect and options
  console.log(`Application is running on: ${await app.getUrl()}`);

}
bootstrap();
