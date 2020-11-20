import { Component } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
      <div>
          <nb-actions size="tiny">
              <nb-action class="action" (click)="redirectToAchievements();">
                  <nb-icon style="margin-right: 8px;" class="action-icon" icon="trophy" pack="fa"></nb-icon>
                  <span>Student Achievements</span>
              </nb-action>
              <nb-action class="action" (click)="redirectToRules();">
                  <nb-icon class="action-icon" icon="exclamation" pack="fa"></nb-icon>
                  <span>School Rules</span>
              </nb-action>
              <nb-action class="action" (click)="redirectToAdmission();">
                  <nb-icon style="margin-right: 5px;" class="action-icon" icon="sticky-note" pack="fa"></nb-icon>
                  <span>School Admission</span>
              </nb-action>
          </nb-actions>
      </div>
      <div class="socials">
          <span class="social-title">Follow us on</span>
          <div class="social-buttons">
              <a href="https://www.facebook.com/LCOGA/" target="_blank" class="social-buttons__button social-button social-button--facebook"
                 aria-label="Facebook">
    <span class="social-button__inner">
     <i class="fab fa-facebook-f"></i>
    </span>
              </a>
          </div>
      </div>
  `,
})
export class FooterComponent {
  evaIcons = [];

  constructor(iconsLibrary: NbIconLibraries) {
    this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
      .filter(icon => icon.indexOf('outline') === -1);

    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
  }

  redirectToAchievements() {
    window.open('http://www.ladiescollege.lk/index.php/16-2/student-achievements/', '_blank');
  }

  redirectToRules() {
    window.open('http://www.ladiescollege.lk/index.php/16-2/school-rules/', '_blank');
  }

  redirectToAdmission() {
    window.open('http://www.ladiescollege.lk/index.php/16-2/school-admission/ ', '_blank');
  }
}
