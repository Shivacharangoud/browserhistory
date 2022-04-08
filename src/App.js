import './App.css'

import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {stateInitialHistoryList: initialHistoryList, search: ''}

  historyFunc = (props, onDelete) => {
    const {id, timeAccessed, logoUrl, title, domainUrl} = props

    const deleteTriggerFunc = () => {
      onDelete(id)
    }

    return (
      <li key={id} className="card-container">
        <div className="time-content-con-last">
          <p className="time"> {timeAccessed} </p>
          <div className="image-content-con">
            <img alt="domain logo" src={logoUrl} />
            <div className="titles-container">
              <p className="name"> {title} </p>
              <p className="domain-name"> {domainUrl} </p>
            </div>
          </div>
        </div>
        <button
          testid="delete"
          className="delete-button"
          onClick={deleteTriggerFunc}
          type="button"
        >
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </li>
    )
  }

  onDelete = id => {
    const {stateInitialHistoryList} = this.state
    const filteredListAfterDelete = stateInitialHistoryList.filter(
      each => each.id !== id,
    )
    this.setState({stateInitialHistoryList: filteredListAfterDelete})
  }

  onChangeInput = event => {
    this.setState({search: event.target.value})
  }

  render() {
    const {stateInitialHistoryList, search} = this.state
    const lowerSearch = search.toLowerCase()

    const filteredList = stateInitialHistoryList.filter(each => {
      const value = each.title.toLowerCase()
      return value.includes(lowerSearch)
    })

    const lengthOfList = filteredList.length

    const element =
      lengthOfList !== 0 ? (
        <>
          <div className="top-container">
            <img
              className="logo"
              alt="app logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            />
            <div className="search-input-con">
              <div className="search-con">
                <img
                  alt="search"
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                />
              </div>
              <input
                onChange={this.onChangeInput}
                type="search"
                placeholder="Search history text"
                className="input"
              />
            </div>
          </div>
          <ul className="bottom-container">
            {filteredList.map(each => this.historyFunc(each, this.onDelete))}
          </ul>
        </>
      ) : (
        <>
          <div className="top-container">
            <img
              className="logo"
              alt="app logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            />
            <div className="search-input-con">
              <div className="search-con">
                <img
                  alt="search"
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                />
              </div>
              <input
                onChange={this.onChangeInput}
                type="search"
                placeholder="Search history text"
                className="input"
              />
            </div>
          </div>
          <div className="bottom-container-2">
            <p className="noHistory">There is no history to show</p>
          </div>
        </>
      )

    return element
  }
}

export default App
