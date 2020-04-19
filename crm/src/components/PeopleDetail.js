import React,{Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import DetailView from './DetailView';
import UpdatePerson from './UpdatePerson';
import * as actions from '../actions';


class PeopleDetail extends Component{
    renderDetails(){
        console.log('toUpdate check')
        if(this.props.toUpdate){
            return <UpdatePerson />
        }else{
            console.log('&&&&Detailview');
            return <DetailView />
        }
    }
    render(){
        return(
            <View>
                {this.renderDetails()}
            </View>
        )
    }
}

const mapStateToProps = state=>{
    return{
        toUpdate:state.toUpdate
    }
}

export default connect(mapStateToProps,null)(PeopleDetail);