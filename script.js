//output the clicked values
function input(x){

    document.getElementById("output2").value +=x;
}
//clear up the output when "c" is clicked
function clean() {

    document.getElementById("output2").value = '' ;
    
}
//calculate the answer
function answer(){

    let total_output = document.getElementById("output2").value;

    let final = eval(total_output);

    document.getElementById("output2").value = final;

}