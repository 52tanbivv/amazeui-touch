import PropTypes from 'prop-types';
import React from 'react';
import createReactClass from 'create-react-class';
import cx from 'classnames';
import {component as componentPropType} from './InternalPropTypes';
import ClassNameMixin from './mixins/ClassNameMixin';

import '../scss/components/_grid.scss';

const Col = createReactClass({
  displayName: 'Col',
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    component: componentPropType.isRequired,
    cols: PropTypes.number,
    offset: PropTypes.number,
    shrink: PropTypes.bool,
  },

  getDefaultProps() {
    return {
      classPrefix: 'col',
      component: 'div'
    };
  },

  render() {
    let {
      component: Component,
      cols,
      offset,
      shrink,
      className,
      ...props,
    } = this.props;
    let classSet = this.getClassSet();

    delete props.classPrefix;

    if (cols) {
      classSet[this.prefixClass(cols)] = true;
    }

    if (offset) {
      classSet[this.prefixClass('offset-' + offset)] = true;
    }

    classSet[this.prefixClass('shrink')] = shrink;

    return (
      <Component
        {...props}
        className={cx(className, classSet)}
      >
        {this.props.children}
      </Component>
    );
  },
});

export default Col;
