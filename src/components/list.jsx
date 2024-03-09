export default function List(props) {
    return (
        <div className="list-description">
        <p style={{fontWeight:'bold'}}>{props.title}</p>
        <p>{props.subtitle}</p>
     </div>
     
    );
}