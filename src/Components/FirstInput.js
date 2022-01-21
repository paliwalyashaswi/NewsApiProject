// import { useState } from 'react';
import './FirstInput.css';

const FirstInput=(props)=>{

    // const [newsType, setNewsType]=useState(null);
     const newsTypeByUser=(event)=>{
        //  setNewsType(event.target.value);
         props.userNewsTopic(event.target.value);
        //  setNewsType(null);
     }
     
    return <div>
        <form onChange={newsTypeByUser}>
            <h3>Choices for User</h3>
            <div>
            <label>Search News By Any Topic</label>
            <input type='radio' name='news' value='topic'></input>
            </div>
            
            <div>
            <label>Search News By Top Headlines</label>
            <input type='radio' name='news' value='top headlines'></input>
            </div>
        </form>
    </div>
}
export default FirstInput;