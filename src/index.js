import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirstComponents,{SecondComponents,ThirdComponents,SolveCalledAutomatically,CalledFunction,ImportanceForArrowFunction,UsingSetState,CalledOwnConstructor,EffectUsingSetState,ReturnFunctionInRender} from './components/FirstComponents';
import StudentsEducation, {GetStudentsByMap,UseSpreadOperator,RemoveFromState,ChangeInfoInState,AddNamesInput} from './components/Students';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <FirstComponents />
    <SecondComponents />
    <ThirdComponents />
    <SolveCalledAutomatically />
    <CalledFunction />
    <ImportanceForArrowFunction />
    <UsingSetState />
    <CalledOwnConstructor />
    <EffectUsingSetState />
    <ReturnFunctionInRender />
    <StudentsEducation />
    <GetStudentsByMap />
    <UseSpreadOperator />
    <RemoveFromState />
    <ChangeInfoInState />
    <AddNamesInput />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
