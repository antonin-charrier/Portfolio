import { Component } from '@angular/core';
import { ArticleComponent } from 'src/app/shared/article.component';

@Component({
  selector: 'app-dot-net-core-web-api',
  templateUrl: './dot-net-core-web-api.component.html',
  styleUrls: ['./dot-net-core-web-api.component.scss']
})
export class DotNetCoreWebApiComponent extends ArticleComponent {
  get linkedProjects() {
    return ['web-agent', 'e-monthly', 'call-center', 'galt'];
  }

  get linkedTechnicalSkills() {
    return ['front-end'];
  }
}
