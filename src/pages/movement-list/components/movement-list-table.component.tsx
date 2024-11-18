import React from "react";
import { MovementVm } from "../movement-list.vm";
import classes from "./movement-list-table.component.module.css";
interface Props {
  movementList: MovementVm[];
}
import { MovementListItemComponent } from "./movement-list-item.component";

export const MovementListTableComponent: React.FC<Props> = (props) => {
  const { movementList } = props;

  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.gridTable}>
          <div className={classes.headerTable}>
            <span className={classes.headerCell}>FECHA</span>
            <span className={classes.headerCell}>FECHA VALOR</span>
            <span className={classes.headerCell}>DESCRIPCIÓN</span>
            <span className={classes.headerCell}>IMPORTE</span>
            <span className={classes.headerCell}>SALDO DISPONIBLE</span>
          </div>

          {movementList.map((movement) => (
            <MovementListItemComponent
              key={movement.id}
              movementItem={movement}
            />
          ))}
        </div>
      </div>
    </>
  );
};
