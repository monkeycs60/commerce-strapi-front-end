import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import styled from "styled-components";

const User = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/api/auth/login");
  };

  return (
    <UserStyles onClick={handleClick}>
      <FaUserCircle onClick={handleClick} />
      <h3>Profile</h3>
    </UserStyles>
  );
};

export default User;

const UserStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
    h3 {
        font-size: 12px;
        color: white;
    }
    img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
`;
