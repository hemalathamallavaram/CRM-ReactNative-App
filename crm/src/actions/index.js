export const selectPerson=(peopleId)=>{
    //console.log(peopleId)
    return{
        type:'SELECTED_PERSON',
        selectId: peopleId
    }
};

export const nonePerson=()=>{
    //console.log('nonePerson')
    return{
        type:'NONE_SELECTED'
    }
};
export const formUpdate=({prop,value})=>{
    //console.log('formUpdate',prop,value)
    return{
        type:'FORM_UPDATE',
        payload:{prop,value}
    }
};
export const updateContact=(person)=>{
    console.log('updateContact action')
    return{
        type:'UPDATE_PERSON',
        payload:person
    }
};
export const createNewContact=(firstName,lastName,phone,email,company,project,notes)=>{
    console.log('createNewContact',firstName,lastName,phone,email,company,project,notes)
    return (dispatch)=>{
        fetch('http://192.168.0.6:3000/contact',{
            method:'POST',
            body:JSON.stringify({
                "firstName":firstName,
                "lastName":lastName,
                "phone":1234567890,
                "email":'jagan_hari@gmail.com',
                "company":'company', 
                "project":'project',
                "notes":'notes'
            }),
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })
        .then((res)=>{
            console.log(res)
            return res.json()
        }) 
        .then((data)=>{
            console.log(data)
            dispatch({type:'NEW_CONTACT'});
        })
        .catch(error=>console.log(error));
    }
};
export const loadInitialContacts = ()=>{
    console.log('loadInitialContacts')
    return (dispatch)=>{
        fetch('http://192.168.0.6:3000/contact',{
            method:'GET'
        })
        .then((res)=>{
            //console.log('res',res);
            return res.json()
        })
        .then((data)=>{
            console.log('data',data)
            dispatch({type:'INITIAL_FETCH',payload:data});
        })
        .catch(error=>console.log(error));
    }
}
export const deleteContact = (id)=>{
    return(dispatch)=>{
        fetch(`http://192.168.0.6:3000/contact/${id}`,{
            method:'DELETE'
        })
        .then((res)=>{
            return res.json()
        })
        .then(()=>{
            dispatch({type:'DELETE_PERSON'})
        })
        .catch(error=>console.log(error));
    }
}
export const saveContact = (id)=>{
    return(dispatch)=>{
        fetch(`http://192.168.0.6:3000/contact/${id}`,{
            method:'PUT',
            body:JSON.stringify({
                "firstName":'firstName',
                "lastName":'lastName',
                "phone":1234567890,
                "email":'jagan_hari@gmail.com',
                "company":'company', 
                "project":'project',
                "notes":'notes'
            }),
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })
        .then((res)=>{
            return res.json()
        })
        .then(()=>{
            dispatch({type:'SAVE_PERSON'})
        })
        .catch(error=>console.log(error));
    }
}