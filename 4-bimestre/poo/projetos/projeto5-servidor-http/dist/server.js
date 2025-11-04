"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
// Carregar variáveis de ambiente
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
// Informações personalizadas
const nome = "Dante"; // <-- coloque seu nome aqui
const idade = 20; // <-- e sua idade
// Criar servidor HTTP
const server = http_1.default.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(`Servidor rodando para ${nome}, idade ${idade}!`);
});
// Iniciar o servidor
server.listen(PORT, () => {
    console.log(`Servidor funcionando em http://localhost:${PORT}`);
});
// Finalização obrigatória para o GitHub Actions
server.close(() => {
    console.log("Servidor encerrado.");
});
exports.default = server;
