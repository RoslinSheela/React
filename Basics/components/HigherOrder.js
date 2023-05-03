import React, { Component } from 'react';

const UpdatedComp = OriginalComp =>{
    class NewComp extends React.Component {
        state = {  } 
        render() { 
            return <OriginalComp name="THe USER"/>;//note this
            
        }
    }
     
    return NewComp;
};
export default UpdatedComp;