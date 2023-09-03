import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

function UserCard({userInfo}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={userInfo.avatar ? userInfo.avatar
      :"https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png"}
        onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png"
        }}
      />
      <Card.Body>
        <Card.Title>
            {userInfo.name}
            <span className='text-warning'>{userInfo.role}</span>
        </Card.Title>
        <Card.Text>
          {userInfo.email}
        </Card.Text>
        <NavLink to={`/user/${userInfo.id}`}>
            <Button variant="primary">View</Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
}

export default UserCard;