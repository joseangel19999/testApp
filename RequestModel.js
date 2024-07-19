 export default class Request{
    constructor(userId,id,title,completed){
        this.userId=userId;
        this.id=id;
        this.title=title;
        this.completed=completed;
    }
    getId(){
        return this.id;
    }

    getUserId(){
        return this.userId;
    }

    getTitle(){
        return this.title;
    }

    getCompleted(){
        return this.completed;
    }

}