function fn(){
    var inputref =document.getElementById("fizzbuzznumber").value;
   
    fn1(inputref);

}

function fn1(num){
var ul = document.getElementById("ul");


for(var i=1;i<=num;i++){
    if(i%3==0){
        if(i%5==0){
            var li = document.createElement('li');
            li.innerText="FizzBuzz";
            ul.appendChild(li);
        }
        else{
            var li = document.createElement('li');
            li.innerText="Fizz";
            ul.appendChild(li);
        }
    }
    else {
        if(i%5==0){
            var li = document.createElement('li');
            li.innerText="Buzz";
            ul.appendChild(li);
        }
        else{
            var li = document.createElement('li');
            li.innerText= i;
            ul.appendChild(li);
        }
    }
}
}