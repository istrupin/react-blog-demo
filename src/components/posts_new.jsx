import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component{
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input 
                 type="text"
                 {...field.input}
                 className="form-control"
                />
            </div>
        );
    }

    render(){
        return(
            <form action="">
                <Field 
                    name="title"
                    label="Title"
                    component={this.renderField} />
                <Field 
                    name="categories"
                    label="Categories"
                    component={this.renderField}
                    />
                <Field
                    label="Post Content"
                    name="content" 
                    component={this.renderField}
                    />
            </form>
        );
    }
}

function validate(values) {
    //console.log(values) -> { title:'asdf', categories:'asdf', content:'asdf'};
    const errors = {};

    //Validate the inputs from 'values'

    if(!values.title) {
        errors.title = "Enter a title";
    }
    

    if(!values.categories) {
        errors.categories = "Enter categories";
    }

    if(!values.content) {
        errors.content = "Enter content";
    }

    //if errors is empty, form is fine to submit
    //if errors has any properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
}) (PostsNew);