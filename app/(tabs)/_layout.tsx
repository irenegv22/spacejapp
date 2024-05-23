import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import Colors from '@/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.Main100,
        tabBarInactiveTintColor: Colors.Grey250,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={focused ? Colors.Main100 : Colors.Grey250} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          title: 'Mis viajes',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? 'planet' : 'planet-outline'}
              color={focused ? Colors.Main100 : Colors.Grey250}
            />
          ),
        }}
      />
    </Tabs>
  );
}
