"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../src/server"));
describe("Teste do servidor HTTP", () => {
    test("Deve exibir mensagem personalizada no navegador", async () => {
        const response = await (0, supertest_1.default)(server_1.default).get("/");
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain("Servidor rodando para John, idade 34!");
    });
});
