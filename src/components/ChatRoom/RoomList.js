import { Button, Collapse, Typography } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import useFirestore from "../../hooks/useFireStore";
import { AuthContext } from "../Context/AuthProvider";
import { AppContext } from "../Context/AppProvider";

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }
    .ant-collapse-content-box {
      padding: 0 40px;
    }
  }
  .addRoom {
    color: white;
    padding: 0;
  }
`;
const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;
export default function RoomList() {
  const { rooms,isAddRoomVisible, setIsAddRoomVisible, selectedRoomId, setSelectedRoomId } = useContext(AppContext);
  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
    // console.log(isAddRoomVisible)
  };
  return (  
    <>
      <Collapse ghost defaultActiveKey={["1"]}>
        <PanelStyled header="Danh sách các phòng" key="1">
          {rooms.map((room, i) => (
            <LinkStyled key={i} onClick={() => setSelectedRoomId(room.id)}>{room.name}</LinkStyled>
          ))}

          <Button
            type="text"
            icon={<PlusSquareOutlined />}
            className="addRoom"
            onClick={handleAddRoom}
          >
            Thêm phòng
          </Button>
        </PanelStyled>
      </Collapse>
      ,
    </>
  );
}
