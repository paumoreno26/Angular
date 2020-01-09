import { Component } from '@angular/core';


@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    en: Array<String> = ["Embassy with budget", "Embassy and others without budget", "Universities and others", "Universities and others (EUR)", "Extension of studies",
        "Certification banks", "Universities and others (CAD)", "Universities and others (GPB)", "Universities and others (AUD)", "Professional Practice"]

    es: Array<String> = ["Embajada con presupuesto", "Embajada y otros sin presupuesto", "Universidades y otros", "Universidades y otros (EUR)", "Extension de estudios",
        "Certificación bancos", "Universidades y otros (CAD)", "Universidades y otros (GPB)", "Universidades y otros (AUD)", "Practica Profesional"]

    fr: Array<String> = ["Ambassade avec budget", "Ambassade et autres sans budget", "Universités et autres", "Universités et autres (EUR)", "Prolongation des études",
        "Banques de certification", "Universités et autres (CAD)", "Universités et autres (GPB)", "Universités et autres (AUD)", "Pratique professionnelle"]

    it: Array<String> = ["Ambasciata con budget", "Ambasciata e altri senza budget", "Università e altri", "Università e altri (EUR)", "Estensione degli studi",
        "Banche di certificazione", "Università e altri (CAD)", "Università e altri (GPB)", "Università e altri (AUD)", "Pratica professionale"]

    al: Array<String> = ["Botschaft mit Budget", "Botschaft und andere ohne Budget", "Universitäten und andere", "Universitäten und andere (EUR)", "Studienerweiterung",
        "Zertifizierungsbanken", "Universitäten und andere (CAD)", "Universitäten und andere (GPB)", "Universitäten und andere (AUD)", "Berufspraxis"]

    lang: Array<String> = this.es

    public bandera = false;
    cambio() {
        debugger
        this.bandera = true;
    }
    cambio1() {
        debugger
        this.bandera = false;
    }

    language(event) {
        debugger
        console.log(event)
        switch (event) {
            case 'en':
                this.lang = this.en;
                break;
            case 'es':
                this.lang = this.es;
                break;
            case 'it':
                this.lang = this.it;
                break;
            case 'fr':
                this.lang = this.fr;
                break;
            case 'al':
                this.lang = this.al;
                break;

        }
    }


}

