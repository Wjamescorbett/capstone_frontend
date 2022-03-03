import Button from "react-bootstrap/Button";
import jwtDecode from "jwt-decode";

const DeleteQuote = (props) => {

    const  handleOnClick = () => {
        console.log("QuoteId is:", props.currentQuoteData[4])
        let isUser = {
        user:jwtDecode(localStorage.getItem('access')).user_id
        }
        console.log("UserId is:", isUser.user)
        if(isUser.user === props.currentQuoteData[4]){
            let deleteQuote = props.currentQuoteData[2]
            props.deletePostedQuote(deleteQuote);
        }
    }

    return (
    <div>
        <Button variant="primary" onClick={()=>handleOnClick()}>
            Delete Quote
        </Button>
    </div>
    );
};

export default DeleteQuote;