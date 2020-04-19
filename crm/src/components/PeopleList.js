import React,{Component} from 'react';
import {View,StyleSheet,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {connect} from 'react-redux';
import PeopleItem from './PeopleItem';
import PeopleDetail from './PeopleDetail';
import {loadInitialContacts} from '../actions';

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:353,
        flexWrap:'wrap',
        paddingTop:20,
        paddingLeft:20
    }
});

class PeopleList extends Component{
    static navigationOptions = {
        tabBarIcon:({tintColor})=>(
            <Icon name={'user'} size={50} color={tintColor} />
        )
    }
    constructor(props){
        super(props)
    }
    componentDidMount(){
        //console.log('cdm')
        this.props.loadInitialContacts();
    }
    renderInitialView(){
        if(this.props.detailView){
            return(
                <PeopleDetail />
            )
        }else{
            //console.log(this.props.people)
            return(
                
                <FlatList data={this.props.people}
                renderItem={({item,index})=>{
                    return <PeopleItem key={item.id} people={item}/>
                }}
                keyExtractor={(item,index)=>index.toString()}
                /> 
            )
        }
    }
    render(){
        return(
            <View styles={styles.container}>
                {/* <FlatList data={this.props.people}
                          renderItem={({item,index})=><PeopleItem key={item.id} people={item}/>}
                /> */}
                {this.renderInitialView()}
            </View>
        )
    }
}

const mapStateToProps = state=>{
    return{
        detailView:state.detailView,
        people:state.people
    }
}

export default connect(mapStateToProps,{loadInitialContacts})(PeopleList);