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
          chalk.red('generator-react-component') +
          ' generator!'
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
    // const foostr = '../../../../react-ui-core/'
    const foostr = './../react-ui-core/src/'
    // Root files
    // this._writeRootFile('actions.js')
    this.fs.copyTpl(
      this.templatePath('root/index.js'),
      this.destinationPath(foostr + this.props.componentName + '/index.js'),
      { componentName: this.props.componentName }
    );
  }
};
