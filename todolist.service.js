export class TodolistService {
    todoList = ["Arief", "Rachman", "Hakim"];

    getJsonTodoList() {
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.todoList.map((value, idx) => {
                return {
                    id: idx,
                    todo: value,
                };
            }),
        });
    }

    getTodoList(request, response) {
        response.write(this.getJsonTodoList());
        response.end();
    }

    createdTodo(request, response) {
        request.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            this.todoList.push(body.todo);
            response.write(this.getJsonTodoList());
            response.end();
        });
    }

    updateTodo(request, response) {
        request.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            if (this.todoList[body.id]) {
                this.todoList[body.id] = body.todo;
            }
            response.write(this.getJsonTodoList());
            response.end();
        });
    }

    deleteTodo(request, response) {
        request.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            if (this.todoList[body.id]) {
                this.todoList.splice(body.id, 1);
            }
            response.write(this.getJsonTodoList());
            response.end();
        });
    }
}
