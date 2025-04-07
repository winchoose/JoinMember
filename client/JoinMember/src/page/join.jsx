import './join.css'
const join = () => {
    return (
        <div className="join">
        이메일:<input type="email" name="memberEmail"/>
        비밀번호: <input type="password" name="memberPassword"/>
        이름: <input type="text" name="memberName"/>
        전화번호 : <input type="tel" placeholder="010-xxxx-xxxx" name="memberTel"/>
        생년월일 : <input type="date" name="memberBirth"/>
        <input type="submit" value="회원가입"/>
        </div>
    )
  };
  
  export default join;