import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { InicioScreen } from "@/screens/InicioScreen";
import { TarefasScreen } from "@/screens/TarefasScreen";
import { ResumoScreen } from "@/screens/ResumoScreen";

export type RootTabParamList = {
  Inicio: undefined;
  Tarefas: undefined;
  Resumo: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

function obterIcone(nomeRota: keyof RootTabParamList, focused: boolean) {
  if (nomeRota === 'Inicio') return focused ? 'home' : 'home-outline';
  if (nomeRota === 'Tarefas') return focused ? 'list' : 'list-outline';
  return focused ? 'bar-chart' : 'bar-chart-outline';
}

export function AppTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: '#0f172a' },
        headerTintColor: '#f8fafc',
        tabBarActiveTintColor: '#0f2276',
        tabBarInactiveTintColor: '#64748b',
        tabBarStyle: { height: 62, paddingBottom: 8, paddingTop: 6 },
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={obterIcone(route.name as keyof RootTabParamList, focused)}
            color={color}
            size={size}
          />
        ),
      })}
    >
      <Tab.Screen name="Inicio" component={InicioScreen} options={{ title: 'Início' }} />
      <Tab.Screen
        name="Tarefas"
        component={TarefasScreen}
        options={{ title: 'Tarefas' }}
      />
      <Tab.Screen name="Resumo" component={ResumoScreen} options={{ title: 'Resumo' }} />
    </Tab.Navigator>
  );
}