import { LineElement } from "./LineElement";
import { Note } from "./Note";

export class NotesGroup implements LineElement {
    notes: Note[];

    constructor (notes: Note[]) {
        this.notes = notes;
    }
}
