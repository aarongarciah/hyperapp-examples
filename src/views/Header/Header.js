import {h} from 'hyperapp'

import './header.css'
import {Search} from '../Search/Search.js'
import {PillButton} from '../PillButton/PillButton.js'


export const Header = () => (
  <header>
    
    <h1>Hyperapp real-world examples</h1>
    <h2>A curated list of live hyperapp projects</h2>

    <Search />

    <div class="actions">
      <PillButton big>Check projects</PillButton>
      <PillButton big green>Share a project</PillButton>
    </div>

  </header>
)

// import {Header} from './Header/Header.js'
// <Header />
