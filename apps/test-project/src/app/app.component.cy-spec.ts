import { mount } from '@jscutlery/cypress-angular/mount';
import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";

describe('app component', () => {
  it('should say welcome', () => {
    mount(AppComponent, {imports: [AppModule]});
    cy.get('h1').contains(`Welcome to ${new AppComponent().title}`);
  });
});
