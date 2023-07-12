async function getmeals(){
   const meal= await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
   const random=await meal.json();
   console.log(random)
}
getmeals()

