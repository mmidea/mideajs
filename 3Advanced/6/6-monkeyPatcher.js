function result(str){
    let obj = this;
    if(str =="upvote"){
        this.upvotes += 1;
    }else if(str == "downvote"){
        this.downvotes += 1;
    }else if(str == "score"){
       return scoreReportFunc();
    }

    function scoreReportFunc(){
        let upvotesShow = obj.upvotes;
        let downvotesShow = obj.downvotes;
     if(obj.upvotes + obj.downvotes > 50){
        let numToAdd = obj.upvotes >= obj.downvotes ? obj.upvotes*25/100 : obj.downvotes*25/100;
        numToAdd = Math.ceil(numToAdd);
        upvotesShow += numToAdd;
        downvotesShow +=  numToAdd;
     }
    let rating = "";
     let allVotes = obj.upvotes + obj.downvotes;
     let balance = obj.upvotes - obj.downvotes;

     if(obj.upvotes < obj.downvotes){
        rating = "unpopular"
     }else if(obj.upvotes + obj.downvotes < 10){
        rating = "new"
     }else if(0.66 * allVotes <=  obj.upvotes ){
        rating = "hot";
     }else if((0.66 * allVotes >=  obj.upvotes)&&(obj.upvotes >= obj.downvotes)&&(obj.upvotes + obj.downvotes > 100)){
        rating = "controversial";
     }else {
        rating = "new"
     }


     let result = [upvotesShow, downvotesShow, balance, rating]

     return result;

    }

    

    

   
}

let post = {
id: '3',
author: 'emil',
content: 'wazaaaaa',
 upvotes: 100, 
 downvotes: 100 }; 
/*
 solution.call(post, 'upvote');
 solution.call(post, 'downvote');
 console.log(post);
 let score = solution.call(post, 'score');
 console.log(score);


 for(let i = 1; i <= 50; i++){
 solution.call(post, 'downvote'); 
 }
 // (executed 50 times) score = solution.call(post, 'score'); // [139, 189, -50, 'unpopular'] 
 score = solution.call(post, 'score');
 console.log(score);
*/
 //---------------------------------------------
 var forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};

result.call(forumPost, 'upvote');

var answer = result.call(forumPost, 'score');
console.log(answer);

var expected = [1, 0, 1, 'new'];