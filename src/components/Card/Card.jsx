import Icon from "../Icon/Icon";
import './Card.css';

function Card({ gameEnd, player, onPlay, index }) {
    let icon = <Icon />

    if(player == 'X') {
        icon = <Icon name="cross" />
    } else if(player == 'O') { // else if is necessary
        icon = <Icon name="circle" />
    } 
    return (
        <div className="card" onClick={() => !gameEnd && player=="" && onPlay(index)}>
            {icon}
        </div>
    )
}
export default Card;

// function Card({ player, onPlay, index }) {
//     let icon = <Icon />

//     if(player == 'O') {
//         icon = <Icon name='circle' />
//     } else if(player == 'X') {
//         icon = <Icon name='cross' /> 
//     }

//     return (
//         <div className="card" onClick={() => onPlay(index)}>
//             {icon}
//         </div>
//     )
// }

// export default Card;