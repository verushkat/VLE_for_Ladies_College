import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidator } from '../../../../../../shared/services';
import { environment } from "../../../../../../../environments/environment";
import { ReportConstants } from "../../report.constants";

@Component({
  selector: 'app-reports-view',
  styleUrls: ['./reports-view.component.scss'],
  templateUrl: './reports-view.component.html'
})
export class ReportsViewComponent {
  public selectedResource: string;
  public selectedDirection: string;
  public selectedFilterColumn: string;
  public selectedSortColumn: string;
  public isFilteringEnabled = false;
  public isSortingEnabled = false;

  public reportFormGroup: FormGroup;
  public filteringColumns = [];
  public sortingColumns = [];

  public resources = ReportConstants.resources;
  public studentFilteringColumnList = ReportConstants.studentFilteringColumnList;
  public studentSortingColumnList = ReportConstants.studentSortingColumnList;
  public teacherSortingColumnList = ReportConstants.teacherSortingColumnList;
  public teacherFilteringColumnList = ReportConstants.teacherFilteringColumnList;
  public directions = ReportConstants.directions;

  constructor(
    private fb: FormBuilder
  ) {
    this.selectedResource = this.resources[0].value;
    this.selectedDirection = this.directions[0].value;
    this.filteringColumns = this.studentFilteringColumnList;
    this.sortingColumns = this.studentSortingColumnList;
    this.buildFormGroup();
  }

  public isInvalidControl(controlName: string): boolean {
    return FormValidator.isInvalidControl(this.reportFormGroup.get(controlName));
  }

  public onGenerate() {
    let param = '';
    let paramsList: string[] = [];

    paramsList.push(`reportEntity=${this.selectedResource}`);

    if (this.isSortingEnabled) {
      let sortingData = this.getSortingData();
      if (sortingData) {
        paramsList.push(`sortBy=${sortingData.sortBy}`);
        paramsList.push(`sortDir=${sortingData.sortDir}`);
      }
    }

    if (this.isFilteringEnabled) {
      let filteringData = this.getFilteringData();
      if (filteringData) {
        paramsList.push(`filterBy=${filteringData.filterBy}`);
        paramsList.push(`filterValue=${filteringData.filterValue}`);
      }
    }

    param = `?${paramsList.join('&')}`;

    window.open(`${environment.baseUrl}/generateSummeryReport` + param, '_blank');

    this.clearForm();
  }

  private getSortingData() {
    return {
      sortBy: this.selectedSortColumn,
      sortDir: this.selectedDirection
    }
  }

  private getFilteringData() {
    return {
      filterBy: this.selectedFilterColumn,
      filterValue: this.reportFormGroup.value.value
    }
  }

  private buildFormGroup() {
    this.reportFormGroup = this.fb.group({
      value: [null, Validators.required]
    })
  }

  public onResourceChange(selected: string) {
    switch (selected) {
      case 'student':
        this.filteringColumns = this.studentFilteringColumnList;
        this.sortingColumns = this.studentSortingColumnList;
        break;
      case 'teacher':
        this.filteringColumns = this.teacherFilteringColumnList;
        this.sortingColumns = this.teacherSortingColumnList;
        break;
    }
    this.selectedFilterColumn = null;
    this.selectedSortColumn = null;
  }

  public isGenerateDisabled(): boolean {
    if (!this.isSortingEnabled && !this.isFilteringEnabled) {
      return false;
    }

    if (this.isSortingEnabled) {
      if (!this.selectedSortColumn) {
        return true;
      }
      if (!this.selectedDirection) {
        return true;
      }
    }

    if (this.isFilteringEnabled) {
      if (!this.selectedFilterColumn) {
        return true;
      }
      if (!this.reportFormGroup.valid) {
        return true;
      }
    }

    return false;
  }

  private clearForm(): void {
    this.isSortingEnabled = false;
    this.isFilteringEnabled = false;
    this.selectedFilterColumn = null;
    this.selectedDirection = this.directions[0].value;
    this.selectedResource = this.resources[0].value;
    this.selectedFilterColumn = null;
    this.selectedSortColumn = null;
    this.onResourceChange('student');
  }
}
