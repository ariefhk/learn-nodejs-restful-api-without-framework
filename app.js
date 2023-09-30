import http from "http";
import { TodolistService } from "./todolist.service.js";
const PORT = 3000;

const service = new TodolistService();
const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "application/json");

    if (request.method === "GET") {
        service.getTodoList(request, response);
    } else if (request.method === "POST") {
        service.createdTodo(request, response);
    } else if (request.method === "PUT") {
        service.updateTodo(request, response);
    } else if (request.method === "DELETE") {
        service.deleteTodo(request, response);
    }
});

server.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
});
