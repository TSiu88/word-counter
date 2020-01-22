function countWords(array){
  var currCount = 1;
  var currWord = array[0];
  var arrayItem = [currWord];
  var arrayCount = [1];

  for(i=1; i<array.length; i++){
    if (currWord.toString() === array[i].toString()){
      currCount++;
      if (arrayItem.includes(currWord.toString()) === false){
        arrayItem.push(currWord);
      }
      arrayCount.pop();
      arrayCount.push(currCount);
    }
    else{
      currCount = 1;
      currWord = array[i];
      arrayItem.push(currWord);
      arrayCount.push(currCount);
    }
  }
  console.log(arrayItem);
  console.log(arrayCount);
  var jointArray = joinArrays(arrayItem, arrayCount);
  return jointArray;
}

function joinArrays(item, count){
  var joinedArray =[];
  for(i=0; i<item.length; i++){
    var string1 = item[i];
    var string2 = count[i];
    var joiningString = string1 + " " + string2;
    joinedArray.push(joiningString);
  }
  return joinedArray;

}

$(document).ready(function(){
  $("#form1").submit(function(event){
    var string = $("#paragraph").val();
    var regex = /[.,?!\r]/g;
    

    string = string.replace(regex, "");
    string = string.replace(/\s{2,}/g, " ");
    console.log(string);

    var words = string.split(' ');
    words.sort();
    console.log(words);

    var results = countWords(words);
    console.log(results);

    results.forEach(function(result){
      $("#list").append("<li>" + result + "</li>");
    });
    
    $("#output").show();

    event.preventDefault();
  });
});