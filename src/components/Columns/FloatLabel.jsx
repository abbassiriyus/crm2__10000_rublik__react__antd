import React, { useState } from 'react'
import PropTypes from 'prop-types'

const FloatLabel = ({
    children,
    label,
    value
}) => {
    const [focus, setFocus] = useState(false)
    const labelClass = focus || value ? 'label label-float' : 'label'

    return (
        <div
            className="float-label"
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
        >
            {children}
            <label className={labelClass}>{label}</label>
        </div>
    )
}
FloatLabel.propTypes = {
    children: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string
}
export default FloatLabel