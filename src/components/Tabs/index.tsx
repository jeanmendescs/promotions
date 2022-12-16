import { useState } from 'react';
import './styles.scss';

interface ITabs {
  tabs: string[];
  currentTab: string;
  children: React.ReactNode;
}

const Tabs = ({currentTab, tabs, children}: ITabs) => {
  const [activeTab, setActiveTab] = useState(() => currentTab);

  return (
    <div className='tabs'>
      <div className='tabs__container'>
        {tabs.map(tab => {
          return <button className={`tab ${activeTab === tab ? 'tab--active' : ''}`} onClick={() => setActiveTab(tab)} type='button'>{tab}</button>
        })}
      </div>
    {children}
    </div>
  )
}

export default Tabs;