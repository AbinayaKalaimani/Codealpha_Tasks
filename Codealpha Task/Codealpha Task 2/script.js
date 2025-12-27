const display=document.getElementById("display")
function AppendToDisplay(input)
{
display.value+=input;
}
function ClearAll()
{
    display.value=""
}
function CalculateResult()
{
try{
display.value=eval(display.value)
}
catch{
    display.value="Error"
}
}
function ClearLastElement()
{
    display.value=display.value.slice(0,-1)
}