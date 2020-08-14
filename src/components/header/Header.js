import { ExcelComponent } from "../../core/ExcelComponent";

export class Header extends ExcelComponent {
    static className = 'exsel__header'
    toHTML() {
        return `<input type="text" class="input" value="New table +" />
        <div class="buttons">
          <div class="button"><i class="fas fa-trash"></i></div>
          <div class="button"><i class="fas fa-sign-out-alt"></i></div>
        </div>`
    }
}