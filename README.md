# Server-Side Rendering from Angular CLI Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

1. `yarn`
1. `npm run ssr`
1. Start dev server on `dist`

## Process

1. `ng new`
1. `ng eject`: Angular-CLI doesn't support platform-server yet. You have to eject CLI and shake hands with webpack.
1. Add dependencies: `@angular/{animations,platform-server} webpack`
1. Add code: `main.server.ts`, `app.module.server.ts`
