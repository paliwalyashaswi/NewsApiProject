import Card from "./Card";

const NewsDetails=(props) =>{

    return(
        <Card>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <p>{props.description}</p>
            <p>{props.publishTime}</p>
            <p>{props.author}</p>
            
        </Card>
    );
}

export default NewsDetails;