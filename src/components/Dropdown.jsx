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
    height: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
    width: Dimensions.get('screen').width,
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
        width: Dimensions.get('screen').width,
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
                opacity: 0.5,
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
          onPress={e => {
            const value =
              e._dispatchInstances.memoizedProps.children[0].props.children[1]
                .props.children.props.children;
            onPress(getSortVariables(value), value);
            closeMenu();
          }}
          title="Latest repositories"
        />
        <Divider />
        <Menu.Item
          onPress={e => {
            const value =
              e._dispatchInstances.memoizedProps.children[0].props.children[1]
                .props.children.props.children;
            onPress(getSortVariables(value), value);
            closeMenu();
          }}
          title="Highest rated repositories"
        />
        <Divider />
        <Menu.Item
          onPress={e => {
            console.log(e._dispatchInstances.memoizedProps.children);
            const value =
              e._dispatchInstances.memoizedProps.children[0].props.children[1]
                .props.children.props.children;
            onPress(getSortVariables(value), value);
            closeMenu();
          }}
          title="Lowest rated repositories"
        />
      </Menu>
    </View>
  );
};

export default Dropdown;
