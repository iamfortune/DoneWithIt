import React from 'react';
import { Text } from 'react-native';
import styles from './styles'

// headin component
function AppText({children}) {
    return (
       <Text>{children}</Text>
    );
}

export default AppText;

