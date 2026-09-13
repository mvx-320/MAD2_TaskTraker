import { TextInput, View, StyleSheet } from 'react-native';

const NewTask = props => {
    return (
        <View style= {{
            alignSelf: "stretch",
            margin: 14,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <TextInput
                style= {{
                    height: 40,
                    width: "100%",
                    fontSize: 18,
                    color: props.clrs.dark,
                    padding: 10,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: props.clrs.dark,
                }}
                value={props.newTask}
                onChangeText={props.setNewTask}
                onSubmitEditing={props.onSubmit}
                returnKeyType="done"
                placeholder="Enter your Task"
                />
        </View>
    )
}

export default NewTask;