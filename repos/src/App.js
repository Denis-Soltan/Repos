import React from 'react';
import AddList from "./Act/AddList";
import AddRepo from "./Act/AddRepo";
import Context from "./context";





 function App() {
     const [repos, setRepos] = React.useState([
         {id: 1, completed: false, title: 'CardBank'},
         {id: 2, completed: false, title: 'Repos'},
         {id: 3, completed: false, title: 'Counter'}
     ])

    function evRepo(id) {
        setRepos (repos.map(rep => {
            if (rep.id === id) {
                rep.completed = !rep.completed
            }
            return rep;
        })
        )
    }

    function addVel(title) {
         setRepos(repos.concat([{
             title,
             id: Date.now(),
             completed: false
         }]))

    }

    function removeRepo(id) {
         setRepos(repos.filter(repo => repo.id !== id))
    }

  return (
      <Context.Provider value = {{removeRepo}}>
      <div className = 'wrapper'>
<h1>Repositories</h1>
          <AddRepo onCreate={addVel}/>

    <AddList repos = {repos} onEV = {evRepo} />
</div>
      </Context.Provider>

  );
}


export default App;