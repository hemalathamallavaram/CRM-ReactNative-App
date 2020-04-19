import React,{Component} from 'react';
import {View,StyleSheet,ScrollView,Text,Image,TouchableOpacity } from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import  SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import {connect} from 'react-redux';
import {getTheme} from 'react-native-material-kit';

import * as actions from '../actions';
const theme = getTheme();
const styles = StyleSheet.create({
    card: {
      marginTop: 10,
      paddingBottom: 20,
      marginBottom: 20,
      borderColor: 'lightgrey',
      borderWidth: 0.5,
    },
    title1: {
        top: 10,
        left: 80,
        fontSize: 24,
    },
    title2: {
        top: 35,
        left: 82,
        fontSize: 18,
    },
    image: {
        flex: 0,
        height: 100,
        width: 333,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeIcon: {
        position: 'absolute',
        top: 5,
        left: 295,
        color: 'rgba(233,166,154,0.8)',
        backgroundColor: 'rgba(255,255,255,0)',
    },  
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)',
    },
    textArea: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 10,
        width: 260,
    },
    textIcons: {
        color: '#26a69a',
    },
    actionArea: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
  });

class DetailView extends Component{
    updateTest(){
        this.props.updateContact(this.props.person);
    }
    render(){
        // //console.log(this.props)
        return(
            <View styles={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image
                        source={require('../assets/background.jpg')}
                        style={theme.cardImageStyle,styles.image}
                    ></Image>
                    <EvilIcon name={'user'} size={100} style={styles.icon}></EvilIcon>
                    <SimpleIcon name={'close'} size={30} style={styles.closeIcon}
                        onPress={()=>this.props.nonePerson()}
                    ></SimpleIcon>
                    <Text style={[theme.cardTitleStyle,styles.title1]}>{this.props.person.firstName} {this.props.person.lastName}</Text>
                    <Text style={[theme.cardTitleStyle,styles.title2]}>from {this.props.person.company}</Text>
                    <View style={styles.textArea}>
                        <MaterialIcon name={'phone'} size={40} style={styles.textIcons}></MaterialIcon>
                        <Text style={theme.cardContenStyle}>{this.props.person.phone}</Text>
                    </View>
                    <View style={styles.textArea}>
                        <MaterialIcon name={'email'} size={40} style={styles.textIcons}></MaterialIcon>
                        <Text style={theme.cardContenStyle}>{this.props.person.email}</Text>
                    </View>
                    <View style={styles.textArea}>
                        <MaterialIcon name={'assignment'} size={40} style={styles.textIcons}></MaterialIcon>
                        <Text style={theme.cardContenStyle}>{this.props.person.project}</Text>
                    </View>                   
                    <View style={styles.textArea}>
                        <MaterialIcon name={'mode-edit'} size={40} style={styles.textIcons}></MaterialIcon>
                        <Text style={theme.cardContenStyle}>{this.props.person.notes}</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source={require('../assets/call.png')}
                                    style={styles.actionImage} />
                        </TouchableOpacity>                        
                        <TouchableOpacity>
                            <Image source={require('../assets/email.png')}
                                    style={styles.actionImage} />
                        </TouchableOpacity>                        
                        <TouchableOpacity>
                            <Image source={require('../assets/sms.png')}
                                    style={styles.actionImage} />
                        </TouchableOpacity>
                        <View styles={styles.actionArea}>
                            <Text>Call</Text>
                            <Text>Email</Text>
                            <Text>SMS</Text>
                        </View>
                        <TouchableOpacity
                            onPress={()=>(this.updateTest())}>
                            <MaterialIcon name={'autorenew'} size={40} style={styles.closeIcon}/>
                            <Text style={theme.cardContenStyle}>EDIT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>(this.props.deleteContact(this.props.person._id))}
                        >
                            <MaterialIcon name={'delete-forever'} size={40} style={styles.closeIcon}/>
                            <Text style={theme.cardContenStyle}>DELETE</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state=>{
    return{
        person:state.personSelected,
        toUpdate:state.toUpdate
    }
}

export default connect(mapStateToProps,actions)(DetailView);