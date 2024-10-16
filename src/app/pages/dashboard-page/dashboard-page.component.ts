import { Component } from '@angular/core';
import { AssistanceTypes } from 'src/app/models/assistance-types';
import { Unit } from 'src/app/models/unit';
import { ViolenceSituationsTypes } from 'src/app/models/violence-situations-types';
import { AssistanceTypesService } from 'src/app/services/assistance-types.service';
import { UnitService } from 'src/app/services/unit.service';
import { ViolenceSituationsTypesService } from 'src/app/services/violence-situations-types.service';
import { CryptographyService } from 'src/app/services/cryptography.service'

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {

  units: Unit[] = [];
  selectedUnit: Unit = {} as Unit;
  years: string[] = [];
  selectedYear: string = {} as string;

  violenceSituationsTypes: ViolenceSituationsTypes[] = [];
  assistanceTypes: AssistanceTypes[] = [];

  totalAssistanceTypes: number = 0.0;
  totalViolenceSituationsTypes: number = 0.0;

  totalOpenViolenceSituations: number = 36.0;

  descriptionAssistanceTypes: string = 'atendimentos';
  descriptionViolenceSituationsTypes: string = 'situações de violência';

  specific: boolean = false;

  constructor(private unitService: UnitService,
              private violenceSituationsTypesService: ViolenceSituationsTypesService,
              private assistanceTypesService: AssistanceTypesService,
              private cryptographyService: CryptographyService) { }

  ngOnInit(): void {
    this.loadUnits();
    this.loadYears();
    this.loadChartAssistanceTypes();
    this.loadChartViolenceSituationsTypes();
  }

  loadChartAssistanceTypes(unit?: Unit) {
    this.assistanceTypesService.getAssistanceTypes(this.selectedYear).subscribe({
        next: data => {
            console.log(data);
            let decryptedText = this.cryptographyService.decrypt(data);
            console.log(decryptedText);
            
            try {
                // Converte a string JSON descriptografada em um objeto AssistanceTypes
                const assistanceTypesArray: AssistanceTypes[] = JSON.parse(decryptedText);
                
                // Verifica se a unidade foi passada e filtra os tipos de assistência conforme necessário
                if (unit) {
                    this.assistanceTypes = assistanceTypesArray.filter(item => item.unit.id === this.selectedUnit.id);
                    this.totalAssistanceTypes = this.sumTotalAssistanceTypes(); 
                } else {
                    this.assistanceTypes = assistanceTypesArray; // Atribui o array completo
                }
                
            } catch (error) {
                console.error('Erro ao converter a string em objeto AssistanceTypes', error);
            }
        },
        error: err => {
            console.error('Erro ao buscar os tipos de assistência', err);
        }
    });
}



  sumTotalViolenceSituationsTypes(): number {
    let sum = 0.0;

    sum += this.violenceSituationsTypes.reduce((sum, item) => sum + item.qtdAbusoOuViolenciaSexual, 0);
    sum += this.violenceSituationsTypes.reduce((sum, item) => sum + item.qtdAtoInfracional, 0);
    sum += this.violenceSituationsTypes.reduce((sum, item) => sum + item.qtdFisica, 0);
    sum += this.violenceSituationsTypes.reduce((sum, item) => sum + item.qtdNegligenciaContraCrianca, 0);
    sum += this.violenceSituationsTypes.reduce((sum, item) => sum + item.qtdPsicologica, 0);

    return sum;
  }

  sumTotalAssistanceTypes(): number {
    let sum = 0.0;

    sum += this.assistanceTypes.reduce((sum, item) => sum + item.qtdAtendimentoAtualizacaoCadUnico, 0);
    sum += this.assistanceTypes.reduce((sum, item) => sum + item.qtdAtendimentoCadastramentoCadUnico, 0);
    sum += this.assistanceTypes.reduce((sum, item) => sum + item.qtdAtendimentoRecepcao, 0);
    sum += this.assistanceTypes.reduce((sum, item) => sum + item.qtdAtendimentoSocial, 0);
    sum += this.assistanceTypes.reduce((sum, item) => sum + item.qtdVisitaDomiciliar, 0);

    return sum;
  }

  loadChartViolenceSituationsTypes(unit?: Unit) {
    this.violenceSituationsTypesService.getViolenceSituationsTypes(this.selectedYear).subscribe({
      next: data => {

            console.log(data);
            let decryptedText = this.cryptographyService.decrypt(data);
            console.log(decryptedText);
            
            try {
                // Converte a string JSON descriptografada em um objeto AssistanceTypes
                const violenceSituationsTypesArray: ViolenceSituationsTypes[] = JSON.parse(decryptedText);
                
                // Verifica se a unidade foi passada e filtra os tipos de assistência conforme necessário
                if (unit) {
                    this.violenceSituationsTypes = violenceSituationsTypesArray.filter(item => item.unit.id === this.selectedUnit.id);
                    this.totalViolenceSituationsTypes = this.sumTotalViolenceSituationsTypes(); 
                } else {
                    this.violenceSituationsTypes = violenceSituationsTypesArray; // Atribui o array completo
                }
                
            } catch (error) {
                console.error('Erro ao converter a string em objeto AssistanceTypes', error);
            }
        },
        error: err => {
            console.error('Erro ao buscar os tipos de assistência', err);
        }
    });
}

  loadUnits() {
    this.unitService.getUnits().subscribe({
      next: data => {
        // Adiciona a unidade 'fake' no início da lista
        this.units = [{ id: 0, name: 'Selecione uma Unidade' }, ...data];
        
        // Define a unidade selecionada como a unidade 'fake'
        this.selectedUnit = this.units[0];
       }
    });
  }

  loadYears() {
    this.years = ["Geral", "2024", "2023", "2022", "2021", "2020"];
    this.selectedYear = this.years[0];
  }

  onSelectedUnit(unit: Unit) {
    this.selectedUnit = unit;

    if (this.selectedUnit.id != 0) {
      this.specific = true;
      this.loadChartAssistanceTypes(this.selectedUnit);
      this.loadChartViolenceSituationsTypes(this.selectedUnit);
    }
    else {
      this.specific = false;
      this.loadChartAssistanceTypes();
      this.loadChartViolenceSituationsTypes();
    }
  }

  onSelectedYear(year: string) {
    this.selectedYear = year;

    if (this.selectedUnit.id != 0) {
      this.specific = true;
      this.loadChartAssistanceTypes(this.selectedUnit);
      this.loadChartViolenceSituationsTypes(this.selectedUnit);
    }
    else {
      this.specific = false;
      this.loadChartAssistanceTypes();
      this.loadChartViolenceSituationsTypes();
    }
  }
}
