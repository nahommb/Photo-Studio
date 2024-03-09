import { CorporateFare , MeetingRoom , LocalHotel , LineWeight} from "@mui/icons-material";
import List from "./list";

export default function ListContainer (props){
    return (
    <div>

     <div className="list-container">
       <CorporateFare className="list-icon" fontSize="large"/>
       <List title={props.title} subtitle ={props.subtitle}/>
     </div>

       <div className="list-container">
       <CorporateFare className="list-icon" fontSize="large"/>
          <List title={props.title} subtitle ={props.subtitle}/>
       </div>

       <div className="list-container">
       <MeetingRoom className="list-icon" fontSize="large"/>
          <List title={props.title} subtitle ={props.subtitle}/>
       </div>

       <div className="list-container">
       <LineWeight className="list-icon" fontSize="large"/>
          <List title={props.title} subtitle ={props.subtitle}/>
       </div>

       <div className="list-container">
       <LocalHotel className="list-icon" fontSize="large"/>
          <List title={props.title} subtitle ={props.subtitle}/>
       </div>
      
      </div>
      );
}