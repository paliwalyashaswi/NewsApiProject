import { useState, Fragment } from "react";
import FetchingDataApi from "./FetchingDataApi";
import "./FormInput.css";

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

const FormInput = (props) => {
  // const [fetchData, setFetchData] = useState(false);
  const [myTopic, setMyTopic] = useState("");
  const [myLang, setMyLang] = useState(null);
  const [startDate, setStartDate] = useState(formatDate(new Date()));
  const [endDate, setEndDate] = useState(formatDate(new Date()));
  const [myUrl, setMyUrl] = useState(null);
  // console.log('u r in form ');

  const apikey = "29cf759881e448f69e58de2b0be27945";
  let url = "https://newsapi.org/v2/";

  const onTopicClickHandler = (event) => {
    setMyTopic(event.target.value);
  };

  const onLangClickHandler = (event) => {
    setMyLang(event.target.value);
  };
  const onStartDateClickHandler = (event) => {
    setStartDate(event.target.value);
    console.log(event.target.value);
  };
  const onEndDateClickHandler = (event) => {
    setEndDate(event.target.value);
  };
  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    if (props.userTopic === "topic") {
      url =
        url +
        "everything?q=" +
        myTopic +
        "&language=" +
        myLang +
        "&from=" +
        startDate +
        "&to=" +
        endDate +
        "&apiKey=" +
        apikey;
    } else {
      url =
        url +
        "everything?q=" +
        myTopic +
        "&language=" +
        myLang +
        "&apiKey=" +
        apikey;
    }
    // console.log(url)
    // setFetchData(true);
    setMyUrl(url);
    setMyTopic("");
    setMyLang(null);
    setStartDate(formatDate(new Date()));
    setEndDate(formatDate(new Date()));
    // console.log('topic zet to empty');
  };

  const isTopic = props.userTopic === "topic" ? true : false;
  // const fetchData = url.length>25 ? true : false;
  // console.log(url.length);
  // console.log(fetchData);
  return (
    <Fragment>
      <form onSubmit={onFormSubmitHandler}>
        <div>
          <label>
            <h3>Select Topic for News</h3>
          </label>
          <input
            type="text"
            placeholder="Enter the Topic"
            onChange={onTopicClickHandler}
            value={myTopic}
            required
          ></input>
        </div>
        <div>
          <h3>Select Language</h3>
        </div>
        <div onChange={onLangClickHandler} required>
          <div>
            <label>Hindi </label>
            <input type="radio" name="language" value="hi"></input>
          </div>
          <div>
            <label>English </label>
            <input type="radio" name="language" value="en"></input>
          </div>
        </div>
        {isTopic && (
          <div>
            <h3>Select Dates to get News</h3>
            <label>Date From : </label>
            <input
              type="date"
              onChange={onStartDateClickHandler}
              value={startDate}
              required
            ></input>
          </div>
        )}
        {isTopic && (
          <div>
            <label>Date to : </label>
            <input
              type="date"
              onChange={onEndDateClickHandler}
              value={endDate}
              required
            ></input>
          </div>
        )}
        <div>
          <h3> </h3>
          <button type="submit">Click here to Get News</button>
        </div>
      </form>

      {myUrl && <FetchingDataApi url={myUrl}></FetchingDataApi>}
      {/* {!myUrl && <p>fetching Data failed !!!!!!!!!!!</p>} */}
    </Fragment>
  );
};
export default FormInput;
