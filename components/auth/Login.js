import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

export class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }
        this.onSignIn = this.onSignIn.bind(this);
    }

    onSignIn = () => {

    }

    render() {
        return (
            <View>
                <TextInput 
                    placeholder="Email"
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput 
                    placeholder="Password"
                    onChangeText={(password) => this.setState({ password })}
                />
                <Button 
                    title="Sign In"
                    onPress={() => this.onSignIn}
                />
            </View>
        )
    }
}

export default Login;
