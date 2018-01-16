'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  _get_destination_path(filename, props) {
    const foostr = './../react-ui-core/src'
    const {
      componentName,
    } = props
    return `${foostr}/${componentName}/${filename}`
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Greetings Rentpath developer! Welcome to the ' +
          chalk.red('react-ui Generator!')
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the name of your component?',
        default: 'MyCoolComponent'
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    const {
      componentName,
    } = this.props

    // Root files
    this.fs.copyTpl(
      this.templatePath('root/index.js'),
      this.destinationPath(this._get_destination_path('index.js', this.props)),
      { componentName: this.props.componentName }
    );
    this.fs.copyTpl(
      this.templatePath('root/MyComponent.js'),
      this.destinationPath(this._get_destination_path(`${componentName}.js`, this.props)),
      { componentName: this.props.componentName }
    );
  }
};
