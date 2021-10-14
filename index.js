// function superbowlWin(wins){
//     for(const element of wins){
//         if (element.result === "W"){
//             return element.year
//         }
//     }
// }

// function superbowlWin(win){
//     return win.find(findWins)
// }  

// function findWins(element){
//     if (element.result === "W"){
//         return element.year;
//     }
// }

function superbowlWin(record) {
    const winObject = record.find(x => x.result === "W");
    if (winObject == "undefined"){
        return winObject
    }else{
        return winObject.year
    }
}