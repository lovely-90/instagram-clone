import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

export class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }
        this.onSignUp = this.onSignUp.bind(this);
    }

    onSignUp = () => {

    }

    render() {
        return (
            <View>
                <TextInput 
                    placeholder="Name"
                    onChangeText={(name) => this.setState({ name })}
                />
                <TextInput 
                    placeholder="Email"
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput 
                    placeholder="Password"
                    onChangeText={(password) => this.setState({ password })}
                />
                <Button 
                    title="Sign Up"
                    onPress={() => this.onSignUp}
                />
            </View>
        )
    }
}

export default Register
