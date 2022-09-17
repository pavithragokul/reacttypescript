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
import { DomRef } from './components/Hooks/userefHook/DomRef';
import { Counter1 } from './components/Class/Counter'
import { Profile } from './components/componentProp/Profile';
import { Private } from './components/componentProp/Private';
import { List } from './components/generics/List';
import { RandomNumbers } from './components/RestrictingProps/RandomNumbers';
import { Toast } from './components/templateLiteral/Toast';
import { CustomButton } from './components/htmlWrapper/Button';
import { CustomComponent } from './components/htmlWrapper/customComponent';
import { TextComponent } from './components/polymorphicComponent/text';

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
      <DomRef />
      <Counter1 message = "This is a class counter"/>
      <Private isLoggedIn= {true} component = {Profile} />
      -----------------------Generic Props -------------------
      {/* <List items = {['Pavi','Gokul', 'Harsh', 'Ram']} onClick = {(item)=>console.log(item)} />
      <List items = {[1,2,3,4]} onClick = {(item)=>console.log(item)} /> */}
      <List items = {[{id: 1, fName:'Pavithra',  lName:'Sivasamy'}, {id: 2, fName: 'Gokul', lName: 'Sivasamy'}]} onClick = {(item)=>console.log(item)} />
      <RandomNumbers value={1} isPositive  />
      <Toast position='center-bottom' />
      <CustomButton varient='primary' onClick={()=>console.log('onclick event')}>Primary button</CustomButton>
      <CustomComponent isLoggedIn ={true} name= {'pavithra'}/>
      <TextComponent as = 'h1' size='lg'>heading</TextComponent>
      <TextComponent as = 'p'size='md'>Paragraph</TextComponent>
      <TextComponent as = 'label' htmlFor = 'someId' size='sm' color='secondary'>Label</TextComponent>
    </div>
    
  );
}

export default App;
