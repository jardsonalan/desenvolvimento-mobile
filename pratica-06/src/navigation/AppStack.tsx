import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InicioScreen } from "@/screens/InicioScreen";
import { AtendimentoScreen } from "@/screens/AtendimentoScreen";
import { ConclusaoScreen } from "@/screens/ConclusaoScreen";

export type RootStackParamList = {
  Inicio: undefined;
  Atendimento: undefined;
  Conclusao: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
      >
        <Stack.Screen
          name="Inicio"
          component={InicioScreen}
          options={{ title: 'Painel Inicial' }}
        />
        <Stack.Screen
          name="Atendimento"
          component={AtendimentoScreen}
          options={{ title: 'Atendimento' }}
        />
        <Stack.Screen
          name="Conclusao"
          component={ConclusaoScreen}
          options={{ headerBackVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}