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

  let token: any;
  let usuarioId: any;
  let app: INestApplication;

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


it("01 - cadastro de usuario", async ()=>{
const reposta = await request(app.getHttpServer())

.post("/usuario/registrar")
.send({
  usuario:"string",
  senha:"string"
})
.expect(201)
usuarioId = reposta.body.id

})
it("02 - logar com o usuario ", async ()=>{
const resposta = await request(app.getHttpServer())
.post("/usuario/logar")
.send({
  usuario:"string",
  senha:"string"

})

.expect(200)
token = resposta.body.token
})

it("03 - listar usuarios", async ()=>{
console.log(token)
return await request(app.getHttpServer())
.get("/usuario/")
.set("Authorization",`${token}`)
.send({})
.expect(200)
})

it("04 - atualizar usuario" , async ()=>{
return await request (app.getHttpServer())
.put("/usuario/atualizar")
.set("Authorization",`${token}`)
.send({usuario:'stringss', senha:"dwqodi"})
.expect(200)
})

it("05 deletar usuario",async ()=>{
return await request(app.getHttpServer())
.delete(`/usuario/deletar/${usuarioId}`)
.set("Authorization",`${token}`)
.send({})
.expect(200)

})



});
