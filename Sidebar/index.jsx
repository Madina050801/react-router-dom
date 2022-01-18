import React from "react";
import { MainContent, Right, Link, activeStyle } from "./style.js";

const Sidebar = () => {
  return (
    <div>
      <MainContent.LeftcBlock>
        <Link activeStyle={activeStyle} to="/Home">
          <MainContent.LeftBlockImgs1 />
          <MainContent.Item >Home</MainContent.Item>
        </Link>
        <Link activeStyle={activeStyle} to="/Explore">
          <MainContent.LeftBlockImgs2 />
          <MainContent.Item >Explore</MainContent.Item>
        </Link>
        <Link activeStyle={activeStyle} to="/Subscriptions">
          <MainContent.LeftBlockImgs3 />
          <MainContent.Item >Subscriptions</MainContent.Item>
        </Link>
        <br />
        <div
          style={{ width: "87%", background: "#606060", height: "1px" }}
        ></div>
        <Link activeStyle={activeStyle} to="/Library">
          <MainContent.LeftBlockImgs4 />
          <MainContent.Item>Library</MainContent.Item>
        </Link>
        <Link activeStyle={activeStyle} to="/History">
          <MainContent.LeftBlockImgs5 />
          <MainContent.Item to="/History">History</MainContent.Item>
        </Link>
        <Link activeStyle={activeStyle} to="/Watch">
          <MainContent.LeftBlockImgs6 />
          <MainContent.Item to="/Watch">Watch later</MainContent.Item>
        </Link>
        <Link activeStyle={activeStyle} to="/Liked">
          <MainContent.LeftBlockImgs7 />
          <MainContent.Item to="/Liked">Liked videos</MainContent.Item>
        </Link>
        <Link activeStyle={activeStyle} to="/show">
          <MainContent.LeftBlockImgs8 />
          <MainContent.Phr>Show more</MainContent.Phr>
        </Link>
      </MainContent.LeftcBlock>
    </div>
  );
};
export default Sidebar;
