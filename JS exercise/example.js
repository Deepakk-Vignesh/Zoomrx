let test=[];
let n;
let arr=[];
let arr1=[];
let group=[[],[]];
function question1trigger(key){
    let q1=document.getElementById("sectionq1");
    if(key==0){
        n=Number(document.forms["question1form"]["length"].value);
        q1.innerHTML="Enter The Value of the first Array:<br><br>";
        for(let i=0;i<n;i++){
            q1.innerHTML=q1.innerHTML+String(i)+": <input type=\"number\" name=\""+String(i)+"\" value=\"0\"><br><br>"; 
        }
        q1.innerHTML=q1.innerHTML+"<input type=\"button\" value=\"submit\" onclick=\"question1trigger(1);\">";
    }
    else if(key==1){
        for(let i=0;i<n;i++){
            arr.push(document.forms["question1form"][String(i)].value);
        }
        q1.innerHTML="Enter The Value of the Second Array:<br><br>";
        for(let i=0;i<n;i++){
            q1.innerHTML=q1.innerHTML+String(i)+"=>  True: <input type=\"radio\" name=\""+String(i)+"\" value=\"1\" checked> False: <input type=\"radio\" name=\""+String(i)+"\" value=\"0\"><br><br>"
        }
        q1.innerHTML=q1.innerHTML+"<input type=\"button\" value=\"submit\" onclick=\"question1trigger(2);\">";
    }
    else if(key==2){
        let j;
        let f;
        for(let i=0;i<n;i++){
            f=document.getElementsByName(String(i));
            for(j=0;j<f.length;j++){
                if(f[j].checked)
                break;
            }
            arr1.push(f[j].value);
        }
        group=question1(arr,arr1,group);
        q1.innerHTML="The Resultant Array is [ ["+group[0]+"],["+group[1]+"] ]<br>";
    }
}

function question1(ar,ar1,gr){
    let i;
    for(i=0;i<n;i++){
        gr[Number(true^ar1[i])].push(ar[i]);
    }
    return gr;
}

function question2trigger(){
    let q2=document.getElementById("sectionq2");
    q2.innerHTML=question2(document.forms["question2form"]["s1"].value,document.forms["question2form"]["s2"].value);
}

function question2(str1,str2){
    str1=str1+(str2.charAt(0).toLowerCase()+str2.substring(1));
    return str1;
}

function question3trigger(){
    let q3=document.getElementById("sectionq3");
    q3.innerHTML=question3(Number(document.forms["question3form"]["low"].value),Number(document.forms["question3form"]["high"].value));
}

function question3(low,up){
    if(low>up){
        low=up+low;
        up=low-up;
        low=low-up;
    }
    return Math.round(Math.random()*(up-low)+low);
}

test=[2,73,49,3,99,50,7,12,3,6,52,7,1,33,2,42,5,32,21,6];
let q4=document.getElementById("sectionq4");

function question4trigger(){
    filtering(test);
}

function filtering(tester){
    tester = tester.filter(
        function(e){
            return e>=40;
        }
    );
    q4.innerHTML=tester;
    return tester;
}

function sorter(){
    q4.innerHTML = test.sort(
        function(a,b){
            return a-b;
        }
    );
}

function finder(){
    q4.innerHTML = test.find(filtering);
}
