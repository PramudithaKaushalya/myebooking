import React, { Component } from 'react';


import '../../../assets/css/reactStyles.css'
import { Input, Radio } from 'antd';


import { EmaplInput, FormInput, FormRow, MultiLineInput, RadioInput, ShortInput } from '../../components/InputFields';
import { validateEmail, validateName } from '../../services/ValidateFields';

class RegisterBuisnessAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            mobileNo: '',
            firstName: '',
            lastName: '',
            password: '',
            rePassword: '',
            emailError: '',
            firstNameError: '',
            lastNameError: '',
            passwordError: '',
            rePasswordError: '',
            role: '',

        };
    }

    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log(this.state)
        })
        switch (e.target.name) {
            case "email":
                this.setState({
                    emailError: validateEmail(e.target.value)
                })
            case "firstName":
                this.setState({
                    firstNameError: validateName(e.target.value)
                })
        }


    }

    render() {
        const { TextArea } = Input;
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        let value = this.state.buisnessCategory
        return (
            <div>
                <section id="hero" className="about">
                    <div className="container fade-up"
                        data-aos="fade-up"
                    >
                        <div className="section-title">
                            <h2 className="headingText">Create a business Account</h2>
                            <p> Acces All your shops in one login</p>
                        </div>


                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Email Address</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input
                                    name="email"
                                    className="form-control"
                                    placeholder="Your Personal Email"
                                    onChange={this.onChangeInput}
                                />
                                <div className="validateText">{this.state.emailError}</div>
                            </div>
                            {/*  */}
                            <div className="col-lg-2">
                                <p className="description">Mobile Number</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input
                                    name="mobileNo"
                                    className="form-control"
                                    placeholder="7X XXX XXXX"
                                    onChange={this.onChangeInput}
                                />
                                <div className="validateText">{this.state.emailError}</div>
                            </div>


                        </div>

                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">First Name</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input
                                    name="firstName"
                                    className="form-control"
                                    placeholder="First Name"
                                    onChange={this.onChangeInput}
                                />
                                <div className="validateText">{this.state.firstNameError}</div>
                            </div>
                            {/*  */}
                            <div className="col-lg-2">
                                <p className="description">Last Name</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input

                                    name="lastName"
                                    className="form-control"
                                    placeholder="Last Name"
                                    onChange={this.onChangeInput}
                                />
                                <div className="validateText">{this.state.emailError}</div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Create A Password</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input.Password
                                    name="password"
                                    className="form-control"
                                    placeholder="input password"
                                    onChange={this.onChangeInput}
                                />
                                <div className="validateText">{this.state.emailError}</div>
                            </div>
                            {/*  */}
                            <div className="col-lg-2">
                                <p className="description">Retype Your Password</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input.Password
                                    name="rePassword"
                                    className="form-control"
                                    placeholder="password"
                                    onChange={this.onChangeInput}
                                />
                                <div className="validateText">{this.state.emailError}</div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-lg-2">
                                <p className="description">Address</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <TextArea
                                    rows={4}
                                    name="address"
                                    className="form-control"
                                    placeholder="Your Home Address"
                                    onChange={this.onChangeInput}
                                />
                                <div className="validateText">{this.state.emailError}</div>
                            </div>


                            <div className="col-lg-2">
                                <p className="description">NIC Number</p>
                            </div>
                            <div className="form-group col-lg-4">
                                <Input

                                    name="nic"
                                    className="form-control"
                                    placeholder="password"
                                    onChange={this.onChangeInput}
                                />
                                <div className="validateText">{this.state.emailError}</div>
                            </div>
                        </div>




                        <button type="submit" className="blueButton">Create Account</button>


                    </div>

                </section>

            </div>
        );
    }
}

export default RegisterBuisnessAccount;