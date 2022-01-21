import {Fragment, useState} from 'react';
import './App.css';
import FirstInput from './Components/FirstInput';
import FormInput from './Components/FormInput';

function App() {

  const [topic, setTopic]=useState(null);
  const onSetTopicType=(topicType)=>{
    setTopic(topicType);
    console.log(topicType);
  }
  return (
    <Fragment>
      <h1>Welcome to MyNews.com !</h1>
      <FirstInput userNewsTopic={onSetTopicType} />
      {topic && <FormInput userTopic={topic} />}
    </Fragment>
  );
}

export default App;
