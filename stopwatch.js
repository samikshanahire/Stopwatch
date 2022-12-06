window.onload=function()
{
    var seconds=00
    var tens=00
    var apppendTens=document.getElementById("tens")
    var apppendSeconds=document.getElementById("seconds")
    var buttonStart=document.getElementById("buttonstart")
    var buttonStop=document.getElementById("buttonstop")
    var buttonReset=document.getElementById("buttonreset")
    var interval
    buttonStart.onclick=function()
    {
        clearInterval(interval)
        interval=setInterval(startTimer,10)
    }
    buttonStop.onclick=function()
    {
        clearInterval(interval)
    }
    buttonReset.onclick=function()
    {
        clearInterval(interval)
        tens="00"
        seconds="00"
        apppendTens.innerHTML=tens
        apppendSeconds.innerHTML=seconds
    }
    function startTimer()
    {
        tens++
        if(tens<=9)
        {
            apppendTens.innerHTML="0"+tens
        }
        if(tens>9)
        {
            apppendTens.innerHTML=tens
        }
        if(tens>99)
        {
            console.log("seconds")
            seconds++
            apppendSeconds.innerHTML="0"+seconds
            tens=0
            apppendTens.innerHTML="0"+0
        }
        if(seconds>9)
        {
            apppendSeconds.innerHTML=seconds
        }
    }
}
