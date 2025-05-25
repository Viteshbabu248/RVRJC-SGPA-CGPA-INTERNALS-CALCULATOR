function  SGPA()
        {
            var cs=0;
            var ocs=0;
            for(let i=1;i<=7;i++)
            {
                var sub=document.getElementById(`sub${i}`).value.trim();
                var cr=document.getElementById(`sub${i}c`).value.trim();
                if(sub!=="" && cr!=="")
                {
                    if(isNaN(cr) || cr<0 || cr>20)
                    {
                        document.getElementById("res2").innerHTML=`Enter valid no of credits for subject - ${i}`;
                        return;
                    }
                    cs=(cs+parseFloat(cr)*10);
                    var sc=score(sub);
                    ocs=(ocs+parseFloat(cr)*sc);
                }
                
            }
            for(let i=1;i<=5;i++)
            {
                var lab=document.getElementById(`lab${i}`).value.trim();
                var cr=document.getElementById(`lab${i}c`).value.trim();
                if(lab!=="" && cr!=="")
                {
                    if(isNaN(cr) || cr<0 || cr>20)
                    {
                        document.getElementById("res2").innerHTML=`Enter valid no of credits for Lab - ${i}`;
                        return;
                    }
                    cs=(cs+parseFloat(cr)*10);
                    var sc=score(lab);
                    ocs=(ocs+parseFloat(cr)*sc);
                }
                
            }
            if (cs === 0) 
            {
                res2.innerText = 0;
            } 
            else 
            {
                const sgpa = (ocs/cs).toFixed(4)*10;
                res2.innerText = `${sgpa}`;
            }
            const sgpa=(ocs/cs)
        }
function score(temp)
        {
            if(temp==="A+")
            {
                return 10;
            }
            else if(temp==="A")
            {
                return 9;
            }
            else if(temp==="B")
            {
                return 8;
            }
            else if(temp==="C")
            {
                return 7;
            }
            else if(temp==="D")
            {
                return 6;
            }
            else if(temp==="E")
            {
                return 5;
            }
            else
            {
                return 0;
            }
        }
function CGPA()
        {
            var c=0;
            var t=0;
            for(let i=1;i<=8;i++)
            {
              
                var val= document.getElementById(`sem${i}`).value.trim();

                if(val!=="")
                {
                    val=parseFloat(val);
                    if(isNaN(val)   || val<0   || val>10)
                    {
                        document.getElementById("res3").innerHTML=`Enter correct Sem - ${i} SGPA`;
                        return;
                    }   
                    t+=val;
                    c++;

                }
            
    
            }
            if (c === 0) 
            {
                res3.innerText = 0;
            } 
            else 
            {
                const cgpa = (t/c).toFixed(2);
                res3.innerText = `${cgpa}`;
            }
            
        }
function internals()
        {
            var ses1=document.getElementById("ses1").value;
            var ses2=document.getElementById("ses2").value;
            var ass1=document.getElementById("ass1").value;
            var ass2=document.getElementById("ass2").value;
            var qu1=document.getElementById("qu1").value;
            var qu2=document.getElementById("qu2").value;
            var att=document.getElementById("att").value;
            var t=0;
            if(ses1<0 || ses1>18)
            {
                document.getElementById("res1").innerHTML="Enter correct sessional-1 marks(0-18)";
                return;
            }
            if(ses2<0 || ses2>18)
            {
                document.getElementById("res1").innerHTML="Enter correct sessional-2 marks(0-18)";
                return;
            }
            if(ass1<0 || ass1>12)
            {
                document.getElementById("res1").innerHTML="Enter correct Assignment-1 marks(0-12)";
                return;
            }
            if(ass2<0 || ass2>12)
            {
                document.getElementById("res1").innerHTML="Enter correct Assignment-2 marks(0-12)";
                return;
            }
            if(qu1<0 || qu1>12)
            {
                document.getElementById("res1").innerHTML="Enter correct Quiz-1 marks(0-12)";
                return;
            }
            if(qu2<0 || qu2>12)
            {
                document.getElementById("res1").innerHTML="Enter correct Quiz-2 marks(0-12)";
                return;
            }
    
            if(att==="ge90")
            {
                t=t+5;
            }
            else if(att==="85-89")
            {
                t=t+4;
            }
            else if(att==="80-84")
            {
                t=t+3;
            }
            else if(att==="75-79")
            {
                t=t+2;
            }
            else
            {
                t=t+0;
            }

            if(ses1>=ses2)
            {
                ses1=ses1*0.8;
                ses2=ses2*0.2;
            }
            else
            {
                ses1=ses1*0.2;
                ses2=ses2*0.8;
            }
            if(ass1>=ass2)
            {
                ass1=(ass1/12)*2.8;
                ass2=(ass2/12)*0.7;
            }
            else
            {
                ass1=(ass1/12)*0.7;
                ass2=(ass2/12)*2.8;
            }
            if(qu1>=qu2)
            {
                qu1=(qu1/12)*2.8;
                qu2=(qu2/12)*0.7;
            }
            else
            {
                qu1=(qu1/12)*0.7;
                qu2=(qu2/12)*2.8;
            }
            t=t+ses1+ses2+ass1+ass2+qu1+qu2;

            document.getElementById("res1").innerHTML = t+"/30";
        }