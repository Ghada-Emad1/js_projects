const movieTable=document.getElementById('movieTable');
const movieInfo=document.getElementById('movieInfo')
const ApI_URL='http://www.omdbapi.com?apikey=3ca8f44'
async function searchMovies(){
    const searchinput=document.getElementById('searchinput').value;
    const RowToClear=Array.from(movieTable.getElementsByTagName('tr')).slice(1);

    RowToClear.forEach((row)=>row.remove());
    //const ApI_URL=`http://www.omdbapi.com/?apikey=3ca8ff44&s=${searchinput}`;
    const response=await fetch(`${ApI_URL}&s=${searchinput}`);
    console.log(response);
    const data=await response.json();
    console.log(data)
    const dataFound=data.Search;
    console.log(dataFound);

    if(data.Response==='True'){
        //newRow.innerHTML="";
        dataFound.map(found=>{
        const newRow=document.createElement('tr');
        newRow.innerHTML= `
        <td>${found.Title}</td>
        <td>${found.Year}</td>
        <td>${found.Type}</td>
        <td><img src="${found.Poster}" alt="${found.Title}" width="100"></td>
      `;
           movieTable.appendChild(newRow);
           movieTable.style.display='table';
            console.log(found);
        })
        
        
    }else{
        movieTable.innerHTML='<tr><td colspan="10">Movie not found.</td></tr>';
        movieTable.style.display='none';
    }
    
    

}
//searchMovies();