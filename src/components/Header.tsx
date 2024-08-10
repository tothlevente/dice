import { Component, ReactNode } from 'react';
import DiceLogo from './DiceLogo';

export default class Header extends Component {
  render(): ReactNode {
    return (
      <header className="header">
        <div className="logo">
          <DiceLogo />
          <h1>Dice</h1>
        </div>
      </header>
    );
  }
}
