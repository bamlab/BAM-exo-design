import React, { PropTypes } from 'react'
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import appStyle from 'exo_design_react_native/src/appStyle'

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: appStyle.colors.red,
    borderRadius: 3,
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  buttonContainerDisabled: {
    backgroundColor: appStyle.colors.lightestGray
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonTextDisabled: {
    color: appStyle.colors.darkGray
  }
})

const Button = props => {
  const buttonContainerStyles = [styles.buttonContainer]

  const buttonTextStyles = [styles.buttonText]

  if (props.disabled) {
    buttonContainerStyles.push(styles.buttonContainerDisabled)
    buttonTextStyles.push(styles.buttonTextDisabled)
  }

  return (
    <TouchableOpacity
      style={buttonContainerStyles}
      onPress={props.onPress}
      disabled={props.disabled || props.isLoading}
    >
      {!props.isLoading &&
        <Text style={buttonTextStyles}>
          {props.buttonText}
        </Text>
      }
      {props.isLoading &&
        <ActivityIndicator color='white' />
      }
    </TouchableOpacity>
  )
}

Button.propTypes = {
  isLoading: PropTypes.bool
}

Button.defaultProps = {
  isLoading: false
}

export default Button
