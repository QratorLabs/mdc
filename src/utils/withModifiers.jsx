import * as React from 'react';
import classnames from 'classnames';

export default function withModifiers(name) {
  return function(WrappedComponent) {
    return class extends React.Component {
      static defaultProps = {
        modifiers: ''
      }
      render() {
        let { modifiers, className, ...props } = this.props;
        let baseCls = `mdc-${name}`;
        modifiers = modifiers.split(' ').filter(Boolean);
        let cls = classnames([
          className, ...modifiers.map(m => `${baseCls}--${m}`),
        ]);
        return <WrappedComponent {...props} className={cls}/>;
      }
    }
  }
}
