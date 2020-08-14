import { ExcelComponent } from "@/core/ExcelComponent";

export class Toolbar extends ExcelComponent {
  static className = "exsel__toolbar";
  toHTML() {
    return ` <div class="button"><i class="fas fa-align-left"></i></div>
        <div class="button"><i class="fas fa-align-center"></i></div>
        <div class="button"><i class="fas fa-align-right"></i></div>
        <div class="button"><i class="fas fa-bold"></i></div>
        <div class="button"><i class="fas fa-italic"></i></div>
        <div class="button"><i class="fas fa-underline"></i></div>`;
  }
}
