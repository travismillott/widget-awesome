var React = require('react')
var Header = require('./Header.jsx')

module.exports = React.createClass({
  'displayName': 'LikePage.jsx',
  getInitialState: function () {
    return {liked: false}
  },
  handleClick: function () {
    this.setState({liked: true})
  },
  render: function () {
    var likeLabel = this.state.liked ? 'Liked' : 'Like'
    var likeClass = this.state.liked ? 'likedButton' : 'notYetLikedButton'

    return <div className='Page'>
      <button className={likeClass} onClick={this.handleClick} disabled={this.state.liked}>{likeLabel}</button>
    </div>
  }
})
