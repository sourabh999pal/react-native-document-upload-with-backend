/**
 * @format
 */

 import {AppRegistry} from 'react-native';
 import App from './App';
 import {name as appName} from './app.json';
 
 import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
 
 const theme = {
     ...DefaultTheme,
     colors: {
       ...DefaultTheme.colors,
       primary: 'maroon',
       secondary: 'yellow',
     },
   };
 
 export default function Main() {
     return (
       <PaperProvider theme={theme}>
         <App />
       </PaperProvider>
     );
   }
   
   AppRegistry.registerComponent(appName, () => Main);
 