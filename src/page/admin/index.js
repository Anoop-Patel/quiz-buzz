import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import NavigationDrawer from "./NavigationDrawer.js";
import Grid from "./Grid.js";

const AdminHome = () => {

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="admin-home">
        <NavigationDrawer />
        <Grid />
      </div>
    </DndProvider>
  );
};

export default AdminHome;
