function solution(){
class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    toString(){

       return `Post: ${this.title}\nContent: ${this.content}` 
    }
}

class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
        super(title, content);
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = [];
    }

    addComment(comment){
     this.comments.push(comment);
    }

    toString(){
        debugger
        let output = `Post: ${this.title}\nContent: ${this.content}\n` 
        output += `Rating: ${this.likes - this.dislikes}\n`
        if(this.comments.length != 0 ){
            output += `Comments:\n`
            this.comments.forEach(comment =>   output += ` * ${comment}\n` )
        }

        return output.trim();
        
    }
}

class BlogPost extends Post {
    constructor(title, content, views) {
        super(title, content);
        this.views = views;
    }
    view(){
        this.views++;
        debugger
        return this;
    }
     toString() {
        return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`
     }
}

return{
    Post, 
    SocialMediaPost,
    BlogPost
}
}

const classes = solution();

let post = new classes.BlogPost("NameName", "ContCont", 4);
post.view();
console.log(post);
console.log(post.toString());

