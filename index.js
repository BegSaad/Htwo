/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import * as Sentry from '@sentry/react-native';




// Initialize Sentry
Sentry.init({

 dsn: 'https://ac6c7a90230ae611552998cc0364f258@o4510146953412608.ingest.de.sentry.io/4510148130898000',
  tracesSampleRate: 1.0,
  enableNative: true,
  debug: true,  // for dev
});
 

const SentryApp = Sentry.wrap(App);

// ✅ Register the wrapped app (not the plain App)
AppRegistry.registerComponent(appName, () => SentryApp);