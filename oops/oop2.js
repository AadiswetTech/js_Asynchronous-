function createPlayer(playername,score)
{
    this.playername=playername;
    this.score=score;

}

createPlayer.prototype.increment=function()
{
    this.score++;
}
createPlayer.prototype.printMe=function()
{
  console.log(`score is ${this.score}`)
}

const player1=new createPlayer("sachin",20)
const player2=new createPlayer("dhoni",30);
console.log(player1)
console.log(player2)
player1.printMe();
console.log(player1.increment())