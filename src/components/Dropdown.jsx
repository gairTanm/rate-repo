import * as React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
  button: {
    height: 40,
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 10,
    width: '100%',
    borderColor: '#ef8354',
    opacity: 0.5,
  },
  menu: {
    width: Dimensions.get('screen').width,
    alignItems: 'center',
  },
});

const Dropdown = ({ onPress, sort }) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const getSortVariables = value => {
    let variables;
    switch (value) {
      case 'Latest repositories':
        variables = { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
        return variables;
      case 'Highest rated repositories':
        variables = { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' };
        return variables;
      case 'Lowest rated repositories':
        variables = { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' };
        return variables;
      default:
        return variables;
    }
  };

  return (
    <View
      style={{
        width: '100%',
        flex: 1,
      }}
    >
      <Menu
        style={styles.menu}
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <TouchableOpacity style={styles.button} onPress={openMenu}>
            <Text
              style={{
                fontSize: 20,
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}
            >
              {sort ? sort : 'Latest Repositories'}
              <AntDesign
                style={{ alignSelf: 'center' }}
                name="caretdown"
                size={15}
                color="#ef8354"
              />
            </Text>
          </TouchableOpacity>
        }
      >
        <Menu.Item
          onPress={() => {
            const sortBy = 'Latest repositories';
            const variables = getSortVariables(sortBy);
            onPress(sortBy, variables);
            closeMenu();
          }}
          title="Latest repositories"
        />
        <Divider />
        <Menu.Item
          onPress={e => {
            const sortBy = 'Highest rated repositories';
            const variables = getSortVariables(sortBy);
            onPress(sortBy, variables);
            closeMenu();
          }}
          title="Highest rated repositories"
        />
        <Divider />
        <Menu.Item
          onPress={e => {
            const sortBy = 'Lowest rated repositories';
            const variables = getSortVariables(sortBy);
            onPress(sortBy, variables);
            closeMenu();
          }}
          title="Lowest rated repositories"
        />
      </Menu>
    </View>
  );
};

export default Dropdown;
