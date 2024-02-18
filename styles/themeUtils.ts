import { Property } from 'csstype'
import { RuleSet, css } from 'styled-components'

/**
 * Create a flex container with the specified properties.
 *
 * @param {string} direction - The direction of the flex container. Defaults to 'row'.
 * @param {string} align - The alignment of the flex items. Defaults to 'center'.
 * @param {string} justify - The justification of the flex items. Defaults to 'center'.
 * @param {string} wrap - The wrapping behavior of the flex container. Defaults to 'nowrap'.
 * @return {css} The CSS for the flex container.
 */
export const flex = (
  direction: Property.FlexDirection = 'row',
  align: Property.AlignItems = 'center',
  justify: Property.JustifyContent = 'center',
  wrap: Property.FlexWrap = 'nowrap',
): RuleSet<object> => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
  flex-wrap: ${wrap};
`
