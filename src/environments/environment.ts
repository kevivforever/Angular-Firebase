// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBQSki6zEfD_K5niBfUNDjCt44KikIDjrs',
    authDomain: 'yummic-development.firebaseapp.com',
    databaseURL: 'https://yummic-development.firebaseio.com',
    projectId: 'yummic-development',
    storageBucket: 'yummic-development.appspot.com',
    messagingSenderId: '88084897142'
  }
};
