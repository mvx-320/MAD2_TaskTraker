import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { IconButton, Checkbox } from 'react-native-paper';

export default function Task({ label, setLabel, onDelete, clrs }) {
    const styles = getStyles(clrs);
    const [checked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            <IconButton 
                icon="trash-can-outline" 
                iconColor={clrs.signal}
                onPress={onDelete}    
            />
            <Text style={[
                styles.newTask,
                checked && {textDecorationLine: 'line-through'},
            ]}>{label}</Text>
            <Checkbox 
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(!checked);
                }}/>
        </View>
    );
}

const getStyles = (clrs) => StyleSheet.create({
    container: {
        height: 60,
        width: "100%",
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 10,
        backgroundColor: clrs.dark,
    },
    newTask: {
        color: clrs.light,
        fontSize: 20,
    },
});
