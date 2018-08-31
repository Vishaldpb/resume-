import React, { Component } from 'react'

 class Project extends Component {
  render() {
    return (
      <div>
        <div className="item">
                  <span className="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/" target="_blank">{this.props.item.name}</a></span> - <span className="project-tagline">{this.props.item.detail}</span>
              </div>
      </div>
    )
  }
}

export default Project
