import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useUser } from "@auth0/nextjs-auth0/client";

const User = () => {
  const router = useRouter();

  const clickToLogin = () => {
    router.push("/api/auth/login");
  };

  const clickToProfile = () => {
    router.push("/profile");
  };

  const { user, error, isLoading } = useUser();
  return !user ? (
    <UserStyles>
      <FaUserCircle
        onClick={clickToLogin}
        size={30}
        color="hsl(120, 81%, 17%)"
      />
    </UserStyles>
  ) : (
    <UserStyles>
      <div className="img-wrapper">
        <img
          src={user.picture}
          alt={user.name}
          width="30px"
          height="30px"
          onClick={clickToProfile}
        />
      </div>
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

  .img-wrapper {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 2px solid hsl(120, 81%, 17%);
  }

  img {
    border-radius: 50%;
    transition: all 1s ease;
    &:hover {
      transform: rotate(360deg);
      transition: all 1s ease;
    }
  }
`;
