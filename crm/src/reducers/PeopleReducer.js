import people from './people.json';

const initialState = {
    people:[],
    detailView:false,
    personSelected:null,
    firstName:'',
    lastName:'',
    phone:'',
    email:'',
    company:'',
    project:'',
    notes:'',
    _id:'',
    toUpdate:false
}

export default  (state=initialState,action)=>{
    //console.log({action})
    switch(action.type){
        case 'INITIAL_FETCH':
            //console.log('INITIAL_FETCH',action);
            return{
                ...state,
                people:action.payload,
                detailView:false
            }
        case 'SELECTED_PERSON':
            return{
                ...state,
                detailView:true,
                toUpdate:false,
                personSelected:action.selectId
            }
        case 'NONE_SELECTED':
            return{
                ...state,
                detailView:false
            }
        case 'FORM_UPDATE':
            //console.log('form_update')
            return{
                ...state,
                [action.payload.prop]:action.payload.value
            }        
        case 'NEW_CONTACT':
            return {
                ...state,
                firstName:'',
                lastName:'',
                phone:'',
                email:'',
                company:'',
                project:'',
                notes:''
            }       
        case 'ADD_PERSON':
            return {
                ...state,
                ...action.newPerson
            }        
        case 'ADD_PERSON':
            return {
                ...state,
                ...action.newPerson
            }        
        case 'DELETE_PERSON':
            return {
                ...state,
                detailView:false,
                personSelected:null
            }         
        case 'UPDATE_PERSON':
            console.log('reducer updatePerson',action.payload)
            return {
                ...state,
                toUpdate:true,
                _id:action.payload._id,
                firstName:action.payload.firstName,
                lastName:action.payload.lastName,
                phone:action.payload.phone,
                email:action.payload.email,
                company:action.payload.company,
                project:action.payload.project,
                notes:action.payload.notes,
            }       
        case 'SAVE_PERSON':
            return {
                ...state,
                detailView:false,
                toUpdate:false,
                firstName:'',
                lastName:'',
                phone:'',
                email:'',
                company:'',
                project:'',
                notes:'',
                _id:''
            }
        default:
            return state;
    }
}