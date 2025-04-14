import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import './home.css'
const home = () => {
    const [member, setMember] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const data = await response.json();
          setMember(data); 
        }
    
        fetchData();
      }, []);

    return (
        <div className="home">
            <h2>Hello Spring Boot!!</h2>
            <div className='threeOption'>
            <Link to={"/join"}>회원가입</Link>
            <Link to={"/login"}>로그인</Link>
            <Link to={"/member"} state={{ member }}>회원목록</Link>
            </div>
        </div>
    )
  };
  
  export default home;