import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { MKColor,FlatButton,Textfield } from 'react-native-material-kit';
import { connect } from 'react-redux';
import * as actions from '../actions';

const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    fieldStyles: {
        height: 40,
        color: MKColor.Orange,
    },
    addButton: {
        marginTop: 20
    }
})

class AddPerson extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name={'plus'} size={50} color={tintColor} />
        )
    }
    onAddPress(){
        //console.log('onAddPress')
        const {firstName,lastName,phone,email,company,project,notes} = this.props;
        console.log("this.props",this.props)
        this.props.createNewContact(firstName,lastName,phone,email,company,project,notes)
        //console.log(this.props.navigation);
        this.props.navigation.navigate('People');
    }
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                <Text>Add a new contact</Text>
                <Textfield
                    floatingLabelEnabled={false}
                    placeholder="First Name"
                    style={styles.fieldStyles}
                    value={this.props.firstName}
                    onChangeText={value=>this.props.formUpdate({prop:'firstName',value})}
                    textInputStyle={{
                        flex: 1,
                    }}
                />                
                <Textfield
                    floatingLabelEnabled={false}
                    placeholder="Last Name"
                    value={this.props.lastName}
                    onChangeText={value=>this.props.formUpdate({prop:'lastName',value})}
                    style={styles.fieldStyles}
                    textInputStyle={{
                        flex: 1,
                    }}
                />                
                <Textfield
                    floatingLabelEnabled={false}
                    placeholder="Phone Number"
                    value={this.props.phone}
                    onChangeText={value=>this.props.formUpdate({prop:'phone',value})}
                    style={styles.fieldStyles}
                    textInputStyle={{
                        flex: 1,
                    }}
                />                
                <Textfield
                    floatingLabelEnabled={false}
                    placeholder="Email"
                    value={this.props.email}
                    onChangeText={value=>this.props.formUpdate({prop:'email',value})}
                    style={styles.fieldStyles}
                    textInputStyle={{
                        flex: 1,
                    }}
                />                
                <Textfield
                    floatingLabelEnabled={false}
                    placeholder="Company"
                    value={this.props.company}
                    onChangeText={value=>this.props.formUpdate({prop:'company',value})}
                    style={styles.fieldStyles}
                    textInputStyle={{
                        flex: 1,
                    }}
                />         
                <Textfield
                    floatingLabelEnabled={false}
                    placeholder="Project"
                    value={this.props.project}
                    onChangeText={value=>this.props.formUpdate({prop:'project',value})}
                    style={styles.fieldStyles}
                    textInputStyle={{
                        flex: 1,
                    }}
                />                
                <Textfield
                    floatingLabelEnabled={false}
                    placeholder="Notes"
                    value={this.props.notes}
                    onChangeText={value=>this.props.formUpdate({prop:'notes',value})}
                    style={styles.fieldStyles}
                    textInputStyle={{
                        flex: 1,
                    }}
                />
                </View>
                <View style={styles.addButton}>
                <FlatButton  onPress={this.onAddPress.bind(this)}>
                    <Text >ADD</Text>
                </FlatButton>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state)=>{
    const {firstName,lastName,phone,email,company,project,notes} = state;
    return {firstName,lastName,phone,email,company,project,notes} 

}


export default connect(mapStateToProps, actions)(AddPerson);