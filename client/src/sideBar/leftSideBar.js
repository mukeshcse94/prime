import React, { useState } from "react";
import { Card } from 'react-bootstrap';

import SidebarRoutes from "./sidebarRoutes";
import "./App.css";

function LeftSideBar() {
  const [state, setState] = useState({});

  const handleClick = (e, item) => {
    e.stopPropagation();
    setState(state => ({
      ...state,
      [item]: !state[item]
    }));
  };

  const handler = children => {
    return children.map((child, i) => {
      const category = !child.category ? null : (
        <div className="nav-item category">{child.category}</div>
      );
      if (!child.children) {
        return (
          <>
            {category}
            <li onClick={e => handleClick(e, child.name)} key={i}>
              <a className="nav-link" href={child.url}>
                <div className="icon">{child.icon ? child.icon : "-"}</div>
                <span>{child.name}</span>
              </a>
            </li>
          </>
        );
      }
      return (
        <>
          {category}
          <li onClick={e => handleClick(e, child.name)} key={i}>
            <div className="nav-link">
              <div className="icon"></div>
              <span>{child.name[0]}</span>
            </div>
            <ul className={`nav-submenu ${state[child.name] ? "open" : ""}`}>
              {handler(child.children)[0]}
            </ul>
          </li>
        </>
      );
    });
  };

  return (
    <div className="App">
      <Card className="main-wrapper" style={{ width: '243px' }}>
        <aside className="sidebar">
          <ul className="nav">{handler(SidebarRoutes)}</ul>
        </aside>
        <main className="content" />
      </Card>
    </div >
  );
}

export default LeftSideBar;
