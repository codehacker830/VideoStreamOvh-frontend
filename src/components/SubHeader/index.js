import React from 'react'

export const SubHeader = (props) => {
    return (
        <div className="sub-header">
            <div>
                <div className="sub-header-wrapper">
                    <div className="galleryHeader">
                        <div className="title">
                            <font style={{ verticalAlign: 'inherit' }}>
                            <font style={{ verticalAlign: 'inherit' }}>{props.title}</font>
                            </font>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubHeader;