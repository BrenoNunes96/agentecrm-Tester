import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { describe, it, expect, beforeAll, afterAll } from '@jest/globals';
import { Http2ServerRequest } from 'http2';
import { ok } from 'assert';
import { response } from 'express';

describe('Testes dos Módulos Usuario e Auth (e2e)', () => {

let usuarioid:number
  let app: INestApplication;
let token:any
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          entities: [__dirname + "./../src/**/entities/*.entity.ts"],
          synchronize: true,
          dropSchema: true,
        }),
        AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  })          

it("01 - cadastrar usuario",async ()=>{
const resposta  = await request(app.getHttpServer())
.post("/usuario/registrar")
.send({
  "usuario":"string",
  "senha":"string"

})
.expect(201)
usuarioid = resposta.body.id

})


it("02 - logar usuario",async ()=>{
const resposta = await request(app.getHttpServer())
.post("/usuario/logar")
.send({
"usuario":"string",
"senha":"string"

})
.expect(200)
token = resposta.body.token

})

it("03 - lsitar todo usuarios",async ()=>{
  await request(app.getHttpServer())
.get("/usuario/")
.set("Authorization",`${token}`)
.send({})
.expect(200)

})
it("04 - atualizar",async ()=>{
  await request(app.getHttpServer())
.put("/usuario/atualizar")
.set("Authorization",`${token}`)
.send({
  "usuario":"strings",
  "senha":"strings"
})
.expect(200)

})
it("05 - deletar usuario",async ()=>{
await request(app.getHttpServer())
.delete(`/usuario/deletar/${usuarioid}`)
.set("Authorization",`${token}`)
.send({})
.expect(200)
})





});
