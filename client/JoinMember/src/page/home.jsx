import { Link } from 'react-router-dom';
import './home.css'
const home = () => {
    return (
        <div className="home">
            <h2>Hello Spring Boot!!</h2>
            <div className='threeOption'>
            <Link to={"/join"}>회원가입</Link>
            <Link to={"/login"}>로그인</Link>
            <Link to={"/member"}>회원목록</Link>
            </div>
        </div>
    )
  };
  
  export default home;