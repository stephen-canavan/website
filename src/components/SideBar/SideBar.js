import React from "react"
import { SideBarMenu } from './styles';

const SideBar = () => {
  return (
        <SideBarMenu>
            <a href="/" class="list-group-item list-group-item-action bg-light">Project 1</a>
            <a href="/" class="list-group-item list-group-item-action bg-light">Project 2</a>
            <a href="/" class="list-group-item list-group-item-action bg-light">Project 3</a>

        </SideBarMenu>
  );
};



export default SideBar;