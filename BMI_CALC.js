
const BMI=document.querySelector('#BMI');
const BMR=document.querySelector('#BMR');

BMI.addEventListener('click',(event)=>{
    event.preventDefault()
    var h=document.getElementById('text1').value;
    var w=document.getElementById('text2').value;
    var bmi=w/(h/100*h/100);
    var total=bmi.toFixed(2);
    document.getElementById('result').innerHTML=total 

    if(total<18.5){
        
       document.querySelector('.driscription').innerHTML="You are underweight";
    }else if(total>24.5){
      document.querySelector('.driscription').innerHTML="You are overweight ";
    }else{
      document.querySelector('.driscription').innerHTML="You are in normal range";
    }
    
});

var vale=document.querySelector('.driscription')

BMR.addEventListener('click',(event)=>{
  event.preventDefault()
 if(vale.innerHTML=true){

 vale.innerHTML=" "
 document.getElementById('result').innerHTML=' ' ;

 var age=document.querySelector('#age').value
 var h=document.getElementById('text1').value;
 var w=document.getElementById('text2').value;
 var bmr=88.362 + (13.397 *w) + (4.799 * h) - (5.677 * age);
 var all=bmr.toFixed(2)
 document.getElementById('result').innerHTML=all 
 
 }else{
  
 }
});

