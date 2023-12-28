import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import { PasswordItem } from '../../components/passwords/passwordItem-components';
import { PasswordController } from './controller'; // Importando o controlador
import { styles } from './styles';

export function Password() {
  const controller = PasswordController(); // Instanciando o controlador
  const focused = useIsFocused();

  useEffect(() => {
    controller.loadPasswords();
  }, [focused]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas Senhas</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          style={styles.list}
          data={controller.listPassword}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item }) => (
            <PasswordItem
              data={item}
              removePassword={() => {
                controller.handleDeletePassword(item);
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
