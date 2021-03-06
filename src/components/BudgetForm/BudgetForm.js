import React, { Component } from 'react';
import propTypes from 'prop-types';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

export default class BudgetForm extends Component {
  static propTypes = {
    onSubmit: propTypes.func.isRequired,
  };

  state = { budget: 0 };

  handleChange = e => {
    this.setState({
      budget: Number(e.target.value),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { budget } = this.state;

    this.props.onSubmit(budget);
    this.setState({ budget: 0 });
  };

  render() {
    const { budget } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input type="number" value={budget} onChange={this.handleChange} />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}
