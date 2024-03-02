import NewUserForm from "../NewUserForm";
import LoginForm from "../login/LoginForm";
import Alert from 'react-bootstrap/Alert';
import ListGroup from "react-bootstrap/ListGroup";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function BottomSignUp(){
    return(
        <div>
            <Alert variant="warning">
                HAVE YOUR CANDIDATES ANSWERED OUR QUESTION? If not, see how you can <Alert.Link href="#">Find Out</Alert.Link>
            </Alert>
            {/** left */}
            <div style={{display:"flex"}}>
                <div>
                    <h2>PERSONALIZED VOTING INFORMATION</h2>
                    <ListGroup>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </div>
                {/** right */}
                <div>
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="Home">
                            <NewUserForm />
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            <LoginForm />
                        </Tab>
                    </Tabs>
                    
                    
                                
                    
                </div>
            </div>
        </div>

    )
}