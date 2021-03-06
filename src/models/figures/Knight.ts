import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
// @ts-ignore
import blackLogo from "../../assets/black-knight.png";
// @ts-ignore
import whiteLogo from "../../assets/white-knight.png";

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KNIGHT;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false;
        const dx = Math.abs(this.cell.x - 1);
        const dy = Math.abs(this.cell.y + 1);

        return (dx === 0 && dy === 1)
    }
}