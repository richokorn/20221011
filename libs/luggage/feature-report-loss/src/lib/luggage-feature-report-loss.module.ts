import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { ReportLossComponent } from './report-loss.component';

@NgModule({
  imports: [
      CommonModule,
      LuggageDomainModule,

      // Add this:
      RouterModule.forChild([
          { path: '', component: ReportLossComponent }
      ])
  ],
  declarations: [ReportLossComponent],
  exports: [ReportLossComponent]
})
export class LuggageFeatureReportLossModule {}