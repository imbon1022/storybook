import React from 'react';
import PropTypes from 'prop-types';
import { SearchOutlined } from '@ant-design/icons';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ mode, type, content, size, shape, disabled, ...props }) => {
  return (
    <button
      type="button"
      className={[
        `storybook-button-${mode}`,
        `storybook-button-${mode}--${size}`,
        `storybook-button-${mode}--${type}`,
        `storybook-button-${mode}--${shape}`,
        `storybook-button-${mode}--${disabled ? 'disabled' : 'enabled'}`
      ].join(' ')}
      {...props}
    >
      {content === 'icon-only' || content === 'icon-left' && <SearchOutlined style={{ fontSize: '16px', marginRight: '8px' }} />}
      {content === 'icon-only' ? <SearchOutlined /> : type}
      {content === 'icon-right' && <SearchOutlined style={{ fontSize: '16px', marginLeft: '8px' }}/>}
    </button>
  );
};

Button.propTypes = {
  /**
   * mode
   */
  mode: PropTypes.oneOf(['default', 'ghost', 'danger', 'link',]),
  /**
   * Is this the principal call to action on the page?
   */
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'dashed', 'text']),
  /**
   * Where icon should be placed?
   */
  content: PropTypes.oneOf(['basic', 'icon-only', 'icon-left', 'icon-right']),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * button shape
   */
  shape: PropTypes.oneOf(['quadrangle', 'round']),
  /**
   * Is the button disabled?
   */
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  mode: 'default',
  type: 'primary',
  content: 'basic',
  size: 'medium',
  shape: 'quadrangle',
  disabled: false,
};
