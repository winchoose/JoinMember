import './login.css'
const login = () => {
    return (
        <div className="login">
            이메일:<input type="email" name="memberEmail"/>
            비밀번호: <input type="password" name="memberPassword"/>
            <input type="submit" value="로그인"/>
        </div>
    )
  };
  
  export default login;