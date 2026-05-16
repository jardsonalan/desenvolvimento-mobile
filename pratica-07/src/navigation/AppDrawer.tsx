import Ionicons from '@expo/vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppTabs } from './AppTabs';
import { ConfiguracoesScreen } from '@/screens/ConfiguracoesScreen';

export type RootDrawerParamList = {
  Aplicativo: undefined;
  Configuracoes: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Aplicativo"
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: '#0f172a' },
        headerTintColor: '#f8fafc',
        drawerActiveTintColor: '#0f2276',
        drawerInactiveTintColor: '#334155',
        drawerIcon: ({ focused, color, size }) => (
          <Ionicons
            name={
              route.name === 'Aplicativo'
                ? focused ? 'grid' : 'grid-outline'
                : focused ? 'settings' : 'settings-outline'
            }
            color={color}
            size={size}
          />
        ),
      })}
    >
      <Drawer.Screen
        name="Aplicativo"
        component={AppTabs}
        options={{ title: 'Aplicativo', headerShown: false }}
      />
      <Drawer.Screen
        name="Configuracoes"
        component={ConfiguracoesScreen}
        options={{ title: 'Configurações' }}
      />
    </Drawer.Navigator>
  );
}