let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let tO=true;
const a=[
    [1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(tO){
            box.innerText="O";
            tO=false;
        }
        else{
            box.innerText="X";
            tO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const checkwinner=()=>{
    for(let pattern of a){
        let pos1=boxes[pattern[0].innerText];
        let pos2=boxes[pattern[1].innerText];
        let pos3=boxes[pattern[2].innerText];
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1==pos2&&pos2==pos3){
                console.log("winner");
            }
        }
    }
}