import './main.scss';
import { App } from './app';

// const hello = "TicTacToe - The Game";
const g = document.getElementById("game");

let isFinish: boolean = false;
let switchPlayer: boolean = false;

const x = "X";
const o = "O";
var move = 0;

var table = document.getElementById("mytable") as HTMLTableElement;

for (let i = 0; i < table.rows.length ;i++) {
    const row = table.rows[i] as HTMLTableRowElement;
   //iterate through rows
   //rows would be accessed using the "row" variable assigned in the for loop
   for (let j = 0; j < row.cells.length ;j++) {
       const col = row.cells[j] as HTMLTableDataCellElement;
     //iterate through columns
     col.addEventListener("click", () => {
        if(isFinish){
            return;
        }
        if (col.innerText !== "?"){
            return;
        }

        col.innerText = switchPlayer ? o : x;
        switchPlayer = !switchPlayer;
        
        ifendgame();
    })
   }  
}

var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");
var c7 = document.getElementById("c7");
var c8 = document.getElementById("c8");
var c9 = document.getElementById("c9");

const res = document.getElementById("result");

const checkResults = (values: string[], winningCombinations: HTMLElement[][]) => {
    return values.map((v) => {
        return winningCombinations
        .map((arr) => {
            const winner = arr
            .map( (c) => c.innerText === v)
            .reduce( (pre, current) => pre && current)

            if(winner){
                isFinish = true;
                res.innerText = `${v} is The Winner`;
            }

            return winner;
        })
        .reduce( (pre, current) => pre || current)
    }).reduce((pre, current) => pre || current)
};

const ifendgame = () => {
    checkResults([x, o], [
        [c1,c2,c3],
        [c4,c5,c6],
        [c7,c8,c9],
        [c1,c4,c7],
        [c2,c5,c8],
        [c3,c6,c9],
        [c1,c5,c9],
        [c3,c5,c7]
    ]);
    const isAllFieldsUsed = [c1,c2,c3,c4,c5,c6,c7,c8,c9]
    .map( (c) => c.innerText !== "?")
    .reduce( (pre, current) => pre && current)
    if (isAllFieldsUsed && !isFinish){
        res.innerText = `It's a Draw!`;
    }
};

var rbutton = document.getElementById("rbutton");

rbutton.addEventListener("click", refreshPage)

function refreshPage(){
    window.location.reload();
} 


const app = new App();