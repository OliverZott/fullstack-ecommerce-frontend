# Setup
- `npm install`
- (`npm install -g @angular/cli`)
- `ng serve --port 5666 --open`
- **Basics**: https://angular.io/guide/file-structure


# Images
- Copy images from 
  - www.luv2code.com/ecommerce-release-2.0-starter-files to
  - `src/assets/products`

---------------------------------------------------------------------------------
# Remarks
- Mostly **public** fields... not like Java with getters/setters !


---------------------------------------------------------------------------------
# Workflow

## Component 
- `ng generate component <folder-name>`

## Services
- `ng generate service <folder-name>`
- Adapt `app.module.ts` ... 
  - add `HttpClientModule`
  - add `ProductService` `[Providers]` for injections
- 



## Data-Objects
- `ng generate class <folder-name>/<class-name>`



---------------------------------------------------------------------------------
# FirstAngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
