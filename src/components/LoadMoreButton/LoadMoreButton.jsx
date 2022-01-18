import { withRouter } from 'react-router-dom' ;
import Button from 'buttonFolder/button.component';
const LoadThreeMore = ({history}) => {

return (
       <Button onClick{...() => history.push('/path')}> New componentPage </Button>
)};

export default withRouter(LoadThreeMore);