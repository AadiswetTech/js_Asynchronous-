function createPlayer (playername,score)
{
  this.playername=playername;
  this.score=score;
}

createPlayer.prototype.printScore=function()
{
    console.log(` my score is ${this.score}`)
}
const player1=new createPlayer("dhoni",100);
console.log(player1)
player1.printScore()
