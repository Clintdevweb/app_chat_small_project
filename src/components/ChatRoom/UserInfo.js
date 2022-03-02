import { Button, Typography } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { AuthContext } from "../Context/AuthProvider";

import { auth, db } from "../fireBase/config";
const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  borderbottom: 1px solid rgba(82, 38, 83);

  .userName {
    color: white;
    margin-left: 5px;
  }
`;
export default function UserInfo() {
  

  const {user: { displayName, email, uid, photoURL }} = useContext(AuthContext);
  return (
    <>
      <WrapperStyled>
        <div>
          <Avatar src={photoURL}>{photoURL ? '' : displayName?.charAt(0)?.toUppercase()}</Avatar>
          <Typography.Text className="userName">{displayName}</Typography.Text>
        </div>
        <Button ghost onClick={() => auth.signOut()}>
          Đăng xuất
        </Button>
      </WrapperStyled>
    </>
  );
}
