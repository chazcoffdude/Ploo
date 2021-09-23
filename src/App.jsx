import React, {useState} from 'react';
import data from './utils/data';
import List from './components/List'



  
function App() {
    const [answrs,revealer]=useState(data);
    const reveal = (id)=>{
       console.log("OKAY BUDDAY")
    }
 


//error catch above
    return (
        <main className='article'>
             


                <article className = "codename">Coding Addiction</article> 
                <List answrs={answrs} className='listopts' remove={reveal}>     
              </List>
              
               <article> <img id="taskicon" src="./imgs/baricon.png"></img></article>
             
         </main>
      
    )
}

export default App













