import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import  PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';

const TabNavigator = createBottomTabNavigator({
    People:PeopleList,
    Add:AddPerson,
    Company:CompanyList
},{
    initialRouteName:'People',
    tabBarOptions:{
        activeTintColor:'black',
        inactiveTintColor:'#80cbc4',
        showLabel:false,
        showIcon:true,
        labelStyle:{
            color:'white'
        },
        style:{
            backgroundColor:'green'
        }
    }
});

export default createAppContainer(TabNavigator);