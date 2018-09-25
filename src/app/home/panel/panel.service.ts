import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PanelService {

    active = false;

    constructor() {
    }

    enableDisablePanel() {
        this.active = !this.active;
    }
}
