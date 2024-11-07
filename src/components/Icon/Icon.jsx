import { FaCross, FaPen, FaRegCircle } from 'react-icons/fa';

function Icon({ name }) {
    if(name == "circle") {
        return <FaRegCircle size={40}/>
    } else if(name == "cross") {
        return <FaCross size={40} />
    } else {
        return <FaPen size={40}/>
    }
}

export default Icon;
