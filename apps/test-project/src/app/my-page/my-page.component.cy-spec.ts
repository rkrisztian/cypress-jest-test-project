import { mount } from '@jscutlery/cypress-angular/mount';
import { MyPageComponent } from "./my-page.component";

describe('my page component', () => {
  it('should say it works', () => {
    mount(MyPageComponent);
    cy.get('p').contains('works!');
  });
});
