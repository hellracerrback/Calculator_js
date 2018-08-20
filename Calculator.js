var put =function(weight){

        document.form.textview.value = document.form.textview.value + weight ;
         
};

function equals(){
  var num = document.form.textview.value;
  document.form.textview.value = eval(num);

};

function clean(){
    document.form.textview.value ="";
};

function back(){
    var num = document.form.textview.value;
    document.form.textview.value =  num.substring(0,num.length-1);

};