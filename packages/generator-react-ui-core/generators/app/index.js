'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
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
    const rootPath = 'src'

    // Root files
    this.fs.copyTpl(
      this.templatePath('root/index.js'),
      this.destinationPath(`${rootPath}/${componentName}/index.js`),
      { componentName: this.props.componentName }
    );
    this.fs.copyTpl(
      this.templatePath('root/MyComponent.js'),
      this.destinationPath(`${rootPath}/${componentName}/${componentName}.js`),
      { componentName: this.props.componentName }
    );
    // __tests__
    this.fs.copyTpl(
      this.templatePath('__tests__/MyComponent-test.js'),
      this.destinationPath(`${rootPath}/${componentName}/__tests__/${componentName}.js`),
      { componentName: this.props.componentName }
    );
  }
};
