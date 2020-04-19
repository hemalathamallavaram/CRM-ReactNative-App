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

class UpdatePerson extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name={'plus'} size={50} color={tintColor} />
        )
    }
    onUpdatePress(){
        console.log('onUpdatePress',this.props)
        const {firstName,lastName,phone,email,company,project,notes,_id} = this.props;
        console.log("this.props",this.props)
        this.props.saveContact(firstName,lastName,phone,email,company,project,notes,_id)
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
                <FlatButton  onTouch={this.onUpdatePress.bind(this)}   onPress={this.onUpdatePress.bind(this)}>
                    <Text >UPDATE</Text>
                </FlatButton>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state)=>{
    const {firstName,lastName,phone,email,company,project,notes,_id} = state;
    return {firstName,lastName,phone,email,company,project,notes,_id} 

}


export default connect(mapStateToProps, actions)(UpdatePerson);