
let movieId=0;
let movieList =[];

//when click add movies 
$('form').on('submit', function(e){
  e.preventDefault();
  let title =$("#title").val();
  let rating =$("#rating").val();

  //check the inputs
  if(!checker(title, rating)){
       return false;
  }
  //create movie object
  let movieObj = {title, rating, movieId};
  let btn =`<button class ="deleteThis" id=${movieObj.movieId}>Delete</button>`;

  $("section ul").append('<li class="listStyle">'+title +"  Rating:  " +rating+ " "+ btn +'</li>');

  // update index
  movieId ++
  movieList.push(movieObj);
  //reset form
  $("#movie").trigger("reset");
  });

  //delete a move when click on delete button
  $("section").on('click', "button.deleteThis",function(e){
    e.preventDefault;
    console.log("clicked");
    $(e.target)
    .closest("li")
      .remove();
    
  })

  function checker(title, rating){
    if(title.length <2 && rating >=0 && rating <=10){
      alert("Enter title with more than 2 charaters and make sure rating is between 0 an 10");
      return false;
    }
    return true;
  }


