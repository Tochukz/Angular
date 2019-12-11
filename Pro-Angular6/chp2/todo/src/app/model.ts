export class Model {
    user; 
    items;

    constructor() {
        this.user = "Chucks";
        this.items = [
            {
                action: "Buy Flowers",
                done: false
            },
            {
                action: "Get Shoes",
                done: false
            },
            {
                action: "Collect Tickets",
                done: true
            },
            {
                action: "Call Joe",
                done: false
            }
        ];
    }
}

export class TodoItem {
    action;
    done;

    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}