import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ResumeComponent } from 'src/app/shared/components/dialogs/resume/resume.component';
import { ContactInfoComponent } from 'src/app/shared/components/dialogs/contact-info/contact-info.component';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  isProjectsExpanded: boolean;
  isTechnicalSkillsExpanded: boolean;
  isHumanSkillsExpanded: boolean;
  private _isDarkTheme = false;

  constructor(
    private translateService: TranslateService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private dialog: MatDialog,
    private themeService: ThemeService
  ) { }

  get isDarkTheme(): boolean {
    return this._isDarkTheme;
  }

  ngOnInit() {
    this._isDarkTheme = this.themeService.isDarkTheme.value;
    this.themeService.isDarkTheme.subscribe((value: boolean) => this._isDarkTheme = value);
    this.matIconRegistry.addSvgIcon(
      `linkedin`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/linkedin.svg')
    );
    this.matIconRegistry.addSvgIcon(
      `github`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/github.svg')
    );
    this.matIconRegistry.addSvgIcon(
      `moon`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/moon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      `sun`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/sun.svg')
    );
  }

  get locale(): string {
    return this.translateService.currentLang.toLocaleUpperCase();
  }

  setLang(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('lang', lang);
  }

  email() {
    window.location.href = 'mailto:charrier.antonin@yahoo.fr';
  }

  linkedin() {
    switch (this.translateService.currentLang) {
      case 'fr':
      default:
        window.open('https://www.linkedin.com/in/antonin-charrier/?locale=fr_FR', '_blank');
        break;
      case 'en':
        window.open('https://www.linkedin.com/in/antonin-charrier/?locale=en_US', '_blank');
        break;
    }
  }

  github() {
    window.open('https://github.com/antonin-charrier', '_blank');
  }

  resume() {
    this.dialog.open(ResumeComponent, {
      height: '80vh',
      width: '65vw',
    });
  }

  contactInfo() {
    this.dialog.open(ContactInfoComponent, {
      height: '30vh',
      width: '40vw',
    });
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.isDarkTheme.next(checked);
    localStorage.setItem('darkTheme', checked.toString());
  }
}
