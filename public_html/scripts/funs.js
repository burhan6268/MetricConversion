/* 
 * Burhanuddin Lokhandwala
 * Student Id - 991523243
 * SYST-10199 - Web Programming
 */


        var result = document.getElementById("result");
        
        var cTof = document.getElementById("cTof");
        cTof.onclick = function()
        {
            var num = document.getElementById("val").value;
            var fah =(num * 9/5) + 32 ;
            result.innerHTML = num+" celsius is "+ parseFloat(fah).toFixed(2)+" Fahrenheit.";
        } ;
        
        var fToc=document.getElementById("fToc");
        fToc.onclick=function()
        {
            var num = document.getElementById("val").value;
            var cel=(num - 32) * 5/9;
            result.innerHTML = num+" fahrenheit is "+ parseFloat(cel).toFixed(2)+" Celsius.";
        };
        
        var fTom=document.getElementById("fTom");
        fTom.onclick=function()
        {
            var num = document.getElementById("val").value;
            var met=num/3.28;
            result.innerHTML=num+" feet is "+parseFloat(met).toFixed(2)+" Metres";
        };
        
        var mTof=document.getElementById("mTof");
        mTof.onclick=function()
        {
            var num = document.getElementById("val").value;
            var feet=num*3.28;
            result.innerHTML=num+" metres is "+parseFloat(feet).toFixed(2)+" Feet";
        };
        
        var pTok=document.getElementById("pTok");
        pTok.onclick=function()
        {
            var num = document.getElementById("val").value;
            var kg=num/2.20;
            result.innerHTML=num+" pounds is "+parseFloat(kg).toFixed(2)+" Kilograms.";
        };
        
        var kTop=document.getElementById("kTop");
        kTop.onclick=function()
        {
            var num = document.getElementById("val").value;
            var pounds=num*2.20;
            result.innerHTML=num+" kilograms is "+parseFloat(pounds).toFixed(2)+" Pounds.";
        };
        
        var iToc=document.getElementById("iToc");
        iToc.onclick=function()
        {
            var num = document.getElementById("val").value;
            var cen=num*2.54;
            result.innerHTML=num+" inches is "+parseFloat(cen).toFixed(2)+" Centimetres";
        };
        
        var cToi=document.getElementById("cToi");
        cToi.onclick=function()
        {
            var num = document.getElementById("val").value;
            var cen=num/2.54;
            result.innerHTML=num+" centimetres is "+parseFloat(cen).toFixed(2)+" Inches";
        };
        
        var clr=document.getElementById("clr");
        clr.onclick=function()
        {
            document.getElementById("val").focus();
            document.getElementById("val").value="";
            result.innerHTML="";
        };
   