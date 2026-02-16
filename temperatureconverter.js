
const textbox=document.getElementById("textbox");
const cel=document.getElementById("tocelcius");
const far=document.getElementById("tofarenheit");
const res=document.getElementById("result");
let temp;
function convert(){
    if(far.checked){
            temp=textbox.value;
            temp=temp*9/5 + 32;
            res.textContent=temp + "°F"
    }
    else if(cel.checked){
            temp=textbox.value;
            temp=(temp-32)*5/9;
            res.textContent=Math.round(temp) + "°C"
    }
    else{
        res.textContent=""
    }
}