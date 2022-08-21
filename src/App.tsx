import React from 'react';
import './App.css';
import { Greet } from './components/props/greet';
import { Person } from './components/props/person';
import { PersonListProps } from './components/props/personListProps';
import { ConditionallyRenderingProps } from './components/props/conditionallyRenderingProps';
import { ChildProps } from './components/props/childProps';
import { ReactComponentProps } from './components/props/reactComponentProps';
import { EventProps } from './components/props/eventProps';
import { InputProps } from './components/props/inputProps';
import { StylingProps } from './components/props/stylingProps';
import { LoggedIn } from './components/Hooks/loggedIn';
import { User } from './components/Hooks/user';
import { Counter } from './components/Hooks/useReducerHook/counter';
import { ThemeContextProvider } from './components/Hooks/useContexthook/ThemeContext';
import { Box } from './components/Hooks/useContexthook/Box';
import { UserContextProvider } from './components/Hooks/useContexthook/usercontext';
import { User1 } from './components/Hooks/useContexthook/user'

function App() {
  const personName = {
    fname: 'Bruce',
    lname: 'Lee'
  }
  const nameList = [
    {
      fname: 'Pavithra',
      lname: 'Sivasamy'
    },
    {
      fname: 'Gokul',
      lname: 'Sivasamy'
    },
    {
      fname: 'mathi',
      lname: 'Sivasamy'
    }

  ]
  
  return (
    <div className="App">
      learn react
      <Greet name = 'Pavithra' messageCount={20} isLoggedIn={true}/>
      <Person name = {personName}/>
      <PersonListProps name = {nameList} />
      <ConditionallyRenderingProps status='loading'/>
      <ChildProps>Placeholder Text</ChildProps>
      <ReactComponentProps>
        <ChildProps>
          Hi React Component prop!
        </ChildProps>
      </ReactComponentProps>
      <Greet name = "Pavithra" isLoggedIn = {true}/>
      <EventProps onClickHandler={(event, id)=>{
        console.log('Button is clicked', id)
      }}/>
      <InputProps value='PAvi' eventHandler={(event) => {
        console.log('change event happened');
      }}/>
      <StylingProps style = {{border:'1px solid black', marginTop: '1rem' , padding: '1rem'}}/>
      -------------------------------------------------------------------------------------------------
      <LoggedIn />
      <User name = "pavithra" email = "avigokul@gmail.com" />
      <Counter />
      <ThemeContextProvider >
      <Box />
      </ThemeContextProvider>
      <UserContextProvider >
        <User1 />
      </UserContextProvider>
    </div>
    
  );
}

export default App;
