import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TaskCollection } from '/imports/api/TasksCollection';
import { Task } from './Task';
import { TasksCollection } from '../api/TasksCollection';


//const tasks = [
//  {id: 1, text: 'Rule the State'},
//  {id: 2, text: 'Control the Nation'},
//  {id: 3, text: 'Take over the World!'}
// ]


export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}).fetch());
  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <ul>
        { tasks.map(task => <Task key={ task._id} task={ task}/>)}
      </ul>
    </div>
  );
}
  
  
