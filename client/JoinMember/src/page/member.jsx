import { useLocation } from 'react-router-dom';


const member = () => {
    const location = useLocation();
    const members = location.state?.member || [];
    return (
        <div className="member">
        <h2>회원 목록</h2>
        {members.map((user) => (
          <div key={user.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{user.name} ({user.username})</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address.city}, {user.address.street}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
          </div>
        ))}
      </div>
    )
  };
  
  export default member;